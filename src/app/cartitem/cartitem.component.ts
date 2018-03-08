import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit {
  @Input() shop;
  constructor() { }

  ngOnInit() {
  }

}
