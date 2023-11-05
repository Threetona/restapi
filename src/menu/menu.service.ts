import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenuService {
    constructor(private prisma: PrismaService) {}
    create(createMenuDto: CreateMenuDto) {
        return this.prisma.menu.create({ data: createMenuDto });
    }

    findAll() {
        return this.prisma.menu.findMany({
            include: {
                subMenus: {
                    include: {
                        subMenus2: {
                            include: {
                                subMenus3: true,
                            },
                        },
                    },
                },
            },
        });
    }

    findOne(id: number) {
        return this.prisma.menu.findUnique({
            where: { id },
            include: {
                subMenus: {
                    include: {
                        subMenus2: {
                            include: {
                                subMenus3: true,
                            },
                        },
                    },
                },
            },
        });
    }

    async update(id: number, updateMenuDto: UpdateMenuDto) {
        return await this.prisma.menu.update({
            where: { id },
            data: updateMenuDto,
        });
    }

    remove(id: number) {
        return this.prisma.menu.delete({ where: { id } });
    }
}
