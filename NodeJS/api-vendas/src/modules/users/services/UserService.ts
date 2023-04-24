import AppError from "@shared/errors/ApiError";
import UsersRepository from "@modules/users/typeorm/repositories/UserRepository";
import {getCustomRepository} from "typeorm";
import User from "@modules/users/typeorm/entities/User";
import {hash} from "bcryptjs";
import path from 'path';
import fs from 'fs';
import uploadConfig from '@config/upload';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

interface IRequestAvatar {
  user_id: string;
  avatarFilename: string;
}
class UserService{
  public async create({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }
    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }

  public async updateAvatar({ user_id, avatarFilename }: IRequestAvatar): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }

  public async list(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default UserService
