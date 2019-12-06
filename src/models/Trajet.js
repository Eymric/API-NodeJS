import {Schema, model} from 'mongoose';

const trajetSchema = new Schema({
    nbMeubles: {
        type: Number,
        required: true
    },
    poids: {
        type: Number,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    dateReservation: {
        type: Date,
        required: true
    },
    adresseDepart: {
        type: String,
        required: true
    },
    adresseArrivee: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    idClient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    idBras: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    valide: {
        type: Boolean,
        default:false
    },
    demande: {
        type: Boolean,
        default:false
    }
});

const Trajet = model('Trajet', trajetSchema);

export default Trajet;