import { Injectable } from '@nestjs/common';

import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class AppService {
  async addNote(title: string, date: string, relevance: string) {
    const newnote = {
      title,
      date,
      relevance,
    };
    const note = await readFile('notes.json', 'utf8');
    const arrayNote = JSON.parse(note);
    arrayNote.push(newnote);
    console.log(arrayNote);
    writeFile('notes.json', JSON.stringify(arrayNote));
    console.log('reaached service');
    return { result: 'Reached' };
  }

  async allNote() {
    const note = await readFile('notes.json', 'utf8');
    const arrayNote = JSON.parse(note);
    console.log(arrayNote);
    return arrayNote;
  }

  async removeNote(title: string) {
    console.log('remove reached');
    const note = await readFile('notes.json', 'utf8');
    const arrayNote = JSON.parse(note);
    const index = arrayNote.findIndex((element) => {
      return element.title === title;
    });
    if (index !== -1) {
      arrayNote.splice(index, 1);
    }
    writeFile('notes.json', JSON.stringify(arrayNote));
  }
}
