export const validateSchema = (schema, values) => {
    if (!schema || !values) return undefined;

    try {
        schema.validateSync(values, {abortEarly: false});
        return undefined
    } catch (err) {
        const errors = {};
        err.inner.forEach((error) => {
            errors[error.path] = error.message
        });
        return errors;
    }
};