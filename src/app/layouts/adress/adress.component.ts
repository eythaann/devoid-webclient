import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';



@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

token;
formAdress: FormGroup;

  constructor(
    @Inject(PLATFORM_ID) private platformid: object,
    @Inject(MAT_DIALOG_DATA) public message:string,
    private fb: FormBuilder,
    private api: ApiService,
    private dg: MatDialogRef<AdressComponent>,
  ) {
    if(isPlatformBrowser(platformid)){
      this.token = localStorage.getItem('token')
    }
    this.formAdress = this.fb.group({
      token: [this.token, Validators.required],
      adress: ['', Validators.required],
      adress2: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      postal: ['', Validators.required],
      phone: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

sendForm(form:any){
  if(this.formAdress.valid){
  this.api.postAdress(form).subscribe((data:any)=>{
    if(data.adress === true){
      this.dg.close(true)
    }
  })
  }else{
    this.formAdress.markAllAsTouched();
  }
}

}
