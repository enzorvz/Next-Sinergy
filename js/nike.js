function Mudarsite(esportes) {
    const imagens = {
        Basquete: {
            img1: "img/zoom freak 6.avif",
            img2: "img/Zoom Lebron NXXT.avif",
            img3: "img/jordan heir.avif",
            img4: "img/jordan luka.avif",
            img5: "img/gt cut 3.avif",
            img6: "img/giannis 4.avif",
            img7: "img/Jump Academy.jpg",
            img8: "img/precision 7.avif"
        },
        
        Futebol: {
            img1: "img/street gato.avif",
            img2: "img/beco 2.avif",
            img3: "img/tiempo 10.avif",
            img4: "img/lunar gato.avif",
            img5: "img/vapor 16.avif",
            img6: "img/phantom 6.avif",
            img7: "img/phantom gx.jpg",
            img8: "img/mercurial vapor 15.avif"
        },

        Corrida: {
            img1: "img/pegasus 41.avif",
            img2: "img/nike journey run.avif", 
            img3: "img/vomero 18 gtx.avif", 
            img4: "img/winflo  11.avif",
            img5: "img/trail ultrafly.avif", 
            img6: "img/nike pegasus plus.avif",
            img7: "img/tenis flex run 12.jpg",
            img8: "img/revolution 7.avif"
        }

    };

    document.getElementById("img1").src       = imagens[esportes].img1;
    document.getElementById("img2").src   = imagens[esportes].img2;
    document.getElementById("img3").src  = imagens[esportes].img3;
    document.getElementById("img4").src      = imagens[esportes].img4;
    document.getElementById("img5").src    = imagens[esportes].img5;
    document.getElementById("img6").src     = imagens[esportes].img6;
    document.getElementById("img7").src    = imagens[esportes].img7;
    document.getElementById("img8").src     = imagens[esportes].img8;
}