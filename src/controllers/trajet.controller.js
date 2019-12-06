import Trajet from "../models/Trajet";

class TrajetController{

    static async create(req,res){
        let status = 200;
        let body = {};

        try {
            let trajet = await Trajet.create({
                nbMeubles: req.body.nbMeubles,
                poids: req.body.poids,
                prix: req.body.prix,
                dateReservation: req.body.dateReservation,
                adresseDepart: req.body.adresseDepart,
                adresseArrivee: req.body.adresseArrivee,
                description: req.body.description,
                idClient: req.body.idClient
            })
            body = {trajet, 'message': 'Trajet created'};
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
            let trajet = await Trajet.findById(id).populate({
                path: 'idClient',
                model: 'User',
            });
            body = {trajet, 'message':'Trajet'};
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
            let trajet = await Trajet.findByIdAndUpdate(id, req.body);
            body = {trajet, 'message': 'Updated'};
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
             await Trajet.findByIdAndDelete(id);
            body = {Trajet, 'message': 'Deleted'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }   


    static async getAllTrajets(req,res){
        let status = 200;
        let body = {};

        try {
            let trajets = await Trajet.find({demande: false}).populate('idClient')
            body = {trajets, 'message': 'Liste des trajets demande: false'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }

    static async getTrajets(req,res){
        let status = 200;
        let body = {};

        try {
            let trajets = await Trajet.find().populate('idClient')
            body = {trajets, 'message': 'Liste des trajets'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }

    static async getClient(req,res){
        let status = 200;
        let body = {};

        try {
            let id = req.params.id;
            let trajet = await Trajet.findById(id).populate('idClient');
            body = {trajet, 'message':'Client trajet'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
        }
        return res.status(status).json(body);
    }

    static async trajetsEnAttenteBras(req,res){
        let status = 200;
        let body = {};

        try {
            let id = req.params.id;
            let trajets = await Trajet.find({demande: true, idBras: id}).populate('idClient')
            body = {trajets, 'message': 'Liste des trajets en attente'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }

    // static async trajetsEnAttente(req,res){
    //     let status = 200;
    //     let body = {};

    //     try {
    //         let id = req.params.id;
    //         let trajets = await Trajet.find({demande: true, idBras: id}).populate('idClient')
    //         body = {trajets, 'message': 'Liste des trajets en attente'};
    //     } catch (error) {
    //         status = 500;
    //         body = {'message': error.message}
    // }
    // return res.status(status).json(body);
    // }
}

    


export default TrajetController;

/**
 * findOne('slug')
 */