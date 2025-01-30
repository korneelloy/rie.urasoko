window.addEventListener("load", function () {
    toggleMenu();
    page = getPage();
    
    document.getElementById('francais').href= '?langue=fr&page='+ page;
    document.getElementById('anglais').href= '?langue=en&page='+ page;

    var adresseMail = document.getElementById('adresseMail');

    if(adresseMail!=null){
        adresseMail.addEventListener("click",copierAdresseMail)
    }
    
})

function copierAdresseMail(e){
    const textArea = document.createElement("textarea");
    textArea.value = "rie.urasoko@u-bordeaux-montaigne.fr";
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        var language=getLanguage();
        if(language=='en'){
            adresseMail.innerHTML="You have copied the email address <i class='fa-solid fa-cat'></i>";
        }else{
            adresseMail.innerHTML="Vous avez copié l'adresse mail <i class='fa-solid fa-cat'></i>";
        }
        setTimeout(function() {
            adresseMail.innerHTML="rie.urasoko@u-bordeaux-montaigne.fr";
        }, 2000);
    } catch (err) {
        console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
    /*
    navigator.clipboard.writeText('rie.urasoko@u-bordeaux-montaigne.fr');
    var language=getLanguage();
    if(language=='en'){
        adresseMail.innerHTML="You have copied the email address <i class='fa-solid fa-cat'></i>";
    }else{
        adresseMail.innerHTML="Vous avez copié l'adresse mail <i class='fa-solid fa-cat'></i>";
    }
    setTimeout(function() {
        adresseMail.innerHTML="rie.urasoko@u-bordeaux-montaigne.fr";
      }, 2000);
      */
}

function getPage(){
    var currentUrl = window.location.href;
    var page = "acceuil";
    if(currentUrl.includes('=')){
        page = currentUrl.split('=').pop();
    }
    return page;
}

function getLanguage(){
    var currentUrl = window.location.href;
    var language = 'fr';
    if(currentUrl.includes('=')){
        language = currentUrl.split('=')[1].slice(0,2);
    }
    return language;
}

function toggleMenu(){
    var page = getPage();
    var bouton = document.getElementById(page);
    if(bouton == null){
        bouton = document.getElementById("acceuil");
    }
    bouton.classList.add('btn', 'btn-success', 'me-2', 'menu', 'text-white');
}


