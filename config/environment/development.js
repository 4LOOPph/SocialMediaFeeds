/*jshint camelcase: false */

'use strict';

module.exports = {
    env: 'development',
    db_host: process.env.DB_HOST || 'localhost',
    db_user: process.env.DB_USER || 'root',
    db_password: process.env.DB_PASSWORD || '',
    db_name: '',
    db_port: 3306,
    port: 3000, // PLEASE DONT REMOVE 'process.env.PORT'
    ip: process.env.IP,
    api_host_url: process.env.API_HOST_URL || 'http://localhost:3000',
    frontend_host_url: process.env.FRONTEND_HOST_URL || 'http://localhost:9004',
    frontend_portal_host_url: process.env.FRONTEND_HOST_URL || 'http://localhost:9003',
    api_version: process.env.API_VERSION || '/api/1.0',
    sync_version: process.env.API_VERSION || '/sync/1.0',
    app_version: process.env.APP_VERSION || '/1.0',
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || '',
    LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || '',
    INSTAGRAM_ID: process.env.LINKEDIN_SECRET || '366fbd90b61944ebad2bcedd5dbd9392',
    INSTAGRAM_SECRET: process.env.LINKEDIN_SECRET || '97390ed1a9854aa396b37c9413017bd7',
    TWITTER_KEY: process.env.TWITTER_KEY || 'E4z4u14GI84cyDQOQz0UN2odO',
    TWITTER_SECRET: process.env.TWITTER_SECRET || 'ibIcUQl3vzqJ4ETqoHP7d0OvfBT4KLy9KrkgvgIkkpwESAx8YJ',
    TWITTER_OAUTH_ACCESS_TOKEN : process.env.TWITTER_OAUTH_ACCESS_TOKEN || '1459616382-LgIk3VRzoxOh3ATvUfVCOOazcziZ5zBrVlHpU2B',
    TWITTER_OAUTH_ACCESS_TOKEN_SECRET: process.env.TWITTER_OAUTH_ACCESS_TOKEN_SECRET || 'SuCOHWuyklr1vKqHBVpZB6gIrvKKH8AuQCHP0sugvxrD5'
};
