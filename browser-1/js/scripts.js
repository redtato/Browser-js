let thingsCont = document.querySelector('.things-cont');
let things = ['shoe ', 'chiken ', 'cow ', 'pc ', 'laptop ', 'pants ', 'shirt ', 'camera ', 'tree ', 'ant ', 'water ', 'candy ', 'bee ', 'earth ', 'sea ', 'dirt ', 'mouse ', 'keyboard ', 'desktop ', 'zoo ', 'phone '];
let thing = document.getElementsByTagName('li');

let ABC = things.sort();
console.log(ABC);

for(let i = 0; i < ABC.length; i++){
    let thing = document.createElement('li');
    thing.innerHTML = ABC[i];
    thing.classList.add('thing');
    thingsCont.appendChild(thing);
}


// when I write, the browser searches
function seek(txt){
    for(let i = 0; i < ABC.length; i++){
        thing[i].style.display = 'none';
    }
    for(let i = 0; i < ABC.length; i++){
        if(ABC[i].includes(txt)){
            thing[i].style.display = 'block';
        }
    }
}