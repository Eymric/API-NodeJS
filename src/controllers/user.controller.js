import User from "../models/User";

class UserController{

    static async create(req,res){
        let status = 200;
        let body = {};

        try {
            let user = await User.create({
                prenom: req.body.prenom,
                nom:req.body.nom,
                email: req.body.email,
                password: req.body.password,
                typeUtilisateur: req.body.typeUtilisateur,

            })
            body = {user, 'message': 'User created'};
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
            let user = await User.findById(req.params.id).populate('typeUtilisateur');
            body = {user, 'message':'Type utilisateur'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
        }
        return res.status(status).json(body);
    }

    static async showRang(req,res){
        let status = 200;
        let body = {};

        try {
            let user = await User.findById(req.params.id).populate('typeUtilisateur')
               let rang =  user.typeUtilisateur.designation;
            body = {rang, 'message':'Type utilisateur'};
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
            let user = await User.findByIdAndUpdate(id, req.body);
            body = {user, 'message': 'Updated'};
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
             await User.findByIdAndDelete(id);
            body = {User, 'message': 'Deleted'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }   

    static async getAllUsers(req,res){
        let status = 200;
        let body = {};

        try {
            let users = await User.find({}).populate('typeUtilisateur')
            body = {users, 'message': 'Liste des utilisateurs'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }

    static async auth(req,res){
        let status = 200;
        let body = {};

        try {
            if(await User.findOne({email: req.body.email, password: req.body.password})){
                let user = await User.findOne({email: req.body.email, password: req.body.password}).populate('typeUtilisateur')
                body = {user, 'message': 'connected'};
            }else{
                body = {'message': 'Email ou password incorrect'};
            }
        } catch (error) {
            status = 500;
            body = {'message': error.message}
    }
    return res.status(status).json(body);
    }   



}

    

export default UserController;

/**
 * findOne('slug')
 */