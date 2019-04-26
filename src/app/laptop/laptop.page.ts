import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.page.html',
  styleUrls: ['./laptop.page.scss'],
})
export class LaptopPage  {
    private data: number;

    constructor(
        private router: Router,
    ) { }



    dataType(idData) {
        this.data=parseInt(idData);
        alert(this.data);
        this.router.navigate(['/form',this.data])

    }
    items=[
        {
            id:'13',
            titulo:"MACKBOOK AIR 12",
            img:"../assets/comp/comp1.jpg",
            descri:" MACBOOK AIR 2012 , PANTALLA SENCILLA , COREI3, 4GB RAM , USADO",
            valor:"1'500.000"
        },
        {
            id:'14',
            titulo:"MACKBOOK PRO 12 ",
            img:"assets/comp/comp2.jpg",
            descri:"MACKBOOK PRO 2012 , PANTALLA RETINA , DISCO SOLIDO 500GB ,8GB RAM , CORE I7,USADO",
            valor:"1'700.000"

        },
        {
            id:'15',
            titulo:"MACKBOOK AIR 14",
            img: "assets/comp/comp3.jpg",
            descri:"MACKBOOK AIR 2014, PANTALLA SENCILLA , DISCO FLASH 120GB  ,NUEVO",
            valor:"3'000.000"
        },
        {
            id:'16',
            titulo:"MACKBOOK PRO 14",
            img: "assets/comp/comp4.jpg",
            descri:"MACKBOOK PRO 2014 , PANTALLA RETINA , MEMORIA FLASH 120GB  , NUEVO",
            valor:"3'500.000"
        },
        {
            id:'17',
            titulo:"MACKBOOK AIR 2019",
            img: "assets/comp/comp5.jpg",
            descri:"MACKBOOK AIR 2019 , MEMORIA FLASH 120GB  , PANEL TACTIL , HUELLA , EDITION ROSE , SILVER, NUEVO ",
            valor:"6'500.000"
        },
        {
            id:'18',
            titulo:"MACKBOOK PRO 2019 ",
            img: "assets/comp/comp6.jpg",
            descri:"MACBOOK PRO 2019 , 256GB, 8GB RAM,CORE I9  , NUEVO ",
            valor:"10'500.000",
        }
    ]



}
