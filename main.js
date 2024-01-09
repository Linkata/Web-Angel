let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow',window.scrollY>0);
});

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    });

    var swiper = new Swiper(".feedback-container", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
        });     

//swiper
var swiper= new Swiper(".coming-container",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints:{
        0:{
            slidesPerView:2,
        },
        568: {
            slidesPerView:3,
        },
        768: {
            slidesPerView:4,
        },
        968:{
            slidesPerView:5,
        },
    },
});    


let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');


let listProducts = [
    {
        id: 1,
        name: 'Mua he tron trinh',
        image: 'img/project1.jpg',
        link:'Muahetrontrinh.html',
        nature: {
            type: 'Picture Book'
        }
    },
    {
        id: 2,
        name: 'Chuyen tau xanh',
        image: 'img/project2.jpg',
        link:'Muahetrontrinh.html',
        nature: {
            type: 'Music Video'
        }
    },
    {
        id: 3,
        name: 'Limebocx',
        image: 'img/project3.jpg',
        link:'Muahetrontrinh.html',
        nature: {
            type: 'Music Video'
        }
    },
    {
        id: 4,
        name: 'SaiGon Book',
        image: 'img/project4.jpg',
        link:'Muahetrontrinh.html',
        nature: {
            type: 'Picture Book'
        }
    },
    {
        id: 5,
        name: 'HoaVan Dai Viet',
        image: 'img/project5.jpg',
        link:'Muahetrontrinh.html',
        nature: {
            type: 'Picture Book'
        }
    },
    {
        id: 6,
        name: 'Human of Ha Noi',
        image: 'img/project6.jpg',
        link:'Muahetrontrinh.html',
        nature: {
            type: 'Picture Book'
        }
    },
    {
        id: 7,
        name: 'Matngot chet meo',
        image: 'img/project7.jpg',
        link:'Muahetrontrinh.html',
        nature: {
            type: 'Comic'
        }
    },
    {
        id: 8,
        name: 'Toive',
        image: 'img/project8.jpg',
        link:'Muahetrontrinh.html',
        nature: {
            type: 'Picture Book'
        }
    },
    {
        id: 9,
        name: 'Truyen cuc ngan',
        image: 'img/project9.jpg',
        link:'Muahetrontrinh.html',
        nature: {
            type: 'Comic'
        }
    },
];

let productFilter = listProducts;
    showProduct(productFilter);

    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // create name product
            let newTitleWrapper = document.createElement('div');
            newTitleWrapper.classList.add('title');
            
            let newTitle = document.createElement('a');
            newTitle.href = item.link;
            newTitle.textContent = item.name;
            newTitleWrapper.appendChild(newTitle);
            newItem.appendChild(newTitleWrapper);    
            newItem.appendChild(newTitle);
            //create category
            let newCategory = document.createElement('div');
            newCategory.classList.add('category');
            newCategory.innerText = item.nature.type;
            newItem.appendChild(newCategory);



            list.appendChild(newItem);
        });
    }
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        // check name
        if(valueFilter.name.value != ''){
        if(!item.name.includes(valueFilter.name.value)){
            return false;
            }
        }
        return true;
    })
    showProduct(productFilter);
})    

const startBtn = document.querySelector("#startBtn"),
    endBtn = document.querySelector("#endBtn"),
    prevNext = document.querySelectorAll(".prevNext"),
    numbers = document.querySelectorAll(".link");
// Setting an initial step
let currentStep = 0;
// Function to update the button states
const updateBtn = () => {
  // If we are at the last step
    if (currentStep === 4) {
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    } else if (currentStep === 0) {
    // If we are at the first step
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    } else {
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[0].disabled = false;
    }
};
// Add event listeners to the number links
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        // Set the current step to the clicked number link
        currentStep = numIndex;
        // Remove the "active" class from the previously active number link
        document.querySelector(".active").classList.remove("active");
        // Add the "active" class to the clicked number link
        number.classList.add("active");
        updateBtn(); // Update the button states
    });
});
// Add event listeners to the "Previous" and "Next" buttons
prevNext.forEach((button) => {
    button.addEventListener("click", (e) => {
        // Increment or decrement the current step based on the button clicked
        currentStep += e.target.id === "next" ? 1 : -1;
        numbers.forEach((number, numIndex) => {
            // Toggle the "active" class on the number links based on the current step
            number.classList.toggle("active", numIndex === currentStep);
            updateBtn(); // Update the button states
        });
    });
});
// Add event listener to the "Start" button
startBtn.addEventListener("click", () => {
    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the first number link
    numbers[0].classList.add("active");
    currentStep = 0;
    updateBtn(); // Update the button states
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});
// Add event listener to the "End" button
endBtn.addEventListener("click", () => {
    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the last number link
    numbers[4].classList.add("active");
    currentStep = 4;
    updateBtn(); // Update the button states
    startBtn.disabled = false;
    prevNext[0].disabled = false;
});

const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
    } else 
    {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
    }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});