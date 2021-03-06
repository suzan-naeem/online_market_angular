import { GoodsService } from './../../services/goods.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Good } from 'src/app/interfaces/good';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  @ViewChild('image') image: ElementRef
  constructor(public gs: GoodsService, public router: Router) { }

  ngOnInit(): void {
  }

  addNewGood(form: NgForm) {
    let name = (<Good>form.value).name,
    price = (<Good>form.value).price,
    image = (<HTMLInputElement>this.image.nativeElement).files[0];
    this.gs.addNewGood(name, price, image)
    .then(() => {
      console.log("hello");
    })
  }
}
