import { Injectable } from '@nestjs/common';
import { CreateSubmenu3Dto } from './dto/create-submenu3.dto';
import { UpdateSubmenu3Dto } from './dto/update-submenu3.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class Submenu3Service {
    constructor(private prisma: PrismaService) {}
    create(createSubmenu3Dto: CreateSubmenu3Dto) {
        return this.prisma.subMenu3.create({
            data: createSubmenu3Dto,
        });
    }

    findAll() {
        return this.prisma.subMenu3.findMany();
    }

    findOne(id: number) {
        return this.prisma.subMenu3.findUnique({
            where: { id },
        });
    }

    update(id: number, updateSubmenu3Dto: UpdateSubmenu3Dto) {
        return this.prisma.subMenu3.update({
            where: { id },
            data: updateSubmenu3Dto,
        });
    }

    remove(id: number) {
        return this.prisma.subMenu3.delete({ where: { id } });
    }
}
