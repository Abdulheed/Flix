window.onload = function(){
 const counters = document.querySelectorAll('.count');
 counters.forEach((counter) => {
     counter.innerHTML ="0";

     const animCounter = () => {
         const target = +counter.getAttribute('data-target');
         const i = +counter.innerText;

         if(i < target){
             counter.innerText = i + 00000000000000000001;
             setTimeout(animCounter,1);
         }else{
             counter.innerHTML = target;
         }
     };
     animCounter();
 })
}