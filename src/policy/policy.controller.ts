import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { PolicyService } from "./policy.service";
import { CreatePolicyDto } from "./dtos/create-policy.dto";
import { UpdatePolicyDto } from "./dtos/update-policy.dto";

@Controller("policies")
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Post()
  async create(@Body() createPolicyDto: CreatePolicyDto) {
    return this.policyService.create(createPolicyDto);
  }

  @Get()
  async findAll() {
    return this.policyService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.policyService.findOne(+id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updatePolicyDto: UpdatePolicyDto,
  ) {
    return this.policyService.update(+id, updatePolicyDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.policyService.remove(+id);
  }
}
