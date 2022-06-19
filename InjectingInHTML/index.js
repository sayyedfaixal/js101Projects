const courses = [
    {
        name: "MERN",
        price : 3,
    },
    {
        name : "MEAN",
        price : 2.5,
    },
    {
        name : "C",
        price : 2,
    },
    {
        name : "C++",
        price : 2.3,
    },
    {
        name : "JAVA",
        price : 4,
    },
    {
        name : "Python",
        price : 5,
    },
    {
        name : "Flask",
        price : 4.5,
    },
];


function getCourse(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( (c) => {
        // What does createELement do is it creates a <></>
        const li = document.createElement("li");
        // <li></li>
        li.classList.add("list-group-item");
        li.classList.add("bg-warning");
        // <li class = "list-group-item"></li>
        const name = document.createTextNode(c.name);
        li.appendChild(name);
        // after running above line it will do something <li class = "list-hroup-item">some name goes here</li>


        const span = document.createElement("span");
        // <span></span>
        span.classList.add("right");
        // <span class = "right"></span>
        const price = document.createTextNode("$ "+c.price);
        span.appendChild(price);
        // <span class = "right">some price goes here</span>

        li.appendChild(span);
        ul.appendChild(li);
        //making something like this
        // <ul class="list-group">
        //     <li class="list-group-item bg-warning"> JAVASCRIPT <span class="right">$ 2.8</span> </li>
        // </ul>
    });
}
getCourse();

const b1 = document.querySelector(".sort-btn");
b1.addEventListener("click", ()=>{
    courses.sort((a,b)=>a.price - b.price);
    getCourse();
});
const b2 = document.querySelector(".rsort-btn");
b2.addEventListener("click", ()=>{
    courses.sort((a,b)=>b.price - a.price);
    getCourse();
});