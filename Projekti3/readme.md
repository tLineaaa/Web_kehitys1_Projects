<h1> JS-sovellus ulkoisia kirjastoja käyttäen </h1>  
Web kehitys 1 (FRONT END)- kurssin kolmannen projektin työstöä  


## Projektin nimi ja tekijät
Projekti 3 Musiikki (ja kissa) API JS-kirjastoja hyödyntäen  
Taru Laine  


## Verkkolinkit:
Pääset julkaistuun sovellukseen käsiksi osoitteessa: [Musiikki API](https://tlineaaa.github.io/Web_kehitys1_Projects/Projekti3/)  
Projektin videoesittelyn url toimitettu palautuksen kommenttikentässä.  


## Oma arvio työstä ja oman osaamisen kehittymisestä
Projektini täyttää tehtävänannon vaatimukset:  
jQueryä on käytetty AJAXin ja DOM-skriptauksen tekemiseen.
Sovelluksen ulkoasussa on käytetty UI-kirjastoa (Bootstrap, jQuery UI + kevyet granim.js & anime.js)
Koodi on julkaistu GitHubissa ja sovellus GitHubin kautta.
Videodemo sekä projektiraportit on laadittu.

Opin alkeet siitä, kuinka JavaScript-kirjastoja voidaan hyödyntää.  
Hyödynsin näitä oppeja lisämäällä animoinnin sekä taustakuvaan,  
että "Valitse artisti" -otsikkoon (h3).  
Ekstrana lisäsin myös tausta-animaation pysäytyspanikkeen (käytettävyys huomioiden).  

Harjoittelin ja opin myös jQueryn käyttöä, jota hyödynsin projektissa  
lyhentääkseni koodia.  
  
Antaisin itselleni pisteitä 10/10 p.  


## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka
Kiitos, että annat aina tilaa kysymyksille ja keskustelulle.  
Tämä projekti tuntui alkuun haastavalta ja aiheen parissa voisin  
varmasti vielä jatkaa työskentelyä, jotta alkaa sujumaan sutjakkaammin.  


## Sisällysluettelo:
- [Tietoja sovelluksesta](#tietoja-sovelluksesta)
- [Tunnetut virheet/bugit](#tunnetut-virheet-tai-bugit)
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


## Tunnetut virheet tai bugit
API-avaimet ovat nyt näkyvillä, joten siitä GitHub voi herjata.
Avaimet voi piilottaa ja sen tekisin seuraavan vastaavan projektin kohdalla.

## Kuvakaappaukset

**Etusivu: Valitse artisti alasvetovalikosta tai etsi hakukenttään kirjoittaen**  
![Etusivu: Valitse artisti alasvetovalikosta tai etsi hakukenttään kirjoittaen ](images/index.jpg)  

**Valittu artisti Kiraw + albumien tiedot kuvien kanssa** 
![Kissa API -puolen iloinen kissa ](images/albumit.jpg)  

**Kissa API -puolen iloinen kissa**  
![Kissa API -puolen iloinen kissa ](images/ilokissa.jpg)  

Kuvat: Taru Laine  


## Teknologiat
Projektissa on hyödynnetty niin HTMLää, CSSää kuin JavaScriptiä.
Html:n navikointi- ja hakupalkin muotoilussa on hyödynnetty Bootstrapia.
Muutoin muotoilu on luotu tyylit.css -tiedostoon.
Tapahtumat on luotu DOM-skriptauksella toimintaa.js -tiedostoon.

Pääpaino on JavaScriptin puolella, jossa suoritetaan AJAX-kutsu (fetch-kutsu) kahteen
eri API-osoitteeseen. Tämän jälkeen luodaan halutuille tiedoille paikat ja
näytetään tuodut tiedot.


## Asennus
Sovellus toimii suoraan github.io:ssa [Musiikki API](https://tlineaaa.github.io/Web_kehitys1_Projects/Projekti3/index.html)  

Linkin avattua etusivulla on alasvetovalikko, jossa lukee "Avaa valikko".  
Sitä klikkaamalla voi valikoida listalta artistin, jonka jälkeen valitun artistin  
albumit tulevat näkyviin nimien sekä albumikuvien kera.  
     
Oikeassa yläkulmassa on hakukenttä, jonka vieresssä lukee "Etsi artistin mukaan".  
Kun kohtaan "Kirjoita tähän..." alkaa kirjoittamaan haluamansa artistin tai bändin nimeä,   
näkyy hakukentän alapuolella ehdotustulos ja ruudulla alkaa näkyä kirjoitetun artistin  albumeja.  
  
Bonuksensa voit klikata vasemman ylävalikon "Ylläri"-painiketta.  
Nyt ruudulla näkyy "Ei saatavilla"-kuvasta tuttu surullinen kissa,  
jonka alapuolella on "Party button". Jos klikkaat painiketta,  
alkaa musiikki soida, surullinen kissa muuttuu iloiseksi ja  
sen kaverit ilmestyvät tanssimaan.  
Kun on aika lopettaa bileet, klikkaa "Stop"-painiketta.  


## Kiitokset
  
Hyödynsin projektin teossa Laurean Web-kehitys 1 (front end)-kurssin kurssimateriaalia  
sekä omaa aiempaa [API-projektiani](https://github.com/tLineaaa/Web_kehitys1_Projects/tree/f336b3953503515c4ca79e88e48c04e4bbad5526/Projekti2)  

Käytin ChatGPT:tä debuggauksessa.  
 

Hyödynsin myös vinkkejä ja keskustelujen kommentteja sivustoilta:  
[Bootstrap](https://getbootstrap.com/)  
[Animejs](https://animejs.com/documentation/getting-started/)  
[Granim.js](https://sarcadass.github.io/granim.js/)  
[Acharya, D. P. 2025. The Best JavaScript Libraries and Frameworks. Kinsta](https://kinsta.com/blog/javascript-libraries/#the-most-popular-javascript-libraries)  

Musiikki: [Brazilian Phonk by The_Mountain](https://pixabay.com/music/edm-brazilian-phonk-505181/)


## Lisenssi
[MIT-lisenssi](../LICENSE) @ [Taru Laine](https://github.com/tLineaaa)  