import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { readFile, writeFile } from 'fs/promises';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add')
  addNote(
    @Body('title') noteTitle: string,

    @Body('date') noteDate: string,

    @Body('relevance') noteRelevance: string,
  ) {
    return this.appService.addNote(noteTitle, noteDate, noteRelevance);
  }

  @Get('all')
  allNote() {
    return this.appService.allNote();
  }

  @Post('remove')
  removeNote(@Body('title') noteTitle: string) {
    return this.appService.removeNote(noteTitle);
  }
}
