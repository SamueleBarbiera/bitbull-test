
export interface TCreateUpdate {
    codice: string
    nome: string
    id_conto_contabile: number
    id_conto_contabile2: number
    data_iniziorapporto: Date
    data_finerapporto: Date
    data_finevaliditaanagrafica: Date
    contabilita_ordinariasemplificata: boolean
    id_conto: number
    id_iva: number
    id_condizione: number
    id_pagamento: number
    id_esigibilita: number
    n_intento: string
    data_intento: Date
    indirizzo: string
    cap: string
    comune: string
    provincia: string
    categoria: string
    contocontabile: string
    agente: string
    zona: string
    swift: string
    iban: string
    telefono: string
    nazione: string
    email: string
    pec: string
    c_f: string
    p_iva: string
    causale: string
    rif_amministrazione: string
    indice_amministrazione: string
    pwd_app_scad: string
    gest: boolean
    testo_intento: string
    tipo_entita: string
    tipo_invio: number
    tipo_invio_2018: number
    spese_di_bollo: number
    note: string
    interno_esterno: boolean
}

export type TCreateClienti = TCreateUpdate

export type TUpdateClienti = TCreateUpdate


export interface TClientiAll {
    data: Datum[];
    links: Links;
    meta: Meta;
}

export interface Datum {
    id: number;
    nascosto: null;
    nome: string;
    id_conto: number;
    id_iva: number;
    id_condizione: number;
    id_pagamento: number;
    codice: string;
    indirizzo: string;
    cap: string;
    comune: null;
    provincia: string;
    p_iva: string;
    c_f: string;
    email: string;
    pec: null;
    n_intento: string;
    data_intento: Date;
    categoria: null;
    nazione: string;
    contocontabile: null;
    agente: null;
    zona: null;
    swift: null;
    iban: null;
    telefono: null;
    rif_amministrazione: string;
    indice_amministrazione: string;
    causale: string;
    id_esigibilita: number;
    id_conto_contabile: null;
    id_conto_contabile2: null;
    data_iniziorapporto: null;
    data_finerapporto: null;
    data_finevaliditaanagrafica: null;
    contabilita_ordinariasemplificata: null;
    interno_esterno: null;
    testo_intento: null;
    note: null;
    gest: boolean;
    tipo_entita: string;
    tipo_invio: number;
    tipo_invio_2018: number;
    spese_di_bollo: number;
    pwd_app_scad: string;
}

export interface Links {
    first: string;
    last: string;
    prev: null;
    next: null;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Link {
    url: null | string;
    label: string;
    active: boolean;
}
