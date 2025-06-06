import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { config } from '../../config';

@Component({
    standalone: true,
    imports: [
        CommonModule
    ],
    selector: 'como-funciona',
    templateUrl: 'como-funciona.component.html'
})

export class ComoFuncionaComponent implements OnInit {
    readonly contato = config.contato;
    readonly anoAtual = config.anoAtual;

    constructor() { }
    ngOnInit() { }
}