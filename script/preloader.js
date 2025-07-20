//header and footer 
 function headerFooter() {
    let header = document.getElementById('header');
    
    if (!header) return console.error("Элемент #header отсутствует!");

    const contentHeader = `<a class="logo-link" href="about.html">
                            <img class="logo-gif" src="image/chicken-gif.gif" alt="">
                            <img class="logo" src="image/mis-logo.svg" alt="Логотип">
                        </a>
                        <input type="checkbox" class="menu-checkbox" id="menu-toggle">
                        <label for="menu-toggle">
                            <span class="menu-icon"></span>
                        </label>
                        <nav class="menu">
                            <ul class="navigation">
                                <li class="item-list linked"><a class="linked" href="index.html" onclick="document.getElementById('menu-toggle').checked = false;">Главная</a></li>
                                <li class="item-list linked"><a class="linked" href="about.html" onclick="document.getElementById('menu-toggle').checked = false;">О нас</a></li>
                                <li class="item-list linked"><a class="linked" href="index.html#calc" onclick="document.getElementById('menu-toggle').checked = false;">Калькулятор</a></li>
                                <li class="item-list linked"><a class="linked" href="production.html" onclick="document.getElementById('menu-toggle').checked = false;">Продукция</a></li>
                                <li class="item-list linked"><a class="linked" href="index.html#slider" onclick="document.getElementById('menu-toggle').checked = false;">Комбикорм</a></li>
                            </ul>
                            <span class="close-button" onclick="document.getElementById('menu-toggle').checked = false;">×</span>
                            <address>
                                <ul class="nav-link">
                                    <li class="item-list linked "><a class="linked link-nav" aria-label="Наш адрес: улица Академика Горячкина, дом 83, Подольск" href="https://yandex.ru/maps/1/moscow-and-moscow-oblast/house/ulitsa_akademika_goryachkina_83/Z04YcwRpQU0BQFtvfX91eH1jZg==/?ll=37.539886%2C55.349102&utm_source=main_stripe_big&z=16.98">Мы на карте</a></li>
                                    <li class="item-list linked"><a class="linked link-avito" href="https://www.avito.ru/podolsk/ptitsy/sutochnye_tsyplyata_broylera_4708678547?context=H4sIAAAAAAAA_wEmANn_YToxOntzOjE6IngiO3M6MTY6IjJpYjFWSVFxZXhGT1c2bVAiO31iMLHiJgAAAA">Мы на Авито</a></li>
                                    <li class="item-list linked link-tel"><a class="linked" href="tel:+79169927150">+7(916)9927150</a></li>
                                    <li class="item-list linked link-tel"><a class="linked" href="tel:+79778018260">+7(977)8018260</a></li>
                                </ul>
                            </address>
                        </nav>`;
    header.innerHTML = contentHeader;

    let footer = document.querySelector(".footer-wrapper")
    if (!footer) return console.error("Элемент footer отсутствует!");
    let contentFooter = `
        <div>
            <ul class="nav">
                <li class="nav-list"><a class="link" href="index.html">Главная</a></li>
                <li class="nav-list"><a class="link" href="about.html">О нас</a></li>
                <li class="nav-list"><a class="link" href="index.html#calc">Калькулятор</a></li>
                <li class="nav-list"><a class="link" href="production.html">Продукция</a></li>
                <li class="nav-list"><a class="link" href="index.html#slider">комбикорм</a></li>
                <!--<li class="nav-list"><a class="link" href="">Видео</a></li>-->
            </ul>
        </div>
        <address class="up-col">
            <a class="logo-link" href="about.html">
                <img class="logo-gif" src="image/chicken-gif.gif" alt="">
                <img class="logo" src="image/mis-logo.svg" alt="Логотип">
            </a>
            <div class="social-icons">
                <a href="https://wa.me/+79169927150"><img class="whatsapp-icon" src="image/whattsapp.svg" alt=""></a>
                <a href="https://t.me/+79169927150"><img class="telegram-icon" src="image/telegram-icon.svg" alt=""></a>
            </div>
            <ul class="address">
                <li class="contact-text">Контакты</li>
                <li class="address-list"><a class="link link-tel" href="tel:+79169927150">8 (916) 992-71-50</a></li>
                <li class="address-list"><a class="link link-tel" href="tel:+79778018260">8 (977) 801 82 60</a></li>
                <li class="address-list"><a class="link link-nav" href="https://yandex.ru/maps/1/moscow-and-moscow-oblast/house/ulitsa_akademika_goryachkina_83/Z04YcwRpQU0BQFtvfX91eH1jZg==/?ll=37.539886%2C55.349102&utm_source=main_stripe_big&z=16.98">Мы на
                        карте</a></li>
            </ul>
        </address>
        `
        footer.innerHTML = contentFooter;
};

headerFooter()


//preloader

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    window.addEventListener("load", () => {
        preloader.style.display = "none"; 
        content.style.display = "block";    
    });
});