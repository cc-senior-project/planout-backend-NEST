import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, EventsController, TasksController],
  providers: [AppService, UsersService, EventsService, TasksService],
})
export class AppModule {}
