import quests from '../data/quest-data.js';

const mapLinks = document.getElementById('map-links');


if (URLSearchParams.health <= 0){
    window.location.replace('../gameOver'); 
}


for (let quest of quests){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    
    const icon = document.createElement('img');
    icon.src = `../assets/${quest.icon}`;
    icon.classList.add('icons');
  
  // trying to add positioning to icon links on the map
//     icon.style = quest.map;
//    console.log(quest.map);

    a.append(icon);

    mapLinks.appendChild(a);
}

// want to display greyed out icon if the user has already been
// to the think, perhaps do this like julie did
// but instead of creating spans create icons and then style them as
// grey in css 

