// JavaScript tänne

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

const catApiKey = "live_Qq9TZXOog8U05SHE7mI2ELkWvNV4zC9D2p3DJYLqdRG7VqtsNKWQbHAoW8rljGfT"; // apiKey
const ullatusPaikka = document.querySelector("#ullatusPaikka"); // määritellään paikka yllätykselle
const kissaNappi = document.querySelector("#kissaNappi") // valikoidaan nappi
const musiikki = new Audio("sound/the_mountain-brazilian-phonk-505181.mp3"); // luodaan audio (haetaan kansiosta sound)
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
    sankariKissa.src = "images/iloinenkisu.png"; // joka vaihtaa sankariKissan lähteeksi iloinenkisu.png:n
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
        ullatusPaikka.innerHTML = ""; // tyhjennä ullatusPaikka
    });
}

if(kissaNappi) { // tarkistetaan, että kissanappi löytyy
    kissaNappi.addEventListener('click', function() { // klikatessa sitä suorita funktio
    musiikki.play(); //soita musiikki
    haeKisu(); //haeKisu
    vaihdaIloksi(); //vaihda kuva iloiseksi (aja tämä funktio - se tekee tämän)
    lisaaStop(); // aja funktio lisaaStop, joka lisää Stop-napin
});}