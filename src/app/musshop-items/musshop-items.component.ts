import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-musshop-items',
  templateUrl: './musshop-items.component.html',
  styleUrls: ['./musshop-items.component.scss']
})
export class MusshopItemsComponent implements OnInit {

  constructor() { }

  @Input() shop;
  @Output() sendMsgEvent = new EventEmitter<number>();

  ngOnInit() {
  }

  saveToCart() {
    this.sendMsgEvent.emit(this.shop);
  }

}
