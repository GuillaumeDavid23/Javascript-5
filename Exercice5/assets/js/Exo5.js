//VARIABLES
let textBold = false;

//BOUTON TEXTE ROSE
function changePink(text){
    text.style["color"] = "pink"
}

//BOUTON TEXTE BLEU
function changeBlue(text){
    text.style["color"] = "blue"
}

//BOUTON TEXTE Violet
function changePurple(text){
    text.style["color"] = "purple"
}


////BOUTON TEXTE GRAS
function changeBolder(text){
    
    if(textBold == true){
        text.style["font-weight"] = "normal"
        textBold = false;
    }
    else if (textBold == false){
        text.style["font-weight"] = "bold" ;
        textBold = true;
    }
}

////BOUTON TEXTE Italic
function changeItalic(text){
    
    if(textBold == true){
        text.style["font-style"] = "normal"
        textBold = false;
    }
    else if (textBold == false){
        text.style["font-style"] = "Italic" ;
        textBold = true;
    }
}