const pathName = window.location.pathname;

const pageName = pathName.split("/").pop();

if(pageName ==="index.html"){
    document.querySelector(".home").classList.add("activelink");
}
if(pageName ==="Starter.html"){
    document.querySelector(".barhtml").classList.add("activelink");
}
if(pageName ==="Starter.html"){
    document.querySelector(".diva").classList.add("activelink");
}
//microsoft word
    if(pageName ==="Lesson1.html"){
    document.querySelector(".barword").classList.add("activelink");
}
if(pageName ==="Lesson1.html"){
    document.querySelector(".divaword").classList.add("activelink");
}
//book1 english
if(pageName ==="Eng_Lesson1.html"){
    document.querySelector(".bareng").classList.add("activelink");
}
alert(pageName);
alert(pathName);