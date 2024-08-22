//utils.js

class stringUtils {
    static ConvertCamelCaseToTitleCase(input) {
        return input
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') 
        .replace(/^./, str => str.toUpperCase());
    }
}


export { stringUtils };