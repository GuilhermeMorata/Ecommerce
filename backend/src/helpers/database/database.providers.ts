import { Sequelize } from 'sequelize-typescript';
import { ProductTable } from 'src/entity/product.entity';
import initial from './initial';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.MYSQLHOST || 'localhost',
        port: parseInt(process.env.MYSQLPORT) || 3307,
        username:  process.env.MYSQLUSER || 'root',
        password:  process.env.MYSQLPASSWORD || 'root',
        database:  process.env.MYSQLDATABASE || 'test_db',
        define: {
          timestamps: true,
        },
      });
      sequelize.addModels([ProductTable]);            
      await sequelize.sync({}).then(async ()=>{
        await initial()
        console.log('DATABASE ONLINE')
      })
      return sequelize;
    },
  },
];
