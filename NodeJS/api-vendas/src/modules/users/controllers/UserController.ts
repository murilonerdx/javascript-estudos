import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new UserService();

    const users = await listUser.list();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new UserService();

    const user = await createUser.create({
      name,
      email,
      password,
    });

    return response.json(user);
  }

  public async updateAvatar(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UserService();

    const user = updateAvatar.updateAvatar({
      user_id: request.user.id,
      avatarFilename: request.file!!.filename,
    });

    return response.json(user);
  }

}
