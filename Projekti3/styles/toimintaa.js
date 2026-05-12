var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'media/colour-sound-wave-e1452611417196.jpg',
        blendingMode: 'multiply',
        stretchMode: ['stretch', 'stretch']
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 300
        }
    }
});

const apiKey = "c0d19f1b72c394fdeceff9a65f9b5bb7"; // API-avain, jotta päästään käyttämään sivuston tietoja

// Määritellään, että nämä sanat tarkoittaa näitä kohtia html:ssä
const valinta = document.querySelector("#valinta");
const etsi = document.querySelector("#exampleDataList");
const albumitPaikka = document.querySelector("#albumitPaikka");


function haeAlbumit(artisti) {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${encodeURIComponent(artisti)}&api_key=${apiKey}&format=json`) //encodeURIComponent hyväksyy välilyönnit ja erikoismerkit
        .then ((response) => response.json())
        .then (function(data) {
            console.log("Koko APIn vastaus:", data);
            albumitPaikka.innerHTML = ""; //tyhjennä aiemmat albumit näkyviltä


        const albumit = data.topalbums.album;
        albumit.forEach(function(album) {
            const albumDiv = document.createElement("div"); // jokaiselle albumille oma kolo, class name albumDiv, esim. cssää varten
            albumDiv.className = "albumDiv";


            const etsiKuva = album.image.find(function(i) { // etsitään albumin kuvaa
                return i.size === "large"; // halutaan iso kuva, tarjolla kolmea kokoa
            });

            let aKuva;
            if (etsiKuva && etsiKuva["#text"] !== "") {
                aKuva = etsiKuva["#text"];
            
            } else {
                aKuva = "images/eisaatavilla2.jpg"; // jos kuvaa ei saatavilla, näytä tämä kuva - toimiiko? entä risan kuvan kanssa?
                aKuva.classList.add("varakuva");
            }

            const kuva = document.createElement("img");
            kuva.src = aKuva;
            kuva.alt = album.name

            kuva.onerror = function() {
                this.onerror = null;
                this.src = "images/eisaatavilla2.jpg";
                this.classList.add("varakuva");
            };

            albumDiv.appendChild(kuva); // lisää kuva albumDiviin
            const albumiNimi = document.createElement("h3"); // määritellään documenttiin lisättäväksi h3
            albumiNimi.textContent = album.name; // sisältö on albumin nimi
            albumDiv.appendChild(albumiNimi); //lisää albumin nimi

            // Kesken, klikatessa saataisiin kappaleet
            //albumDiv.addEventListener("click", function() {
            //    haeBiisit(artisti, album.name)
            //});
            
            albumitPaikka.appendChild(albumDiv);
        });
        });
        }

if(valinta) {
    valinta.addEventListener('change', function() { // kuuntelija, joka reagoi siihen, kun vaihdetaan alasvetovalikon valintaa
        if (valinta.value !== "Avaa valikko") { // kun arvo siinä on muu kuin "Avaa valikko",
            haeAlbumit(valinta.value); // aja funktio haeAlbumit() valinta-arvon mukaan
        }
});}

if(etsi) {
    etsi.addEventListener('input', function() { // kuuntelija, joka reagoi hakukentän syötteeseen
        if (etsi.value !== "") { // kunhan ei ole tyhjä kentä,
            haeAlbumit(etsi.value); // aja funktio haeAlbumi() etsi-arvon mukaan
        }
});}