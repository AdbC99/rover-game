import Coordinate from './Coordinate';

export default class Plateau {
    constructor(upperRight)
    {
        this.Right = parseInt(upperRight.X);
        this.Top = parseInt(upperRight.Y);
        this.Left = 0;
        this.Bottom = 0;
    }

    isOnPlateau(coordinate)
    {
        if (coordinate.X < this.Left)
            return false;
        if (coordinate.X > this.Right)
            return false;
        if (coordinate.Y < this.Bottom)
            return false;
        if (coordinate.Y > this.Top)
            return false;
            
        return true;
    }
}