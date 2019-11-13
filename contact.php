<?php
include './templates/header.php'
?>
    <div id="form">
        <p>Pour me contacter, veuillez complèter les champs suivants : </p>
        <form action="data.php" method="POST">
            <label for="name">Votre nom : </label><br />
            <input type="text" name="name" id="name" maxlenght="60" required><br />
            <label for="mail">Votre adresse mail : </label><br />
            <input type="email" name="mail" id="mail" required><br />
            <label>Votre message : </label><br />
            <textarea name="message" id="message" cols="50" rows="20" required></textarea><br />
            <input type="submit" Value="Envoyer !">
      </form>  
    </div>
<?php
include 'templates/footer.php';
?>