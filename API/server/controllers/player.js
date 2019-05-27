import model from '../models';

const { player } = model;

class players {
    static login(req, res) {
        const { player_name, password } = req.body
        return player
            .read({
                player_name
            })
            .then(userData => res.status(200).send({
                message: 'Login successfully',
                userData
            }))
    }

    static signUp(req, res) {
        const { player_name, password } = req.body
        return player
            .create({
                player_name,
                email,
                password
            })
            .then(userData => res.status(201).send({
                success: true,
                message: "Player create succesful",
                userData
            }))
    }
}

export default players;