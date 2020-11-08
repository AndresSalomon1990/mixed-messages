function generateRandomNumber(num) {
    // generates a random integer number between 0 and num - 1
    return Math.floor(Math.random() * num);
};

const artists = {
    name: ["Michael", "Freddie", "Lady", "Bob", "Wolfgang"],
    lastName: ["Jackson", "Mercury", "Gaga", "Marley", "Mozart"],
    musicGenre: ["Pop", "Rock", "Pop", "Reggae", "Classic"]
};

// store the mixedArtist to log to the console
let mixedArtist = [];

// iterate over the object "artists"
for(let prop in artists) {
    let optionIdx = generateRandomNumber(artists[prop].length);

    switch(prop) {
        case 'name':
            mixedArtist.push(`Your name is: "${artists[prop][optionIdx]}".`)
          break;
        case 'lastName':
            mixedArtist.push(`Your last name is: "${artists[prop][optionIdx]}".`)
          break;
        case 'musicGenre':
            mixedArtist.push(`You play: "${artists[prop][optionIdx]}".`)
          break;
        default:
            mixedArtist.push('There is not enough info.');
      };
};

function formatArtist(wisdom) {
    const formatted = mixedArtist.join('\n')
    console.log(formatted)
};
  
formatArtist(mixedArtist);