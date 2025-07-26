export const isEmpty = (v:any):boolean => {

    let type = typeof v;

    if (type === 'undefined') return true;

    if (type === 'boolean') return v;

    if (v === null) return true;

    if (v === undefined) return true;

    if (v instanceof Array) {
        if (v.length < 1) return true;
    } 

    if (type === 'string') {
        if (v.length < 1 || v === '0') return true;
    } 

    if (type === 'object' && Object.keys(v).length < 1) return true; 

    if (type === 'number' && v === 0) return true; 

    return false
}

export const delItemByIndex = (i:number, arr:Array<any>):Array<any> => {
    arr.splice(i, 1);
    return arr;
}

export const delItemByKey = (ref:any, arr:Array<any>):Array<any> => {
    arr.splice(arr.findIndex((item) => {
        return item === ref;
    }), 1);
    return arr;
}

export const delItemFromObjKey = (key:string|number, ref:string|number, arr:Array<any>):Array<any> => {
    arr.splice(arr.findIndex((item) => {
        if(!isEmpty(key)) return item[key] === ref; // if array items are object
        else item = ref // if array items are strings / numbers
    }), 1);
    return arr; // return new array to requester
}

export const getItemByKey = (key:string, ref:any, arr:Array<any>):any => {
    let i:number = 0;
    while (i < arr.length) { 
        if(arr[i][key] == ref) return arr[i];
        ++i;
    }
    return null;
}
