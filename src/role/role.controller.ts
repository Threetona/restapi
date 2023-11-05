import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
    UseGuards,
    NotFoundException,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
import { RoleEntity } from './entities/role.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('role')
@ApiTags('Role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ type: RoleEntity })
    async create(@Body() createRoleDto: CreateRoleDto) {
        // return this.roleService.create(createRoleDto);
        return new RoleEntity(await this.roleService.create(createRoleDto));
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: RoleEntity, isArray: true })
    async findAll() {
        const roles = await this.roleService.findAll();
        return roles.map((role) => new RoleEntity(role));
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: RoleEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const roles = await this.roleService.findOne(id);
        if (!roles) {
            throw new NotFoundException(`Role with id ${id} does not exist.`);
        }
        return roles;
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ type: RoleEntity })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateRoleDto: UpdateRoleDto,
    ) {
        return new RoleEntity(await this.roleService.update(id, updateRoleDto));
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ type: RoleEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
        return new RoleEntity(await this.roleService.remove(id));
    }
}
