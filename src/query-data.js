(function (win, doc) {
    const Loader = require('./net/url-loader');
    
    var loader = new Loader();
    var url = 'http://localhost:6869/query';

    var Query = {
        get: function (callback) {
            loader.load(url, 'text', (evt) => {
                callback(JSON.parse(evt.currentTarget.response));
            }, (evt, info) => {
                console.log(evt, info);
            });
        }
    };

    win.Query = Query;
})(window, document);