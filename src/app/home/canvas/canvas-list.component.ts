import {Component, OnInit} from '@angular/core';
import {CanvasService} from './canvas.service';
import {CanvasComponent} from './canvas.component'

@Component({
    selector: 'my-canvas-list',
    templateUrl: './canvas-list.component.html',
    providers: [CanvasService],
    directives: [CanvasComponent]
})

export class CanvasListComponent implements OnInit {
    canvases: any[];

    constructor(private _canvasService: CanvasService) {
    }

    ngOnInit() {
        this.canvases = this._canvasService.getCanvases();
    }
}
