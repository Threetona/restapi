import { Injectable } from '@nestjs/common';
import { CreateSubmenu2Dto } from './dto/create-submenu2.dto';
import { UpdateSubmenu2Dto } from './dto/update-submenu2.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class Submenu2Service {
    constructor(private prisma: PrismaService) {}

    create(createSubmenu2Dto: CreateSubmenu2Dto) {
        return this.prisma.subMenu2.create({ data: createSubmenu2Dto });
    }

    findAll() {
        return this.prisma.subMenu2.findMany({
            include: { subMenus3: true },
        });
    }

    findOne(id: number) {
        return this.prisma.subMenu2.findUnique({
            where: { id },
            include: { subMenus3: true },
        });
    }

    update(id: number, updateSubmenu2Dto: UpdateSubmenu2Dto) {
        return this.prisma.subMenu2.update({
            where: { id },
            data: updateSubmenu2Dto,
        });
    }

    remove(id: number) {
        return this.prisma.subMenu2.delete({ where: { id } });
    }
}
