import { Request, Response } from "express"
import { Publisher } from "../model/publisher-model"

class PublisherController {

    getAll = async(req:Request, res: Response)=>{
            let publishers = await Publisher.find();
            res.status(200).json(publishers)
    }
    addPublisher = async(req: Request, res: Response)=>{
        let publisher =  req.body;
        let publishers = await Publisher.create(publisher);
        res.status(200).json(publishers);
    }
    deletePublisher = async(req: Request, res: Response)=>{
        let id = req.params.id;
        let publisher = await Publisher.findById({_id:id});
        if(!publisher) {
            res.status(400).json();
        }
        publisher?.delete();
        res.status(200).json();
    }
    updatePublisher = async(req: Request, res: Response)=>{
        let id = req.params.id;
        let publisher = await Publisher.findById(id);
        if(!publisher){
            res.status(400).json();
        }
        let data = req.body;
        await Publisher.findByIdAndUpdate({_id: id}, data);
        data._id = id;
        res.status(200).json(data)
    }

}
export default new PublisherController();