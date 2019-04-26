import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-rta',
    templateUrl: './rta.page.html',
    styleUrls: ['./rta.page.scss'],
})
export class RtaPage implements OnInit {
    constructor(private activateRouter: ActivatedRoute) {
    }

    input1: any;
    input2: any;
    input3: any;
    input4: any;
    input5: any;
    input6: any;
    input7: any;
    data: any;
    data1: any;



    ngOnInit() {

        this.input1 = this.activateRouter.snapshot.paramMap.get('name');
        this.input2 = this.activateRouter.snapshot.paramMap.get('lastName');
        this.input3 = this.activateRouter.snapshot.paramMap.get('Documento');
        this.input4 = this.activateRouter.snapshot.paramMap.get('Direccion');
        this.input5 = this.activateRouter.snapshot.paramMap.get('Telefono');
        this.input6 = this.activateRouter.snapshot.paramMap.get('Ciudad');
        this.input7 = this.activateRouter.snapshot.paramMap.get('id');
        this.data1 = parseInt(this.input7);
        switch (this.data1) {
            case 1:
                this.data = [{

                    titulo:"TV  LG 50 ",
                    img:"/assets/tv/tv1.jpg",
                    descri:"Televisor LG 50 pulgadas , garantia de un año , full sonido ",
                    valor:"10´000.000"
                }];

                break;
            case 2:
                this.data = [{
                    titulo:"TV LG  40",
                    img:"assets/tv/tv2.jpg",
                    descri:"Televisor LG 40, Promocion, sin garantia",
                    valor:"2'000.000s"

                }];

                break;
            case 3:
                this.data =[
                    {
                        titulo:"TV SAMSUNG 50",
                        img: "assets/tv/tv3.jpg",
                        descri:"Televisor SAMSUNG 50 pulgadas, semi curvo ",
                        valor:"8'000.000"
                    }
                ];

                break;
            case 4:
                this.data =[
                    {
                        titulo:"TV SAMSUNG 30",
                        img: "assets/tv/tv4.jpg",
                        descri:"Televisor SAMSUNG 30 pulgadas, semi curvo ",
                        valor:"4'000.000"
                    },
                ];

                break;
            case 5:
                this.data =[
                    {
                        titulo:"TV LG 20",
                        img: "assets/tv/tv5.jpg",
                        descri:"Televisor LG 30 pulgadas, semi curvo ",
                        valor:"1'000.000"
                    }
                ];

                break;
            case 6:
                this.data =[
                    {
                        titulo:"TV CMD 20",
                        img: "assets/tv/tv6.jpeg",
                        descri:"Televisor CMD 20 pulgadas, semi curvo ",
                        valor:"1'500.000",
                    }
                ];

                break;
            /*TERMINAN TV*/
            case 7:
                this.data =[
                    {
                        titulo:"IPHONE 5S",
                        img:"../assets/cel/cel1.jpg",
                        descri:" IPHONE 5S , 16GB , SPACE GREY , USADO",
                        valor:"500.000"
                    }
                ];

                break;
            case 8:
                this.data =[
                    {
                        titulo:"IPHONE 6S",
                        img:"assets/cel/cel2.jpg",
                        descri:"IPHONE 6S , 32GB,GOLD AND  SILVER GREY,USADO",
                        valor:"1'000.000"

                    }
                ];

                break;
            case 9:
                this.data =[
                    {
                        titulo:"IPHONE 8",
                        img: "assets/cel/cel3.jpg",
                        descri:"IPHNE 8, 32GB, RED EDITION ,NUEVO",
                        valor:"3'000.000"
                    }
                ];

                break;
            case 10:
                this.data =[
                    {
                        titulo:"IPHONE XR",
                        img: "assets/cel/cel4.jpg",
                        descri:"IPHONE XR , 64GB, BLUE EDITION , NUEVO",
                        valor:"3'200.000"
                    }
                ];

                break;
            case 11:
                this.data =[
                    {
                        titulo:"IPHONE X",
                        img: "assets/cel/cel5.jpg",
                        descri:"IPHONE X , 32GB , WHITE EDITION , NUEVO ",
                        valor:"3'500.000"
                    }
                ];

                break;
            case 12:
                this.data =[
                    {
                        titulo:"IPHONE XS ",
                        img: "assets/cel/cel6.jpg",
                        descri:"IPHONE XS , 256GB, ROSE EDITION , NUEVO ",
                        valor:"4'500.000",
                    }
                ];

                break;
            /*TERMINA CEL*/
            case 13:
                this.data =[
                    {
                        titulo:"MACKBOOK AIR 12",
                        img:"../assets/comp/comp1.jpg",
                        descri:" MACBOOK AIR 2012 , PANTALLA SENCILLA , COREI3, 4GB RAM , USADO",
                        valor:"1'500.000"
                    }
                ];

                break;
            case 14:
                this.data =[
                    {
                        titulo:"MACKBOOK PRO 12 ",
                        img:"assets/comp/comp2.jpg",
                        descri:"MACKBOOK PRO 2012 , PANTALLA RETINA , DISCO SOLIDO 500GB ,8GB RAM , CORE I7,USADO",
                        valor:"1'700.000"

                    }
                ];

                break;
            case 15:
                this.data =[
                    {
                        titulo:"MACKBOOK AIR 14",
                        img: "assets/comp/comp3.jpg",
                        descri:"MACKBOOK AIR 2014, PANTALLA SENCILLA , DISCO FLASH 120GB  ,NUEVO",
                        valor:"3'000.000"
                    }
                ];

                break;
            case 16:
                this.data =[
                    {
                        titulo:"MACKBOOK PRO 14",
                        img: "assets/comp/comp4.jpg",
                        descri:"MACKBOOK PRO 2014 , PANTALLA RETINA , MEMORIA FLASH 120GB  , NUEVO",
                        valor:"3'500.000"
                    }
                ];

                break;
            case 17:
                this.data =[
                    {
                        titulo:"MACKBOOK AIR 2019",
                        img: "assets/comp/comp5.jpg",
                        descri:"MACKBOOK AIR 2019 , MEMORIA FLASH 120GB  , PANEL TACTIL , HUELLA , EDITION ROSE , SILVER, NUEVO ",
                        valor:"6'500.000"
                    }
                ];

                break;
            case 18:
                this.data =[
                    {
                        titulo:"MACKBOOK PRO 2019 ",
                        img: "assets/comp/comp6.jpg",
                        descri:"MACBOOK PRO 2019 , 256GB, 8GB RAM,CORE I9  , NUEVO ",
                        valor:"10'500.000",
                    }
                ];

                break;
            /*TERMINA LAPOP*/
            case 20:
                this.data =[
                    {
                        titulo:"IMAC 12",
                        img:"../assets/grand/grand1.jpeg",
                        descri:" IMAC12 , PANTALLA SENCILLA , COREI3, 4GB RAM , USADO",
                        valor:"2'500.000"
                    }
                ];

                break;
            case 21:
                this.data =[
                    {
                        titulo:"IMAC  13 ",
                        img:"assets/grand/grand2.jpg",
                        descri:"IMAC13 , PANTALLA RETINA , DISCO SOLIDO 500GB ,8GB RAM , CORE I3,USADO",
                        valor:"2'700.000"

                    }
                ];

                break;
            case 22:
                this.data =[
                    {
                        titulo:"IMAC 14",
                        img: "assets/grand/grand3.jpg",
                        descri:"IMAC 2014, PANTALLA SENCILLA , DISCO FLASH 120GB  ,NUEVO",
                        valor:"3'000.000"
                    }
                ];

                break;
            case 23:
                this.data =[
                    {
                        titulo:"IMAC 15",
                        img: "assets/grand/grand4.jpg",
                        descri:"IMAC 2015 , PANTALLA RETINA , MEMORIA FLASH 120GB  , NUEVO",
                        valor:"3'500.000"
                    }
                ];

                break;
            case 24:
                this.data =[
                    {
                        titulo:" IMAC 18",
                        img: "assets/grand/grand5.jpg",
                        descri:"IMAC 2018 , MEMORIA FLASH 120GB  , PANEL TACTIL , HUELLA , EDITION ROSE , SILVER, NUEVO ",
                        valor:"6'500.000"
                    }
                ];

                break;
            case 25:
                this.data =[
                    {
                        titulo:"IMAC 2019 ",
                        img: "assets/grand/grand6.jpg",
                        descri:"IMAC 2019 , 256GB, 8GB RAM,CORE I9  , NUEVO ",
                        valor:"10'500.000",
                    }
                ];

                break;

        }
    }

}
