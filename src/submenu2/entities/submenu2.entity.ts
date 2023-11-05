import { ApiProperty } from '@nestjs/swagger';
import { SubMenu2 } from '@prisma/client';

export class Submenu2Entity implements SubMenu2 {
    constructor(partial: Partial<Submenu2Entity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    icon: string;

    @ApiProperty()
    ordering: number;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    subMenuId: number;
}
