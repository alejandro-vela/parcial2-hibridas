import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-cel',
    templateUrl: './cel.page.html',
    styleUrls: ['./cel.page.scss'],
})
export class CelPage {

    private data: number;

    constructor(
        private router: Router,
    ) {
    }


    dataType(idData) {
        this.data = parseInt(idData);
        alert(this.data);
        this.router.navigate(['/form', this.data]);
    }

    cels = [
        {
            id: '7',
            titulo: "IPHONE 5S",
            img: "../assets/cel/cel1.jpg",
            descri: " IPHONE 5S , 16GB , SPACE GREY , USADO",
            valor: "500.000"
        },
        {
            id: '8',
            titulo: "IPHONE 6S",
            img: "assets/cel/cel2.jpg",
            descri: "IPHONE 6S , 32GB,GOLD AND  SILVER GREY,USADO",
            valor: "1'000.000"

        },
        {
            id: '9',
            titulo: "IPHONE 8",
            img: "assets/cel/cel3.jpg",
            descri: "IPHNE 8, 32GB, RED EDITION ,NUEVO",
            valor: "3'000.000"
        },
        {
            id: '10',
            titulo: "IPHONE XR",
            img: "assets/cel/cel4.jpg",
            descri: "IPHONE XR , 64GB, BLUE EDITION , NUEVO",
            valor: "3'200.000"
        },
        {
            id: '11',
            titulo: "IPHONE X",
            img: "assets/cel/cel5.jpg",
            descri: "IPHONE X , 32GB , WHITE EDITION , NUEVO ",
            valor: "3'500.000"
        },
        {
            id: '12',
            titulo: "IPHONE XS ",
            img: "assets/cel/cel6.jpg",
            descri: "IPHONE XS , 256GB, ROSE EDITION , NUEVO ",
            valor: "4'500.000",
        }
    ]


}
