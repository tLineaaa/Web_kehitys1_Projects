To do -lista 1.1
Web kehitys 1 (FRONT END)- kurssin ensimmäinene projektin työstöä

Luodaan yksinkertainen to do -lista Hyödynnetään DOM-skriptausta Julkaistaan Netlify-palvelussa

! ! !

Projektin nimi ja tekijät
Projekti 1.1. To do-lista DOM-skriptauksella
Taru Laine

Verkkolinkit:
Pääset julkaistuun sovellukseen käsiksi osoitteessa https://todolinea.netlify.app/
Linkki projektin videoesittelyyn google.com

Oma arvio työstä ja oman osaamisen kehittymisestä
Mielestäni onnistuin kaikenkaikkiaan projektissa hyvin. Vaatimusten mukaan käytin vain "natiivi" JavaScriptiä ja sovellus sisältää DOM-skriptausta sekä lomakkeen ja muita syöttökenttiä. Myös muut vaatimukset täyttyvät.
Sovellus sisältää lisäksi ylimääräisiä elementtejä eli sovellusta on työstetty enemmän kuin mitä vaatimukset osoittivat. Responsiivisuus toimii jo melko hyvin.

Parantamisen varaa olisi listan luonnin jälkeen tehtävien lisäysosion sijoittelussa. Nyt tehtävien lisäys tapahtuu vasta aktiivisten listojen alla, joten usean listan kohdalla se jää helposti huomaamatta (tarvitse skrollata alaspäin löytääkseen).
Tämä johtuu siitä, että loin alkuun kaikki tiedostot alusta alkaen itse, tarkoittaen html-, css- ja javascript- tiedostoja enkä hyödyntänyt, esim. Bootstrapia.

Korjaisin asian käyttämällä toisenlaista lomaketta enkä näin ollen muodostostaisi taulukkokortteja itse. Lisäsin Palaute-sivun, jotta pystyin näyttämään myös "oikean" lomakkeen syötön tarkastuksineen.

Jos saisin vielä lisätä asioita, lisäisin muokkauspainikkeen jokaisen listan alle, laittaisin Valmiit-sivun (removed.html) painikkeet toimimaan ja lisäisin alasvetovalikon, josta voi valita tietyn listan näkyville.
Lisäksi muokkaisin värejä ja muotoiluja.

Opin funktioiden luontia JavaScripitillä, osaan lisätä kuuntelijoita elementteihin ja osaan piilotaa sekä palautta elementtejä.
Erityisesti tykkäsin oppia, miten tarkistetaan jokin asia niin, että se toimii vain tietyllä html:llä.
Hieman epäselvää on vielä local storagen käyttöönotto. Nyt sain sen toimimaan ChatGPT:n avustuksella. Voi olla, että tarvitsee muutamat kerrat itse tehdä, jotta alkaa sujumaan kunnolla.

Antaisin itselleni pisteitä: xx/yy p.

Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka
Kurssi on ollut mielenkiintoinen ja tämä projekti oli mielestäni sopiva osaamistasoon nähden. Oppimistani tukisi parityöskentely, johon meillä on kyllä mahdollisuus, jos löytää omatoimisesti parin.

Sisällysluettelo:
Tietoja sovelluksesta
[Tunnetut virheet/bugit](#Tunnetut virheet/bugit)
Kuvakaappaukset
Teknologiat
Asennus
Lähestymistapa
Kiitokset
Lisenssi
Tietoja sovelluksesta
[Projektin nimi] on sovellus, joka ...

Tunnetut virheet/bugit
Painikkeiden "otantapinta" on välillä turhan pieni tai sitten klikkaus-tapahtuman kuuntelu jollain tapaa hidastaa toimintaa, sillä "lisää"-painike ei tunnu aina toimivan.

Kuvakaappaukset
![Etusivun malli, listojen lisäys ja poisto, checkboxit](image.png)

Kuva: Taru Laine


Teknologiat
Pohjan luonnissa käytin html:ää ja hyödynsin sen yhteydessä Bootstrapiä.
Muotoiluun käytin pääasiassa css:ää. Osa muotoilusta on JavaScriptin puolella (e.style.background tms.).
Pääpaino on kuitenkin JavaScriptissä, joka hoitaa painikkeiden ja kenttien tarkistusta sekä kuuntelua.


Asennus
Sovellus toimii suoraan Netlifyssä https://todolinea.netlify.app/
Syötä yllä annettu nettisivu verkkoselaimeesi ja paina Enter.
Tämän jälkeen voit alkaa luomaan listoja kirjoittamalla listan yläotsikon kohtaan "Listan nimi" ja klikkaamalla "Luo uusi lista"-painiketta. Tämän jälkeen listan pääotsikko ilmestyy näkyviin ja sen alle "Lisää tehtävä"-osio, johon voit tarkentaa, mitä tehtäviä haluat kirjata ylös.

Sinulla on mahdollisuus poistaa luotu lista sekä merkitä tehtäväosioita tehdyiksi.
Voit myös lähettää palautetta sovelluksesta.


Kiitokset

Hyödynsin projektin teossa Laurean Web-kehitys 1 (front end)-kurssin kurssimateriaalia sekä omaa aiempaa websivusto-projektiani https://github.com/tLineaaa/Websovellukset/tree/main/WS07_oma_sivu

Käytin ChatGPT:tä kirjoitusvirheiden etsinnässä sekä mm. Local Storagen toimintaan saattamisessa. Kommenteissa on mainittu muutamat muut kohdat, joissa chatGPT on auttanut löytämään oikean kohdan tai neuvonut, kuinka, esim. Bootstrapin muotoilu ohitetaan.


Lisenssi
MIT-lisenssi @ Taru Laine