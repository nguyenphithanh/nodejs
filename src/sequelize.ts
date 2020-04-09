/**
 * sequelize
 */
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    dialect: 'mysql',
    benchmark: true,
  },
);

sequelize.authenticate().then(() => {
  // tslint:disable-next-line: no-console
  console.log('MySQL server connected');
}).catch((err: any) => {
  // tslint:disable-next-line: no-console
  console.log(`MySQL connection error ${err}`);
  process.exit();
});

export default sequelize;
