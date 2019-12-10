function inicio() {
    const app = new Vue({
        el: '#main',

        mounted(){
            this.emisoras= datosEmisoras
        },

        data: {
            emisoras: undefined,
            reproductor: new Audio(),
            indiceEmisoraSonando: undefined,
            sonando: false,
            logo: './logos/sonando.gif'
        },

        methods: {
            escucharEmisora(emisora){
                let indice= this.emisoras.indexOf(emisora)
                if(indice == this.indiceEmisoraSonando && this.sonando){
                    this.pausarSonido()
                    return
                } else if (indice == this.indiceEmisoraSonando && !this.sonando){
                    this.reanudarSonido()
                    return
                }
                if(this.indiceEmisoraSonando != undefined){
                    this.$refs.listaEmisoras.children[this.indiceEmisoraSonando].children[2].className= 'list-item__right ocultar'
                }
                this.reproductor.pause()
                this.reproductor.src= ''
                this.reproductor.src= emisora.url
                this.reproductor.play()
                this.logo= './logos/sonando.gif'
                this.$refs.listaEmisoras.children[indice].children[2].className= 'list-item__right mostrar'
                this.sonando= true
                this.indiceEmisoraSonando= indice
            },

            pausarSonido(){
                this.reproductor.pause()
                this.logo= './logos/pausa.gif'
                this.sonando= false
            },
                
            reanudarSonido(){
                this.reproductor.play()
                this.logo= './logos/sonando.gif'
                this.sonando= true
            }
        }
    })
}



document.addEventListener('deviceready', inicio(), false)