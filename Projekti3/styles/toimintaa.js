
// Taustakuvan elävöittäminen granim.js:n avulla https://sarcadass.github.io/granim.js/index.html
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
            transitionSpeed: 330 //nopeus "musiikille" sopivaksi
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
                aKuva = "media/eisaatavilla2.jpg"; // jos kuvaa ei saatavilla, näytä tämä kuva - toimiiko? entä risan kuvan kanssa?
                aKuva.classList.add("varakuva");
            }

            const kuva = document.createElement("img");
            kuva.src = aKuva;
            kuva.alt = album.name

            kuva.onerror = function() {
                this.onerror = null;
                this.src = "media/eisaatavilla2.jpg";
                this.classList.add("varakuva");
            };

            albumDiv.appendChild(kuva); // lisää kuva albumDiviin
            const albumiNimi = document.createElement("h3"); // määritellään documenttiin lisättäväksi h3
            albumiNimi.textContent = album.name; // sisältö on albumin nimi
            albumDiv.appendChild(albumiNimi); //lisää albumin nimi
            
            albumitPaikka.appendChild(albumDiv);
});

        });
}

//valinta-valikon toiminta jQuerylla
$("#valinta").change(function () {
    if ($("#valinta").val() !== "Avaa valikko") { // ("#valinta") tilalla voisi olla myös this, joka viittaa viimeisimpään $
        haeAlbumit($("#valinta").val()); // ja .val vähän sama kuin aiemmin value, mutta funktiona vrt. $("#asianNimi).text() tai sama, mutta loppu html()
    }
});

// sama kuin yllä, mutta ilman jQuerya
//if(valinta) {
//    valinta.addEventListener('change', function() { // kuuntelija, joka reagoi siihen, kun vaihdetaan alasvetovalikon valintaa
//        if (valinta.value !== "Avaa valikko") { // kun arvo siinä on muu kuin "Avaa valikko",
//            haeAlbumit(valinta.value); // aja funktio haeAlbumit() valinta-arvon mukaan
//        }});}

if(etsi) {
    etsi.addEventListener('input', function() { // kuuntelija, joka reagoi hakukentän syötteeseen
        if (etsi.value !== "") { // kunhan ei ole tyhjä kentä,
            haeAlbumit(etsi.value); // aja funktio haeAlbumi() etsi-arvon mukaan
        }
});}


// jQueryn testaus
$("#taustaSeis").click(function() {
    granimInstance.pause()
})


// animejs testaus
const { animate, stagger, splitText } = anime; // nämä toiminnot animejs:stä
const { chars } = splitText('h3', { words: false, chars: true, includeSpaces: true }); // määritellään kohde, säilytetään välilyönnit

// animoidaan merkit (ei pelkät sanat, kts. yllä)
animate(chars, {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: stagger(50),
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: false // toistaa vain kerran, jotta otsikko on luettavissa eikä rasittava
});

// kissabileet
const catApiKey = "live_Qq9TZXOog8U05SHE7mI2ELkWvNV4zC9D2p3DJYLqdRG7VqtsNKWQbHAoW8rljGfT"; // apiKey
const ullatusPaikka = document.querySelector("#ullatusPaikka"); // määritellään paikka yllätykselle
const kissaNappi = document.querySelector("#kissaNappi") // valikoidaan nappi
const musiikki = new Audio("media/the_mountain-brazilian-phonk-505181.mp3"); // luodaan audio (haetaan kansiosta sound)
musiikki.volume = 0.2; // musiikin äänenvoimakkuutta säädetty
const tanssiTyyli = ["hyppy", "hyppy2", "hyppy3"]
let i = 0;
let sankariKissa = document.querySelector("#suru")
const sankarinPaikka = document.querySelector("#juhlaKissa")

function haeKisu() {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=sava,beng,norw,mcoo,ragd&api_key=${catApiKey}`) // hae apikeyn kanssa kuvat (määrä 50, rotu sava, beng yms)
    
    .then((response) => response.json()) // palauta vastaus json muodossa

    .then(data => {
        console.log("KisuApin tulos", data); // logitetaan konsoliin
        
        ullatusPaikka.innerHTML = ""; // tyhjä paikka
    
        data.forEach(kissa => { // jokaista kissaa kohti
        const uusiKissaKuva = document.createElement("img"); // luo kuva
        uusiKissaKuva.src = kissa.url; // kuvan lähde on kissa.url (saatu fetchillä)
        uusiKissaKuva.classList.add("kisu", tanssiTyyli[i % 3]); // lisätään class ja tanssityyli
        i++;
        ullatusPaikka.appendChild(uusiKissaKuva); // lisää kuva ullatusPaikkaan
        });
    })
    .catch(error => console.error(`Virhe: ${error}`)); //näytä virhe console logissa
}

function vaihdaIloksi() { //Luodaan funktio
    sankariKissa.src = "media/iloinenkisu.png"; // joka vaihtaa sankariKissan lähteeksi iloinenkisu.png:n
}


function lisaaStop() { // Luodaan funktio
    let stopPaikka = document.querySelector("#stopPainike"); // paikka määritelty
    stopPaikka.innerHTML = ""; // tyhjenentty em. paikka
    let stop = document.createElement("button"); // luodaan nappi
    stop.id = "stopNappi"; // annetaan sille id
    stop.textContent = "Stop"; // sen tekstisisältö on Stop
    stopPaikka.appendChild(stop); // lisätään painike paikoilleen

    if(stop) { // Jos stop-nappi löytyy
        stop.addEventListener("mouseenter", function() { // kun hiiri menee sen ylle
            stop.style.backgroundColor="#c50101"; // vaihdetaan väri tummemmaksi
        })

        stop.addEventListener("mouseleave", function() { // kun hiiri lähtee napin yltä
            stop.style.backgroundColor="#ff0000"; // väri vaihtuu takaisin alkuperäiseksi
        })
    }

    stop.addEventListener('click', function() { // Lisätään kuuntelija stop-napille, klikatessa
        musiikki.pause();  // musiikki paussille
        granimInstance.pause(); // pysäytetään tausta
        ullatusPaikka.innerHTML = ""; // tyhjennä ullatusPaikka
    });
}

if(kissaNappi) { // tarkistetaan, että kissanappi löytyy
    kissaNappi.addEventListener('click', function() { // klikatessa sitä suorita funktio
    musiikki.play(); //soita musiikki
    haeKisu(); //haeKisu
    vaihdaIloksi(); //vaihda kuva iloiseksi (aja tämä funktio - se tekee tämän)
    lisaaStop(); // aja funktio lisaaStop, joka lisää Stop-napin
    granimInstance.play(); // käynnistetään tausta uusiksi (jotta tausta toimii, vaikka olisi aiemmin klikattu stop)
});}

// albumitPaikka järjesteltäväksi (jQuery UI)
$( "#albumitPaikka" ).sortable({
    revert: true });

// juhlaKissa myös liikuteltavaksi    
$( "#juhlaKissa" ).sortable({
    revert: true });