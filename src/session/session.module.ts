import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    controllers: [SessionController],
    providers: [SessionService],
    imports: [PrismaModule],
})
export class SessionModule {}
