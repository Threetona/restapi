import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SessionEntity } from './entities/session.entity';

@Injectable()
export class SessionService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return await this.prisma.session.findMany();
    }
}
