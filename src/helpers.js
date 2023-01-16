

function choice (items){
let randomFruit = items[Math.floor(Math.random() * items.length)];
return randomFruit;
}

function remove (items, item){
let fruits = items.pop(item);
    return fruits ;

}

export {choice, remove}