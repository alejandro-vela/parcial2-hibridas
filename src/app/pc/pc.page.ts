import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-pc',
    templateUrl: './pc.page.html',
    styleUrls: ['./pc.page.scss'],
})
export class PcPage {

    private data: number;

    constructor(
        private router: Router,
    ) {
    }


    dataType(idData) {
        this.data = parseInt(idData);
        alert(this.data);
        this.router.navigate(['/form', this.data])

    }

    items = [
        {
            id: '20',
            titulo: "IMAC 12",
            img: "../assets/grand/grand1.jpeg",
            descri: " IMAC12 , PANTALLA SENCILLA , COREI3, 4GB RAM , USADO",
            valor: "2'500.000"
        },
        {
            id: '21',
            titulo: "IMAC  13 ",
            img: "assets/grand/grand2.jpg",
            descri: "IMAC13 , PANTALLA RETINA , DISCO SOLIDO 500GB ,8GB RAM , CORE I3,USADO",
            valor: "2'700.000"

        },
        {
            id: '22',
            titulo: "IMAC 14",
            img: "assets/grand/grand3.png",
            descri: "IMAC 2014, PANTALLA SENCILLA , DISCO FLASH 120GB  ,NUEVO",
            valor: "3'000.000"
        },
        {
            id: '23',
            titulo: "IMAC 15",
            img: "assets/grand/grand4.jpg",
            descri: "IMAC 2015 , PANTALLA RETINA , MEMORIA FLASH 120GB  , NUEVO",
            valor: "3'500.000"
        },
        {
            id: '24',
            titulo: " IMAC 18",
            img: "assets/grand/grand5.jpg",
            descri: "IMAC 2018 , MEMORIA FLASH 120GB  , PANEL TACTIL , HUELLA , EDITION ROSE , SILVER, NUEVO ",
            valor: "6'500.000"
        },
        {
            id: '25',
            titulo: "IMAC 2019 ",
            img: "assets/grand/grand6.jpg",
            descri: "IMAC 2019 , 256GB, 8GB RAM,CORE I9  , NUEVO ",
            valor: "10'500.000",
        }
    ]
}
