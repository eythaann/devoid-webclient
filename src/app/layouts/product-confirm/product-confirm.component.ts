import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router'
import {  MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'app-product-confirm',
  templateUrl: './product-confirm.component.html',
  styleUrls: ['./product-confirm.component.css']
})
export class ProductConfirmComponent implements OnInit {

  constructor(
    private router:Router,
    public dialogRef:MatDialogRef<ProductConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string
    ) { }
  user = localStorage.getItem('user')
  ngOnInit(): void {
  }

  onClick(): void{
    this.dialogRef.close();
    this.router.navigate(['cart']);
  }

}
