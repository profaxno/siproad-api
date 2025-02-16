import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { config } from './config/app.config';

import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { ReplicationModule } from './replication/replication.module';
import { OrdersModule } from './orders/orders.module';

// TODO: HACER EL README
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config]
    }),
    TypeOrmModule.forRoot({
      name: 'adminConn',
      type: 'mariadb',
      host: process.env.ADMIN_DB_HOST,
      port: Number(process.env.ADMIN_DB_PORT) || 3306,
      username: process.env.ADMIN_DB_USERNAME,
      password: process.env.ADMIN_DB_PASSWORD,
      database: process.env.ADMIN_DB_NAME,
      synchronize: false, // ! Para produccion esta parametro debe estar en false
      autoLoadEntities: true
    }),
    TypeOrmModule.forRoot({
      name: 'productsConn',
      type: 'mariadb',
      host: process.env.PRODUCTS_DB_HOST,
      port: Number(process.env.PRODUCTS_DB_PORT) || 3306,
      username: process.env.PRODUCTS_DB_USERNAME,
      password: process.env.PRODUCTS_DB_PASSWORD,
      database: process.env.PRODUCTS_DB_NAME,
      synchronize: false,
      autoLoadEntities: true
    }),
    TypeOrmModule.forRoot({
      name: 'ordersConn',
      type: 'mariadb',
      host: process.env.ORDERS_DB_HOST,
      port: Number(process.env.ORDERS_DB_PORT) || 3306,
      username: process.env.ORDERS_DB_USERNAME,
      password: process.env.ORDERS_DB_PASSWORD,
      database: process.env.ORDERS_DB_NAME,
      synchronize: false,
      autoLoadEntities: true
    }),
    AdminModule,
    ProductsModule,
    OrdersModule,
    ReplicationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
