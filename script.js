const switchIcon = document.getElementById("switch-icon");
const toogle = document.getElementById("toggle")

        switchIcon.addEventListener("click",function(){
            toogle.classList.toggle("active")
        })

const learnButton= document.getElementById("learnmore-button")
const learnmoreArticle= document.querySelector(".learnmore")

        learnButton.addEventListener("click", function(){
            learnmoreArticle.classList.toggle("learnmore-active")
        })
