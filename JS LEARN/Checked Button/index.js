const banana = document.getElementById(`banana`);
const mar = document.getElementById(`mar`);
const portocala = document.getElementById(`portocala`);
const kiwi = document.getElementById(`kiwi`);
const visa = document.getElementById(`Visa`);
const master = document.getElementById(`MasterCard`);
const paypal = document.getElementById(`PayPal`);
const output = document.getElementById(`output`);

let x;

document.getElementById("btn").onclick = function(){
    x = "Aleti ales sa platiti cu ";
    if(visa.checked)
        x = x.concat("visa");
    else if(master.checked)
        x = x.concat("master card");
    else
        x = x.concat("paypal");
    

    x = x.concat(` pentru urmatoarele producte:`);

    if(banana.checked)
        x = x.concat(' banana')
    if(mar.checked)
        x = x.concat(' mar')
    if(portocala.checked)
        x = x.concat(` portocala`);
    if(kiwi.checked)
        x = x.concat(` kiwi`);

    output.textContent = x;
}