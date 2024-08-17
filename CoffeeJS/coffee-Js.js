let navbar = document.querySelector('.navBar');
document.querySelector('#btn-bars').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');

}

let searchform = document.querySelector('.search-Form');
document.querySelector('#btn-Search').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    
}


let cartItem = document.querySelector('.cart-items-Container');
document.querySelector('#btn-Cart').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');

}