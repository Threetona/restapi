import { Injectable } from '@nestjs/common';
import { PrismaClient, Session, Prisma } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super();
    }

    async createSession(data: Prisma.SessionCreateInput): Promise<Session> {
        return this.session.create({
            data,
        });
    }
}
