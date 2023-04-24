import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const uS = new UserService();

    const users = await uS.list();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const uS = new UserService();

    const user = await uS.create({
      name,
      email,
      password,
    });

    return response.json(user);
  }

  public async resetPassword(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const uS = new UserService();

    await uS.resetPassword({
      password,
      token,
    });

    return response.status(204).json();
  }

  public async forgotPassword(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const uS = new UserService();

    await uS.sendPasswordEmail(
      email,
    );

    return response.status(204).json();
  }

  public async updateAvatar(request: Request, response: Response): Promise<Response> {
    const uS = new UserService();

    const user = uS.updateAvatar({
      user_id: request.user.id,
      avatarFilename: request.file!!.filename,
    });

    return response.json(user);
  }

}
