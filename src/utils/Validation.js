export const validateSchema = (schema, values) => {
    if (!schema || !values) return undefined;

    try {
        schema.validateSync(values, {abortEarly: false});
        return undefined
    } catch (err) {
        return err.inner.map((error) => {
            const errors = {};
            errors[error.path] = error.message;
            return errors
        });
    }
};