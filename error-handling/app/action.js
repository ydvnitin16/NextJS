'use server';
const throwFunction = async () => {
    try {
        await new Promise((r) => setTimeout(r, 1000));
        console.log('running on the server');
        throw new Error('Fake error');
        return 'got from the server';
    } catch (err) {
        throw new Error('Fake error from catch');
    }
};
export { throwFunction };
