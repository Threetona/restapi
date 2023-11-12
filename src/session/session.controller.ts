import { Controller, Get } from '@nestjs/common';
import { SessionService } from './session.service';
import { ApiTags } from '@nestjs/swagger';
import { SessionEntity } from './entities/session.entity';

@Controller('session')
@ApiTags('Session')
export class SessionController {
    constructor(private readonly sessionService: SessionService) {}

    @Get()
    async findAll() {
        const sessions = await this.sessionService.findAll();
        return sessions.map((session) => new SessionEntity(session));
    }
}
