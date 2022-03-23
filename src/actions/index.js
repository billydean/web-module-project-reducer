export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_RESET = "MEMORY_RESET";
export const RESET_MEMORY = "RESET_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const memoryReset = () => {
    return ({type:MEMORY_RESET});
}

export const resetMemory = () => {
    return ({type:RESET_MEMORY});
}