// Menu Bar Toggle
const menuToggle= (x) => { 
    let navbar = document.querySelector('.navbar');
    x.classList.toggle("change");
    navbar.classList.toggle("open");
}


// About Me Tabs
let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')

const opentab = (tabname) => {
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');

}