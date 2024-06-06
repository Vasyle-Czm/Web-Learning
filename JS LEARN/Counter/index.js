let count = 0;

const add = document.getElementById('add');
const remove = document.getElementById('remove');
const reset = document.getElementById('reset');
const add10 = document.getElementById(`+10`);
const remove10 = document.getElementById(`-10`);
const add100 = document.getElementById(`+100`);
const remove100 = document.getElementById(`-100`);


add.onclick = function(){
    count++;
    document.getElementById(`num`).textContent = count;
}

remove.onclick = function(){
    count--;
    document.getElementById(`num`).textContent = count;
}

reset.onclick = function(){
    count = 0;
    document.getElementById(`num`).textContent = count;
}

add10.onclick = function(){
    count += 10;
    document.getElementById(`num`).textContent = count;
}

remove10.onclick = function(){
    count -= 10;
    document.getElementById(`num`).textContent = count;
}

add100.onclick = function(){
    count += 100;
    document.getElementById(`num`).textContent = count;
}

remove100.onclick = function(){
    count -= 100;
    document.getElementById(`num`).textContent = count;
}