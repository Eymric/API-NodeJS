import TypeUtilisateur from "../models/TypeUtilisateur";

class TypeUtilisateurController{

    static async create(req,res){
        let status = 200;
        let body = {};

        try {
            let typeUtilisateur = await TypeUtilisateur.create({
                designation: req.body.designation
            })
            body = {typeUtilisateur, 'message': 'Type Utilisateur created'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
        }
        return res.status(status).json(body);
    }   

    static async details(req,res){
        let status = 200;
        let body = {};

        try {
            let id = req.params.id;
            let typeUtilisateur = await TypeUtilisateur.findById(id);
            body = {typeUtilisateur, 'message':'Type utilisateur'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
        }
        return res.status(status).json(body);
    }
    
    static async update(req,res){
        let status = 200;
        let body = {};

        try {
            let id = req.params.id;
            let typeUtilisateur = await typeUtilisateur.findByIdAndDelete(id);
             await typeUtilisateur.update(req.body);
            body = {typeUtilisateur, 'message': 'Updated'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }

    static async delete(req,res){
        let status = 200;
        let body = {};

        try {
            let id = req.params.id;
             await TypeUtilisateur.findByIdAndDelete(id);
            body = {TypeUtilisateur, 'message': 'Deleted'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }   
}

    


export default TypeUtilisateurController;

/**
 * findOne('slug')
 */