export class CanvasService {
    getCanvases() {
        return [
        {
            id: 1,
            description: 'This Canvas has drawings of bunnies',
            imageUrl: 'http://lorempixel.com/100/100/people?1'
        },
        {
            id: 2,
            description: 'This one has drawings of planes',
            imageUrl: 'http://lorempixel.com/100/100/people?2'
        },
        {
            id: 3,
            description: 'This is really bad',
            imageUrl: 'http://lorempixel.com/100/100/people?3'
        }];
    }
}