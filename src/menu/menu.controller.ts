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
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import {
    ApiTags,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiBearerAuth,
} from '@nestjs/swagger';
import { MenuEntity } from './entities/menu.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('menu')
@ApiTags('Menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ type: MenuEntity })
    async create(@Body() createMenuDto: CreateMenuDto) {
        return new MenuEntity(await this.menuService.create(createMenuDto));
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: MenuEntity, isArray: true })
    async findAll() {
        const menus = await this.menuService.findAll();
        return menus.map((menu) => new MenuEntity(menu));
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: MenuEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return new MenuEntity(await this.menuService.findOne(id));
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ type: MenuEntity })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateMenuDto: UpdateMenuDto,
    ) {
        return new MenuEntity(await this.menuService.update(id, updateMenuDto));
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: MenuEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
        // return this.menuService.remove(id);
        return new MenuEntity(await this.menuService.remove(id));
    }
}
