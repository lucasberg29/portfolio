//utils.js

class stringUtils {
    static ConvertCamelCaseToTitleCase(input) {
        return input.replace(/([a-z])([A-Z])/g, '$1 $2');
    }
}


export {stringUtils};