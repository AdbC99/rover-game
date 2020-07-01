export default class Commands {
    constructor(commands)
    {
        this.Commands = commands;

        for(let i = 0; i < this.Commands.length; i++)
        {
            if ((this.Commands[i] != 'L')&&(this.Commands[i] != 'R')&&(this.Commands[i] != 'M'))
                throw new Error("Invalid command " + this.Commands[i] + " in command string");
        }
    }

    static FromString(text)
    {
        var elements = text.split(' ');

        if (elements.length < 4)
            throw new Error("No command in command string: " + text);

        return new Commands(elements[3]);
    }
}