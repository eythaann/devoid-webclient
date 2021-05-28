import { Component, OnInit, Inject } from '@angular/core';
import {  MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-delete-confirm',
  templateUrl: './cart-delete-confirm.component.html',
  styleUrls: ['./cart-delete-confirm.component.css']
})
export class CartDeleteConfirmComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<CartDeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string
    ) { }
  
  ngOnInit(): void {
  }

}