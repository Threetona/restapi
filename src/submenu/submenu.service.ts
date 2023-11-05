import { Injectable } from '@nestjs/common';
import { CreateSubmenuDto } from './dto/create-submenu.dto';
import { UpdateSubmenuDto } from './dto/update-submenu.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubmenuService {
    constructor(private prisma: PrismaService) {}
    create(createSubmenuDto: CreateSubmenuDto) {
        return this.prisma.subMenu.create({ data: createSubmenuDto });
    }

    findAll() {
        return this.prisma.subMenu.findMany({
            include: { subMenus2: { include: { subMenus3: true } } },
        });
    }

    findOne(id: number) {
        return this.prisma.subMenu.findUnique({
            where: { id },
            include: { subMenus2: { include: { subMenus3: true } } },
        });
    }

    update(id: number, updateSubmenuDto: UpdateSubmenuDto) {
        return this.prisma.subMenu.update({
            where: { id },
            data: updateSubmenuDto,
        });
    }

    remove(id: number) {
        return this.prisma.subMenu.delete({ where: { id } });
    }
}
