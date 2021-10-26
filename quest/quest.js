import quests from '../data/quest-data.js';
import { findById } from '..utils';

const params = new URLSearchParams(window.location.search);
const questData = findById(params.get('id'), quests);




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
}

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
    
})