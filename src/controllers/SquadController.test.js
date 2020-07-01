import SquadController from './SquadController';
import RoverTextView from '../views/RoverTextView'
import * as chai from 'chai';
const expect = chai.expect;

describe('squad controller', () => {
    it('perform example test', () => {
        const instructions = "5 5\n1 2 N LMLMLMLMM\n3 3 E MMRMMRMRRM"
        const squad = new SquadController(instructions, RoverTextView, false);
        squad.doCommands();
        let output = squad.displayRovers();

        expect(output.length).to.be.equal(2);
        expect(output[0]).to.be.equal("1 3 N");
        expect(output[1]).to.be.equal("5 1 E");
    });
});