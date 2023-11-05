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
import { SubmenuService } from './submenu.service';
import { CreateSubmenuDto } from './dto/create-submenu.dto';
import { UpdateSubmenuDto } from './dto/update-submenu.dto';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
import { SubMenuEntity } from './entities/submenu.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('submenu')
@ApiTags('Sub Menu')
export class SubmenuController {
    constructor(private readonly submenuService: SubmenuService) {}

    @Post()
    @ApiCreatedResponse({ type: SubMenuEntity })
    create(@Body() createSubmenuDto: CreateSubmenuDto) {
        return this.submenuService.create(createSubmenuDto);
    }

    @Get()
    // @UseGuards(JwtAuthGuard)
    // @ApiBearerAuth()
    @ApiOkResponse({ type: [SubMenuEntity] })
    findAll() {
        return this.submenuService.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SubMenuEntity })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.submenuService.findOne(+id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SubMenuEntity })
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateSubmenuDto: UpdateSubmenuDto,
    ) {
        return this.submenuService.update(+id, updateSubmenuDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SubMenuEntity })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.submenuService.remove(+id);
    }
}
