import RoverController from './RoverController';
import Commands from '../models/Commands';
import Coordinate from '../models/Coordinate';
import Rover from '../models/Rover';
import Plateau from '../models/Plateau';
import * as chai from 'chai';
const expect = chai.expect;

describe('rover controller', () => {
    it('check we can rotate the rover', () => {

        let plateau = new Plateau(Coordinate.FromString("3 3"))
        let rover = new Rover(Coordinate.FromString("1 1"), "N");
        let roverController = new RoverController(rover, plateau, false);

        expect(rover.Orientation).to.be.equal("N");
        roverController.doRotate("L");
        expect(rover.Orientation).to.be.equal("W");
        roverController.doRotate("L");
        expect(rover.Orientation).to.be.equal("S");
        roverController.doRotate("L");
        expect(rover.Orientation).to.be.equal("E");
        roverController.doRotate("L");
        expect(rover.Orientation).to.be.equal("N");
        roverController.doRotate("R");
        expect(rover.Orientation).to.be.equal("E");
        roverController.doRotate("R");
        expect(rover.Orientation).to.be.equal("S");
        roverController.doRotate("R");
        expect(rover.Orientation).to.be.equal("W");
        roverController.doRotate("R");
        expect(rover.Orientation).to.be.equal("N");
    });

    it('check we can move the rover', () => {
        let plateau = new Plateau(Coordinate.FromString("9 9"))
        let rover = new Rover(Coordinate.FromString("1 1"), "N");
        let roverController = new RoverController(rover, plateau, false);

        expect(rover.Coordinate.Y).to.be.equal(1);
        roverController.doMove();
        expect(rover.Coordinate.Y).to.be.equal(2);
    });

    it('check the rover will not move off the edge', () => {
        let plateau = new Plateau(Coordinate.FromString("1 1"))
        let rover = new Rover(Coordinate.FromString("1 1"), "N");
        let roverController = new RoverController(rover, plateau, false);

        expect(rover.Coordinate.Y).to.be.equal(1);
        roverController.doMove();
        expect(rover.Coordinate.Y).to.be.equal(1);
    });

    it('check the rover can handle a set of commands', () => {

        let plateau = new Plateau(Coordinate.FromString("9 9"))
        let rover = new Rover(Coordinate.FromString("1 1"), "N");
        let roverController = new RoverController(rover, plateau, false);
        let commands = Commands.FromString('1 1 N MMML')

        expect(rover.Orientation).to.be.equal("N");
        roverController.doCommands(commands);
        expect(rover.Orientation).to.be.equal("W");
        expect(rover.Coordinate.Y).to.be.equal(4);
    });
});