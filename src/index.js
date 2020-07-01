import fs from 'fs';
import SquadController from './controllers/SquadController';
import RoverTextView from './views/RoverTextView'

if (process.argv.length < 3)
{
    console.error("Expected a filename as a commandline argument");
}

const filename = process.argv[2];
const instructions = fs.readFileSync(filename, 'utf8');

const squad = new SquadController(instructions, RoverTextView, false);
squad.doCommands();
squad.displayRovers();

