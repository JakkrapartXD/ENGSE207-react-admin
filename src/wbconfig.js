const wbconfig = {
    development: {
        hosturl  : 'https://localhost:8405/api',
        wsurl    : 'wss://localhost:8405.net',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    },
    production: {
        hosturl  : 'https://localhost:8405/api',
        wsurl    : 'wss://localhost:8405',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    }
};
export default wbconfig;


