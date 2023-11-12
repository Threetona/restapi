import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { UserEntity } from '../../users/entities/user.entity';
import { RoleEntity } from '../../role/entities/role.entity';
import { Session } from '@prisma/client';

export class SessionEntity implements Session {
    @ApiProperty()
    id: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    user: UserEntity;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @Exclude() // Pastikan ini diimpor dari class-transformer
    password: string;

    @ApiProperty({ required: false, nullable: true })
    roleId: number | null;

    @ApiProperty()
    role: RoleEntity;

    @ApiProperty()
    online: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    constructor(partial: Partial<SessionEntity>) {
        Object.assign(this, partial);
    }
}
