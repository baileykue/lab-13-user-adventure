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