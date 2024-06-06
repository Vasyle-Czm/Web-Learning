const c = document.getElementById(`c`);
const result = document.getElementById(`result`);

const screen = document.getElementById(`screen`);

let op = "";
let r = false;

function append(num){
    if(op == "0" || screen.textContent == "0" || screen.textContent == "Error" || r == true){
        op = num;
        screen.textContent = num;
        r = false;
    }
    else{
        screen.textContent += num;
        op+=num;    
    }
    
}

result.onclick = function(){
    try{
        r = true;
        screen.textContent = eval(op);
        op = ""
    }
    catch(error){
        screen.textContent = "Error";
    }
}

c.onclick = function(){
    op = "0";
    screen.textContent = op;
}