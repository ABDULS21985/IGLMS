import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Policy } from './policy.entity';
import { CreatePolicyDto } from './dtos/create-policy.dto';
import { UpdatePolicyDto } from './dtos/update-policy.dto';

@Injectable()
export class PolicyService {
  constructor(
    @InjectRepository(Policy)
    private readonly policyRepository: Repository<Policy>,
  ) {}

  async create(createPolicyDto: CreatePolicyDto): Promise<Policy> {
    const policy = this.policyRepository.create(createPolicyDto);
    return this.policyRepository.save(policy);
  }

  async findAll(): Promise<Policy[]> {
    return this.policyRepository.find();
  }

  async findOne(id: number): Promise<Policy> {
    return this.policyRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePolicyDto: UpdatePolicyDto): Promise<Policy> {
    await this.policyRepository.update(id, updatePolicyDto);
    return this.policyRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.policyRepository.delete(id);
  }
}
