<h1> API-projekti </h1>
Web kehitys 1 (FRONT END)- kurssin toisen projektin työstöä  

1. Request data (Ajax call) from selected API
2. Save the result into a variable and select data you want to use
3. Display the selected data and make it look nice on the browser
4. The UI will have inputs / pulldown which make it possible for the user to initiate new data search

## Projektin nimi ja tekijät
Projekti 2 AJAX & API
Taru Laine

## Verkkolinkit:
Pääset julkaistuun sovellukseen käsiksi osoitteessa: LINK 
Projektin videoesittelyn url toimitettu palautuksen kommenttikentässä.

## Oma arvio työstä ja oman osaamisen kehittymisestä

Projektini täyttää tehtävänannon vaatimukset:
Suoritan datakutsun valitusta APIsta, itseasiassa kahdesta eri.
Hyödynsin fetchiä ja tulostin haetun tiedon perusteella
osiossa 1 artistin albumien nimet ja albumien kuvat näkymään siististi jokainen omana osionaan, ja osiossa 2 napin painalluksella kissakuvia joraamaan.

Index.html:n UI sisältää sekä alasvetovalikon että hakukentän, joilla etsiä
artisteja. Kun tehdään uusi haku, edelliset tiedot poistuvat näytöltä.

Bonuksena tein "Ylläri"-sivun, jossa nappia klikkaamalla
haetaan AJAX-kutsulla kissojen kuvia ja tuodaan ne näkyviin
ruudulle.

Jatkotyöstönä lisäisin mahdollisuuden albumien nimiä klikatessa
saada näkyviin kyseessä olevan albumin kappaleiden nimet.
Harkitsisin myös albumeiden asettamista ruudukkonäkymään listamaisen näkymän sijaan, ja muuttaisin hampurilaisvalikon tyyliä.
Bonusosioon voisi lisätä mahdollisuuden valita kissavieraiden rodun tai rodut.

Opin erityisesti API:n hyödyntämisestä; miten fetch kutsu tehdään, kuinka
vastausta käsitellään ja kuinka hyödyntää haettua dataa. Lisäksi opin
hakupalkin luonnista / toiminnasta (myös tässä hyödyntäen APIa).
Funktioiden luonti alkoi jo käydä luontevammaksi tämän projektin myötä.

Bonuksensa opin CSS:n hyödyntämisestä "animaatioiden" luonnissa sekä äänitiedoston käytöstä.

Antaisin itselleni pisteitä 10/10 p.


## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka
Kiitos, että annat aina tilaa kysymyksille ja keskustelulle.
Tämä projekti tuntui alkuun haastavalta ja aiheen parissa voisin
varmasti vielä jatkaa työskentelyä, jotta alkaa sujumaan sutjakkaammin.

## Sisällysluettelo:
- [Tietoja sovelluksesta](#tietoja-sovelluksesta)
- [Tunnetut virheet/bugit](#Tunnetut-virheet/bugit)
- [Kuvakaappaukset](#kuvakaappaukset)
- [Teknologiat](#teknologiat)
- [Asennus](#asennus)
- [Lähestymistapa](#lähestymistapa)
- [Kiitokset](#kiitokset)
- [Lisenssi](#lisenssi)

## Tietoja sovelluksesta
Sovellus on Musiikki API, jossa voit etsiä joko alasvetovalikosta
tai hakukentään kirjoittaen haluamaasi artistia. Sivulle tulostuu
näkymä haetun artistin albumeista kuvan ja tekstin kera.

Ylläri-osiossa voit klikata nappia ja aloittaa juhlat.
Myös tässä on hyödynnetty APIa, joskin kissa-apia.


## Tunnetut virheet/bugit
Blabla

## Kuvakaappaukset

Etusivun malli: listojen lisäys ja poisto, checkboxit  
![Etusivun malli: listojen lisäys ja poisto, checkboxit](assets/image.png)  

Palautelomake tarkistaa lähettäessä ja herjaa tarvittaessa  
![Palautelomake tarkistaa lähettäessä ja herjaa tarvittaessa](assets/image-1.png)  

Kuvat: Taru Laine  


## Teknologiat
Projektissa on hyödynnetty niin HTMLää, CSSää kuin JavaScriptiä.
Html:n navikointi- ja hakupalkin muotoilussa on hyödynnetty Bootstrapia.
Muutoin muotoilu on luotu tyylit.css -tiedostoon.
Tapahtumat on luotu DOM-skriptauksella toimintaa.js -tiedostoon.

Pääpaino on JavaScriptin puolella, jossa suoritetaan AJAX-kutsu kahteen
eri API-osoitteeseen. Tämän jälkeen luodaan halutuille tiedoille paikat ja
näytetään tuodut tiedot.


## Asennus
Sovellus toimii suoraan Netlifyssä: LINK

Linkin avattua etusivulla on alasvetovalikko, jossa lukee "Avaa valikko".
Sitä klikkaamalla voi listalta valikoida artistin, jonka jälkeen valitun artistin
albumit tulevat näkyviin nimien sekä albumikuvien kera.

Oikeassa yläkulmassa on hakukenttä, jonka vieresssä lukee "Etsi artistin mukaan".
Kun kohtaan "Kirjoita tähän..." alkaa kirjoittamaan haluamansa artistin tai bändin nimeä,
näkyy hakukentän alapuolella ehdotustulos ja ruudulla alkaa näkyä kirjoitetun artistin albumit.

Bonuksensa voit klikata vasemman ylävalikon "Ylläri"-painiketta.
Nyt ruudulla näkyy "Ei saatavilla"-kuvasta tuttu surullinen kissa,
jonka alapuolella on "Party button". Jos klikkaat painiketta,
alkaa musiikki soida, surullinen kissa muuttuu iloiseksi ja
sen kaverit ilmestyvät tanssimaan.
Kun on aika lopettaa bileet, klikkaa "Stop"-painiketta



## Kiitokset

Hyödynsin projektin teossa Laurean Web-kehitys 1 (front end)-kurssin kurssimateriaalia  
sekä omaa aiempaa [websivusto-projektiani](https://github.com/tLineaaa/Websovellukset/tree/main/WS07_oma_sivu)

Kiitos kurssitoveri Iinalle, jonka kanssa pohdittiin API:n toimintaa.

Käytin ChatGPT:tä debuggauksessa, ideoiden toiminnan varmistamisessa,
animaatioiden aikaansaannissa sekä kissakuvan muokkauksesa. 
 

Hyödynsin myös vinkkejä ja keskustelujen kommentteja sivustoilta:  
[GitHub Docs](https://docs.github.com/en)  
[Bootstrap](https://getbootstrap.com/)  
[Stack Overflow questions](https://stackoverflow.com/questions)  
[W3schools](https://www.w3schools.com/)  
[MDN](https://developer.mozilla.org/en-US/)  

Musiikki: [Brazilian Phonk by The_Mountain](https://pixabay.com/music/edm-brazilian-phonk-505181/)


## Lisenssi
[MIT-lisenssi](../LICENSE) @ [Taru Laine](https://github.com/tLineaaa)