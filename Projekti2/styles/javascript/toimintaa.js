// JavaScript tänne

const apiKey = "c0d19f1b72c394fdeceff9a65f9b5bb7"; // API-avain, jotta päästään käyttämään sivuston tietoja

// Määritellään, että nämä sanat tarkoittaa näitä kohtia html:ssä
const valinta = document.querySelector("#valinta");
const etsi = document.querySelector("#exampleDataList");
const albumitPaikka = document.querySelector("#albumitPaikka");

// KESKEN biisien haku - onclick jo alempana function haeBiisit(artisti, albumi),
// samoin artistin nimi näkyviin ja puuttuva (tai risa?) kuva - kaikki aloitettu

function haeAlbumit(artisti) {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${encodeURIComponent(artisti)}&api_key=${apiKey}&format=json`) //encodeURIComponent hyväksyy välilyönnit ja erikoismerkit
        .then ((response) => response.json())
        .then (function(data) {
            console.log(`Koko APIn vastaus: ${data}`);
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
            }

            const kuva = document.createElement("img");
            kuva.src = aKuva;
            kuva.alt = album.name

            kuva.onerror = function() {
                this.onerror = null;
                this.src = "images/eisaatavilla2.jpg"
            };

// "Selain katsoo sitä vähän kuin yrittäisit asentaa renkaat kahvikuppiin."
// "JavaScript on joskus kuin innokas siivooja: jos annat sille väärän huoneen avaimet, se tyhjentää koko talon."
// "Nyt koodisi pitäisi taas herätä henkiin ilman dramatiikkaa. JavaScript rakastaa tällaisia kirjoitusvirheitä – ne ovat sen lempivälipalaa."

//            const nimiPaikka = document.querySelector("#nimiPaikka"); // Paikka artistin nimelle
//          nimiPaikka.innerHTML = `<h1>${album.artist.name}</h1>` // Artistin nimi näkyviin kaikkien albumien ylle
//            albumDiv.innerHTML = `<img src="${aKuva}" alt="${album.name}"><h3> ${album.name}</h3>`; // albumDiviin haettu kuva ja albumin nimi

            albumDiv.appendChild(kuva); // lisää kuva albumDiviin
            const albumiNimi = document.createElement("h3"); // määritellään documenttiin lisättäväksi h3
            albumiNimi.textContent = album.name; // sisältö on albumin nimi
            albumDiv.appendChild(albumiNimi); //lisää albumin nimi

            // Kesken, klikatessa saataisiin kappaleet
            albumDiv.addEventListener("click", function() {
                haeBiisit(artisti, album.name)
            });
            
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


// let data = JSON.parse (xmlhttp.responseText)
// console.log(data)

// ullatus.html:n työstämistä JATKA SYÖTTEEN TULOSTEEN KANSSA

const catApiKey = "live_Qq9TZXOog8U05SHE7mI2ELkWvNV4zC9D2p3DJYLqdRG7VqtsNKWQbHAoW8rljGfT";
const ullatusPaikka = document.querySelector("#ullatusPaikka");
const kissaNappi = document.querySelector("kissaNappi")

function haeKisu() {
    fetch = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${catApiKey}` // hae apikeyn kanssa kuvat (määärä 10, rotu beng) - MUOKKAA?
    
    .then((response) => response.json()) // palauta vastaus json muodossa

    .then(data => console.log(`KisuApin tulos ${data}`)) // logitetaan konsoliin

    .catch(error => console.error(`Virhe: ${error}`))
};

// PITIKÖ TEHDÄ TARKASTUS JSONIN KANSSA VAKIOTARKASTUS?

if(kissaNappi) { // tarkistetaan, että kissanappi löytyy
    kissaNappi.addEventListener('click', function() {
    haeKisu(); 
});}