setInterval(() => {
    const nav = document.querySelector('.nav');
    const introTitle = document.querySelector('.intro-title')
    const introboxtitle = document.querySelector('.intro-box-title')
    const introButton = document.querySelector('.intro-button')
    const dot1 = document.querySelector('#dot1')
    const dot2 = document.querySelector('#dot2')
    const dot3 = document.querySelector('#dot3')
    dot1.style.border = "none"
    dot2.style.border = "1px solid red"
    dot3.style.border = "none"
    introButton.textContent = "UNIQUE"
    introboxtitle.textContent = "Ferrari Purosangue"
    introTitle.textContent = "Unlike any other"
    nav.style.backgroundImage = `url("../images/introbg2.jpg")`
}, 3000)

setInterval(() => {
    const nav = document.querySelector('.nav');
    const introTitle = document.querySelector('.intro-title')
    const introButton = document.querySelector('.intro-button')
    const dot1 = document.querySelector('#dot1')
    const dot2 = document.querySelector('#dot2')
    const dot3 = document.querySelector('#dot3')
    const introboxtitle = document.querySelector('.intro-box-title')
    introboxtitle.textContent = "Ferrari 499P"
    dot1.style.border = "none"
    dot2.style.border = "none"
    dot3.style.border = "1px solid red"
    introButton.textContent = "YOUR OWN"
    introTitle.textContent = "NOW OR NEVER"
    nav.style.backgroundImage = `url("../images/introbg3.png")`
}, 6000)

setInterval(() => {
    const nav = document.querySelector('.nav');
    const introTitle = document.querySelector('.intro-title')
    const introButton = document.querySelector('.intro-button')
    const dot1 = document.querySelector('#dot1')
    const dot2 = document.querySelector('#dot2')
    const dot3 = document.querySelector('#dot3')
    const introboxtitle = document.querySelector('.intro-box-title')
    introboxtitle.textContent = "Scuderia Ferrari"
    dot1.style.border = "1px solid red"
    dot2.style.border = "none"
    dot3.style.border = "none"
    introButton.textContent = "DISCOVER"
    introTitle.textContent = "#ESSEREFERRARI"
    nav.style.backgroundImage = `url("../images/introbg.png")`
}, 9000)

let count = 0;

function incrementCount() {
  count++;
  alert('Count is now:'+ count);
}

setInterval(incrementCount, 3000);

  

if(screen.width > 600){
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselParts = document.querySelectorAll('.carousel-part');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const carouselArrowLeft = document.querySelector('.carousel-arrow-left');
    const carouselArrowRight = document.querySelector('.carousel-arrow-right');
    
    let currentPart = 0;
    let intervalId = null;
    
    function showPart(partIndex) {
        // Hide all parts
        carouselParts.forEach(part => {
            part.style.display = 'none';
        });
    
        // Show the selected part
        carouselParts[partIndex].style.display = 'flex';
    
        // Update the active dot
        carouselDots.forEach(dot => {
            dot.classList.remove('active');
        });
        carouselDots[partIndex].classList.add('active');
    }
    
    function nextPart() {
        if (currentPart < carouselParts.length - 1) {
            currentPart++;
        } else {
            currentPart = 0;
        }
        showPart(currentPart);
    }
    
    function prevPart() {
        if (currentPart > 0) {
            currentPart--;
        } else {
            currentPart = carouselParts.length - 1;
        }
        showPart(currentPart);
    }
    
    function startCarousel() {
        intervalId = setInterval(() => {
            nextPart();
        }, 3000);
    }
    
    function stopCarousel() {
        clearInterval(intervalId);
    }
    
    // Set the initial part
    showPart(currentPart);
    
    // Add event listeners for controls
    carouselArrowLeft.addEventListener('click', () => {
        stopCarousel();
        prevPart();
        startCarousel();
    });
    carouselArrowRight.addEventListener('click', () => {
        stopCarousel();
        nextPart();
        startCarousel();
    });
    
    // Add event listeners for dots
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopCarousel();
            currentPart = index;
            showPart(currentPart);
            startCarousel();
        });
    });
    
    // Start the carousel
    startCarousel();
    
    // Get all category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    // Get all cards
    const cards = document.querySelectorAll('.carousel-part');
    
    // Loop through each category button
    categoryBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Remove active class from all category buttons
            categoryBtns.forEach((button) => {
                button.classList.remove('actives');
            });
            // Add active class to the clicked category button
            btn.classList.add('actives');
    
            // Get the category of the clicked button
            const category = btn.dataset.category;
            // Loop through each card
            cards.forEach((card) => {
                // If the card's category matches the clicked button's category or the category is "all", show the card, otherwise hide it
                if (category == 'all') {
                    nextPart()
                    const control = document.querySelector('.carousel-controls')
                    control.style.visibility = "visible"
                } else if (category == "passion") {
                    stopCarousel()
                    showPart(0)
                    card.style.display = 'none';
                    const control = document.querySelector('.carousel-controls')
                    control.style.visibility = "hidden"
                } else if (category == "races") {
                    stopCarousel()
                    showPart(2)
                    const control = document.querySelector('.carousel-controls')
                    control.style.visibility = "hidden"
                } else if (category == "cars") {
                    stopCarousel()
                    showPart(1)
                    card.style.display = 'none';
                    const control = document.querySelector('.carousel-controls')
                    control.style.visibility = "hidden"
                }
            });
        });
    });

    const Carsparts = document.querySelectorAll('.cars-part');
    const Carsdots = document.querySelectorAll('.cars-dot');
    const Carsprev = document.querySelector(".cars-prev")
    const Carsnext = document.querySelector(".cars-next")
    let currentCarsIndex = 0;
    
    setInterval(() => {
        CarsPrevPage()
    }, 3000)
    
    function showCarsPart(index) {
        Carsparts.forEach((part, i) => {
            if (i === index) {
                part.classList.add('cars-active');
            } else {
                part.classList.remove('cars-active');
            }
        });
    }
    
    function setCarsActiveDot(index) {
        Carsdots.forEach(dot => {
            dot.classList.remove('cars-dot-active');
        });
        Carsdots[index].classList.add('cars-dot-active');
    }
    
    showCarsPart(currentCarsIndex);
    setCarsActiveDot(currentCarsIndex);
    
    function CarsPrevPage(){
        currentCarsIndex--;
        if (currentCarsIndex < 0) {
            currentCarsIndex = Carsparts.length - 1;
        }
        showCarsPart(currentCarsIndex);
        setCarsActiveDot(currentCarsIndex);
    }
    
    Carsprev.addEventListener('click', () => {
        CarsPrevPage()
    });
    
    function CarsNextPage(){
        currentCarsIndex++;
        if (currentCarsIndex >= Carsparts.length) {
            currentCarsIndex = 0;
        }
        showCarsPart(currentCarsIndex);
        setCarsActiveDot(currentCarsIndex);
    }
    
    Carsnext.addEventListener('click', () => {
        CarsNextPage()
    });
    
    Carsdots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentCarsIndex = index;
            showCarsPart(currentCarsIndex);
            setCarsActiveDot(currentCarsIndex);
            intervalId = setInterval(nextPart, 3000);
        });
    });
    
    const slide1 = document.querySelector("#slide1")
    const slide2 = document.querySelector("#slide2")
    const slide3 = document.querySelector("#slide3")
    
    slide1.addEventListener('mouseover', () => {
        slide1.classList.add('slide-active');
        slide2.classList.remove('slide-active')
        slide3.classList.remove('slide-active')
    });
      
    slide1.addEventListener('mouseout', () => {
        slide1.classList.remove('slide-active');
        slide2.classList.remove('slide-active')
        slide3.classList.remove('slide-active')
        if(slide1.classList[1] != "slide-active" && slide2.classList[1] != "slide-active"){
            slide3.classList.add('slide-active')
        }
    });
    
    slide2.addEventListener('mouseover', () => {
        slide1.classList.remove('slide-active');
        slide2.classList.add('slide-active')
        slide3.classList.remove('slide-active')
    });
      
    slide2.addEventListener('mouseout', () => {
        slide1.classList.remove('slide-active');
        slide2.classList.remove('slide-active')
        slide3.classList.remove('slide-active')
        if(slide1.classList[1] != "slide-active" && slide2.classList[1] != "slide-active"){
            slide3.classList.add('slide-active')
        }
    });
    
    slide3.addEventListener('mouseover', () => {
        slide1.classList.remove('slide-active');
        slide2.classList.remove('slide-active')
        slide3.classList.add('slide-active')
    });
      
    slide3.addEventListener('mouseout', () => {
        slide1.classList.remove('slide-active');
        slide2.classList.remove('slide-active')
        slide3.classList.add('slide-active')
    });
}







