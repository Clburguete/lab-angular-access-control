import { Component, OnInit } from '@angular/core';
import { AccessControl } from '../services/accesscontrol.log'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControl]
})
export class LogFormComponentComponent implements OnInit {
  answer: string = '';
  constructor(private access: AccessControl) { }

  ngOnInit() {
  }
  submitForm(myForm) {
    //console.log(myForm);
    console.log(myForm.value.person)
    console.log(myForm.value.message)
    this.answer = this.access.addAccessItem(myForm.value.person, myForm.value.message);
    console.log(this.access.logMessages);

  }

}
