import { ApiProperty } from '@nestjs/swagger';
import { SubMenu3 } from '@prisma/client';

export class SubMenu3Entity implements SubMenu3 {
    constructor(partial: Partial<SubMenu3Entity>) {
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
    subMenu2Id: number;
}
