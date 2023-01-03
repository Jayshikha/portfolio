document.querySelector('.cross').style.display = 'none';
document.querySelector('.ham').addEventListener("click", () => {
   document.querySelector('.sidebar').classList.toggle('sideBarGo');
   // if (document.querySelector('.sidebar').classList.contains('.sideBarGo'))
   //  {
   //    document.querySelector('.fa-bars').style.display = 'inline';
   //    // setTimeout(() => {
   //    //    document.querySelector('.cross').style.display = 'none';
         
   //    // }, 350);
   // }
   // else
   //  {
   //    document.querySelector('.fa-bars').style.display = 'none'
   //    //  setTimeout(() => {

      //    document.querySelector('.cross').style.display = 'inline'
      // }, 350);
   // }
})

