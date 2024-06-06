let b1 = document.getElementById(`b1`);
let b2 = document.getElementById(`b2`);
let b3 = document.getElementById(`b3`);
let b4 = document.getElementById(`b4`);
let b5 = document.getElementById(`b5`);
let b6 = document.getElementById(`b6`);
let b7 = document.getElementById(`b7`);
let b8 = document.getElementById(`b8`);
let b9 = document.getElementById(`b9`);
let b10 = document.getElementById(`b10`);
let b11 = document.getElementById(`b11`);
let b12 = document.getElementById(`b12`);
let b13 = document.getElementById(`b13`);
let b14 = document.getElementById(`b14`);
let b15 = document.getElementById(`b15`);
let b16 = document.getElementById(`b16`);
let b17 = document.getElementById(`b17`);
let b18 = document.getElementById(`b18`);
let b19 = document.getElementById(`b19`);
let b20 = document.getElementById(`b20`);
let b21 = document.getElementById(`b21`);
let b22 = document.getElementById(`b22`);
let b23 = document.getElementById(`b23`);
let b24 = document.getElementById(`b24`);
let b25 = document.getElementById(`b25`);

let b = [b1,b2,b3,b4,b5];

let j = 1;
let i = 1;

let word = "carne";
let myword = "";
let p = [0,0,0,0,0];
let k = 0;
let w = false;
let x = Math.round((Math.random() * 193));

let words = ['aburi', 'acasa', 'acces', 'aceea', 'aceia', 'acela', 'acele', 'acest', 'achit', 'acnee', 'acolo', 'acord', 'acrii', 'acrit', 'acris', 'acrul', 'acrut', 'activ', 'actor', 'actul', 'acuma', 'adaos', 'carne', 'canta', 'cafea', 'buget', 'ciuma', 'cizma', 'civil', 'ceapa', 'capra', 'caiet', 'caine', 'cablu', 'boboc', 'birou', 'balon', 'banal', 'bagaj', 'clasa', 'decor', 'drama', 'eroic', 'evada', 'etapa', 'exces', 'fizic', 'flora', 'fauna', 'flota', 'fluid', 'firav', 'fatal', 'dulce', 'enorm', 'dulce', 'deces', 'decis', 'elice', 'ecran', 'foaie', 'folos', 'forma', 'front', 'fruct', 'fugar', 'fular', 'frica', 'funie', 'furca', 'garaj', 'garda', 'gaura', 'gazda', 'geniu', 'grabi', 'grajd', 'greoi', 'haina', 'hamal', 'hrana', 'iarba', 'iarna', 'ideal', 'imens', 'imita', 'impar', 'intim', 'intra', 'izola', 'joaca','lacom', 'lalea', 'latin', 'liber', 'liceu', 'viceu', 'logic', 'loial', 'lucid', 'luciu', 'magic', 'lupta', 'manie', 'manta', 'marfa', 'masca', 'maree', 'maxim', 'milos', 'minim', 'minte', 'moral', 'mulge', 'neted', 'nimic', 'nebun', 'nisip', 'oaste', 'oferi', 'ostil', 'pahar', 'panou', 'parte', 'patru', 'perna', 'perla', 'piele', 'piesa', 'pilda', 'pilot', 'pirat', 'potop', 'presa', 'print', 'rebel', 'relua', 'reper', 'rigid', 'ruina', 'roata', 'roade', 'robot', 'roman', 'rosti', 'rural', 'sabie', 'salam', 'satul', 'scaun', 'scrie', 'scund', 'scurt', 'secol', 'seism', 'sigur', 'soare', 'sonor', 'strop', 'tavan', 'timid', 'tiran', 'toiag', 'trist', 'turma', 'tunel', 'tunde', 'trece', 'teren', 'umbla', 'umbre', 'uzina', 'unghi', 'valid', 'vechi', 'venit', 'verde', 'vesel', 'virus', 'vinde', 'vraja', 'vreme', 'vulpe', 'vesta', 'vapor', 'vagon', 'vecie', 'volum', 'xerox', 'zahar', 'zodie', 'zebra', 'zarva'];

word = words[x];

word = "buyer";

console.log(word);

function color(){
    if(word.includes(myword.charAt(0)))
        b[0].style.backgroundColor = `yellow`;
    if(word.includes(myword.charAt(1)) && !word.includes(word.charAt(1)))
        b[1].style.backgroundColor = `yellow`;
    if(word.includes(myword.charAt(2)) && !word.includes(word.charAt(2)))
        b[2].style.backgroundColor = `yellow`;
    if(word.includes(myword.charAt(3)) && !word.includes(word.charAt(3)))
        b[3].style.backgroundColor = `yellow`;
    if(word.includes(myword.charAt(4)) && !word.includes(word.charAt(4)))
        b[4].style.backgroundColor = `yellow`;



    if(word.charAt(0) == myword.charAt(0)){
        b[0].style.backgroundColor = `green`;
        p[0] = 1;
    }
    if(word.charAt(1) == myword.charAt(1))
        b[1].style.backgroundColor = `green`;
    if(word.charAt(2) == myword.charAt(2))
        b[2].style.backgroundColor = `green`;
    if(word.charAt(3) == myword.charAt(3))
        b[3].style.backgroundColor = `green`;
    if(word.charAt(4) == myword.charAt(4))
        b[4].style.backgroundColor = `green`;
}

function win(){
    k=0;
    for(let i=0;i<5;i++){
        if(b[i].style.backgroundColor == `green`){
            k++;
        }
        else{
            break;
        }
    }

    if(k == 5){
        document.getElementById(`mess`).style.color = `green`;
        document.getElementById(`mess`).textContent = `Ai castigat`;
        w = true;
        return true;
    }
    return false;
}

document.addEventListener("keydown" ,function(event){
    if(w == false){
        const isAlphaNumeric = /^[a-zA-Z0-9]$/;

        if(i>1 && event.key === "Backspace"){
            console.log(event.key);
            
            switch(i-1){
                case 1:b[0].textContent = ""; myword = myword.slice(0,-1); break;
                case 2:b[1].textContent = ""; myword = myword.slice(0,-1); break;
                case 3:b[2].textContent = ""; myword = myword.slice(0,-1); break;
                case 4:b[3].textContent = ""; myword = myword.slice(0,-1); break;
                case 5:b[4].textContent = ""; myword = myword.slice(0,-1); break;
            }
            i--;
            j--;
        }
        else{
            if(isAlphaNumeric.test(event.key)){
                switch(i){
                    case 1:b[0].textContent = event.key; myword += event.key; i++; j++; break;
                    case 2:b[1].textContent = event.key; myword += event.key; i++; j++; break;
                    case 3:b[2].textContent = event.key; myword += event.key; i++; j++; break;
                    case 4:b[3].textContent = event.key; myword += event.key; i++; j++; break;
                    case 5:b[4].textContent = event.key; myword += event.key; i++; j++; break;
                }
            }
            
        }

        if(event.key === "Enter" && j == 6){
            i=1;
            color();
            win();
            b = [b6,b7,b8,b9,b10];
            console.log(myword);
            myword = "";

            

        }
        else if(event.key === "Enter" && j == 11){
            i=1;
            color();
            win();
            b = [b11,b12,b13,b14,b15];
            console.log(myword);
            myword = "";

            
        }
        else if(event.key === "Enter" && j == 16){
            i = 1;
            color();
            win();
            b = [b16,b17,b18,b19,b20];
            console.log(myword);
            myword = "";
        }
        else if(event.key === "Enter" && j == 21){
            i = 1;
            color();
            win();
            b = [b21,b22,b23,b24,b25];
            console.log(myword);
            myword = "";
        }
        else if(event.key === "Enter" && j == 26){
            i = 1;
            color();
            if(!win()){
                for(let i=0;i<5;i++){
                    if(b[i].style.backgroundColor == `green`){
                        k++;
                    }
                    else{
                        k = 0;
                        break;
                    }
                }
                if(k != 5){
                    document.getElementById(`mess`).style.color = `red`;
                    document.getElementById(`mess`).textContent = `Ai pierdut`;
                    w = true;
                }
            }
            
        }
    }
});
