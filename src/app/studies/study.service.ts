import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  constructor() { }

  test() {
    return 'hello world';
  }
}
