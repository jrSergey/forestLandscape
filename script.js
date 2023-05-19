const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// change toggle-btn navbar

const menu = document.querySelector( '.icon-menu' );
const navbar = document.querySelector( '.navigation' );

menu.addEventListener( 'click', function(e) {
    if( menu.classList.contains( 'menu-outline' ) ) {
        menu.classList.remove( 'menu-outline' );
        /* menu.classList.add( 'close' ); */
        navbar.classList.add( 'slide' );
    } else {
        /* menu.classList.remove( 'close' ); */
        menu.classList.add( 'menu-outline' );
        navbar.classList.remove( 'slide' );
    }
    e.preventDefault();
} )