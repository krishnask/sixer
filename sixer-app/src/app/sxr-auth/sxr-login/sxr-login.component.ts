import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'; // TODO - Remove auth from package . json

@Component({
  selector: 'app-sxr-login',
  templateUrl: './sxr-login.component.html',
  styleUrls: ['./sxr-login.component.scss']
})
export class SxrLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
         id: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]]
    });
  }

}
