export interface Book {
    _id?: number;
    title: string;
    author: string;
    pages?: number;
    readed?: boolean;
    image?: string;
    favourite?: boolean;
    __v?: number;
}