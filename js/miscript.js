document.getElementById('encriptar').addEventListener('click', function() {
    let texto = document.getElementById('texto').value;

    // Verificar que el texto solo contenga letras minúsculas sin acento
    if (!/^[a-z]+$/.test(texto)) {
        alert('El texto debe contener solo letras minúsculas sin acento.');
        return;
    }

    // Encriptar el texto
    let textoEncriptado = encriptarTexto(texto);

    //mostrar el texto encriptado en el aside
    mostrarTextoEncriptado(textoEncriptado);
    limpiarInput();
});


//evento copiar
document.getElementById('copiar').addEventListener('click', function() {
    let mensaje = document.getElementById('mensaje');
    seleccionarTexto(mensaje);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
});

//evento desencriptar
document.getElementById('desencriptar').addEventListener('click', function() {
    let textoEncriptado = document.getElementById('texto').value;
    let textoDesencriptado = desencriptarTexto(textoEncriptado);
    mostrarTextoDesencriptado(textoDesencriptado);
});

//funcion mostrar el texto encriptado en el aside y habilitar el botón de copiar
function mostrarTextoEncriptado(textoEncriptado) {
    let mensaje = document.getElementById('mensaje');
    mensaje.textContent = textoEncriptado;
    mensaje.setAttribute('data-texto-encriptado', textoEncriptado);
    let copiarBtn = document.getElementById('copiar');
    copiarBtn.style.display = 'block';

    //ocultar la imagen
    document.getElementById('muñeco').style.display = 'none';
}

//funcion mostrar el texto desencriptado en el aside
function mostrarTextoDesencriptado(textoDesencriptado) {
    let mensaje = document.getElementById('mensaje');
    mensaje.textContent = textoDesencriptado;
    let copiarBtn = document.getElementById('copiar');
    copiarBtn.style.display = 'block';
    document.getElementById('muñeco').style.display = 'none';
}

//eliminar acentos y convertir a minuscula
function limpiarTexto(texto) {
    return texto.toLowerCase()
        .replace(/[áäàâ]/g, 'a')
        .replace(/[éëèê]/g, 'e')
        .replace(/[íïìî]/g, 'i')
        .replace(/[óöòô]/g, 'o')
        .replace(/[úüùû]/g, 'u');
}

//funcion encriptar texto segun las reglas
function encriptarTexto(texto) {
    let textoLimpio = limpiarTexto(texto);
    return textoLimpio
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

//funcion desencriptar segun las reglas
function desencriptarTexto(textoEncriptado) {
    return textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
//funcion limpiar el input
function limpiarInput() {
    document.getElementById('texto').value = '';
}

//funcion seleccionar todo el texto dentro de un elemento
function seleccionarTexto(elemento) {
    let seleccion = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(elemento);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
}
