# Rover Game

A quick demonstration of the MVC design pattern used for a commandline game. This repository contains a few basic unit tests and has a test folder with some sample input files.

## Install 

Prerequesites: you must have node installed on your machine, node 10.18.1 was used for development, but v12.18.2 appears to work fine. See here for details:

https://nodejs.org/en/download/

Download the source code either through cloning this github repository or downloading it as a zip file and in the project roor type:

    npm install

## Play

To play the game, once it is installed, in the project root you can type:

    npm start ./test/example.txt

the example.txt file contains a sample instruction set and the above command should result in you seeing the final positions of the rovers on the command prompt:

    1 3 N
    5 1 E

## Unit Tests

A set of unit tests are provided and can be activated by typing:

    npm test





