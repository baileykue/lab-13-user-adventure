const tavern = {
    id: 'tavern',
    title: 'The Local Tavern',
    map: {
        top: '17px',
        left: '37px'
    },
    image: 'tavern.jpg',
    icon: 'table.png',
    description: `
        You enter the Tavern and it is full of local life, the 
        bartender greets you and asks what you want. What do you do?
    `,
    choices: [{
        id: 'drink',
        description: 'Order a drink',
        result: `
            You decide to have a drink, but get a little too sloppy, 
            and the locals mug you and take your money. 
        `,
        health: 0,
        dabloons: -25
    }, {
        id: 'fight',
        description: 'Get rowdy and start a fight with the biggest baddest guy at the bar',
        result: `
            You throw a punch at the guy, and it lands on his unflinching face. He 
            then takes out his knife and cuts off your finger. You struggle but are no match 
            for his brutal force. 
        `,
        health: -30,
        dabloons: 0
    }, {
        id: 'nap',
        description: 'Take a nap in the corner booth',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        health: +25,
        dabloons: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Dragon\'s Lair',
    map: {
        top: '50%',
        left: '50%'
    },
    image: 'dragon-cliffs.jpg',
    icon: 'dragon.png',
    description: `
        You enter the Dragon\'s Lair only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            something something
        `,
        health: 0,
        dabloons: 0
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            something something
        `,
        health: 0,
        dabloons: 0
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            something something
        `,
        health: -50,
        dabloons: 0
    }]
};

const pirates = {
    id: 'pirates',
    title: 'A Ship Of Pirates',
    map: {
        top: '25%',
        left: '45%'
    },
    image: 'pirate-ship.jpg',
    icon: 'ship.png',
    description: `
        You enter the ship to be confronted by a group of troll pirates. They seem friendly, but are all brandishing weapons.
        They ask you to join their crew. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            You get the feeling that if you agree to be part of the crew they're
            just not going to respect you. In fact, if you stay they might eat you. 
            You decide to off to stay for the day and help them fish. They shrug 
            and agree. In turn they give you an old ass coin you've never seen before.
        `,
        health: 0,
        dabloons: +5
    }, {
        id: 'join',
        description: 'You Join the Crew',
        result: `
        something something
        `,
        health: 0,
        dabloons: 0
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            something something
        `,
        health: 0,
        dabloons: 0
    }]
};

const market = {
    id: 'market',
    title: 'Trading Post',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'market.jpg',
    icon: 'market-vender.png',
    description: `
        there will be a market
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            something something
        `,
        health: 0,
        dabloons: 0
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
        something something
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
        something something
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    map: {
        top: '14%',
        left: '88%'
    },
    image: 'treasure-trove.jpg',
    icon: 'treasure-chest.png',
    description: `
        As you enter the quest chamber you notice hella treasure before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to grab something before you scram! What do you choose?
    `,
    choices: [{
        id: 'jewels',
        description: 'Rubies and Emeralds',
        result: `You stuffed your pockets and made off with a lil bit of loot. You 
        did end up cutting yourself on one of the jewels tho because they were sharp 
        and you are clumsy`,
        health: -5,
        dabloons: +30
    }, {
        id: 'gold',
        description: 'Miscellanious Gold Pieces',
        result: 'You manage to grab a ton of gold and escape the snake! Today is your day. Celebrate',
        hp: 0,
        gold: +50
    }, {
        id: 'chest',
        description: 'A Treasure Chest',
        result: `You tried to carry this whole damn chest out with you and it was heavy, 
        the snake definitely attacked you, so you eventually had to drop the chest and leave with nothing.`,
        hp: -25,
        gold: 0
    }]
};

const quests = [
    tavern,
    dragon,
    treasure,
    market,
    pirates
];

export default quests;