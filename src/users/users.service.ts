import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return 'test';
  }
}
