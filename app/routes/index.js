/*jshint camelcase: false */

'use strict';

var ig = require('instagram-node').instagram();
var FB = require('fb');

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

    app.route('/api/facebook_auth')
        .get(function onRequest(req, res) {
            FB.api('oauth/access_token', {
                client_id: config.FACEBOOK_ID,
                client_secret: config.FACEBOOK_SECRET,
                grant_type: 'client_credentials'
            }, function(resp) {
                if (!resp || resp.error) {
                    console.log(!res ? 'error occurred' : res.error);
                    return;
                }

                var accessToken = resp.access_token;
                res.cookie('FB_TOKEN', accessToken)
                res.set('FB_TOKEN', accessToken);
                res.header('FB_TOKEN', accessToken)
                res.redirect('/facebook')
            });
        });

    app.route('/api/facebook-feeds')
        .get(function onRequest(req, res) {
            FB.setAccessToken(req.headers.fb_token);
            FB.api('/search', {
                type: "topic",
                q: "lebron james",
                fields: ["id","name","page"]
            }, function(res) {
                if (!res || res.error) {
                    console.log(!res ? 'error occurred' : res.error);
                    return;
                }
                console.log(res.id);
                console.log(res.name);
            });
        });

    app.route('/api/instagram-feeds')
        .get(function onRequest(req, res) {
            var min_tag_id = Math.floor(Date.now() / 1000);
            var max_tag_id = Math.floor(Date.now() / 1000);

            var options = {
                min_tag_id: 0,
                max_tag_id: 13872296,
                count: 10
            }

            ig.use({ access_token: config.INSTAGRAM_ACCESS_TOKEN });
            ig.tag_media_recent('jordans', options, function(err, medias, pagination, remaining, limit) {;
                if (err) {
                    console.log('tag_search err: ', err.body);
                }
                console.log('tag_search remaining: ', pagination);
                console.log('tag_search remaining: ', remaining);
                console.log('tag_search limit: ', limit);
                console.log('tag_search medias: ', medias);

                // res.status(200).json({ response: medias, statusCode: 200 });
            });
        });

    app.route('/api/instagram_auth')
        .get(function onRequest(req, res) {
            ig.use({
                client_id: config.INSTAGRAM_ID,
                client_secret: config.INSTAGRAM_SECRET
            });

            res.redirect(ig.get_authorization_url(redirect_uri, { scope: ['likes', 'comments', 'basic', 'public_content'] }));
        });

    app.route('/api/handleauth')
        .get(function onRequest(req, res) {
            ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
                if (err) {
                    console.log(err.body);
                    res.redirect('/instagram')
                } else {
                    console.log('Yay! Access token is ' + result.access_token);
                    // res.status(200).json({ response: result, statusCode: 200 });
                    res.cookie('IG_TOKEN', result.access_token)
                    res.redirect('/instagram')
                }
            });
        });

};
