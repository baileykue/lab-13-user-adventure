import quests from './data/quest-data.js';

export function generateUser(formData){
    return {
        completed: {},
        dabloons: 0,
        health: 50,
        name: formData.get('name'),
        type: formData.get('type')
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function findById(id, items){

    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function questScore(choiceObject, questId, userObject){
    userObject.health += choiceObject.health;
    userObject.dabloons += choiceObject.dabloons;
    userObject.completed[questId] = true;
}

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}

export function isDead(user) {
    return user.health <= 0;
}

export function loadProfile() {
    const userName = document.getElementById('user-name');
    const userIcon = document.getElementById('user-icon');
    const health = document.getElementById('health');
    const dabloons = document.getElementById('dabloon');
    const healthIcon = document.getElementById('health-icon');
    const dabloonIcon = document.getElementById('dabloon-icon');
    

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    userName.textContent = user.name;
    userIcon.src = '../assets/' + user.type + '.png';
    healthIcon.src = '../assets/healthcare.png';
    dabloonIcon.src = '../assets/money.png';
    dabloons.textContent = user.dabloons;

    if (isDead(user)) {
        health.textContent = 'you have died';
        dabloons.textContent = user.dabloons;
    }
    else {
        health.textContent = user.health;
    }

}

