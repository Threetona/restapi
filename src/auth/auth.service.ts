import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async login(email: string, password: string): Promise<AuthEntity> {
        // Step 1: Fetch a user with the given email
        const user = await this.prisma.user.findUnique({
            where: { email: email },
        });

        // If no user is found, throw an error
        if (!user) {
            throw new NotFoundException(`No user found for email: ${email}`);
        }

        // Step 2: Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // Step 2: Check if the user has an existing session
        const existingSession = await this.prisma.session.findFirst({
            where: { userId: user.id },
        });

        // If the password does not match, throw an error
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        // Step 3: Generate a JWT containing the user's ID
        const accessToken = this.jwtService.sign({ userId: user.id });

        // cek user yang sduah pernah login sebelum nya
        if (existingSession) {
            // Update existing session
            await this.prisma.session.update({
                where: { id: existingSession.id },
                data: { online: true },
            });
        } else {
            // Step 4: Create a session in the "session" table
            const sessionData: Prisma.SessionCreateInput = {
                user: {
                    connect: {
                        id: user.id,
                    },
                },
                name: user.name,
                email: user.email,
                password: '', // Tambahkan properti password, walaupun saat ini mungkin tidak diperlukan
                role: { connect: { id: user.roleId } },
                online: true,
            };

            await this.prisma.session.create({
                data: sessionData,
            });
        }

        return { accessToken };
    }
}
