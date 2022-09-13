const input = document.getElementById('textarea-text')
const encrip = document.getElementById('boton-encriptar')
const desencrip = document.getElementById('boton-desencriptar')
const img = document.getElementById('img_munieco')
const p = document.getElementById('p_show_hidden')
const div = document.getElementById('texto-encriptado-desencriptado')
const pEncrypt = document.querySelector('.text_content')
const copyButton  = document.querySelector('#copy')
const title = document.querySelector('.encrip-desencrip')

function setElementDisplay(elemen, disp){
    elemen.style.display = disp
}

function encriptar(str){
    let lower = str.toLowerCase()
    let chars = lower.split('')
    let newString = ''
    for(let i = 0; i < chars.length; i++){
        switch(chars[i]){
            case 'e':
                chars[i] = 'enter'
                break;
            case 'i':
                chars[i] = 'imes'
                break;
            case 'a':
                chars[i] = 'ai'
                break;
            case 'o':
                chars[i] = 'ober'
                break;
            case 'u':
                chars[i] = 'ufat'
                break;
            }
            newString += chars[i]   
    }
    return newString
}
function setElementDisplay(elemen, disp){
    elemen.style.display = disp
}
function desencriptar(str){
    let lower = str.toLowerCase()
    
    if(lower.includes('enter', 0)){
        lower = lower.replaceAll('enter', 'e')
    }
    if(lower.includes('imes', 0)){
        lower = lower.replaceAll('imes', 'i')
    }
    if(lower.includes('ai', 0)){
        lower = lower.replaceAll('ai', 'a')
    }
    if(lower.includes('ober', 0)){
        lower = lower.replaceAll('ober', 'o')
    }
    if(lower.includes('ufat', 0)){
        lower = lower.replaceAll('ufat', 'u')
    }
    return lower 
}
encrip.addEventListener('click', function(){
    if(input.value != ""){
        setElementDisplay(img, 'none')
        setElementDisplay(p, 'none')
        setElementDisplay(copyButton, 'block')
        setElementDisplay(title, 'block')
        
        title.textContent = '¡Encriptado!'
        
        pEncrypt.innerHTML = encriptar(input.value)
        input.value = ""
    }
})
desencrip.addEventListener('click', function (){
    if(input.value != ""){
        setElementDisplay(img, 'none')
        setElementDisplay(p, 'none')
        setElementDisplay(copyButton, 'none')
        setElementDisplay(title, 'block')
    
        title.textContent = '¡Desencriptado!'
        
        pEncrypt.innerHTML = desencriptar(input.value)
        input.value = ""
    }
})

// funcion copiar

const copiar = document.getElementById('copy')
const texto = document.getElementById('text_content')

copiar.addEventListener('click', () => {
    navigator.clipboard.writeText(texto.textContent)
    texto.classList.toggle('animation')
    texto.textContent = '¡Texto copiado!'
    
})

