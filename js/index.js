$(document).on('ready', function () {
    var radios = datosEmisoras
    var listaEmisoras = $('#listaEmisoras')
    var reproductor = new Audio()

    //CONTRUIR LISTA DE EMISORAS
    radios.forEach((emisora) => {
        let url = '<li><a href="#">'
        let logo = '<img src="' + emisora.logo + '">'
        let titulo = '<h2>' + emisora.emisora + '</h2>'
        let descripcion= '<p style="color: #ffcc80;">' + emisora.descripcion + '</p></a></li>'
        listaEmisoras.append(url + logo + titulo + descripcion)
        listaEmisoras.listview('refresh')
    })

    //DETECTAR CLICK EN LISTA
    $('#listaEmisoras li').on('click', function () {
        let indiceSeleccionado = $(this).index()
        reproducirEmisora(indiceSeleccionado)
    })

    $('#botonVolver').on('click', function(){
        pararSonido()
        $.mobile.changePage('#principal', {
            transition: 'pop',
            changeHash: false,
        })
    })

    function reproducirEmisora(indice) {
        $.mobile.changePage('#reproductorPagina', {
            changeHash: false,
            transition: 'flip',
        })
        pararSonido()
        $('#logoEmisoraSonando').attr('src', radios[indice].logo)
        reproductor.src= radios[indice].url
        $('#emisoraSonando').text(radios[indice].emisora)
        reproductor.play()
    }

    function pararSonido(){
        reproductor.src= ''
    }
})