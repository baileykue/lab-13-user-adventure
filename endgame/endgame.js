import { loadProfile, getUser, isDead } from '../utils.js';
import outcome from '../data/endgame-data.js';

loadProfile();

const user = getUser();
const result = document.getElementById('result');

if (isDead(user)) {
    result.textContent = outcome[0].title;
} else { 
    result.textContent = outcome[1].title; 
}   


