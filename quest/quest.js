import quests from '../data/quest-data.js';
import { findById, setUser, getUser, questScore } from '../utils.js';
import { loadProfile } from '../utils.js';

loadProfile();

const params = new URLSearchParams(window.location.search);
const questData = findById(params.get('id'), quests);

const title = document.getElementById('quest-title');
title.textContent = questData.title;

const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;

const descritption = document.getElementById('quest-description');
descritption.textContent = questData.description;

const questChoices = document.getElementById('quest-choices');

for (let choice of questData.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    label.append(input);
    questChoices.append(label);

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'Choose';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();

    
    const selected = document.querySelector('input[type="radio"]:checked');
    const choice = findById(selected.value, questData.choices);
    
    const user = getUser();
    console.log(user.health);

    questScore(choice, questData.id, user);

    setUser(user);
    
    console.log(user.health);
    loadProfile();

    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');

    const questResults = document.getElementById('results');
    const resultsP = document.createElement('p');
    resultsP.textContent = choice.result;
    const mapLink = document.createElement('a');
    mapLink.href = '../map';
    mapLink.textContent = 'Back To The Map';

    questResults.append(resultsP, mapLink);

    questResults.classList.remove('hidden');
});