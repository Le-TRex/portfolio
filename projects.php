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
        <div class="invisible">
            <p>trex</p>
        </div>
        <div class="invisible">
            <p>carré</p>
        </div>
        <div class="invisible">
            <p>Mini site (d'un goût...certain) créé pour un TP qui portait sur l'utilisation des media queries</p>
            <a href="https://github.com/Le-TRex/tpMediaQueries"><img src="./images/pitichats.png" alt="aperçu du site"></a>
        </div>
    </div>
</div>

<?php
include 'templates/footer.php';
?>