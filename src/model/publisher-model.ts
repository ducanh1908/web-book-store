import { Schema, model } from "mongoose";

export interface IPublisher {
    name: string;
}

const publisherSchema = new Schema<IPublisher>({
    name : String
})

const Publisher = model<IPublisher>('Publisher', publisherSchema);

export {Publisher}