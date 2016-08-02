import {Component} from '@angular/core';

@Component({
    template: '<div class="main">This is the actual canvas</div>',
    styles: [`
        .main {
            background-color: #000000;
            color: #FFFFFF;
            width: 100%
            height: 100%
        }
    `],
})
export class CanvasPadComponent {
}