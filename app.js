const cardContent1 = document.querySelector(".card-content-1");
const cardContent2 = document.querySelector(".card-content-2");
const submitBtn = document.querySelector(".submit-btn");
const user_choice = document.querySelector(".user_choice");
const chosenBtn = document.querySelectorAll(".chosen-btn");
let score = 1

submitBtn.addEventListener("click", onSubmit);
chosenBtn.forEach(btn =>{
   btn.addEventListener("click", activeFucntion)
})

function onSubmit(){
   cardContent1.classList.add("hide")
   cardContent2.classList.remove("hide")
   user_choice.textContent = score;
}

function activeFucntion(event){
   chosenBtn.forEach(btn => {
      btn.classList.remove("active")
   })

   if(event.target.classList.contains("chosen-btn")){
      event.target.classList.add("active")
   } else {
      event.target.parentElement.classList.add("active")
   }

   score = event.target.textContent;
}