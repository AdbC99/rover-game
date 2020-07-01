import Plateau from '../models/Plateau';
import Rover from '../models/Rover';
import Coordinate from '../models/Coordinate';

export default class RoverController {
    constructor(rover, plateau, logging = false) {
        this.Rover = rover;
        this.Plateau = plateau;
        this.Logging = logging;
    }

    doCommands(commands)
    {
        for (let i = 0; i < commands.Commands.length; i++)
        {
            if (this.Logging)
            {
                console.log("Rover: Command: " + commands.Commands[i]);
                console.log('Rover: Start', this.Rover);
            }

            switch (commands.Commands[i]) {
                case 'R':
                case 'L':
                    this.doRotate(commands.Commands[i])
                    break;
                case 'M':
                    this.doMove();
                    break;
                default:
                    break;
            }

            if (this.Logging)
                console.log('Rover: End:', this.Rover);
        }
    }

    forecastMove()
    {
        let c = new Coordinate(this.Rover.Coordinate.X, this.Rover.Coordinate.Y)

        switch (this.Rover.Orientation) {
            case 'N':
                c.Y += 1;
                break;
            case 'S':
                c.Y -= 1;
                break;
            case 'E':
                c.X += 1;
                break;
            case 'W':
                c.X -= 1;
                break;
            default:
                break;
        }

        if (this.Plateau.isOnPlateau(c))
            return c;
        else
        {
            console.error("Error: Rover attempted to move off the edge of the plateau");
            return this.Rover.Coordinate;
        }
    }

    doMove()
    {
        this.Rover.Coordinate = this.forecastMove();
    }

    doRotate(direction)
    {       
        switch (this.Rover.Orientation) {
            case 'N':
                if (direction == 'L')
                    this.Rover.Orientation = 'W';
                if (direction == 'R')
                    this.Rover.Orientation = 'E';    
                break;
            case 'S':
                if (direction == 'L')
                    this.Rover.Orientation = 'E';
                if (direction == 'R')
                    this.Rover.Orientation = 'W'; 
                break;
            case 'E':
                if (direction == 'L')
                    this.Rover.Orientation = 'N';
                if (direction == 'R')
                    this.Rover.Orientation = 'S'; 
                break;
            case 'W':
                if (direction == 'L')
                    this.Rover.Orientation = 'S';
                if (direction == 'R')
                    this.Rover.Orientation = 'N'; 
                break;
            default:
                break;
        }
    }
}