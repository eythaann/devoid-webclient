import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { logini } from '../../models/login.interface';
import { Router } from '@angular/router';
import { responsei } from 'src/app/models/response.interface';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private api: ApiService,
    private router: Router,
    private fb: FormBuilder,
    private title: Title
  ) {
    this.loginForm = this.fb.group({
      email: ['',
        [
          Validators.required, 
          Validators.email, 
          Validators.minLength(8)
        ],
      ],
      password: ['', 
        [
          Validators.required
        ]
      ],
    });
  }

  loginerror: string | undefined;

  ngOnInit(): void {
    this.title.setTitle('Login - Devoid');
    this.checklocalstorage();
  }

  checklocalstorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['store']);
    }
  }

  onLogin(form: logini) {
    if (this.loginForm.valid) {
      this.api.loginByEmail(form).subscribe((data) => {
        let { auth, token, error, user } = data;
        if (auth === true) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', user);
          this.router.navigate(['store']);
        } else {
          this.loginerror = error;
        }
      });
    } else{
      this.loginForm.markAllAsTouched();
    }
  }

}
