import Coordinate from './Coordinate';

export default class Rover {
    constructor(coordinate, orientation)
    {
        this.Coordinate = coordinate;
        this.Orientation = orientation;
    }

    static FromString(text)
    {
        var elements = text.split(' ');

        if (elements.length > 2)
        {
            return new Rover(new Coordinate(parseInt(elements[0]), parseInt(elements[1])), elements[2]);
        }
        else
            throw new Error("Invalid Rover Starting String: " + elements);
    }
}