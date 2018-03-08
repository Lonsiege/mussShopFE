import {Component, OnInit} from '@angular/core';
import {Item} from '../model/Item';
import {ItemsService} from '../service/getItems';
import {isUndefined} from 'util';
import {NgForm} from '@angular/forms';
import {SaleService} from '../service/sendCart';
import {Sell} from '../model/Sell';
import {BestSellService} from '../service/getBestsell';
import {StatusModel} from '../model/StatusModel';
import {Combo} from '../model/Combo';


export interface IPrimModel {
  success: string;
  data: any;
}

export interface IStatusModel {
  success: string;
  data: StatusModel;
}

@Component({
  selector: 'app-musshop-home',
  templateUrl: './musshop-home.component.html',
  styleUrls: ['./musshop-home.component.scss'],
  providers: [ItemsService, SaleService, BestSellService]
})
export class MusshopHomeComponent implements OnInit {
  title = 'Music Shop';
  panel = 'Products by popularity';
  items: Item[];
  userCart: Item[];
  totalsum = 0;
  email: string;
  topBest: Item[];
  topCombo: Combo[];

  constructor(private _itemService: ItemsService, private _saleService: SaleService,
              private _statService: BestSellService) {
  }

  ngOnInit() {
    this.getInitial();
  }

  getInitial() {
    this._itemService.getMovies().subscribe(
      (data: IPrimModel) => {
        if (data.success === 'true') {
          this.items = data.data;
        }
      },
      err => console.error(err),
      () => console.log('results loaded')
    );
  }

  updateStatus() {
    this._statService.getBestSell().subscribe(
      (data: IStatusModel) => {
        if (data.success === 'true') {
          this.topBest = data.data.bestSellers;
          this.topCombo = data.data.bestCombos;
        }
      },
      err => console.error(err),
      () => console.log('results loaded')
    );
  }

  addToCart(item) {
    if (!isUndefined(this.userCart)) {
      if (this.userCart.length < 5) {
        this.userCart.push(item);
        this.totalsum += item.price;
      }
    } else {
      const cart = [item];
      this.userCart = cart;
      this.totalsum += item.price;
    }
  }

  changePanel(value: string) {
    this.panel = value;
    if (value === 'Status') {
      this.updateStatus();
    }
  }


  onFormSubmit(form: NgForm) {
    const email: string = form.controls['emailVal'].value;
    let numbers: number[];

    if (email && this.userCart) {
      numbers = this.userCart.map(function (item) {
        return item.catalog;
      });
      const sell = new Sell();
      sell.email = email;
      sell.cart = numbers;
      this._saleService.sendCart(sell).subscribe(
        (data: IPrimModel) => {
          // console.log(data);
        },
        err => console.error(err),
        () => {
          this.userCart = new Array<Item>();
          this.totalsum = 0;
          this.getInitial();
          this.changePanel('Products by popularity');
          console.log('sale saved');
        }
      );
    }
  }
}
