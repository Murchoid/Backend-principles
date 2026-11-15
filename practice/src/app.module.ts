import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TaskModule } from './task/task.module.js';
import { AiModule } from './ai/ai.module.js';

@Module({
  imports: [TaskModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
