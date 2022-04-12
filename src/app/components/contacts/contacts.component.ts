import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public inputText: string = '';
  public error: string = '';
  
  public drinksData!: {};

  public handlerInput(value: string): void {
    this.error  = value.length > 10 ? 'max length 10 chars' : '';
    this.inputText = value;
  }

  public handlerClick(): void {
    this.shopHttp.getDrinksByName<any>(this.inputText)
      .subscribe((data: any) => {
        if (data) {
          this.drinksData = data;
        }
      });
  }

  constructor(private shopHttp: ShopService) { }
  ngOnInit(): void {
    this.inputText = '';
  }

}
