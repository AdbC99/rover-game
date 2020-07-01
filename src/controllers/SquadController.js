import RoverController from './RoverController';
import Commands from '../models/Commands';
import Rover from '../models/Rover';
import Plateau from '../models/Plateau';
import Coordinate from '../models/Coordinate';

export default class SquadController {
    constructor(instructions, view, logging = false)
    {
        this.Logging = logging;
        this.Instructions = instructions.split('\n');

        if (logging)
            console.log('Received Instructions ' + this.Instructions.length);

        if (this.Instructions.length < 1)
            throw new Error("Invalid Instructions, Too Short");

        this.Controllers = [];
        this.Commands = [];
        this.Views = [];
        this.Plateau = new Plateau(Coordinate.FromString(this.Instructions[0]))

        for (let i = 1; i < this.Instructions.length; i+=1)
        {
            if (this.Instructions[i].trim().length == 0)
                continue;
                
            if (this.Logging)
                console.log("Processing instruction: " + this.Instructions[i]);           

            let rover = Rover.FromString(this.Instructions[i]);
            let roverCommand = Commands.FromString(this.Instructions[i]);
            let roverController = new RoverController(rover, this.Plateau, logging);
            let roverView = new view(rover);

            this.Views.push(roverView);
            this.Controllers.push(roverController);
            this.Commands.push(roverCommand);
        }
    }

    doCommands()
    {
        for (let i = 0; i < this.Commands.length; i++)
        {
            if (this.Logging)
                console.log("Moving Rover: " + i);

            this.Controllers[i].doCommands(this.Commands[i]);
        }
    }

    displayRovers()
    {
        this.Views.forEach(view => {
            view.Display();
        })
    }
}