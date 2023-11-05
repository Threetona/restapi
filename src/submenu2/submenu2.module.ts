import { Module } from '@nestjs/common';
import { Submenu2Service } from './submenu2.service';
import { Submenu2Controller } from './submenu2.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    controllers: [Submenu2Controller],
    providers: [Submenu2Service],
    imports: [PrismaModule],
})
export class Submenu2Module {}
