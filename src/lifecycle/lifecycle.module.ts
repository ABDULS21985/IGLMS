import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifecycleService } from './lifecycle.service';
import { LifecycleController } from './lifecycle.controller';
import { Lifecycle } from './lifecycle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lifecycle])],
  providers: [LifecycleService],
  controllers: [LifecycleController],
  exports: [LifecycleService],
})
export class LifecycleModule {}
