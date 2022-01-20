const Btn =document.querySelector('.btn1');
const InPut=document.getElementById('email');
const Container = document.querySelector('.container');



Btn.onclick = function() {  
  let Value = InPut.value;
   Container.classList.add('active');
   document.querySelector('.box-page').innerHTML="We sent a confirmation link to: "+Value;
   }

 document.querySelector('.icon1').addEventListener('click',function(){
  Container.classList.remove('active');
 }) 
