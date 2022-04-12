import { Component, OnInit } from '@angular/core';

enum TypeData {
  ONE = 'Адын',
  TWO = '2два',
  THREE = '333',
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public typeData: TypeData = TypeData.ONE;

  public handlerDataClick(data: number): void {
    switch (data) {
      case 1:
        console.log(TypeData.ONE);
        
        this.typeData = TypeData.ONE;
        break;
      case 2:
        this.typeData = TypeData.TWO;
        break;
      case 3:
        this.typeData = TypeData.THREE;
        break;
      default:
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
