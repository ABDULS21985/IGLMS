import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lifecycle } from "./lifecycle.entity";

@Injectable()
export class LifecycleService {
  constructor(
    @InjectRepository(Lifecycle)
    private readonly lifecycleRepository: Repository<Lifecycle>,
  ) {}

  async logEvent(userId: number, eventType: string): Promise<Lifecycle> {
    const event = this.lifecycleRepository.create({
      userId,
      eventType,
      timestamp: new Date(),
    });
    return this.lifecycleRepository.save(event);
  }

  async findAll(): Promise<Lifecycle[]> {
    return this.lifecycleRepository.find();
  }

  async findByUserId(userId: number): Promise<Lifecycle[]> {
    return this.lifecycleRepository.find({ where: { userId } });
  }
}
