import quests from '../data/quest-data.js';
import { hasCompletedAllQuests, loadProfile, getUser, isDead } from '../utils.js';

loadProfile();

const mapLinks = document.getElementById('map-links');

const user = getUser();

if (isDead(user) || hasCompletedAllQuests(user)){
    window.location.replace('../endgame'); 
} 

for (let quest of quests){
    if (user.completed[quest.id]){
        displayGreyIcon(quest); 
    } else { 
        displayLinkIcon(quest);
    }
}

function displayLinkIcon(quest){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    
    const icon = document.createElement('img');
    icon.src = `../assets/${quest.icon}`;
    icon.classList.add('icons');
    
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;
    
    a.append(icon);
    
    mapLinks.appendChild(a);

}

function displayGreyIcon(quest){
    const a = document.createElement('a');
    
    const icon = document.createElement('img');
    icon.src = `../assets/${quest.icon}`;
    icon.classList.add('grey');

    a.style.top = quest.map.top;
    a.style.left = quest.map.left;

    a.append(icon);

    mapLinks.append(a);
}

