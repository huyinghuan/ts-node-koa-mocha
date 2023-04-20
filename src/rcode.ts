
export interface RCode<T> {
    code: number;
    msg: string;
    data?: T;
}

export function Success<T>(data?: T): RCode<T> {
    return {
        code: 0,
        msg: "success",
        data: data
    }
}

export function Fail(msg: string): RCode<null> {
    return {
        code: -1,
        msg: msg,
        data: null
    }
}

export function ReturnData<T>(data: T): RCode<T> {
    return {
        code: 0,
        msg: 'success',
        data: data
    }
}


