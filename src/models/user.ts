// tslint:disable: no-magic-numbers
import * as Sequelize from 'sequelize';

// tslint:disable-next-line: interface-name
export interface UserAttributes {
    id?: number;              // id is an auto-generated UUID
    userName: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
}

export type UserInstance = Sequelize.Instance<UserAttributes> & UserAttributes;
export type UserModel = Sequelize.Model<UserInstance, UserAttributes>;

export default (sqlize: Sequelize.Sequelize) => {
    return sqlize.define<UserInstance, UserAttributes>('invoice', {
      id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: {
        type: Sequelize.STRING(255),
      },
      password: {
        type: Sequelize.STRING(255),
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      createdBy: {
        type: Sequelize.STRING(255),
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      updatedBy: {
        type: Sequelize.STRING(255),
      },
    }, {
      tableName: 'users',
    });
};
