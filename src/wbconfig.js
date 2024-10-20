const wbconfig = {
    development: {
        hosturl  : 'https://parse-server-api:8405/api',
        wsurl    : 'wss://parse-server-api:8405.net',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    },
    production: {
        hosturl  : 'https://parse-server-api:8405/api',
        wsurl    : 'wss://parse-server-api:8405',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    }
};
export default wbconfig;


