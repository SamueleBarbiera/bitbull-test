export interface CollectionListingAll {
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
    variant_ids: any[];
    width: number;
    height: number;
}
