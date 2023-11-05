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
import { Submenu2Service } from './submenu2.service';
import { CreateSubmenu2Dto } from './dto/create-submenu2.dto';
import { UpdateSubmenu2Dto } from './dto/update-submenu2.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Submenu2Entity } from './entities/submenu2.entity';

@Controller('submenu2')
@ApiTags('Sub Menu 2')
export class Submenu2Controller {
    constructor(private readonly submenu2Service: Submenu2Service) {}

    @Post()
    @ApiCreatedResponse({ type: Submenu2Entity })
    create(@Body() createSubmenu2Dto: CreateSubmenu2Dto) {
        return this.submenu2Service.create(createSubmenu2Dto);
    }

    @Get()
    @ApiOkResponse({ type: Submenu2Entity, isArray: true })
    findAll() {
        return this.submenu2Service.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: Submenu2Entity })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.submenu2Service.findOne(id);
    }

    @Patch(':id')
    @ApiCreatedResponse({ type: Submenu2Entity })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateSubmenu2Dto: UpdateSubmenu2Dto,
    ) {
        return new Submenu2Entity(
            await this.submenu2Service.update(id, updateSubmenu2Dto),
        );
    }

    @Delete(':id')
    @ApiOkResponse({ type: Submenu2Entity })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.submenu2Service.remove(id);
    }
}
