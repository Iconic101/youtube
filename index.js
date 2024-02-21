let noTexts=["noo","sure no?","please k ","extra please","kasto k ",
,"kasto bhau khojeko"]


const yes = document.querySelector("#yes");
const no = document.querySelector("#no"); 
const link = document.querySelector("#link"); 


let noCount=0;
let len = noTexts.length

let width = 120;
let height = 40;
let font = 20
console.log(width)
no.addEventListener("click",(e)=>{
    noCount+=1;

        width*=1.2;
        height*=1.2;
        font*=1.2;
        yes.style.width=`${width}px`
        yes.style.height=`${height}px`
        link.style.fontSize=`${font}px`

    
    no.innerHTML=noTexts[noCount] || noTexts[len-1];
})

