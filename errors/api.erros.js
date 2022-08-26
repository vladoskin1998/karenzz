class ApiError extends Error {

    constructor(message, status) {
        super(message)
        this.status = status
    }

    static badRequest(message, status) {
        return new ApiError(message, status)
    }
}

export default ApiError
