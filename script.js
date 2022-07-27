function countDown(){






let output = document.querySelector('.output');
output.innerHTML = '';

 let i = 10;

 while(i>=0){

    const para = document.createElement('p');
    
    if(i ===10){
        para.textContent = 'Starting countdown in \n 10';
    }
    else if(i === 0){
        para.textContent = "🎆🎇✨🎇💥💥💥 Blast off!! 🎆🎇✨🎇💥💥💥";
    }else{
        para.textContent= `>>>>>>>: ${i}`;
    }
output.appendChild(para);
i--;

 }
// 
// para.textContent = ;
// output.appendChild(para);


 




}

let btn = document.querySelector('.button');
 btn.onclick= countDown;