## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http:### - localhost:3000](http:### - localhost:3000) with your browser to see the result.

# Deployment

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https:### - vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation on vercel](https:### - nextjs.org/docs/deployment) for more details.

## Deploy with docker on a ec2

follow the docs in the dockerfile or docker-compose to start and build the container

## Deploy with AWS amplify

here's the official docs [AWS amplify deploat](https:### - aws.amazon.com/blogs/mobile/amplify-next-js-13/)

# Instructions

## indica perchè hai usato un certo stack e le procedure di architettura implementate (in base al tempo, efficenza e utilità)

-   Next.js (per la facilità dell'implementazione delle pagina di errore,loading e per i vari tool)
-   React
-   Typescript (per costruire un progetto full typesafe dalle chiamate api al client)
-   Tailwind (per l'ottimizazione del purge css e la facilità di sviluppo)

### - indica come hai gestito il problema del routing

-   ho utilizzato direttamente il routing out of the box di Next.js per minimizzare il bundle a differenza di scaricare una libreria come react-router o tanstack-router

### - indica come hai gestito il problema della gestione dello stato

-   React (useState)
-   tanstack-query (utilizzato per le chiamate all'api e per il caching dei dati )

### - indica come hai gestito il problema della gestione delle chiamate API

-   React con axios e tanstack-query

## - motiva le cose non fatte o che volevi che venissero fatte e quelle che non vanno (seo, client e rsc ecc)

-   SEO: ho implentato il seo con l'utilizzo dei rsc e dei metadata 
-   Client: in alcuni componenti ho utilizzato la metodologia per farvi vedere la differenza dei metodi per le chiamate all'api on il loading state ecc
-   Test: non ho implementato i Test ma ho riportato nella sezione della ui dei componenti di errore per problemi come errori dati dal client o dall'api 
