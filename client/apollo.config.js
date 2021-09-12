module.exports = {
    client: {
        includes: [__dirname+'/query/**/*.ts'],
        excludes: [],
        service: {
            name: 'backend',
            url: `http://localhost:4000`,
        },
    },
};
