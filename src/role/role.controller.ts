import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dtos/create-role.dto';
import { UpdateRoleDto } from './dtos/update-role.dto';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  async findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Put(':id')
async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
  return this.roleService.update(+id, updateRoleDto);
}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
