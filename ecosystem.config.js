module.exports = {
    apps: [
        {
            name: 'My App',
            script: 'build/index.js',
            args: ['--port', '5201'],
            instances: 1,
            autorestart: true,
            watch: false,
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};