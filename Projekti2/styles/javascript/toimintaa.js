// JavaScript tänne
const apiKey = "c0d19f1b72c394fdeceff9a65f9b5bb7"; // API-avain, jotta päästään käyttämään sivuston tietoja

// Määritellään, että nämä sanat tarkoittaa näitä kohtia html:ssä
const valinta = document.querySelector("#valinta");
const etsi = document.querySelector("#exampleDataList");
const albumitPaikka = document.querySelector("#albumitPaikka");

// KESKEN biisien haku - onclick jo alempana function haeBiisit(artisti, albumi),
// samoin artistin nimi näkyviin ja puuttuva (tai risa?) kuva - kaikki aloitettu

function haeAlbumit(artisti) {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${encodeURIComponent(artisti)}&api_key=${apiKey}&format=json`)
        .then ((response) => response.json())
        .then (function(data) {
            albumitPaikka.innerHTML = ""; //tyhjennä aiemmat albumit näkyviltä

        const albumit = data.topalbums.album;
        albumit.forEach(function(album) {
            const albumDiv = document.createElement("div"); // jokaiselle albumille oma kolo, class name albumDiv, esim. cssää varten
            albumDiv.className = "albumDiv";

            
            const etsiKuva = album.image.find(function(i) { // etsitään albumin kuvaa
                return i.size === "large"; // halutaan iso kuva, tarjolla kolmea kokoa
            });

            let aKuva;
            if (etsiKuva) {
                aKuva = etsiKuva["#text"];
            

            // TÄÄLTÄ JATKUU
            
            } else {
                aKuva = "../../images/eisaatavilla2.jpg"; // jos kuvaa ei saatavilla, näytä tämä kuva - toimiiko? entä risan kuvan kanssa?
            }

            // Lisää näkyviin myös tyyliin ${artisti.name}, määrittele
            albumDiv.innerHTML = `<img src="${aKuva}" alt="${album.name}"><h3>${album.name}</h3>`;

            // Kesken, klikatessa saataisiin kappaleet
            albumDiv.addEventListener("click", function() {
                haeBiisit(artisti, album.name)
            });
            
            albumitPaikka.appendChild(albumDiv);
        });
        });
        }

valinta.addEventListener('change', function() { // kuuntelija, joka reagoi siihen, kun vaihdetaan alasvetovalikon valintaa
    if (valinta.value !== "Avaa valikko") { // kun arvo siinä on muu kuin "Avaa valikko",
        haeAlbumit(valinta.value); // aja funktio haeAlbumit() valinta-arvon mukaan
    }
});

etsi.addEventListener('input', function() { // kuuntelija, joka reagoi hakukentän syötteeseen
    if (etsi.value !== "") { // kunhan ei ole tyhjä kentä,
        haeAlbumit(etsi.value); // aja funktio haeAlbumi() etsi-arvon mukaan
    }
});