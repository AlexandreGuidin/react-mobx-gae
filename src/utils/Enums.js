import React from "react";

export const FORM_STATUS = Object.freeze({
    VALID: {
        FORM: 'is-valid',
        FEEDBACK: 'valid-feedback'
    },
    INVALID: {
        FORM: 'is-invalid',
        FEEDBACK: 'invalid-feedback'
    },
    UNCHECKED: {
        FORM: '',
        FEEDBACK: ''
    }
});

export const BTN_STYLE = Object.freeze({
    PRIMARY: 'btn btn-primary',
    SECONDARY: 'btn btn-secondary',
    SUCCESS: 'btn btn-success',
    DANGER: 'btn btn-danger',
    WARNING: 'btn btn-warning',
    INFO: 'btn btn-info',
    LIGHT: 'btn btn-light',
    DARK: 'btn btn-dark'
});

export const BTN_OUTLINE_STYLE = Object.freeze({
    PRIMARY: 'btn btn-outline-primary',
    SECONDARY: 'btn btn-outline-secondary',
    SUCCESS: 'btn btn-outline-success',
    DANGER: 'btn btn-outline-danger',
    WARNING: 'btn btn-outline-warning',
    INFO: 'btn btn-outline-info',
    LIGHT: 'btn btn-outline-light',
    DARK: 'btn btn-outline-dark'
});

export const BTN_SIZE = Object.freeze({
    LARGE: 'btn-lg',
    SMALL: 'btn-sm',
});

