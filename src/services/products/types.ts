export interface CollectionListingAll {
    collection_listings: CollectionListingData[];
}

export interface CollectionListingData {
    collection_id: number;
    updated_at: Date;
    body_html: string;
    default_product_image: DefaultProductImage;
    handle: string;
    image: null;
    title: string;
    sort_order: string;
    published_at: Date;
}

export interface DefaultProductImage {
    id: number;
    created_at: Date;
    position: number;
    updated_at: Date;
    product_id: number;
    src: string;
    variant_ids: unknown[];
    width: number;
    height: number;
}


export interface Product {
    id:                   number;
    title:                string;
    body_html:            string;
    vendor:               string;
    product_type:         string;
    created_at:           Date;
    handle:               string;
    updated_at:           Date;
    published_at:         Date;
    template_suffix:      null;
    status:               string;
    published_scope:      string;
    tags:                 string;
    admin_graphql_api_id: string;
    variants:             Variant[];
    options:              Option[];
    images:               Image[];
    image:                Image;
}

export interface Image {
    id:                   number;
    product_id:           number;
    position:             number;
    created_at:           Date;
    updated_at:           Date;
    alt:                  null;
    width:                number;
    height:               number;
    src:                  string;
    variant_ids:          any[];
    admin_graphql_api_id: string;
}

export interface Option {
    id:         number;
    product_id: number;
    name:       string;
    position:   number;
    values:     string[];
}

export interface Variant {
    id:                     number;
    product_id:             number;
    title:                  string;
    price:                  string;
    sku:                    null;
    position:               number;
    inventory_policy:       string;
    compare_at_price:       null;
    fulfillment_service:    string;
    inventory_management:   null;
    option1:                string;
    option2:                null;
    option3:                null;
    created_at:             Date;
    updated_at:             Date;
    taxable:                boolean;
    barcode:                null;
    grams:                  number;
    image_id:               null;
    weight:                 number;
    weight_unit:            string;
    inventory_item_id:      number;
    inventory_quantity:     number;
    old_inventory_quantity: number;
    requires_shipping:      boolean;
    admin_graphql_api_id:   string;
}
