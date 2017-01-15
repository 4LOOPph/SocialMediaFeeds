/*jshint camelcase: false */

'use strict';

var ig = require('instagram-node').instagram();
module.exports = function(app, config, middleware) {

    var redirect_uri = config.api_host_url + '/api/handleauth';

    app.route('/')
        .get(function onRequest(req, res) {
            res.render('index');
        });

    app.route('/twitter')
        .get(function onRequest(req, res) {
            res.render('twitter');
        });

    app.route('/instagram')
        .get(function onRequest(req, res) {
            res.render('instagram');
        });

    app.route('/facebook')
        .get(function onRequest(req, res) {
            res.render('facebook');
        });

    app.route('/api/twitter-feeds')
        .get(function onRequest(req, res) {
            var Twitter = require('twitter');

            var client = new Twitter({
                consumer_key: config.TWITTER_KEY,
                consumer_secret: config.TWITTER_SECRET,
                access_token_key: config.TWITTER_OAUTH_ACCESS_TOKEN,
                access_token_secret: config.TWITTER_OAUTH_ACCESS_TOKEN_SECRET
            });

            client.get('search/tweets', { q: 'engagisxsm' }, function(error, tweets, response) {
                if (error) {
                    return res.status(500).json({ response: error, statusCode: 500 });
                }

                res.status(200).json({ response: tweets, statusCode: 200 });
            });
        });

    app.route('/api/facebook-feeds')
        .get(function onRequest(req, res) {

        });

    app.route('/api/instagram-feeds')
        .get(function onRequest(req, res) {
            ig.use({
                client_id: config.INSTAGRAM_ID,
                client_secret: config.INSTAGRAM_SECRET
            });

            res.redirect(ig.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
        });

    app.route('/api/handleauth')
        .get(function onRequest(req, res) {
            ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
                if (err) {
                    console.log(err.body);
                    res.send("Didn't work");
                } else {
                    console.log('Yay! Access token is ' + result.access_token);
                    res.send('You made it!!');
                }
            });
        });

};
