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
import { Submenu3Service } from './submenu3.service';
import { CreateSubmenu3Dto } from './dto/create-submenu3.dto';
import { UpdateSubmenu3Dto } from './dto/update-submenu3.dto';
import { SubMenu3Entity } from './entities/submenu3.entity';
import {
    ApiCreatedResponse,
    ApiTags,
    ApiBearerAuth,
    ApiOkResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('submenu3')
@ApiTags('Sub Menu 3')
export class Submenu3Controller {
    constructor(private readonly submenu3Service: Submenu3Service) {}

    @Post()
    @ApiCreatedResponse({ type: SubMenu3Entity })
    async create(@Body() createSubmenu3Dto: CreateSubmenu3Dto) {
        // return 'ok';
        return new SubMenu3Entity(
            await this.submenu3Service.create(createSubmenu3Dto),
        );
    }
    // create(@Body() createSubmenu3Dto: CreateSubmenu3Dto) {
    //     return this.submenu3Service.create(createSubmenu3Dto);
    // }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SubMenu3Entity, isArray: true })
    findAll() {
        return this.submenu3Service.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SubMenu3Entity, isArray: true })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.submenu3Service.findOne(+id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SubMenu3Entity, isArray: true })
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateSubmenu3Dto: UpdateSubmenu3Dto,
    ) {
        return this.submenu3Service.update(+id, updateSubmenu3Dto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SubMenu3Entity, isArray: true })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.submenu3Service.remove(+id);
    }
}
