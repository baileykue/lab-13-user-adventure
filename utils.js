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