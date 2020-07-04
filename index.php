<?php 
if(isset($_POST['submit'])){
    $to = "p"; // this is your Email address
    $from = $_POST['emailPhone']; // this is the sender's Email address
    $subject = $_POST['title'];
    $message =  $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " ;

    }
?>
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>REFIT</title>
</head>

<body id="body" class="loading_page">
    <div id="loading_container" class="loading_container">
<img class="inner" src="img/loadingPageInnerIMG.png" alt="">
<div class="ramie">
    
</div>
<div class="circuit">
    <div class="circuit_border">

    </div>
</div>
    </div>
        <div id="arrow_top" class="arrow">
            <img src="img/arrow.png" alt="arrow">
        </div>
        <nav id="nav_container_id" class="nav_container">
            <ul class="ul_container">
                <li class="logo_Refit">
                    <a id="logo_nav_button" class="logo_Refit_Button">
                        <img src="img/Refit_logo.png" alt="Refit_logo" class="ul_container_img">
                    </a>
                </li>
                <li id="container_for_buttons" class="container_for_buttons">
                    <ul class="menu_container">
                        <li>
                            <button class="no-active" id="uslugi">Usługi</button>
                        </li>
                        <li>
                            <button class="no-active" id="realizacja">Realizacje</button>
                        </li>
                        <li>
                            <button class="no-active" id="wycena">Wycena</button>
                        </li>
                        <li>
                            <button class="no-active" id="o_nas">O Nas</button>
                        </li>
                        <li>
                            <button class="no-active" id="kontakt">Kontakt</button>
                        </li>
                        <li>
                            <button class="no-active" id="galeria"> <a
                                    href="https://www.facebook.com/pg/refitpulawy/photos/"
                                    target="_blank">Galeria</a></button>
                        </li>
                    </ul>
                </li>
                <li class="logo_facebook">
                    <a id="logo_facebook" href="https://www.facebook.com/refitpulawy/" target="_blank"
                        class="logo_Facebook_menu">
                        <img src="img/icon_facebook_menu2.png" alt="Facebook_Icon" class="ul_container_img">
                    </a>
                    <div id="hamburger" class="hamburger">
                        <span class="spanek"></span>
                        <span class="spanek"></span>
                        <span class="spanek"></span>
                        <span class="spanek"></span>
                    </div>
                </li>
            </ul>
        </nav>
        <header id="header" class="header_container">
            <img class="header_logo" src="img/logo_header.png" alt="REFIT_LOGO">
        </header>
        <section id="Nasz_uslugi_section" class="Section_Nasze_uslugi">
            <article class="Nasze_uslugi_container">
                <div class="Nasze_uslugi">
                    <h1 class="mobile_Nasze_usługi">Nasze usługi</h1>
                    <span class="mobile_Nasze_usługi"></span>
                    <p class="mobile_Nasze_usługi">Firma REFIT z siedzibą w Puławach świadczy szeroki
                        zakres usług remontowych i wykończeniowych na terenie województwa lubelskiego oraz
                        mazowieckiego.
                    </p>
                    <p class="mobile_Nasze_usługi">Do każdej realizacji podchodzimy z pełnym profesjonalizmem,
                        przykładając
                        szczególną uwagę
                        do jakości, wysokiego standardu i terminowości każdej <br>
                        z naszych realizacji.</p>
                    <p class="mobile_Nasze_usługi">W tej zakładce znajdziesz listę większości usług remontowych, które
                        świadczymy. Jeśli nie znalazłeś
                        interesującej Cię usługi, skontaktuj się z nami poprzez zakładkę <a class="kontakt_Nasze_Uslugi"
                            id="nasze_uslugi_kontakt_button">Kontakt</a>.</p>
                </div>
                <img src="img/uslugi_section.jpg" alt="zdjecie">
            </article>
            <span class="belka"></span>
            <section class="Nasze_uslugi_faktyczne_uslugi_container">
                <header class="Nasze_uslugi_header">
                    <div class="contaienr_for_squares">
                        <div class="box">
                            <div class="box_content_container">
                                <img class="box_content_img" src="img/odpodstaw.png" alt="icon">
                                <h2 class="box_content_h2">Od Podstaw</h2>
                                <span class="box_content_belka_span"></span>
                                <p class="box_content_paragraph">Niezależnie od tego, czy potrzebujesz wymiany lub
                                    położenia
                                    instalacji elektrycznej, hydraulicznej czy wodno-kanalizacyjnej, nasza firma
                                    może Ci pomóc.</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box_content_container">
                                <img class="box_content_img" src="img/zabudowykg.png" alt="icon">
                                <h2 class="box_content_h2">Zabudowy K-G</h2>
                                <span class="box_content_belka_span"></span>
                                <p class="box_content_paragraph">Świadczymy usługi związane z zabudowami
                                    kartonowo-gipsowymi:
                                    podwieszane sufity, ścianki działowe, poddasza, malowanie ścian i sufitów oraz
                                    kładzenie
                                    gładzi.</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box_content_container">
                                <img class="box_content_img" src="img/podlogi.png" alt="icon">
                                <h2 class="box_content_h2">Podłogi</h2>
                                <span class="box_content_belka_span"></span>
                                <p class="box_content_paragraph">Układamy, między innymi, parkiety, panele oraz deski.
                                    Przywracamy życie Twojego parkietu poprzez usługę cyklinowania parkietu - zarówno
                                    nowego,
                                    jak i starego.</p>
                            </div>
                        </div>
                    </div>
                    <div class="contaienr_for_squares">

                        <div class="box">
                            <div class="box_content_container">
                                <img class="box_content_img" src="img/plytki.png" alt="icon">
                                <h2 class="box_content_h2">Układanie Płytek</h2>
                                <span class="box_content_belka_span"></span>
                                <p class="box_content_paragraph">Kładziemy glazurę, terakotę, gres, mozaikę, kamień
                                    naturalny
                                    oraz ozdobny. Ponadto układamy również panele samoprzylepne z kamienia
                                    naturalnego.</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box_content_container">
                                <img class="box_content_img" src="img/plyytki.png" alt="icon">
                                <h2 class="box_content_h2">Montaż & Wymiana</h2>
                                <span class="box_content_belka_span"></span>
                                <p class="box_content_paragraph">Niestraszna nam wymiana oraz montaż drzwi, okien czy
                                    kaloryferów. Ponadto, wykonujemy również usługę montażu oświetlenia.</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box_content_container">
                                <img class="box_content_img" src="img/lazienka.png" alt="icon">
                                <h2 class="box_content_h2">Łazienka</h2>
                                <span class="box_content_belka_span"></span>
                                <p class="box_content_paragraph">Montaż kabiny prysznicowej, bidetu, umywalki czy paneli
                                    prysznicowych to tylko część usług, związanych z renowacją lub stworzeniem Twojej
                                    wymarzonej
                                    toalety.</p>
                            </div>
                        </div>

                    </div>
                </header>
                <footer class="Nasze_uslugi_footer">
                    <div class="inside_footer_Nasze_uslugi">
                        <h3 class="Nasze_uslugi_footer_h3">To nie koniec.</h3>
                        <span class="belka belka_Nasze_uslugi_footer"></span>
                        <p class="Nasze_uslugi_footer_paragraph">Usługi wymienione powyżej, to tylko część procesu
                            tworzenia
                            Twojego wymarzonego domu, pomieszczenia,
                            pensjonatu czy lokalu. Świadczymy również inne usługi remontowe, t.j.: wylewki, wyburzenia
                            ścian,
                            skuwanie tynków czy równanie ścian. Jeśli nie znalazłeś interesującej Cię usługi na liście
                            powyżej,
                            skontaktuj się z nami przez zakładkę <a class="kontakt_Nasze_Uslugi"
                                id="Kontakt_nasze_uslugi_to_nie_koniec">Kontakt</a>.</p>
                    </div>

                </footer>

            </section>
        </section>
        <section id="ralizacja_section" class="Realizacje_section">
            <div class="Realizacje_section_container">

                <div class="img_container">
                    <button id="button_left" class="button1">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </button>
                    <button id="button_right" class="button2">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                    <div class="dots_container">
                        <span class="dots_container_DOT"></span>
                        <span class="dots_container_DOT"></span>
                        <span class="dots_container_DOT"></span>
                        <span class="dots_container_DOT"></span>
                        <span class="dots_container_DOT"></span>

                    </div>
                    <div id="gallery-container" class="img_container_galery">
                        <div class="img_container_img">
                            <img src="img/0001_slider_4.jpg" alt="zdjecie">
                        </div>
                        <div class="img_container_img">
                            <img src="img/0000_slider_5.jpg" alt="zdjecie">
                        </div>
                        <div class="img_container_img">
                            <img src="img/0002_slider_3.jpg" alt="zdjecie">
                        </div>
                        <div class="img_container_img">
                            <img src="img/0003_slider_2.jpg" alt="zdjecie">
                        </div>
                        <div class="img_container_img">
                            <img src="img/0004_slider_1.jpg" alt="zdjecie">
                        </div>


                    </div>
                </div>
                <div class="realizacje_about_container">
                    <div class="realizacje_container">
                        <h4 class="realizacje_container_title">Realizacje</h4>
                        <span class="realizacje_container_belka"></span>
                        <p class="realizacje_container_paragraph">Do każdej z naszych realizacji remontowych oraz
                            wykończeniowych podchodzimy
                            z pełnym profesjonalizmem, przykładając uwagę do najmniejszych szczegółów.</p>
                        <p class="realizacje_container_paragraph">Przykładowe realizacje naszych usług znajdziesz po
                            lewo.
                            Galerię realizacji usług remontowych
                            oraz wykończeniowych znajdziesz na naszym <a class="kontakt_Nasze_Uslugi"
                                href="https://www.facebook.com/refitpulawy/" target="_blank">Facebooku</a>.
                        </p>
                        <a class="realizacje_container_Wiecej_button" href="">Więcej</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="Wycena_section" class="Wycena_section">
            <div class="wycena_section_container">
                <div class="wycena">
                    <div class="wycena_text">
                        <h5>Wycena</h5>
                        <span></span>
                        <p>Potrzebujesz wyceny? Skontaktuj się z nami za pomocą formularza kontaktowego po prawo lub
                            korzystając z zakładki <a class="kontakt_Nasze_Uslugi"
                                id="wycena_kontakt_button">Kontakt</a>.</p>
                    </div>
                </div>
                <form class="wycena_kontakt" action="" method="post">
                    <input type="email" name="emailPhone" id="txtEmail" class="input_email_phone_numer"
                        placeholder="Twój e-mail lub numer telefonu" >
                    <input type="text" name="title" class="input_text" placeholder="Temat wiadomości...">
                    <textarea name="message" cols="30" class="input_message" rows="10"
                        placeholder="Twoja wiadomość..."></textarea>
                    <input type="submit" name="submit" value="Wyślij" class="input_submit">
                </form>
            </div>
        </section>
        <section id="O_nas_section" class="o_nas_section">
            <div class="o_nas_section_container">
                <div class="o_nas_section_container_img_container">
                    <img src="img/logo_header.png" alt="refit_logo" class="O_nas_IMG">
                </div>
                <div class="o_nas_section_container_text_container">
                    <div class="content_o_nas">
                        <h5 class="o_nas_section_title">O Nas</h5>
                        <span class="content_o_nas_belka"></span>
                        <p class="content_o_nas_p">REFIT świadczy usługi remontowe oraz usługi wykończeniowe. Cechuje
                            nas
                            sumienność i rzetelność oraz
                            indywidualne podejście do każdego klienta. Skorzystanie z naszej oferty to gwarancja
                            wysokiej
                            jakości usług.</p>
                        <p class="content_o_nas_p">Usługi remontowe oraz wykończeniowe świadczymy na terenie województwa
                            mazowieckiego oraz lubelskiego,
                            między innymi w Puławach, Radomiu, Lublinie, Dęblinie, Nałęczowie czy Kazimierzu Dolnym.</p>
                    </div>

                </div>
            </div>
        </section>
        <section id="kontakt_section" class="kontakt_section">
            <div class="kontakt_sction_container">
                <div class="kontakt">
                    <div class="kontakt_text">
                        <h5 class="kontakt_title">Kontakt</h5>
                        <span class="belka_kontakt"></span>
                        <p class="kontakt_p">Nie znalazłeś odpowiedzi na Twoje pytanie?
                            Skontaktuj się z nami za pomocą danych kontaktowych podanych po prawo.</p>
                    </div>

                </div>
                <div class="dane_do_kontaktu">
                    <div class="dane_container">
                        <div class="dane">
                            <img src="img/Icon awesome-phone-square-alt.png" alt="phone_img">
                            <a href="tel:+48484484484">+48 484 484 484</a>
                        </div>
                        <div class="dane">
                            <img src="img/Icon awesome-facebook-square.png" alt="facebook_img">
                            <a href="https://www.facebook.com/refitpulawy/" target="_blank">Refit na Facebook</a>
                        </div>
                        <div class="dane">
                            <img src="img/Icon feather-mail.png" alt="Email_img">
                            <a href="mailto:refit.pulawy@gmail.com" target="_blank">refit.pulawy@gmail.com</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <footer id="footer" class="footer_contaienr">
            <div class="footer">
                <span>Projekt: <a href="https://www.behance.net/sergewalas8a69" target="_blank">Sergiusz
                        Wałaszkiewicz</a></span>
                <span class="kreska">|</span>
                <span>Wykonanie: <a href="https://github.com/konradusko" target="_blank">Konrad Bolesławski</a></span>
            </div>

        </footer>
    

    <script src="scripts.js"></script>
</body>

</html>