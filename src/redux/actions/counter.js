export const INCREMENT = "counter/INCREMENT";
export const DEREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

export function increment(){
    return {type:INCREMENT}
}

export function decrement(){
    return {type:DEREMENT}
}

export function reset(){
    return {type:RESET}
}