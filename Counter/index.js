var counter = document.querySelector(".counter");
var follower = document.querySelector("h1");
let count =1;
setInterval(() =>{
    if(count<1000){
        count++;
        counter.innerHTML = count;
    }
}, 1)

setTimeout(()=>{
    follower.innerHTML = "And many more... &#128526";
}, 4500)
