import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public name = 'Vox Tiens Khiem';
  public title = 'Vui lòng nhập vào đây !';
  public age = 15;
  public tin = 12;
  public fruits: Array<string> = ['apple', 'orange', 'mango'];
  public fruits2 = [
    {
      id: 0,
      name: 'apple',
      price: 3000,
      discount: true,
      image: 'https://giamcanthai.com/wp-content/uploads/2018/02/trai-cay-3.jpg'
    },
    {
      id: 0,
      name: 'orange',
      price: 7500,
      discount: false,
      image: 'https://giamcanthai.com/wp-content/uploads/2018/02/trai-cay-3.jpg'
    },
    {
      id: 0,
      name: 'mango',
      price: 4000,
      discount: false,
      image: 'https://giamcanthai.com/wp-content/uploads/2018/02/trai-cay-3.jpg'
    },
    {
      id: 0,
      name: 'mangoteen',
      price: -999,
      discount: true,
      image: 'https://giamcanthai.com/wp-content/uploads/2018/02/trai-cay-3.jpg'
    }
  ];
  testInnerHTML: string = '<b> Welcome to </b> VietNam'

  public districtsAndProvince: string[] = ['Quận / Huyện'];
  public cities = [
    {
      nameCity: 'Chọn Tỉnh / Thành phố',
      districts: ['Quận / Huyện']
    },
    {
      nameCity: 'Tây Ninh',
      districts:
        [
          'Thành phố Tây Ninh',
          'Huyện Bến Cầu',
          'Huyện Gò Dầu',
          'Huyện Châu Thành',
          'Huyện Dương Minh Châu',
          'Huyện Hòa Thành',
          'Huyện Tân Biên',
          'Huyện Tân Châu',
          'Huyện Trảng Bàng'
        ]
    },
    {
      nameCity: 'An Giang',
      districts:
        [
          'Thành phố Long Xuyên',
          'Thành phố Châu Đốc',
          'Thị xã Tân Châu',
          'Huyện An Phú',
          'Huyện Châu Phú',
          'Huyện Châu Thành',
          'Huyện Chợ Mới',
          'Huyện Phú Tân',
          'Huyện Thoại Sơn',
          'Huyện Tịnh Biên',
          'Huyện Tri Tôn'

        ]
    },
  ]




  public resetName(): void {
    console.log('Tui o day ne !!!')
    this.name = '';
  }
  public ngOnInit(): void {
    console.log('trai cay = ', this.fruits)
    console.log(this.fruits2)
    console.log(this.cities)
  }
  public changeDistricts(event: any): void {
    const city = event.target.value;
    console.log('event', city)
    const search = this.cities.filter((data) => data.nameCity === city)

    if (search && search.length > 0) {
      this.districtsAndProvince = search[0].districts;
    }
  }
  isChangeC: boolean = true;
  public change(): void {
    this.isChangeC = !this.isChangeC
    console.log('h2h2h2h2h2h2')
  }
}
