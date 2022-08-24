import { model, Schema } from "mongoose";
import { IAuthor } from "./author-model";
import { IGerne } from "./gerne-model";
import { IPublisher } from "./publisher-model";

export interface IBook {
    name : string,
    gerne: IGerne;
    author : IAuthor;
    yearPublisher : String;
    publisher: IPublisher;
    status: string;
    price: number;
    description : string;
}

const bookSchema = new Schema<IBook>({
    name : String,
    gerne: {
        type : Schema.Types.ObjectId,
        ref:'Gerne',
    },
    author: {
        type: Schema.Types.ObjectId,
        ref : 'Author'
    },

    yearPublisher: String,
    publisher : {
        type: Schema.Types.ObjectId,
        ref:'Publisher'
    },
    status: String,
    price: Number,
    description: String
})
const Book = model<IBook>('Book', bookSchema);
export {Book};