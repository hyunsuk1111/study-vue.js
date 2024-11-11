const path = require('path');

module.exports = {
    //4개중요

    //여러개의 파일을 하나로 묶는 설정
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    //webpack의 핵심, 
    module: {
        rules:[{

        }],
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};