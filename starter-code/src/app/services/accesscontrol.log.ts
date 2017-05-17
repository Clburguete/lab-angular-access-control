import { Injectable } from '@angular/core';

interface Person{
  person:String,
  message:String,
  createdAt:Date
}

@Injectable()
export class AccessControl {
    logMessages: Object[] = [];
    toAdd: Person;

    constructor() { }

    getAccesslog() {
      return this.logMessages;
    }
    addAccessItem(newPerson: String, newMessage: String){
      this.toAdd = {
        person: newPerson,
        message: newMessage,
        createdAt: new Date()
      }


      this.logMessages.push(this.toAdd);
      return newPerson + " added";
    }
}
