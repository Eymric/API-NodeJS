import {Router} from 'express';
import UserController from '../controllers/user.controller';
import TypeUtilisateurController from '../controllers/typeUtilisateur.controller';
import TrajetController from '../controllers/trajet.controller';
import ReservationController from '../controllers/reservation.controller';

const router = Router();

router.get('/hello', (req, res) => {
    console.log('Hello');
});

//User
router.post('/user', UserController.create);
router.get('/user/:id', UserController.details);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);
router.get('/user/rang/:id', UserController.showRang);
router.get('/users', UserController.getAllUsers);

//TypeUtilisateur
router.post('/typeutilisateur', TypeUtilisateurController.create);
router.get('/typeutilisateur/:id', TypeUtilisateurController.details);
router.put('/typeutilisateur/:id', TypeUtilisateurController.update);
router.delete('/typeutilisateur/:id', TypeUtilisateurController.delete);

//Trajet
router.post('/trajet', TrajetController.create);
router.get('/trajet/:id', TrajetController.details);
router.put('/trajet/:id', TrajetController.update);
router.delete('/trajet/:id', TrajetController.delete);
router.get('/trajets', TrajetController.getAllTrajets);
router.get('/trajets/getall', TrajetController.getTrajets);
router.get('/trajets/attente/:id', TrajetController.trajetsEnAttenteBras);
router.get('/trajet/client/:id', TrajetController.getClient);

//Reservation
router.post('/reservation', ReservationController.create);
router.get('/reservation/:id', ReservationController.details);
router.put('/reservation/:id', ReservationController.update);
router.delete('/reservation/:id', ReservationController.delete);

//Auth
router.post('/auth', UserController.auth);

export default router;