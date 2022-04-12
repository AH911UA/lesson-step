import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  public drink: any;


  public handlerBack() {
    this.router.navigate(['/posts']);
  }

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private shopService: ShopService
    ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(type => {
      console.log('DrinkComponent: ', type['id']);
      if (type['id']) {
        this.shopService.getDrinksByID<any>(type['id'])
          .subscribe(data => {
            if (data) {
              this.drink = data;
            }
          })
      }
    })
  }

}
