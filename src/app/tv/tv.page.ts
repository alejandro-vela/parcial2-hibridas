import {Component} from '@angular/core';
import { Router} from "@angular/router";

@Component({
    selector: 'app-tv',
    templateUrl: './tv.page.html',
    styleUrls: ['./tv.page.scss'],
})
export class TvPage {
    private data: number;

    constructor(
        private router: Router,
    ) { }


    dataType(idData) {
        this.data=parseInt(idData);
        alert(this.data);
        this.router.navigate(['/form',this.data])

    }

    items = [
        {
            id: '1',
            titulo: "TV  LG 50 ",
            img: "/assets/tv/tv1.jpg",
            descri: "Televisor LG 50 pulgadas , garantia de un año , full sonido ",
            valor: "10´000.000"
        },
        {
            id: '2',
            titulo: "TV LG  40",
            img: "assets/tv/tv2.jpg",
            descri: "Televisor LG 40, Promocion, sin garantia",
            valor: "2'000.000"

        },
        {
            id: '3',
            titulo: "TV SAMSUNG 50",
            img: "assets/tv/tv3.jpg",
            descri: "Televisor SAMSUNG 50 pulgadas, semi curvo ",
            valor: "8'000.000"
        },
        {
            id: '4',
            titulo: "TV SAMSUNG 30",
            img: "assets/tv/tv4.jpg",
            descri: "Televisor SAMSUNG 30 pulgadas, semi curvo ",
            valor: "4'000.000"
        },
        {
            id: '5',
            titulo: "TV LG 20",
            img: "assets/tv/tv5.jpg",
            descri: "Televisor LG 30 pulgadas, semi curvo ",
            valor: "1'000.000"
        },
        {
            id: '6',
            titulo: "TV CMD 20",
            img: "assets/tv/tv6.jpeg",
            descri: "Televisor CMD 20 pulgadas, semi curvo ",
            valor: "1'500.000",
        }
    ]


}
