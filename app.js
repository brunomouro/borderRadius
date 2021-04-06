// SELETORES

const view = document.getElementById('view')
const clipboard = document.getElementById("clipboard")

//FUNÇÃO QUE ATUALIZA O CLIPBOARD

function atualizaClipboard(){

    var style = getComputedStyle(view)
    
    var tl = style.getPropertyValue('--tl')
    var tr = style.getPropertyValue('--tr')
    var bl = style.getPropertyValue('--bl')
    var br = style.getPropertyValue('--br')

    clipboard.value = `${tl} ${tr} ${bl} ${br}`
    
} 

// FUNÇÃO QUE ATUALIZA BORDA

function atualizaBorda(e){
    let borda = e.target.id
    let valor = e.target.value

    view.style.setProperty(`--${borda}`, valor + "px")

    atualizaClipboard()


}

// FUNÇÃO QUE COPIA OS PARAMETROS DO CLIPBOARD

function copiaTexto() {
    clipboard.select();
    clipboard.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");
}

// FUNÇÃO QUE LIMPA OS CAMPOS

function limpa() {
    document.getElementById("tl").value = ""
    document.getElementById("tr").value = ""
    document.getElementById("bl").value = ""
    document.getElementById("br").value = ""
    clipboard.value = `0px  0px  0px  0px  `
}

window.onload = limpa