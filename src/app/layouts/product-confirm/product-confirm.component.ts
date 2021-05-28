import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { Router } from '@angular/router'
import {  MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'app-product-confirm',
  templateUrl: './product-confirm.component.html',
  styleUrls: ['./product-confirm.component.css']
})
export class ProductConfirmComponent implements OnInit {

  user;
  token;

  constructor(
    @Inject(PLATFORM_ID) private platformid: object,
    private router:Router,
    public dialogRef:MatDialogRef<ProductConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string
    ) {
      if(isPlatformBrowser(platformid)){
        this.user = localStorage.getItem('user')
        this.token = localStorage.getItem('token')
      }
     }
 
  ngOnInit(): void {
  }

  onClick(): void{
    this.dialogRef.close();
    this.router.navigate(['cart']);
  }

}
