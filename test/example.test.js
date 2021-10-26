import { generateUser, setUser, getUser, questScore } from '../utils.js';

const test = QUnit.test;

test('generateUser should return a userObject', (expect) => {
    const expected = { 
        completed: {},
        dabloons: 0,
        health: 50,
        name: 'bailey',
        type: 'elf',
    };

    const formData = new FormData();
    formData.set('name', 'bailey');
    formData.set('type', 'elf');
    
    const actual = generateUser(formData);

    expect.deepEqual(actual, expected);
});

test('setUser should save user to localStorage', (expect)=>{
    localStorage.removeItem('USER');

    const userObject = { 
        completed: {},
        dabloons: 0,
        health: 50,
        name: 'bailey',
        type: 'elf',
    };

    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, userObject);
});

test('getUser should return the user object from localStorage', (expect)=>{
    const userObject = { 
        completed: {},
        dabloons: 0,
        health: 50,
        name: 'bailey',
        type: 'elf',
    };

    setUser(userObject);

    const actual = getUser();

    expect.deepEqual(actual, userObject);
});

test('questScore should update dabloons, health, and completed on the userObject', (expect)=>{
    const userObject = { 
        completed: {},
        dabloons: 0,
        health: 50,
        name: 'bailey',
        type: 'elf',
    };

    const choiceObject = {
        id: 'fight',
        description: 'Get rowdy and start a fight with the biggest baddest guy at the bar',
        result: `
            You throw a punch at the guy, and it lands on his unflinching face. He 
            then takes out his knife and cuts off your finger. You struggle but are no match 
            for his brutal force. 
        `,
        health: -30,
        dabloons: 25
    };

    const questId = 'tavern';

    questScore(choiceObject, questId, userObject);

    expect.equal(userObject.health, 20);
    expect.equal(userObject.dabloons, 25);
    expect.equal(userObject.completed[questId], true);

});