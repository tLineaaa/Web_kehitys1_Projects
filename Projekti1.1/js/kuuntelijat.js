// Javascript jutut
// tulee käytettyä // ja /* */, kun on tehnyt myös CSS:ää samalla

// Extraextralisättävää:
// - muokkaus- ja siirtomahis (muokkaa tehtäväosiota tai poista yksi osio, siirrä lista valmiista takaisin aktiivisiin)
// - kaikkien valmiiden listojen samanaikainen poisto
// - alasvetovalikko kaikista listoista otsikoineen (click avaa tietyn listan?)
// - vielä tarkemmat tarkastukset palautelomakkeeseen ja sen sähköpostiosioon
// - laskuri auki olevista tehtävistä tai listoista
// - HTML5 drag&drop

// --- Hakee localStoragesta tallennetut listat ---
function haeTallennetut() {
    const data = localStorage.getItem("kaikkiListat");
    return data ? JSON.parse(data) : [];
}

// --- Tallentaa listat localStorageen ---
function tallennaKaikkiListat(listat) {
    localStorage.setItem("kaikkiListat", JSON.stringify(listat));
}

// --- Päivittää localStorageen kaikki wrapperit ---
function paivitaTallennus() {
    const wrapperit = document.querySelectorAll(".lista-wrapper");
    const tallennettavat = [];

    wrapperit.forEach(wrapper => {
        const otsikko = wrapper.querySelector("th").textContent;
        const tehtavat = [];
        wrapper.querySelectorAll("tbody tr").forEach(rivi => {
            const tehtavaTeksti = rivi.cells[1].textContent;
            const merkattu = rivi.cells[0].querySelector("input").checked;
            tehtavat.push({tehtava: tehtavaTeksti, tehty: merkattu});
        });
        tallennettavat.push({otsikko, tehtavat});
    });

    tallennaKaikkiListat(tallennettavat);
}

// Luodaan lista otsikolla
function luoLista() {
    let mainTehtava = document.querySelector("#mainTehtava").value; /*otetaan kenttään syötetty sisältö*/
    
    // Lisää kirjoituskohta ja kortit taulukoille
   if (mainTehtava === "") return; /* jos kenttä on tyhjä, ei tehdä mitään*/

    let uusiLista = document.createElement("table"); /*luodaan uusi listaustaulukko*/

    let otsikonPaikka = uusiLista.createTHead(); /*paikka otsikolle*/
    let rivi = otsikonPaikka.insertRow(); /*rivi taulukkoon*/
    let otsikonSolu = rivi.insertCell(0); /*solu riville */
    otsikonSolu = document.createElement("th") /*Tehdään otsikkoSolusta th, jotta saadaan erotettua tämän teksti tehtävien tekstistä (muotoilun vuoksi)*/
    otsikonSolu.textContent = mainTehtava; /* saadaan syötetty otsikko soluun*/
    rivi.appendChild(otsikonSolu);

    // Luodaan listaan paikka tehtävien lisäykselle
    let tehtavienPaikka = document.createElement("tbody");
    uusiLista.appendChild(tehtavienPaikka);

    let listojenPaikka = document.querySelector(".listanPaikka"); /*osoitetaan listojen paikka (missä tulee näkymään)*/

    document.querySelector("#mainTehtava").value = ""; /* tyhjennetään kenttä */
    
    // Luodaan jokaisen tehtävälistan loppuun poista tehtävä -painike 
    let poistaTehtNappi = document.createElement("button");
    poistaTehtNappi.id = "poistaTehtNappi"; // annetaan napille id, jotta muotoilu toimii css:ssä (voidaan kutsua sillä)
    poistaTehtNappi.textContent = "Poista lista";

    // Lisätään kuuntelijat
    poistaTehtNappi.addEventListener("click", function() { // kun klikataan
        let poisto = confirm("Oletko varma, että haluat poistaa listan?"); // varmistus
        if (poisto === true) { // jos vastaus kyllä
            uusiLista.remove(); // poista lista
            poistaTehtNappi.remove(); // poista nappi         
    }});

    poistaTehtNappi.addEventListener("mouseenter", function() {
        poistaTehtNappi.style.backgroundColor="rgb(236, 68, 63)";})

    poistaTehtNappi.addEventListener("mouseleave", function() {
        poistaTehtNappi.style.backgroundColor="#f86d68";
    });

    // Luo wrapper-divi taulukolle + poista-napille
    let listaWrapper = document.createElement("div");
    listaWrapper.className = "lista-wrapper";
    listaWrapper.style.display = "flex";
    listaWrapper.style.flexDirection = "column"; // table päälle, nappi alle
    listaWrapper.style.alignItems = "stretch";    // keskitetään nappi ja table

    // Lisää lista ja poista-nappi wrapperiin
    listaWrapper.appendChild(uusiLista);
    listaWrapper.appendChild(poistaTehtNappi);

    // Lisää wrapper listojenPaikkaan
    listojenPaikka.appendChild(listaWrapper);

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

            // Tsekataan, jos kaikki on merkattu tehdyiksi
            let kaikkiCheckboxit = uusiLista.querySelectorAll("input[type='checkbox']");
            let kaikkiTehty = true;

            // Tarkistetaan kaikki checkboksit järjestyksessä kunnes i ei oo pienempi kuin kaikkien checkboksien määrä
            for (let i = 0; i < kaikkiCheckboxit.length; i++) {
                if (kaikkiCheckboxit[i].checked === false) { // Jos joku ei oo tehty, niin tulos on epätosi
                    kaikkiTehty = false;
                }
            }

        if (kaikkiCheckboxit.length > 0) { // Jos kaikki checkboksit onkin tsekattuina
            if (kaikkiTehty) {
                uusiLista.parentElement.style.display = "none"; // Jemmataan kokonaan tehdyt listat
            } else {
                uusiLista.parentElement.style.display = "flex"; // Muutoin näytetään (css:ssä määritelty normitila flexiksi)
            }
        }
        paivitaTallennus();
});
    // Vaihdetaan lisäys-kohdat näkyville
    document.querySelector("#lisays").style.display = "block";
    document.querySelector("#lisaaNappi").style.display = "block";
    paivitaTallennus();
}

// Luodaan tehtäviä listaan
function lisaaListaan() {
    let lisays = document.querySelector("#lisays").value // valitaan kenttään syötetty sisältö
    if(lisays === "") return; // jos kenttä tyhjä, ei tehdä mitään

    let listat = document.querySelectorAll(".listanPaikka table") // valitaan kaikki listat
    if (listat.length === 0) return; // jos listoja ei vielä ole luotu, palaa
    
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
    
 
    document.querySelector("#lisays").value = ""; // tyhjennetään kenttä
    paivitaTallennus();
}


// Muokataan painikkeille kuuntelijat, jotka reagoivat, kun hiiri menee napin päälle/poistuu päältä ja kun niitä klikataan
let uusiNappi = document.querySelector("#uusiNappi");

if(uusiNappi) { // tarkistetaan, että uusiNappi löytyy, koska sitä ei ole joka sivulla (chatGPT)
    uusiNappi.addEventListener("mouseenter", function() { // jos hiiri menee napin päälle
    uusiNappi.style.backgroundColor="#c0b1da";}) // muuta napin taustaväriä

    uusiNappi.addEventListener("mouseleave", function() { // jos hiiri poistuu napin päältä
    uusiNappi.style.backgroundColor="#b990fa"; // muuta taustaväriä (palauttaa saman kuin alkuperäinen oli)
})
    uusiNappi.addEventListener("click", function(e) { // lisätty klikkauskuuntelija
        let syote = document.querySelector("#mainTehtava").value; // syote on mainTehtava-value

        if (syote === "") { // jos syöte on tyhjä, herjaa // jos yllämainittu syote on tyhjä
            alert("Kirjoita tehtävä!"); // herjaa
            return
        }
        luoLista(); // kutsuu funktion luoLista()
});
}

let lisaaNappi = document.querySelector("#lisaaNappi");

if (lisaaNappi) {
    lisaaNappi.addEventListener("mouseenter", function() {
        lisaaNappi.style.backgroundColor="#d8ffa4";})

    lisaaNappi.addEventListener("mouseleave", function() {
        lisaaNappi.style.backgroundColor="#afe962";
    
    lisaaNappi.addEventListener("click", function() {
        lisaaListaan();
    });
});
}


let poistaNappi = document.querySelector("#poistaNappi");

if (poistaNappi) {
    poistaNappi.addEventListener("mouseenter", function() {
        poistaNappi.style.backgroundColor="rgb(236, 68, 63)";})

    poistaNappi.addEventListener("mouseleave", function() {
        poistaNappi.style.backgroundColor="#f86d68";
    
    poistaNappi.addEventListener("click", function() {
        poistaListalta();
    });
});
}

let resetNappi = document.querySelector("#resetNappi");

if (resetNappi) {
    resetNappi.addEventListener("mouseover", function() {
        resetNappi.style.backgroundColor="rgb(236, 68, 63)";})

    resetNappi.addEventListener("mouseout", function() {
        resetNappi.style.backgroundColor="#f86d68";
    
    resetNappi.addEventListener("click", function() {
        palautaListaan();
    })
});
}

// Kun sivu ladataan (avataan, esim. käynti index.htmlstä done.htmlään ja takaisin, niin sitten:)
window.onload = function() {
    const kaikkiListat = haeTallennetut();

    // Tsekataan, jos enteriä painetaan syötekentässä (kuuntelijat) > otetaan syöte talteen
    const mainTehtavaInput = document.querySelector("#mainTehtava"); // oikea kohta html:ssä
    if(mainTehtavaInput) { // jos löytyy (ei ole kaikilla sivuilla tätä)
        mainTehtavaInput.addEventListener("keydown", function(e) { // lisää kuuntelija näppäinpainamiselle
            if(e.key === "Enter") { // painike on tässä tapauksessa enter
                e.preventDefault();    // ei lähetetä "väärään aikaan"
                if(mainTehtavaInput.value !== "") { // jos sisältö ei oo tyhjä
                    luoLista(); // aja funktio luoLista
                }
            }
        });
    }
    // Sama kuin yllä, mutta lisays-kohdasta
    const lisaysInput = document.querySelector("#lisays");
    if(lisaysInput) {
        lisaysInput.addEventListener("keydown", function(e) {
            if(e.key === "Enter") {
                e.preventDefault();
                if(lisaysInput.value !== "") {
                    lisaaListaan();
                }
            }
        });
    }

    kaikkiListat.forEach(lista => {
        const kaikkiTehty = lista.tehtavat.length > 0 && lista.tehtavat.every(t => t.tehty);
        
        // Määritellään, näytetäänkö lista html-sivun perusteella
        const bodyId = document.body.id;
        if (bodyId === "index" && kaikkiTehty) return;       // index.html > keskeneräiset tehtävät
        if (bodyId === "removed" && !kaikkiTehty) return;    // removed.html > kokonaan hoidetut tehtävät

        // Luodaan lista-elementti, kuten funktiossa luoLista()
        let uusiLista = document.createElement("table");
        let otsikonPaikka = uusiLista.createTHead();
        let rivi = otsikonPaikka.insertRow();
        rivi.insertCell(0);
        let otsikkoSolu = document.createElement("th");
        otsikkoSolu.textContent = lista.otsikko;
        rivi.appendChild(otsikkoSolu);

        // Checkbox mukaan tarkastuksineen
        let tehtavienPaikka = document.createElement("tbody");
        lista.tehtavat.forEach(tehtavaObj => {
            let tehtavaRivi = tehtavienPaikka.insertRow();
            let tsekkausSolu = tehtavaRivi.insertCell(0);
            let tsekkaus = document.createElement("input");
            tsekkaus.type = "checkbox";
            tsekkaus.checked = tehtavaObj.tehty;
            tsekkausSolu.appendChild(tsekkaus);

            let tehtavaSolu = tehtavaRivi.insertCell(1);
            tehtavaSolu.textContent = tehtavaObj.tehtava;

            if (tehtavaObj.tehty) {
                tehtavaSolu.style.textDecoration = "line-through";
                tehtavaRivi.style.backgroundColor = "rgb(197, 223, 231)";
            }

            tsekkaus.addEventListener("change", function() {
                if(tsekkaus.checked) {
                    tehtavaSolu.style.textDecoration = "line-through";
                    tehtavaRivi.style.backgroundColor = "rgb(197, 223, 231)";
                } else {
                    tehtavaSolu.style.textDecoration = "none";
                    tehtavaRivi.style.backgroundColor = "#EAF6FF";
                }
                paivitaTallennus();

                // Tsekataan, jos kaikki on merkattu tehdyiksi
                let kaikkiCheckboxit = uusiLista.querySelectorAll("input[type='checkbox']");
                let kaikkiTehty = true;

                // Tarkistetaan kaikki checkboksit järjestyksessä kunnes i ei oo pienempi kuin kaikkien checkboksien määrä
                for (let i = 0; i < kaikkiCheckboxit.length; i++) {
                    if (kaikkiCheckboxit[i].checked === false) { // Jos joku ei oo tehty, niin tulos on epätosi
                        kaikkiTehty = false;
                    }
                }

                if (kaikkiCheckboxit.length > 0) { // Jos kaikki checkboksit onkin tsekattuina
                    if (kaikkiTehty) {
                        uusiLista.parentElement.style.display = "none"; // Jemmataan kokonaan tehdyt listat
                    } else {
                        uusiLista.parentElement.style.display = "flex"; // Muutoin näytetään (css:ssä määritelty normitila flexiksi)
                    }
                };
                paivitaTallennus();
        });
        });

        uusiLista.appendChild(tehtavienPaikka);

        // Lisätään kans mukaan wrapper + poista-nappi kuuntelijoineen
        let listaWrapper = document.createElement("div");
        listaWrapper.className = "lista-wrapper";
        listaWrapper.style.display = "flex";
        listaWrapper.style.flexDirection = "column";
        listaWrapper.style.alignItems = "center";

        let poistaTehtNappi = document.createElement("button");
        poistaTehtNappi.id = "poistaTehtNappi";
        poistaTehtNappi.textContent = "Poista lista";

        poistaTehtNappi.addEventListener("click", function() {
            if(confirm("Oletko varma, että haluat poistaa listan?")) {
                listaWrapper.remove();
                paivitaTallennus();
            }
        });

        poistaTehtNappi.addEventListener("mouseenter", function() {
            poistaTehtNappi.style.backgroundColor="rgb(236, 68, 63)";
        });
        poistaTehtNappi.addEventListener("mouseleave", function() {
            poistaTehtNappi.style.backgroundColor="#f86d68";
        });

        listaWrapper.appendChild(uusiLista);
        listaWrapper.appendChild(poistaTehtNappi);

        document.querySelector(".listanPaikka").appendChild(listaWrapper);
    });}

// Tarkistetaan syötteet
let palauteLomake = document.querySelector("#palauteLomake");
let sahkoposti = document.querySelector("#sahkoposti");
let palaute = document.querySelector("#palaute");
let sapoVirheViesti = document.querySelector("#sapoVirheViesti");
let palauteVirheViesti = document.querySelector("#palauteVirheViesti");
let onnistunutViesti = document.querySelector("#onnistunutViesti");

// Jos löytyy kohta sahkoposti+palaute+palauteLomake, lisätään kuuntelija palauteLomakkeen submittaamiseen
    if(sahkoposti && palaute && palauteLomake) {
        palauteLomake.addEventListener("submit", function(e) {
            e.preventDefault();

            let sahkopostiSyote = sahkoposti.value; // sähköpostiin syötetty teksti
            let palauteSyote = palaute.value.trim();
            let virhe = false; // virhe epätosi / tosi vaikuttaa siihen, mitä tehdään

            sapoVirheViesti.textContent = "";
            palauteVirheViesti.textContent = "";

            if (!sahkopostiSyote.includes("@")) { // jos sapo ei sisällä @-merkkiä, herjaa
                sapoVirheViesti.textContent = "Syötä sähköposti oikeassa muodossa";
                sahkoposti.style.borderColor = "red"; // muuta sapon syötekentän reunat ja kenttä punaiseksi
                sahkoposti.style.backgroundColor = "#ffcbc9";
                virhe = true;
            } else { // palautetaan värit oletukseen
                sahkoposti.style.borderColor = "";
                sahkoposti.style.backgroundColor = "";
            }

            if (palauteSyote.length < 3) {
                palauteVirheViesti.textContent = "Palaute on liian lyhyt";
                palaute.style.borderColor = "red";
                palaute.style.backgroundColor = "#ffcbc9";
                virhe = true;
            } else {
                palaute.style.borderColor = "";
                palaute.style.backgroundColor = "";
            }

            if (!virhe) { // jos ei virheitä, submit
                onnistunutViesti.textContent = "PALAUTE VASTAANOTETTU!";
                onnistunutViesti.style.display = "block";
                palauteLomake.reset();
            // oikeasti tässä olisi palauteLomake.submit();, mutta sitten viesti ei ehdi näkyä
            }
        });}



/*   mallina
    const lisaysInput = document.querySelector("#lisays");
    if(lisaysInput) {
        lisaysInput.addEventListener("keydown", function(e) {
            if(e.key === "Enter") {
                e.preventDefault();
                if(lisaysInput.value !== "") {
                    lisaaListaan();
                }
            }
        });
    } */