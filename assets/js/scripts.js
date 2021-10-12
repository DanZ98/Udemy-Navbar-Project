// Retrieving classes
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Adding click event 
navToggle.addEventListener('click', function(){

    links.classList.toggle('show-links');

    // Another way of executing toggle effect
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }else {
    //     links.classList.add('show-links');
    // }

});

