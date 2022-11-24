const checkValid = (value, setValue, validator) => {
    if (!value.text) {
        setValue(Object.assign(Object.assign({}, value), { error: "Isso é necessário" }));
        return false;
    }
    if (typeof validator === "function" && !validator(value.text)) {
        setValue(Object.assign(Object.assign({}, value), { error: "Isso é inválido" }));
        return false;
    }
    return true;
};
export default checkValid;
