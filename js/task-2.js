const btn  = document.querySelector("#number-generator")
const numElement  = document.querySelector("#num-wrapper")



function numberGenerator(low,heigh){
    btn.addEventListener("click",(e)=>{
        const random = low + Math.random() * (heigh - low)
        console.log(random);
        
        numElement.innerHTML = Math.trunc(random)
    })
}
numberGenerator(100,1000)
