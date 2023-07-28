document.querySelector('.cross').style.display = 'none';
document.querySelector('.ham').addEventListener("click", () => {
   document.querySelector('.sidebar').classList.toggle('sideBarGo');
   
})



document.querySelector('#submit').addEventListener("click",()=>{
 let userName = document.getElementById("Inputetail");
let userNum = document.getElementById("Inputnumber");
let userNameVal = userName.value;
let userNumVal = userNum.value;

   let conf1 = confirm(`Your Email is ${userNameVal}`);
   let conf2 = confirm(`Your Contect Number is ${userNumVal}`);
   
   
   if (conf1 == true && conf2 == true ){
    alert("We Got Your Message Successfully :)")
     
  }
   
})
