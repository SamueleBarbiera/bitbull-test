# Todo

## Documentazione

-   testa dockerfile per il deployment
-   inserire un file README.md con le istruzioni necessarie ad utilizzare la tua applicazione.
-   metti docs con github copilot (spiega i i vari componenti per il layout ecc)
-   indica perchè hai usato un certo stack e le procedure di architettura implementate (in base al tempo, efficenza e utilità)

## Dettagli e devEx

-   aggiungi il check delle env ad ogni avvio
-   metti il loading state con ombreggiatura sulla sezione dei prodotti
-   rimuovi dipendenze non usate
-   togli i file inutilizzati o le variabili nei file inutilizzate
-   togli use client dove puoi
-   elimina le usetransition con isPending con altro nel component products

## Features

-   sostituisci le categorie statiche del menu a tendina e nella sezione di filtraggio dei prodotti
-   gestisci la paginazione nella sezione dei prodotti
-   gestisci il filtraggio nella pagina dei prodotti (un elenco di prodotti che si aggiorna a seconda della categoria selezionata)
-   aggiungi dettagli sulla sezione di view del prodotto singolo
-   imposta il routing del breadcrum con le categorie

## DETTAGLI DI INTEGRAZIONE

-   La lista delle Collection: https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json
-   L’elenco dei prodotti associati ad una Collection: https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/{COLL_ID}/products.json
-   Il dettaglio di un Prodotto: https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/{PROD_ID}.json

### Una volta completato, inviaci il link al repository a job@bitbull.it
