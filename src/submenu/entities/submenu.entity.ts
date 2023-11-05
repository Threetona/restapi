import { ApiProperty } from '@nestjs/swagger';
import { SubMenu } from '@prisma/client';

export class SubMenuEntity implements SubMenu {
    constructor(partial: Partial<SubMenuEntity>) {
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
    menuId: number;
}
