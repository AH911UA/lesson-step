import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public drinks!: any;

  constructor(private shopHttp: ShopService) { }

  ngOnInit(): void {
    this.shopHttp.getDrinks<any>()
      .subscribe((data: any) => {
        if (data) {
          this.drinks = data.drinks.map((drink: any) => ({...drink, link: `/posts/${drink.idDrink}`}));
        }
      })
  }



}
