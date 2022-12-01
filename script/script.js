let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for(let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.add('hide');
            itemBox[k].classList.remove('active');

            if(itemBox[k].getAttribute('data-item') == dataFilter 
                || dataFilter == "todos") { 
                itemBox[k].classList.add('active');
                itemBox[k].classList.remove('hide');
            }
        }

    })
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
