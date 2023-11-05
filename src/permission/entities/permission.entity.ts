import { ApiProperty } from '@nestjs/swagger';
import { Permission } from '@prisma/client';
export class PermissionEntity implements Permission {
    constructor(partial: Partial<PermissionEntity>) {
        Object.assign(this, partial);
    }

    id: number;

    @ApiProperty()
    roleId: number;

    @ApiProperty()
    menuId: number;
}
