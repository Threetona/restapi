import { Module } from '@nestjs/common';
import { SubmenuService } from './submenu.service';
import { SubmenuController } from './submenu.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    controllers: [SubmenuController],
    providers: [SubmenuService],
    imports: [PrismaModule],
    exports: [SubmenuService],
})
export class SubmenuModule {}
