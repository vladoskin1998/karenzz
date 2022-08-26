import ApiError from '../errors/api.erros.js';

export default function ErrorsMiddleware(err, req, res, next) {

    console.log("ApiError",err);

    if (err instanceof ApiError) {
    
        return res.status(err.status).json({ message: err.message })
    }
    // console.log(err.message)
    return res.status(500).json("Problem of server")
}

