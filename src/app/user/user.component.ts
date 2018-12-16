import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    readonly Categories = [
        {eng: 'Portrait', ua: 'Портрет'},
        {eng: 'Lovestory', ua: 'Лав Сторі'},
        {eng: 'Wedding', ua: 'Весілля'},
        {eng: 'Kids', ua: 'Діти'},
        {eng: 'Other', ua: 'Інше'}
    ];

    constructor(config: NgbCarouselConfig) {
        config.interval = 1000000;
        config.showNavigationArrows = false;
        config.wrap = false;
        config.keyboard = true;
        config.pauseOnHover = false;
        config.wrap = true;
        console.log(config);
    }

    images = ['../assets/1', '../assets/2', '../assets/3'];

    ngOnInit() {

    }

    goToCategory(category) {
       console.log('Clicked ' + category + ' category');
    }


}
