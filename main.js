const form = document.querySelector('form');
const button = document.querySelector('input[type="submit"]');
const text = document.querySelector('#text');
const error = document.querySelector('.error');
const previous = document.querySelector('.previous');

form.addEventListener('submit', function(e) {
     e.preventDefault();
   
    if (text.value === ""){
        error.innerText = 'Please Make A Wish'
        setTimeout(function(){
            error.remove()
            }, 2000);
    } else {
        previous.innerText = text.value;
        text.value = ''
    }

})
