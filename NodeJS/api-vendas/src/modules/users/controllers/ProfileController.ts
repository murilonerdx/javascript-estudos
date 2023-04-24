import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const uS = new UserService();
    const user_id = request.user.id;

    const user = await uS.showProfile({ user_id });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, password, old_password } = request.body;

    const uS = new UserService();

    const user = await uS.updateProfile({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return response.json(user);
  }
}
