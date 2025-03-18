import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrl: './star.component.css'
})
export class Star implements OnChanges {
    //anotação que torna a variavel visival para que receba valor de um componente externo
    @Input()
    ratting: number = 0;
    startWidth: number = 0;


    ngOnChanges(): void {
        this.startWidth = this.ratting * 74 / 5;
    }
}