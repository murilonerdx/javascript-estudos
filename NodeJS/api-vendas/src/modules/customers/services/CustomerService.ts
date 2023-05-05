import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import AppError from "@shared/errors/ApiError";
import CustomerRepository from "@modules/customers/typeorm/repositories/CustomerRepository";
import User from "@modules/users/typeorm/entities/User";

interface IRequest {
  name: string;
  email: string;
}
interface IRequestFindById {
  id: string;
}
interface IRequestDelete {
  id: string;
}
interface IRequestUpdate {
  id: string;
  name: string;
  email: string;
}

interface IPaginateCustomer {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Customer[];
}

class CustomerService {
  public async create({ name, email }: IRequest): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomerRepository);
    const emailExists = await customerRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const customer = customerRepository.create({
      name,
      email,
    });

    await customerRepository.save(customer);

    return customer;
  }

  public async delete({ id }: IRequestDelete): Promise<void> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    await customersRepository.remove(customer);
  }

  public async findAll(): Promise<IPaginateCustomer> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customers = await customersRepository.createQueryBuilder().paginate();

    return customers as IPaginateCustomer;
  }

  public async findById({ id }: IRequestFindById): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    return customer;
  }

  public async update({ id, name, email }: IRequestUpdate): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    const customerExists = await customersRepository.findByEmail(email);

    if (customerExists && email !== customer.email) {
      throw new AppError('There is already one customer with this email.');
    }

    customer.name = name;
    customer.email = email;

    await customersRepository.save(customer);

    return customer;
  }
}

export default CustomerService;
