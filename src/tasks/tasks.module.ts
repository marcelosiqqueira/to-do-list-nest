import { TaskSchema } from './schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './shared/task.service/task.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])
  ],
  controllers: [TasksController],
  providers: [TaskService]
})
export class TasksModule {}
