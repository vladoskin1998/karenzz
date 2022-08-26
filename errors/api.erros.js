class ApiError extends Error {

    constructor(message, status = 400) {
        super(message)
        this.status = status
    }

    static badRequest(message, status = 400) {
        return new ApiError(message, status)
    }
}

export default ApiError
