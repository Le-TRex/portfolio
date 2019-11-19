<?php
include './templates/header.php'
?>

<div id="projects">
    <div id="git">
        <p>Vous pouvez retrouver tous mes projets ici : <a href="https://github.com/Le-TRex"><i class="fab fa-github-square"></i></a>
        </p>
    </div>
    <div id="proj">
        <nav id="projnav">
            <ul>
                <li>CV du T-Rex</li>
                <li>Carré magique</li>
                <li>Site des Pitichats</li>
            </ul>
        </nav>
        <div id="projects">
            <div class="invisible">
                <p>TP HTML CSS réalisé pour le cours HTML CSS d'OpenClassroom (suivi avant d'intégrer l'IT-Akademy)</p>
                <a href="https://github.com/Le-TRex/TRex_resume"><img src="./images/cvtrex.png" alt="Aperçu du CV du T-Rex"></a>
            </div>
            <div class="invisible">
                <p>TP CSS pour s'entraîner à l'utilisation des flexbox : </p>
                <a href="https://github.com/Le-TRex/magicalSquare"><img src="./images/magicalSquare.png" alt="Image du carré magique"></a>
            </div>
            <div class="invisible">
                <p>Mini site (d'un goût...certain) créé pour un TP qui portait sur l'utilisation des media queries</p>
                <a href="https://github.com/Le-TRex/tpMediaQueries"><img src="./images/pitichats.png" alt="aperçu du site"></a>
            </div>
        </div>
    </div>
</div>

<?php
include 'templates/footer.php';
?>