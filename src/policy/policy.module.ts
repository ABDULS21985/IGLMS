import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PolicyService } from './policy.service';
import { PolicyController } from './policy.controller';
import { Policy } from './policy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Policy])],
  providers: [PolicyService],
  controllers: [PolicyController],
  exports: [PolicyService],
})
export class PolicyModule {}
