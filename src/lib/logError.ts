export const printErr = (err: unknown): void => {
    if (process.env.NODE_ENV !== 'production') {
        if (err instanceof Error) {
            console.error('Error:', err.message);
        } else {
            console.error(err);
        }
    }
}

export const printLog = (msg: string): void => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(msg);
    }

}