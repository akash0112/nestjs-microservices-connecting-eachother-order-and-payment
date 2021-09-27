import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type: 'mysql',
    port: 3306,
    username: "root",
    password: "root",
    database: "paymentapp",
    host: '127.0.0.1',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    retryAttempts: 100,
    retryDelay: 5000
}