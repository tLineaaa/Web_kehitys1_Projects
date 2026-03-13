// Javascript jutut

// Muokkaa niin, että ensin kysytään tehtävän "pääotsikko" ja sitten lisätään kohtia siihen

// Lisää rivi taulukkoon
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
    document.querySelector("#tehtava").value = "";}



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