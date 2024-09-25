function testJSOK(){
    alert("Le fichier javascript est bien lié.");
}

function valider(){
    if(document.getElementById("formulaire").nom.value == "") {
    alert("Veuillez saisir un nom !");
    return false;
    } else {
    if (document.getElementById("formulaire").prenom.value == "") {
    alert("Veuillez saisir votre prénom");
    return false;
    }
    else return true;
    }
    }
