# todo miei

-   fix nelle ci/cd envs
-   aggiungi il check delle env ad ogni avvio
-   fai doc per il deploy su aws
-   metti il loading state con ombreggiatura sulla sezione dei prodotti
-   cambia nome della repo publica con un nome più generico
-   metti docs con github copilot (spiega i generics nella sezione di routes e i vari componenti per il layout ecc)

# esercizio

-   un elenco di prodotti che si aggiorna a seconda della categoria selezionata.
-   L’elenco delle categorie sarà un menu che posizionerai, a tua scelta, all’interno della pagina.
-   Includi funzionalità di paginazione e ordinamento e fai sì che, al clic sul prodotto, ne vengano mostrati i dettagli.
-   Non trascurare l’usabilità della navigazione e inserisci tutto quello che ritieni opportuno, come se queste pagine facessero parte di un reale sito ecommerce.
-   inserire un file README.md con le istruzioni necessarie ad utilizzare la tua applicazione.

(Una volta completato, inviaci il link al repository a job@bitbull.it)

## DETTAGLI DI INTEGRAZIONE
Per recuperare i dati di catalogo potrai utilizzare una delle seguenti modalità:

-   La lista delle Collection: https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json
-   L’elenco dei prodotti associati ad una Collection: https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/{COLL_ID}/products.json
-   Il dettaglio di un Prodotto: https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/{PROD_ID}.json
