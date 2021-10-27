const tavern = {
    id: 'tavern',
    title: 'The Local Tavern',
    map: {
        top: '45%',
        left: '10%'
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
            You have chosen wisely. This rest has done you good, and you add to your health.
        `,
        health: 25,
        dabloons: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Dragon Encounter',
    map: {
        top: '50%',
        left: '50%'
    },
    image: 'dragon-cliffs.jpg',
    icon: 'dragon.png',
    description: `
        You are on your way out of town and stop by a stream to get a drink of water. 
        You suddenly hear large wings flapping and look up to see a Dragon! He is also
        coming to the stream to wet his whistle. What do you do?
    `,
    choices: [{
        id: 'ride',
        description: 'Try and ride the Dragon',
        result: `
            This Dragon seems chill, so you climb the cliff and try to get onto his back. 
            You are not very sneaky, so he sees you, and flicks you away. You fall onto some
            rocks in the stream. 
        `,
        health: -25,
        dabloons: 0
    }, {
        id: 'fight',
        description: 'Fight that bish',
        result: `
            You die. Dude you can't fight a Dragon, you definitely died
            right away. He swallowed you whole.
        `,
        health: -75,
        dabloons: 0
    }, {
        id: 'vibe',
        description: 'Try and have a good chat with the Dragon, maybe befriend him',
        result: `
            The dragon appreciates having someone to talk to, he gives you three
            of his tears, which have healing powers.
        `,
        health: 15,
        dabloons: 0
    }, {
        id: 'run',
        description: 'Run away and hope no one sees you',
        result: `
            Well there's nothing wrong with just avoiding that situation. 
            You do you.
        `,
        health: 0,
        dabloons: 0
    }]
};

const pirates = {
    id: 'pirates',
    title: 'A Ship Of Pirates',
    map: {
        top: '14%',
        left: '88%'
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
        dabloons: 5
    }, {
        id: 'join',
        description: 'You Join the Crew',
        result: `
        You join the crew only to find you that your job is mopping the deck.
        The rest of the crew goes out to rob some guys and they come back with
        really cool stuff. They throw you some coin, but you're still jealous
        of all their cool new swag.  
        `,
        health: 0,
        dabloons: 25
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
    title: 'The Market',
    map: {
        top: '75%',
        left: '69%'
    },
    image: 'market.jpg',
    icon: 'market-vender.png',
    description: `
        You happen upon a market. Theres tons of cool stuff around. which
        booth do you choose to visit?
    `,
    choices: [{
        id: 'fruit',
        description: 'Get yourself some Fruit',
        result: `
            You got to eat some majestical fruit!
        `,
        health: 5,
        dabloons: -5
    }, {
        id: 'rum',
        description: 'Take a shot of Rum with the vendors',
        result: `
        Woo! You totally bonded with the vendors. But the Rum was strong and
        you can't seem to walk straight now. 
        `,
        health: -5,
        dabloons: -5
    }, {
        id: 'basket',
        description: 'Learn how to weave a basket',
        result: `
        You wove a totally dope basket. 
        `,
        health: 0,
        dabloons: -5
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    map: {
        top: '25%',
        left: '25%'
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
        dabloons: 30
    }, {
        id: 'gold',
        description: 'Miscellanious Gold Pieces',
        result: 'You manage to grab a ton of gold and escape the snake! Today is your day. Celebrate',
        health: 0,
        dabloons: 50
    }, {
        id: 'chest',
        description: 'A Treasure Chest',
        result: `You tried to carry this whole damn chest out with you and it was heavy, 
        the snake definitely attacked you, so you eventually had to drop the chest and leave with nothing.`,
        health: -25,
        dabloons: 0
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