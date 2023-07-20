import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    let user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.age = createUserDto.age;
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  // findOne(id: number) {
  //   return this.userRepository.findOne(id);
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user = new User();
    user.id = id;
    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.age = updateUserDto.age;

    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
