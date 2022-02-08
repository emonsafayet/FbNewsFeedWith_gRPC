import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from 'src/app/utils/validation';
import { UserGRPCService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted: Boolean = false;
  signupForm: FormGroup;

  constructor(
    private userGrpcService : UserGRPCService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm(){
    this.signupForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      UserName: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      Password: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      ConfirmPassword: [ '',
        [
          Validation.match('Password','ConfirmPassword')
        ]
      ]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.signupForm.invalid){
      return;
    }
    this.userGrpcService.signUp(this.signupForm.value);
    console.log(this.signupForm.value);
  }

  onReset(): void {
    this.submitted = false;
    this.signupForm.reset();
  }

}
