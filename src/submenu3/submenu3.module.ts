import { Module } from '@nestjs/common';
import { Submenu3Service } from './submenu3.service';
import { Submenu3Controller } from './submenu3.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    controllers: [Submenu3Controller],
    providers: [Submenu3Service],
    imports: [PrismaModule],
    exports: [Submenu3Service],
})
export class Submenu3Module {}
