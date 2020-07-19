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
            document.getElementById("divan__price1").innerHTML="От 30р"

            document.getElementById("divan2").src="img/textile sofa/divan-2.png"
            document.getElementById("divan__text2").innerHTML="Трёхместныйд иван"
            document.getElementById("divan__price2").innerHTML="От 35р"

            document.getElementById("divan3").src="img/textile sofa/divan-3.png"
            document.getElementById("divan__text3").innerHTML="Стандартный угловой диван"
            document.getElementById("divan__price3").innerHTML="От 40р"

            document.getElementById("divan4").src="img/textile sofa/divan-4.png"
            document.getElementById("divan__text4").innerHTML="Большой угловой диван"
            document.getElementById("divan__price4").innerHTML="От 45р"

            document.getElementById("divan5").src="img/textile sofa/divan-5.png"
            document.getElementById("divan__text5").innerHTML="Спальное место дивана"
            document.getElementById("divan__price5").innerHTML="От 20р"

            document.getElementById("podushka").src="img/textile sofa/divan-7.png"
            document.getElementById("divan__text6").innerHTML="Подушка"
            document.getElementById("divan__price6").innerHTML="От 3р"

            document.getElementById("stul").src="img/textile sofa/divan-8.png"
            document.getElementById("divan__text7").innerHTML="Стул"
            document.getElementById("divan__price7").innerHTML="От 5р"

            document.getElementById("kreslo").src="img/textile sofa/divan-6.png"
            document.getElementById("divan__text8").innerHTML="Кресло"
            document.getElementById("divan__price8").innerHTML="От 18р"

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
            document.getElementById("divan__price1").innerHTML="От 40р"

            document.getElementById("divan2").src="img/leather sofa/divan-10.png"
            document.getElementById("divan__text2").innerHTML="Трёхместный кожанный диван"
            document.getElementById("divan__price2").innerHTML="От 45р"

            document.getElementById("divan3").src="img/leather sofa/divan-11.png"
            document.getElementById("divan__text3").innerHTML="Угловой кожанный диван"
            document.getElementById("divan__price3").innerHTML="От 50р"

            document.getElementById("divan4").src="img/leather sofa/divan-12.png"
            document.getElementById("divan__text4").innerHTML="Большой угловой кожанный диван"
            document.getElementById("divan__price4").innerHTML="От 55р"

            document.getElementById("divan5").src="img/leather sofa/divan-13.png"
            document.getElementById("divan__text5").innerHTML="Спальное место кожанного дивана"
            document.getElementById("divan__price5").innerHTML="От 20р"

            document.getElementById("podushka").src="img/leather sofa/divan-14.png"
            document.getElementById("divan__text6").innerHTML="Подушка из кожи"
            document.getElementById("divan__price6").innerHTML="От 7р"

            document.getElementById("stul").src="img/leather sofa/divan-15.png"
            document.getElementById("divan__text7").innerHTML="Стул из кожи"
            document.getElementById("divan__price7").innerHTML="От 7р"

            document.getElementById("kreslo").src="img/leather sofa/divan-16.png"
            document.getElementById("divan__text8").innerHTML="Кожанное кресло"
            document.getElementById("divan__price8").innerHTML="От 28р"

            
            break;
        default:
            break;
    }
}