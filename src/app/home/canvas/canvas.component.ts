import {Component, Input} from '@angular/core';
@Component({
    selector: 'my-canvas',
    templateUrl: './canvas.component.html'
})
export class CanvasComponent {
    @Input() data;
}