import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: ['', Validators.required]
    });
  }

}
