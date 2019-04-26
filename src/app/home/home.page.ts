import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    items=[
        {
            titulo:"Televisores",
            img:"../assets/tv/tv1.jpg",
            url:"/tv"

        },
        {
            titulo:"Laptops",
            img:"assets/pc/comp3.jpg",
            url:"/laptop"


        },
        {
            titulo:"Computadores",
            img: "assets/grand/grand4.jpg",
            url:"/pc"

        },
        {
            titulo:"Celulares",
            img: "../assets/cel/cel1.jpg",
            url:"/cel"

        }

    ]

}
