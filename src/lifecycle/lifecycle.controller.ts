import { Controller, Get, Post, Param } from "@nestjs/common";
import { LifecycleService } from "./lifecycle.service";

@Controller("lifecycle")
export class LifecycleController {
  constructor(private readonly lifecycleService: LifecycleService) {}

  @Post(":userId/:eventType")
  async logEvent(
    @Param("userId") userId: string,
    @Param("eventType") eventType: string,
  ) {
    return this.lifecycleService.logEvent(+userId, eventType);
  }

  @Get()
  async findAll() {
    return this.lifecycleService.findAll();
  }

  @Get(":userId")
  async findByUserId(@Param("userId") userId: string) {
    return this.lifecycleService.findByUserId(+userId);
  }
}
