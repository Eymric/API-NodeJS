import Reservation from "../models/Reservation";

class ReservationController{

    static async create(req,res){
        let status = 200;
        let body = {};

        try {
            let reservation = await Reservation.create({
                idTrajet: req.body.idTrajet,
                idBras: req.body.idBras,
                idClient: req.body.idClient,
                reservationStatut: req.body.reservationStatut
            })
            body = {reservation, 'message': 'Reservation created'};
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
            let reservation = await Reservation.findById(id);
            body = {reservation, 'message':'Reservation'};
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
            let reservation = await Reservation.findByIdAndUpdate(id);
             await Reservation.update(req.body);
            body = {reservation, 'message': 'Updated'};
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
             await Reservation.findByIdAndDelete(id);
            body = {Reservation, 'message': 'Deleted'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }   
}

    


export default ReservationController;

/**
 * findOne('slug')
 */
