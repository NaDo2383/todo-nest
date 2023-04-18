import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDocument } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel('Todo')
    private readonly todoListModel: Model<TodoDocument>,
  ) {}
  create(createTodoDto: CreateTodoDto) {
    const result = new this.todoListModel(createTodoDto);
    // result.save();
    return result.save();
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
