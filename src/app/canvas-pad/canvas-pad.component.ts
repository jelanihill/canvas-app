import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
    template: `<canvas #myCanvas id="myCanvas" width="578" height="578"
                   (mousedown)='onMouseDown($event)' 
                   (mousemove)='onMouseMove($event)'
                   (mouseup)='onMouseUp()'
                   (mouseout)='onMouseOut()'
                   >This is the actual canvas</canvas>
                   
                   
                   <button (click)='clearCanvas()'>Clear</button>`,
    styles: [`
        #myCanvas {
            border: 1px solid #000000;
        }
    `],
})
export class CanvasPadComponent implements AfterViewInit {
    private _ctx: CanvasRenderingContext2D;

    private _mouse = {x: null as number, y: null as number};
    private _mouseIsDown = false;

    @ViewChild('myCanvas') canvas: ElementRef;

    ngAfterViewInit() {
        this._ctx = this.canvas.nativeElement.getContext('2d');
        this._ctx.lineWidth = 3;
        this._ctx.lineJoin = 'round';
        this._ctx.lineCap = 'round';
        this._ctx.strokeStyle = '#000000';
    }

    onMouseDown(event) {
        this._ctx.beginPath();
        this._ctx.moveTo(this._mouse.x, this._mouse.y);
        this._ctx.fillRect(this._mouse.x, this._mouse.y, 1, 1);

        this._mouseIsDown = true;

        console.log(event);
    }

    onMouseMove(event) {
        this._mouse = this.getMousePosition(event);

        if (this._mouseIsDown) {
            this._ctx.lineTo(this._mouse.x, this._mouse.y);
            this._ctx.stroke();
        }
    }

    onMouseUp() {
        this._mouseIsDown = false;
    }

    onMouseOut() {
        this._mouseIsDown = false;
    }

    getMousePosition(event) {
        let rect = this._ctx.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    clearCanvas() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }
}
