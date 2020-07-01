import RoverTextView from './RoverTextView';
import Rover from '../models/Rover';
import * as chai from 'chai';
const expect = chai.expect;

describe('rover text view', () => {
    it('check we can display rover position', () => {
        let rover = Rover.FromString('1 1 N');
        let view = new RoverTextView(rover);
        expect(view.Display()).to.be.equal('1 1 N');
    })
});