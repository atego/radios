$(document).on('ready', function () {
    var radios = datosEmisoras
    var listaEmisoras = $('#listaEmisoras')
    var reproductor = new Audio()
    var sonando= false

    //CONTRUIR LISTA DE EMISORAS
    radios.forEach((emisora) => {
        let urlVacia = '<li><a href="#">'
        let logo = '<img src="' + emisora.logo + '" style="border-radius:3px">'
        let titulo = '<h2>' + emisora.emisora + '</h2>'
        listaEmisoras.append(urlVacia + logo + titulo)
        listaEmisoras.listview('refresh')
    })

    //DETECTAR CLICK EN LISTA
    $('#listaEmisoras li').on('click', function () {
        let indiceSeleccionado = $(this).index()
        $('#panelLista').panel('close')
        var radio= radios[indiceSeleccionado]
        reproducirEmisora(radio)
    })

    //REPRODUCIR EMISORA SELECCIONADA
    function reproducirEmisora(radio) {
        reproductor.src= ''
        $('#logoEmisoraSonando').attr('src', radio.logo)
        reproductor.src= radio.url
        $('#tituloEmisoraSonando').text(radio.emisora)
        $('#botonPausa').text('Pausa')
        $(this).css('background-color', '#0277bd')
        reproductor.play()
        sonando= true
    }

    //BOTON PAUSA
    $('#botonPausa').on('click', function(){
        if(sonando){
            reproductor.pause()
            sonando= false
            $(this).text('Reanudar')
        }else{
            reproductor.play()
            sonando= true
            $(this).text('Pausa')
        }
    })
})