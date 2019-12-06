import {Schema, model} from 'mongoose';

const reservationSchema = new Schema({
    idTrajet: {
        type: Schema.Types.ObjectId,
        ref: 'Trajet',
        required: true
    },
    idBras: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    idClient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reservationStatut: {
        type: Number,
        required: true
    }
});

const Reservation = model('Reservation', reservationSchema);

export default Reservation;