let x,y;
const in1 = document.getElementById(`in1`);
const in2 = document.getElementById(`in2`);
const num = document.getElementById(`num`);

document.getElementById(`btn`).onclick = function(){
    x = Number(in2.value);
    y = Number(in1.value);

    if(y > x){
        num.textContent = "Invalid input";
        return;
    }
    else if(in1.value == "" || in2.value == ""){
        num.textContent = "Invalid input";
        return;
    }
    else{
        num.textContent = Math.round((Math.random() * (y - x))) + x
    }
    
    
    
}