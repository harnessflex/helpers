export = BooleanCastError;
declare class BooleanCastError extends Error {
    /**
    @param {string} message
    */
    constructor(message: string);
}
