import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'my-canvas',
    templateUrl: './canvas.component.html',
    styles: [`
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }

        .media-body {
            text-align: left;
            width: 400 px;
        }
    `],
})
export class CanvasComponent {
    @Input() data;

    constructor(private _router: Router) {

    }

    onClick() {
        console.log("clicked");
        this._router.navigate(['/canvas' , this.data.id]);
    }
}