import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    typeUtilisateur: {
        type: Schema.Types.ObjectId,
        ref: 'typeutilisateur',
    }
});

const User = model('User', userSchema);

export default User;