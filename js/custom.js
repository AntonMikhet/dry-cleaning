       // SLIDE BAR
       function slidebar() {
        let slidebar = document.getElementById('slide-bar');
        let list = document.getElementById('list');
        let mobile = document.getElementById('mobile');
        let cross = document.getElementById('cross');
        let arrow = document.getElementById('arrow');
            if (slidebar.classList.contains('click') == 0) {
                slidebar.classList.add('click');
                cross.classList.add('showburger');
                arrow.classList.add('showburger__arrow');
                slidebar.style.zIndex = 10;
                slidebar.style.width = '100%';
                mobile.style.zIndex = 10; 
                setTimeout(function(){list.style.display= 'block';},500); 
            }else if (slidebar.classList.contains('click')) {
                slidebar.classList.remove('click');
                cross.classList.remove('showburger');
                arrow.classList.remove('showburger__arrow');
                slidebar.style.zIndex = -5;
                slidebar.style.width = 0;
                list.style.display= 'none';  
                mobile.style.zIndex = 5;  
            }; 
    }
    
                                        // SLIDE BAR CLOSE
                                         // DROPDOWN

function dropdown(dropdownArg) {
    let catalog = document.getElementById('catalog');
    let remont = document.getElementById('remont');
    let dropdownArgPolar;
    switch (dropdownArg){
        case 1 :
            dropdownArg = remont;
            dropdownArgPolar = catalog;
            break;
        case 2 :
            dropdownArg = catalog;
            dropdownArgPolar = remont;

            break;
    };
    if (dropdownArg.classList.contains('click-list') == 0) {
        dropdownArg.classList.add('click-list');
        dropdownArg.style.display = 'flex';   
        if (dropdownArgPolar.classList.contains('click-list')) {
            dropdownArgPolar.classList.remove('click-list');
            dropdownArgPolar.style.display = 'none';
        };
    } else if (dropdownArg.classList.contains('click-list')) {
        dropdownArg.classList.remove('click-list');
        dropdownArg.style.display = 'none';
    }; 
};
                                        // DROPDOWN CLOSE
                                    // carousel main

function carouselmain(carouselimg) {
    let img = document.getElementById('mainimg');
    // let bar1 = document.getElementById('bar1');
    // let bar2 = document.getElementById('bar2');
    // let bar3 = document.getElementById('bar3');
    // let bar4 = document.getElementById('bar4');
    switch (carouselimg) {
        case 1:
            img.src='img/x_ffffff_100_0_2018121117394210800_80.jpg'
            bar1.classList.add('red');
            bar2.classList.remove('red');
            bar3.classList.remove('red');
            bar4.classList.remove('red');
            break;
        case 2:
            img.src='img/Без названия.jpg'
            bar2.classList.add('red');
            bar1.classList.remove('red');
            bar3.classList.remove('red');
            bar4.classList.remove('red');
            break;
        case 3:
            img.src='img/detsiy-matras-pali-med-italia-500x500.jpg'
            bar3.classList.add('red');
            bar1.classList.remove('red');
            bar2.classList.remove('red');
            bar4.classList.remove('red');
            break;
        case 4:
            img.src='img/Без названия (1).jpg'
            bar4.classList.add('red');
            bar1.classList.remove('red');
            bar2.classList.remove('red');
            bar3.classList.remove('red');

            break;
        default:
            break;
    }
};
let timerId = setInterval(() => carouselmain(Math.floor(Math.random() * 5)), 5000);

        //  OWL CAROUSEL

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })

        // OWL CAROUSEL CLOSE