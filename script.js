window.addEventListener("load", function () {
    toggleMenu();
    page = getPage();
    
    document.getElementById('francais').href= '/fr/'+ page;
    document.getElementById('anglais').href= '/en/'+ page;

    const adresseMail = document.getElementById('adresseMail');

    if(adresseMail!=null){
        adresseMail.addEventListener("click",copierAdresseMail);
    }
    
})


function copierAdresseMail(e) {
    const adresseMail = document.getElementById('adresseMail');
    
    const email = "rie.urasoko@u-bordeaux-montaigne.fr";

    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');        
        const originalContent = adresseMail.innerHTML;
        const language = getLanguage();
        
        if (language === 'en') {
            adresseMail.innerHTML = "<i class='fa-solid fa-cat'></i> Email copied!";
        } else {
            adresseMail.innerHTML = "<i class='fa-solid fa-cat'></i> Adresse copiée !";
        }

        setTimeout(function() {
            adresseMail.innerHTML = originalContent;
        }, 2000);
    } catch (err) {
        console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
}





/* function copierAdresseMail(e){
    const adresseMail = document.getElementById('adresseMail');
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


function getPage(){
    var currentUrl = window.location.href;
    var page = "accueil";
    if(currentUrl.includes('/fr/') || currentUrl.includes('/en/') || currentUrl.includes('/jp/')) {
        page = currentUrl.split('/').pop();
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
        bouton = document.getElementById("accueil");
    }
    bouton.classList.add('btn', 'btn-success', 'me-2', 'menu', 'text-white');
}


