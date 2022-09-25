import Head from 'next/head'


// Table layout header 3 columns and footer 1 column
export default function Home() {
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
              <li>Julian Verouden, Huidig voorzitter</li>
              <li>Siem van den Tweel, Huidiger Secretaris</li>
              <li>Ruben Baggen, BSc, Huidig Penningmeester</li>
              <li>Cerine Touber</li>
              <li>Jack Rossman</li>
              <li>Jonathan Baumann, BSc</li>
              <li>Luc Blankestijn</li>
              <li>Laura Bröring</li>
              <li>Lisa van Dijk</li>
              <li>Lisanne Koetsier, BSc</li>
            </ul>
          <br></br>
          <h2>Interesse?</h2>
          <p class="text-xs">Stuur een slaapliedje in naar <a class= "underline" href="https://wa.me/[Redacted]">[Redacted]</a> <sup>Kaulo dom om dit online te zetten</sup> of door middel van een postduif met een USB-stick eraan. Het adres voor de postduif is Princetonplein 5, 3584CC, Kamer 2.81 </p>
          </div>
          <div class="w-full">
            <h1>Contact</h1>

            <a class="underline text-xs" href="mailto:info@dispuuthypnos.nl">info@dispuuthypnos.nl</a>
            <br></br>
            <h2 class="my-2">Regelement van orde</h2>
            <p class="text-xs">Het regelement van orde is hier te vinden.</p>
            <a download href="/files/RVO.pdf" class="underline text-xs">Regelement van orde</a>
          </div>
        </div>
      </main>
    </div>
  )
}

