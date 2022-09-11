const btn = document.getElementById("more");
const info = document.getElementById("hidden");

btn.addEventListener("click", function(){
    info.classList.toggle("show");
    if(info.classList.contains("show")){
        btn.innerHTML = "Мәтінді жасыру";
    }
    Save(info);
});