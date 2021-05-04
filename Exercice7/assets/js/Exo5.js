let size = 12;
const max = 30;
let verif = false;
const min = 10;

const addSize = (elements) =>{
    if (size >= max){
        verif = true;
    }
    else{
        verif=false;
        console.log(verif)
    }

    if (verif == true){
        size -= 0.1;
        console.log(size)
        elements.style.fontSize = `${size}px`;
    }
    else{
        size += 0.1;
        console.log(size)
        elements.style.fontSize = `${size}px`;
    }

}