// Javascript jutut
// tulee käytettyä // ja /* */, kun on tehnyt myös CSS:ää - onko merkitystä?

// Lisää:
// - poistomahis (muokkausmahis, siirtomahis?)
// - virheilmoitus virheellisestä syötteestä ja ko. tekstikentän korostus
// - enterillä syötteen vastaanotto?

// entä jos kaikki tehtävät listalta on tehty, mitä listalle tapahtuu?

// Extraa:
// - alasvetovalikko kaikista listoista otsikoineen?
// - piilottaa / näyttää elementtejä (esim. tehtävienlisäys vasta otsikon jälkeen?)
// - laskuri auki olevista tehtävistä tai listoista?
// - HTML5 drag&drop
// - napit joka näyttää, esim. vain tehdyt, vain tekemättömät ja kaikki

// BOOTSTRAPia saa käyttää!


// muista tämä: e.preventDefault(); // Estetään lomakkeen oletustapahtuma (sivun lataus)


// Luodaan lista otsikolla
function luoLista() {
    let mainTehtava = document.querySelector("#mainTehtava").value; /*otetaan kenttään syötetty sisältö*/
    if (mainTehtava === "") return; /* jos kenttä on tyhjä, ei tehdä mitään*/

    let uusiLista = document.createElement("table"); /*luodaan uusi listaustaulukko*/

    let otsikonPaikka = uusiLista.createTHead(); /*paikka otsikolle*/
    let rivi = otsikonPaikka.insertRow(); /*rivi taulukkoon*/
    let otsikonSolu = rivi.insertCell(0);
    otsikonSolu = document.createElement("th") /*Tehdään otsikkoSolusta th, jotta saadaan erotettua tämän teksti tehtävien tekstistä (muotoilun vuoksi)*/
    otsikonSolu.textContent = mainTehtava; /* saadaan syötetty otsikko soluun*/
    rivi.appendChild(otsikonSolu);

    // Luodaan listaan paikka tehtävien lisäykselle
    let tehtavienPaikka = document.createElement("tbody");
    uusiLista.appendChild(tehtavienPaikka);

    let listojenPaikka = document.querySelector(".container2"); /*osoitetaan listojen paikka (missä tulee näkymään)*/
    listojenPaikka.appendChild(uusiLista);

    document.querySelector("#mainTehtava").value = ""; /* tyhjennetään kenttä */

    // Lisätään kuuntelija tarkistamaan checkboxin muutosta
    uusiLista.addEventListener("change", function(merkattu) {
        if (merkattu.target.type === "checkbox") {
            const rivi = merkattu.target.closest("tr"); /*Tässä chatGPT auttoi, että löytyy oikea solu*/
            const tekstiSolu = rivi.cells[1];

            // jos tsekkaus on checked
            if (merkattu.target.checked) {
                tekstiSolu.style.textDecoration = "line-through"; //vedetään teksti yli
                tekstiSolu.style.backgroundColor = "rgb(197, 223, 231)"; // vaihdetaan tekstin taustaväri
                rivi.style.backgroundColor = "rgb(197, 223, 231)"; // vaihdetaan checkboksin taustaväri
            }
            // muutoin
            else {
                tekstiSolu.style.textDecoration = "none"; // poistetaan yliviivaus
                tekstiSolu.style.backgroundColor = "#EAF6FF"; // vaihdetaan taustaväri takaisin alkuperäiseen
                rivi.style.backgroundColor = "#EAF6FF"; // sama kuin yllä
            }
        }
    });
}

// Luodaan tehtäviä listaan
function lisaaListaan() {
    let lisays = document.querySelector("#lisays").value // valitaan kenttään syötetty sisältö
    if(lisays === "") return; // jos kenttä tyhjä, ei tehdä mitään

    let listat = document.querySelectorAll(".container2 table") // valitaan kaikki listat
    let viimeisinLista = listat[listat.length -1]; // valitaan viimeisin luotu lista
    let kohta = viimeisinLista.querySelector("tbody") // valitaan kohta, johon tehtävät lisätään

    // Tehdään oma kohta checkboksille ja lisätään se tehtävän kanssa taulukkoon
    let lisaRivi = kohta.insertRow();
    let lisaSolu = lisaRivi.insertCell(0);
    let tsekkaus = document.createElement("input");
    tsekkaus.type = "checkbox";
    lisaSolu.appendChild(tsekkaus);
    let lisaSolu2 = lisaRivi.insertCell(1);
    lisaSolu2.textContent = lisays;
    
 
    document.querySelector("#lisays").value = "";
}  // tyhjennetään kenttä


// Muokataan painikkeille kuuntelijat, jotka reagoivat, kun hiiri menee napin päälle/poistuu päältä
let uusiNappi = document.querySelector("#uusiNappi")
uusiNappi.addEventListener("mouseenter", function() {
    uusiNappi.style.backgroundColor="#b990fa";})

    uusiNappi.addEventListener("mouseleave", function() {
    uusiNappi.style.backgroundColor="#c0b1da";
})

let lisaaNappi = document.querySelector("#lisaaNappi")
lisaaNappi.addEventListener("mouseenter", function() {
    lisaaNappi.style.backgroundColor="#afe962";})

    lisaaNappi.addEventListener("mouseleave", function() {
    lisaaNappi.style.backgroundColor="#d8ffa4";
})

let poistaNappi = document.querySelector("#poistaNappi")
poistaNappi.addEventListener("mouseenter", function() {
    poistaNappi.style.backgroundColor="rgb(236, 68, 63)";})

    poistaNappi.addEventListener("mouseleave", function() {
    poistaNappi.style.backgroundColor="#f86d68";
})



/*// --- Hakee LocalStoragesta tallennetut henkilöt ---
    function haeTallennetut() {
        const data = localStorage.getItem("kaikkiListat");
        // Jos ei ole dataa, palautetaan tyhjä taulukko
        return data ? JSON.parse(data) : [];
    }

// --- Tallentaa henkilöt LocalStorageen ---
    function tallenna(tehtava) {
        localStorage.setItem("kaikkiListat", JSON.stringify(kaikkiListat));
    }

// --- Näyttää tallennetut listana ---
  function naytaTallennetut() {
        tallennetut.innerHTML = ""; // Tyhjennetään lista ennen uudelleenluontia
        const kaikkiListat = haeTallennetut();
        for (let i = 0; i < kaikkiListat.length; i++) {
            const li = document.createElement("li");
            li.textContent = kaikkiListat[i].tehtava;
            tallennetut.appendChild(li);
        }
    }

// Lomakkeen lähetys
let tallenna = document.querySelector("tallennaNappi");
tallenna.addEventListener("click", function (e) {
    e.preventDefault(); // Estetään lomakkeen oletustapahtuma (sivun lataus)
    const tehtava = document.getElementById("tehtava").value;
 //          const tehtava2 = document.getElementById("tehtava2").value;
 //          const tehtava3 = document.getElementById("tehtava3").value;

        const kaikkiListat = haeTallennetut();
        lista.push({tehtava});
        tallenna(kaikkiListat);
        lisaaListaan(tehtava);
        naytaTallennetut();

        lomake.reset(); // Tyhjennetään lomake
        });

// --- Kun sivu ladataan, näytetään tallennetut tiedot ---
window.onload = function () {
    const kaikkiListat = haeTallennetut();
    for (let i = 0; i < kaikkiListat.length; i++) {
        lisaaTaulukkoon(kaikkiListat[i].tehtava);
            }
        naytaTallennetut();
        }; */