import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PolicyModule } from './policy/policy.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        console.log('Database Host:', configService.get('DB_HOST'));
        console.log('Database Port:', configService.get('DB_PORT'));
        console.log('Database Username:', configService.get('DB_USERNAME'));
        console.log('Database Password:', configService.get('DB_PASSWORD'));
        console.log('Database Name:', configService.get('DB_DATABASE'));
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    RoleModule,
    PolicyModule,
    LifecycleModule,
  ],
})
export class AppModule {}
