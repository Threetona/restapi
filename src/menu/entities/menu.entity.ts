import { ApiProperty } from '@nestjs/swagger';
import { Menu } from '@prisma/client';

export class MenuEntity implements Menu {
    constructor(partial: Partial<MenuEntity>) {
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
}
