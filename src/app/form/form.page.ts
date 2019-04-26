import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-form',
    templateUrl: './form.page.html',
    styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
    constructor(
        private router: Router,
        private activateRouter: ActivatedRoute
    ) {
    }
    id:any;
    name: any;
    lastName: any;
    Documento: any;
    Direccion: any;
    Telefono: any;
    Ciudad: any;


    ngOnInit() {
        this.id = this.activateRouter.snapshot.paramMap.get('id');
    }
    enviar1() {
        alert(this.id);
        this.router.navigate(['/rta', this.name, this.lastName, this.Documento, this.Direccion, this.Telefono, this.Ciudad,this.id])
    }


}
