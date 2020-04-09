import { UserAttributes, UserModel  } from '../models/user';
import user from '../models/user';
import { common } from '../utils/common';

import * as Sequelize from 'sequelize';

export default class UserRepository {
  public readonly model: UserModel;

  constructor(db: Sequelize.Sequelize) {
    this.model = user(db);
  }

  /**
   * Get all users
   */
  public async findAll() {
    return this.model.findAll();
  }

  /**
   * Get user by id
   */
  public async findById(id: number) {
      return this.model.findById(id);
  }

  /**
   * Insert new user
   */
  public async add(nUser: UserAttributes) {
    return this.model.create(nUser);
  }

  /**
   * Update user by id
   */
  public async updateById(id: number, updateUser: UserAttributes) {
    const entity = await this.model.findById(id);

    if (entity === null) {
      throw new Error(`entity with id ${id} not found`);
    }

    return this.model.update(updateUser, { where: { id } });
  }

  /**
   * Delete user by id
   */
  public async deleteById(id: number) {
    const entity = await this.model.findById(id);

    if (entity === null) {
      throw new Error(`entity with id ${id} not found`);
    }

    return this.model.destroy({ where: { id }});
  }
  /**
   * Check user by username and password
   */
  public async verifyAccount(username: string, password: string) {
      const users = await this.findAll();
      for (const user of users) {
        if (user.userName === username && common.hash.verity(password, user.password)){
          return true;
        }
      }
      return false;
  }
}
