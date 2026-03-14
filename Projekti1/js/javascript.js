// Javascript jutut

// Muokkaa niin, että ensin kysytään tehtävän "pääotsikko" ja sitten lisätään kohtia siihen + muokkausvaihtoehto


function lisaaListaan() {
    let mainTehtava = document.querySelector("#mainTehtava").value
    let lisays = document.querySelector("#lisays").value
    console.log (mainTehtava, lisays)

    const lista = document.querySelector("#lista"); // koko muuttujaa ei voi vaihtaa
    
    if(mainTehtava) {
        let rivi1 = lista.insertRow(); //lisää rivi
        let solu1 = rivi1.insertCell(0); //lisää solu
        let solu2 = rivi1.insertCell(1); //lisätään toinen solu (jätetään check markille eka solu)
        solu2.textContent = mainTehtava; // solun sisältö on mainTehtava
    }

    if(lisays) {
        let lisaRivi = lista.insertRow();
        let lisaSolu = lisaRivi.insertCell(0);
        let tsekkaus = document.createElement("input");
        tsekkaus.type = "checkbox";
        lisaSolu.appendChild(tsekkaus);
        let lisaSolu2 = lisaRivi.insertCell(1);
        lisaSolu2.textContent = lisays;
    }

    document.querySelector("#mainTehtava").value = ""; 
    document.querySelector("#lisays").value = ""; } // tyhjennetään kenttä

// Lisätään kuuntelija checkboxeille, kun merkattu tehdyksi / kun merkkaus poistetaan
    lista.addEventListener("change", function(merkattu) {
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



// Muokataan painikkeille kuuntelijat, jotka reagoivat, kun hiiri menee napin päälle/poistuu päältä
let tallennaNappi = document.querySelector("#tallennaNappi")
tallennaNappi.addEventListener("mouseenter", function() {
    tallennaNappi.style.backgroundColor="#b990fa";})

    tallennaNappi.addEventListener("mouseleave", function() {
    tallennaNappi.style.backgroundColor="#c0b1da";
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


/* // Lisää rivi taulukkoon
function lisaaListaan() {
    let mainTehtava = document.querySelector("#mainTehtava").value
    let tehtava = document.querySelector("#tehtava").value
    console.log (mainTehtava, tehtava)

    const lista = document.querySelector("#lista"); // koko muuttujaa ei voi vaihtaa
    
    if(mainTehtava) {
        let rivi1 = lista.insertRow(); //lisää rivi
        let solu1 = rivi1.insertCell(0); //lisää solu
        solu1.textContent = mainTehtava; // solun sisältö on mainTehtava
    }

   if(tehtava) {
        let rivi2 = lista.insertRow();
        let solu2 = rivi2.insertCell(0);
        solu2.textContent = tehtava;}

    document.querySelector("#mainTehtava").value = ""; // tyhjennetään kenttä
    document.querySelector("#tehtava").value = "";} */



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