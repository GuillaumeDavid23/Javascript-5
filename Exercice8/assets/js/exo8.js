const addElement = () =>{
    let formulaire = document.getElementById("form1");
    let Label = document.createElement('label');
    let Label1 = document.createElement('label');
    let Input = document.createElement('input');
    let Input1 = document.createElement('input');
    let Content = document.createTextNode('Prénom');
    let Content1 = document.createTextNode('Age');

    //BLOC PRENOM
    Label.appendChild(Content);
    formulaire.insertAdjacentElement("beforeend", Label);
    formulaire.insertAdjacentElement("beforeend", Input);

    //BLOC AGE
    Label1.appendChild(Content1);
    formulaire.insertAdjacentElement("beforeend", Label1);
    formulaire.insertAdjacentElement("beforeend", Input1);
}

