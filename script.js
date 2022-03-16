const progress = document.getElementById('progress') /*progress line*/ 
const prev = document.getElementById('prev') /*btn*/ 
const next = document.getElementById('next') /*btn*/ 
const circles = document.querySelectorAll('.circle') /*since there are more than one circle we will use the queryselectorall and call it by class*/

let currentActive = 1  /*acts like an index. will represent whichever one is active. set to 1 by default*/ 

next.addEventListener('click', () => {  
   currentActive++                      
                                 
if(currentActive > circles.length) {
    currentActive = circles.length

    update()
}
})   

prev.addEventListener('click', () => {  
    currentActive--                      
                                  
 if(currentActive < 1) {
     currentActive = 1

     update()
 }
 })   

 function update () {
     
 }