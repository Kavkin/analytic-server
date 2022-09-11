import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphsController } from './graphs/graphs.controller';

@Module({
  imports: [],
  controllers: [AppController, GraphsController],
  providers: [AppService],
})
export class AppModule {}
