import process from 'process';

export const init = (closeFunc: () => Promise<void>) => async () => {
    try {
        await closeFunc();
        process.exit(0);
    } catch (err) {
        process.exit(1);
    }
};
