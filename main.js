const TypeWriter = function(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

document.addEventListener('DOMContentLoaded', init);

//Type Method
TypeWriter.prototype.type = function() {
    //current index of word
    const currentWord = this.wordIndex % this.words.length;

    //get full text of current word
    const fullTxt = this.words[currentWord];

    //check if in the deleting state
    if(this.isDeleting) {
        //remove a character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        //add character
    }

    console.log(fullTxt);

    //insert txt into element
    this.txtElement.innerHTML = `<span class"txt">${this.txt}</span>`;

    //initial typespeed
    let typeSpeed = 100;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    //if word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
        //make a pause in the end
        typeSpeed = this.wait;
        //is deleting to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //move to the next word
        this.wordIndex++;
        //pause before typing
        typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed)
}

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    
    //init the typewriter

    new TypeWriter(txtElement, words, wait);
}