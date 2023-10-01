

// function eventfunction(){
//     console.log('i have clicked');
// }
// document.addEventListener('click',eventfunction);

// document.removeEventListener('click',eventfunction);


// let link = document.querySelectorAll('a');
// let thirdlink= link[2];

// thirdlink.addEventListener('click', function(event){
//     event.preventDefault();console.log('maja aya, acha laga');
// });

let mydiv=document.createElement('div');
function parastatus(event){
    console.log(' para'+event.target.textContent);
}
mydiv.addEventListener('click', parastatus);
for(let i=1;i<=100;i++){
    let newElement=document.createElement('p')
    newElement.textContent='this is para'+i;
    
    mydiv.appendChild(newElement);
}
document.body.appendChild(mydiv);
