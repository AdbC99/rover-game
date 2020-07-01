import TextView from './TextView';

export default class RoverTextView extends TextView {
    constructor(rover)
    {
        super();
        this.Rover = rover;
    }

    Command()
    {

    }

    Display()
    {
        console.log(this.Rover.Coordinate.X + " " + this.Rover.Coordinate.Y + " " + this.Rover.Orientation);
    }
}