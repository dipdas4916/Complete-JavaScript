
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach( (b) => {
    buttons.onmousehover = function(){
        buttons.style.cursor = 'pointer';
    };
    b.addEventListener('click', function(e){
        
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'black':
                body.style.backgroundColor = '#212121';
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;
            case 'orange':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
                
        }
    })
})
