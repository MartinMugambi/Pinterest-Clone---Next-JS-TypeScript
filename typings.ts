export enum API_DEATILS{
    baseUrl = 'https://api.unsplash.com/photos?page=1&per_page=30&client_id=',
    baseId= ''
}

export interface Post{
    id: string,
    created_at: string,
    updated_at: string,
    width: number,
    height: number,
    color: string,
    blur_hash: string,
    description: string,
    alt_description: string,
    urls: {
        raw: string,
        full: string,
        regular: string,
        small: string,
        thumb: string,
    }

    location: {
        title: string,
        name: string,
        city: string,
        country: string,

    }
}