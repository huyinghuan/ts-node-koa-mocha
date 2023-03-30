
interface RCode {
    code: number;
    message: string;
    data: any;
}
const success: RCode = {
    code: 0,
    message: 'success',
    data: null,
}

export const ReturnCode = (data: any): RCode => {
    return {
        code: 0,
        message: 'success',
        data: data
    }
}
export { RCode, success };


