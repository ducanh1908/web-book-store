import { Request, Response } from "express";
import { Gerne } from "../model/gerne-model"

class GerneController {

    getAll = async(req:Request , res: Response)=>{
        let gernes =  await Gerne.find();
        res.status(200).json(gernes)
    }
    addGerne = async(req: Request, res: Response) =>{
        let gerne = req.body;
        let gernes =  await Gerne.create(gerne);
        res.status(200).json(gernes);
    }
    deleteGerne = async(req:Request, res : Response)=>{
        let id = req.params.id;
        let gerne = await Gerne.findById({_id : id});
        if(!gerne) {
            res.status(400).json();
        }
        gerne?.delete();
        res.status(200).json();
    }
    updateGerne = async (req:Request, res: Response)=>{ 
        let id = req.params.id;
        let gerne = await Gerne.findById(id);
        if(!gerne) {
            res.status(200).json()
        }
        let data = req.body;
        console.log(data);
        await Gerne.findByIdAndUpdate({_id: id},data);
        data._id = id;
        res.status(200).json(data);
    }

}
export default new GerneController();