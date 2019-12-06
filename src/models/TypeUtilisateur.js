import {Schema, model} from 'mongoose';

const typeUtilisateurSchema = new Schema({
    designation: {
        type: String,
        required: true
    },
});

const TypeUtilisateur = model('typeutilisateur', typeUtilisateurSchema);

export default TypeUtilisateur;