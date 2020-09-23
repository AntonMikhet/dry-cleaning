window.addEventListener("DOMContentLoaded", function() {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }
    function mask(event) {
        var matrix = " +375 (__) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    };
        var input = document.querySelector("#phone");
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
    });

    var phone = document.getElementById('phone');
    phone.oninput = function() {
    if (phone.value.length == 20) {
            phone.style.border ="1px solid green";
        } else {
          phone.style.border ="1px solid red";
        }
      };


window.onload = function pricesLoad() {
    
    var divan__price1 = document.getElementById("divan__price1");
    divan__price1.innerHTML="От " + texileDivan2;
   
    var divan__price2 = document.getElementById("divan__price2");
    divan__price2.innerHTML="От " + texileDivan3;

    var divan__price3 = document.getElementById("divan__price3");
    divan__price3.innerHTML="От " + texileDivan4;

    var divan__price4 = document.getElementById("divan__price4");
    divan__price4.innerHTML="От " + texileDivan5;

    var divan__price5 = document.getElementById("divan__price5");
    divan__price5.innerHTML="От " + kover + " за м²";

    var divan__price6 = document.getElementById("divan__price6");
    divan__price6.innerHTML="От " + podushka ;

    var divan__price7 = document.getElementById("divan__price7");
    divan__price7.innerHTML="От " + stul;

    var divan__price8 = document.getElementById("divan__price8");
    divan__price8.innerHTML="От " + kreslo;
};

function price(leathertexile) {
    leather = document.getElementById('leather');
    texile = document.getElementById('texile');
    switch (leathertexile) {
        case 1:
            leather.style.borderBottom="0"
            leather.style.color="#777"
            leather.style.fontWeight="400"
            texile.style.borderBottom="2px solid #ff7547"
            texile.style.color="#222"
            texile.style.fontWeight="600"
            document.getElementById("divan1").src="img/textile sofa/divan-1.png"
            document.getElementById("divan__text1").innerHTML="Двухместный диван"
            divan__price1.innerHTML="От " + texileDivan2;

            document.getElementById("divan2").src="img/textile sofa/divan-2.png"
            document.getElementById("divan__text2").innerHTML="Трёхместныйд иван"
            divan__price2.innerHTML="От " + texileDivan3;

            document.getElementById("divan3").src="img/textile sofa/divan-3.png"
            document.getElementById("divan__text3").innerHTML="Стандартный угловой диван"
            divan__price3.innerHTML="От " + texileDivan4;

            document.getElementById("divan4").src="img/textile sofa/divan-4.png"
            document.getElementById("divan__text4").innerHTML="Большой угловой диван"
            divan__price4.innerHTML="От " + texileDivan5;

            document.getElementById("divan5").src="img/textile sofa/kover.png"
            document.getElementById("divan__text5").innerHTML="Ковёр(короткий ворс)"
            divan__price5.innerHTML="От " + kover + " за м²";

            document.getElementById("podushka").src="img/textile sofa/divan-7.png"
            document.getElementById("divan__text6").innerHTML="Подушка"
            divan__price6.innerHTML="От " + podushka;

            document.getElementById("stul").src="img/textile sofa/divan-8.png"
            document.getElementById("divan__text7").innerHTML="Стул"
            divan__price7.innerHTML="От " + stul;

            document.getElementById("kreslo").src="img/textile sofa/divan-6.png"
            document.getElementById("divan__text8").innerHTML="Кресло"
            divan__price8.innerHTML="От " + kreslo;

            break;
        case 2:
            leather.style.borderBottom="2px solid #ff7547"
            leather.style.color="#222"
            leather.style.fontWeight="600"

            texile.style.borderBottom="0"
            texile.style.color="#777"
            texile.style.fontWeight="400"

            document.getElementById("divan1").src="img/leather sofa/divan-9.png"
            document.getElementById("divan__text1").innerHTML="Кожанный диван"
            document.getElementById("divan__price1").innerHTML="От " + leatherDivan2;

            document.getElementById("divan2").src="img/leather sofa/divan-10.png"
            document.getElementById("divan__text2").innerHTML="Трёхместный кожанный диван"
            document.getElementById("divan__price2").innerHTML="От " + leatherDivan3;

            document.getElementById("divan3").src="img/leather sofa/divan-11.png"
            document.getElementById("divan__text3").innerHTML="Угловой кожанный диван"
            document.getElementById("divan__price3").innerHTML="От " + leatherDivan4;

            document.getElementById("divan4").src="img/leather sofa/divan-12.png"
            document.getElementById("divan__text4").innerHTML="Большой угловой кожанный диван"
            document.getElementById("divan__price4").innerHTML="От " + leatherDivan5;

            document.getElementById("divan5").src="img/leather sofa/divan-13.png"
            document.getElementById("divan__text5").innerHTML="Спальное место кожанного дивана"
            document.getElementById("divan__price5").innerHTML="От " + leatherMesto;

            document.getElementById("podushka").src="img/leather sofa/divan-14.png"
            document.getElementById("divan__text6").innerHTML="Подушка из кожи"
            document.getElementById("divan__price6").innerHTML="От " + leatherPodushka;

            document.getElementById("stul").src="img/leather sofa/divan-15.png"
            document.getElementById("divan__text7").innerHTML="Стул из кожи"
            document.getElementById("divan__price7").innerHTML="От " + leatherStul;

            document.getElementById("kreslo").src="img/leather sofa/divan-16.png"
            document.getElementById("divan__text8").innerHTML="Кожанное кресло"
            document.getElementById("divan__price8").innerHTML="От " + leatherKreslo;

            
            break;
        default:
            break;
    }
};
function modalActive(modalShow) {
    modal = document.getElementById("modal-block");
    switch (modalShow) {
        case 1:
            modal.style.display="block"
            break;
        case 2:
            modal.style.display="none"
            break;
        default:
            break;
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modalActive(2);
        };
    };
};
function showbar(onOff) {
    organization = document.getElementById('organ');
    services = document.getElementById('service');
    aboutUs = document.getElementById('about');
    switch (onOff) {
        case 1:
            if (organization.classList.contains('active')==1) {
                organization.classList.remove('active');
                
            } else {
                organization.classList.add('active');
                services.classList.remove('active');
                aboutUs.classList.remove('active');
            };
            break;
        case 2:
            if (services.classList.contains('active')==1) {
                services.classList.remove('active');
            } else {
                services.classList.add('active');
                organization.classList.remove('active');
                aboutUs.classList.remove('active');
            };
            break;
            case 3:
                if (aboutUs.classList.contains('active')==1) {
                    aboutUs.classList.remove('active');
                } else {
                    aboutUs.classList.add('active');
                    organization.classList.remove('active');
                    services.classList.remove('active');
                };
                break;
        default:
            break;
    };
    window.onclick = function (event) {
        if (event.target == organization) {
            showbar(1);
        };
    };
};
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
            slidebar.style.zIndex = 101;
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
};
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
// function video(videoShow) {
//     let video = document.getElementById("video-examples");
//     let buttonShow = document.getElementById("buttonShow");
//     let buttonHide = document.getElementById("buttonHide");
//     switch (videoShow) {
//         case 1:
//             video.style.display= 'flex';
//             buttonHide.style.display = "block";
//             buttonShow.style.display = "none";

//             break;
//         case 2:
//             video.style.display= "none";
//             buttonHide.style.display = "none";
//             buttonShow.style.display = "block";
//             buttonHide.style.display = "none";
//             break;
//         default:
//             break;
//     };
// }