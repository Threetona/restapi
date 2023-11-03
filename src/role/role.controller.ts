import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RoleEntity } from './entities/role.entity';

@Controller('role')
@ApiTags('Role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post()
    @ApiCreatedResponse({ type: RoleEntity })
    create(@Body() createRoleDto: CreateRoleDto) {
        return this.roleService.create(createRoleDto);
    }

    @Get()
    @ApiOkResponse({ type: RoleEntity, isArray: true })
    findAll() {
        return this.roleService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: RoleEntity })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.roleService.findOne(id);
    }

    @Patch(':id')
    @ApiCreatedResponse({ type: RoleEntity })
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateRoleDto: UpdateRoleDto,
    ) {
        return this.roleService.update(id, updateRoleDto);
    }

    @Delete(':id')
    @ApiCreatedResponse({ type: RoleEntity })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.roleService.remove(id);
    }
}
