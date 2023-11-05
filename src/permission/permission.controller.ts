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
} from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionEntity } from './entities/permission.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
    ApiCreatedResponse,
    ApiBearerAuth,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';

@Controller('permission')
@ApiTags('Permission')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) {}

    @Post()
    @ApiCreatedResponse({
        type: PermissionEntity,
    })
    create(@Body() createPermissionDto: CreatePermissionDto) {
        return this.permissionService.create(createPermissionDto);
    }

    @Get()
    // @UseGuards(JwtAuthGuard)
    // @ApiBearerAuth()
    @ApiOkResponse({ type: PermissionEntity, isArray: true })
    findAll() {
        return this.permissionService.findAll();
    }

    @Get(':id')
    // @UseGuards(JwtAuthGuard)
    // @ApiBearerAuth()
    @ApiOkResponse({ type: PermissionEntity, isArray: true })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.permissionService.findOne(id);
    }

    @Patch(':id')
    // @UseGuards(JwtAuthGuard)
    // @ApiBearerAuth()
    @ApiOkResponse({ type: PermissionEntity, isArray: true })
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updatePermissionDto: UpdatePermissionDto,
    ) {
        return this.permissionService.update(id, updatePermissionDto);
    }

    @Delete(':id')
    // @UseGuards(JwtAuthGuard)
    // @ApiBearerAuth()
    @ApiOkResponse({ type: PermissionEntity, isArray: true })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.permissionService.remove(id);
    }
}
