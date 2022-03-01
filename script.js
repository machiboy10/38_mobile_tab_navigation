// const btns = document.querySelectorAll("li");


// btns.forEach(btn => {
//     btn.addEventListener('click', activate);
//     btn.addEventListener('click', activate);
// })


// function activate(e){
//     e.target.classList.add('active');
// }

//get all pictures
const contents = document.querySelectorAll('.content');
//get all buttons
const btns = document.querySelectorAll('nav ul li');

btns.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        hideAllContents()
        hideAllItems()
        item.classList.add('active');
        contents[idx].classList.add('show');
    })




})

function hideAllContents(){
    contents.forEach(content => {
        content.classList.remove('show');
    })
}

function hideAllItems(){
    btns.forEach(btn => {
        btn.classList.remove('active');
    })
}