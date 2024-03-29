import Head from 'next/head'


// Table layout header 3 columns and footer 1 column
export default function Home() {
  // if time between 00:00 and 08:00 amsterdam time
  // then show the night version of the page
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const time = hours + minutes / 60 + seconds / 3600
  const night = time >= 0 && time < 8
  if (night) {
    return (
      <div className="container w-full mx-auto relative">
        <Head>
          <title>Dispuut Hypnos</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <img class="mx-auto object-fill w-1/5 block justify-center" src="/images/logo.png"></img>
          <h2 class='text-center'>Het is bedtijd, deze website zal openen om 8 uur s'ochtends</h2>
        </main>

      </div>
    )
  }
  else {
    return (
      <div className="container w-full mx-auto relative">
        <Head>
          <title>Dispuut Hypnos</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <img class="mx-auto object-fill w-1/5 block justify-center" src="/images/logo.png"></img>
          <div class="sm:columns-1 lg:columns-3 col-auto md:gap-8 m-8">
            <div class="inline-block w-full ">
              <h1>Introductie</h1>
              <br></br>
              <p class="text-xs">Hypnos is een gezelligheidsdispuut en onderdeel van studievereniging Sticky. Het dispuut
                poogt de belangrijkste levensbehoefte te begrijpen en te verheerlijken: slapen. Hypnos
                streeft ernaar om saamhorigheid en wederhoor te bieden aan de vele leden van Sticky die
                een passie hebben voor slapen, slapeloosheid, maar ook alles er tussenin. Slapen brengt
                enorm veel voordelen met zich mee, maar kan er tegelijkertijd voor zorgen dat je een
                gezellige avond mist. Hoe ga je hiermee om? Hypnos zal trachten zijn leden tot bezinning te
                laten komen door de dualiteit tussen het slapen en slapeloosheid bloot te leggen en te
                ervaren. Maar het voornaamste doel van Hypnos is om de excentrieke ervaringen van
                dromen om te zetten naar realiteit en hierbij activiteiten te organiseren buiten je
                comfortzone.</p>
            </div>
            <div class="inline-block w-full">
              <h1 class=''>Huidige leden</h1>
              <br></br>
              <ul class='list-disc list-inside text-xs'>
                <li>Siem van den Tweel, BSc, Huidig Voorzitter</li>
                <li>Julian Verouden, BSc, Huidig Secretaris</li>
                <li>Jeroen van Dam, BSc, Huidig Penningmeester</li>
                <li>Aidan Bruinsma</li>
                <li>Cerine Touber, BSc 2x </li>
                <li>Jack Rosenberg</li>
                <li>Jonathan Baumann, BSc</li>
                <li>Luc Blankestijn</li>
                <li>Laura Bröring, BSc </li>
                <li>Lisa van Dijk</li>
                <li>Lisanne Koetsier, BSc</li>
                <li>Ruben Baggen, BSc</li>
                <li>Shaam Majedi</li>
              </ul>
              <br></br>
              <h2>Interesse?</h2>
              <p class="text-xs">Stuur een slaapliedje in naar de Secretaris d.m.v Whatsapp, <a class="underline text-xs" href="mailto:dispuuthypnos@gmail.com">dispuuthypnos@gmail.com</a> of door middel van een postduif met een USB-stick eraan. Het adres voor de postduif is Princetonplein 5, 3584CC, Kamer 2.81 </p>
            </div>
            <div class="w-full">
              <h1>Contact</h1>

              <a class="underline text-xs" href="mailto:dispuuthypnos@gmail.com">info@dispuuthypnos.nl</a>
              <br></br>
              <h2 class="my-2">Regelement van orde</h2>
              <p class="text-xs">Het regelement van orde is hier te vinden.</p>
              <a download href="/files/RVO.pdf" class="underline text-xs">Regelement van orde</a>
            </div>
          </div>
        </main>
        <footer>
          <div class="text-center text-xs">
            <span><sub>Zwaar geinspireerd van stichtingsticky.nl®</sub></span>
          </div>
        </footer>
      </div>
    )
  }
}

