import {Component, OnInit} from '@angular/core';
import {CanvasService} from '../../shared/canvas.service';
import {MiniCanvasComponent} from './canvas-mini.component';

@Component({
    selector: 'my-canvas-list',
    templateUrl: './canvas-list.component.html',
    styleUrls: ['./canvas-list.component.scss'],
    providers: [CanvasService],
    directives: [MiniCanvasComponent]
})

export class CanvasListComponent implements OnInit {
    canvases: any[];

    constructor(private _canvasService: CanvasService) {
    }

    ngOnInit() {
        this.canvases = this._canvasService.getCanvases();
    }
}
