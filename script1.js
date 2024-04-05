let navbar = document.querySelector('.navbar');

let searchform = document.querySelector('.search-form');

//document.querySelector('#search-btn').onclick = () =>{
 //   searchform.classList.toggle('active');
 //   navbar.classList.remove('active');
 //   favorite.classList.remove('active');
//}

let favorite = document.querySelector('.attractions-container');

document.querySelector('#favorite-btn').onclick = () =>{
    favorite.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    favorite.classList.remove('active');
}
