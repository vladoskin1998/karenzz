import ApiError from '../errors/api.erros.js';
import { SERVER_ERROR } from '../config/config.js';

export default function ErrorsMiddleware(err, req, res, next) {

    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message })
    }

    return res.status(500).json(SERVER_ERROR)
}

