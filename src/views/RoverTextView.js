export default class RoverTextView {
    constructor(rover)
    {
        this.Rover = rover;
    }

    Display()
    {
        let output = this.Rover.Coordinate.X + " " + this.Rover.Coordinate.Y + " " + this.Rover.Orientation
        console.log(output);
        return output; // for unit tests
    }
}