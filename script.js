let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
//inside the loop:



for(let i = 10; i>= 0; i--){
      
    
    if(i ===10){
        const para = document.createElement('p');
    para.textContent = `Countdown starting!`;
    output.appendChild(para);
    }
     else if( i=== 0){
        const para = document.createElement('p');
        para.textContent = `💥💥Blast Off!!💥💥`;
        output.appendChild(para);
    }
    else{
        
        const para = document.createElement('p');
        para.textContent = `${i}`;
        output.appendChild(para);
        
    }

}
// end of loop