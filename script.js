let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
//inside the loop:

  
while (i >=0){    

    const para = document.createElement('p');

    if(i ===10){
                
    para.textContent = `Countdown starting!`;
   
    }
     else if( i=== 0){
       
        para.textContent = `💥💥Blast Off!!💥💥`;
       
    }
    
    else{
              
        para.textContent = `${i}`;
       }
    output.appendChild(para);
   i--;
}



// end of loop