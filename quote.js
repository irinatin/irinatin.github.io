document.addEventListener('DOMContentLoaded', () => {  

    const nerdButton = document.getElementById('nerdButton');
    const messageBox = document.getElementById('message');

    // nerdButton.addEventListener('click', (event) => {
    //     //const kanye = 'https://api.kanye.rest/?format=text';
    //     const chuckNerd = 'http://api.icndb.com/jokes/random?exclude=explicit&limitTo=nerdy';
    //     const quote = 'https://official-joke-api.appspot.com/random_joke';
        
    //     fetch(chuckNerd)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //        // const quoteResponse = data;
    //         //const chuckResponse = data.value.joke;

    //         messageBox.innerText = data.value.joke;
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });
    // });

    const quoteButtton = document.getElementById('quote');
    quoteButtton.addEventListener('click', (event) => {

        const quoteRandom = 'https://api.quotable.io/random';
        
        fetch(quoteRandom)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            messageBox.innerText = '"' + data.content + '"' + " - " + data.author;
           // messageBox.innerText = data.author;
        })
        .catch((err) => {
            console.error(err);
        });
    });

    // const randomButton = document.getElementById('randomButton');
    // randomButton.addEventListener('click', (event) => {
    //     const chuckRandom = 'http://api.icndb.com/jokes/random?exclude=explicit';

    //     fetch(chuckRandom)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         messageBox.innerText = data.value.joke;
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });
    // });


    

});