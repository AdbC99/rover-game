export default class Coordinate {
    constructor(x,y)
    {
        this.X = x;
        this.Y = y;
    }

    static FromString(text)
    {
        var elements = text.split(' ');

        if (elements.length > 1)
        {
            return new Coordinate(parseInt(elements[0]), parseInt(elements[1]));
        }
        else
            throw new Error("Invalid Coordinate String");
    }
}