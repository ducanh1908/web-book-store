import { model, Schema } from "mongoose";

export interface IAuthor {
    name : string,
    yearOfBirth : string,
    nation : string;
    linkWiki : string
}
const authorSchema = new Schema<IAuthor>({
    name : String,
    yearOfBirth : String,
    nation : String,
    linkWiki : String
});

const Author = model<IAuthor>('Author', authorSchema);

export {Author}