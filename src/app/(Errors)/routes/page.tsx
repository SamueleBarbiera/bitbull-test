import { useRouteError } from "react-router-dom";

export default function RouterError() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Un è successo un errore, riprova più tardi </p>
            <p>{error instanceof Error ? <i>{error.stack ?? error.message}</i> : "Errore sconosciuto"}</p>
        </div>
    );
}
