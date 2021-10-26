import quests from '../data/quest-data.js';

const mapLinks = document.getElementById('map-links');

for (let quest of quests){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    
    const icon = document.createElement('img');
    icon.src = `../assets/${quest.icon}`;

    a.append(icon);

    mapLinks.appendChild(a);
}
