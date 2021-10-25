import { generateUser, setUser } from '../utils.js';

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