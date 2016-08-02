import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'my-minicanvas',
    templateUrl: './canvas-mini.component.html',
    styleUrls: ['./canvas-mini.component.scss']
})
export class MiniCanvasComponent {
    @Input() data;

    constructor(private _router: Router) {

    }

    onClick() {
        this._router.navigate(['/canvas' , this.data.id]);
    }
}