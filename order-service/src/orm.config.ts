import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot({
    envFilePath: 'development.env',
});

export const config: TypeOrmModuleOptions = {
    type: 'mysql',
    port: 3306,
    username: "root",
    password: "root",
    database: "orderapp",
    host: '127.0.0.1',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    retryAttempts: 100,
    retryDelay: 5000
}