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
    FACEBOOK_ID: process.env.FACEBOOK_ID || '554864901386359',
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '265f79c8427710554809f046befe7385',
    FACEBOOK_ACCESS_TOKEN: process.env.FACEBOOK_ACCESS_TOKEN || '554864901386359|hkVC47AQdT9ZjgxD4wZGcP1rT_g',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || '',
    LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || '',
    INSTAGRAM_ID: process.env.LINKEDIN_SECRET || '366fbd90b61944ebad2bcedd5dbd9392',
    INSTAGRAM_SECRET: process.env.LINKEDIN_SECRET || '97390ed1a9854aa396b37c9413017bd7',
    INSTAGRAM_ACCESS_TOKEN: process.env.INSTAGRAM_ACCESS_TOKEN || '307188601.366fbd9.a41852c30e424fd181b30eed080f42db',
    TWITTER_KEY: process.env.TWITTER_KEY || 'E4z4u14GI84cyDQOQz0UN2odO',
    TWITTER_SECRET: process.env.TWITTER_SECRET || 'ibIcUQl3vzqJ4ETqoHP7d0OvfBT4KLy9KrkgvgIkkpwESAx8YJ',
    TWITTER_OAUTH_ACCESS_TOKEN : process.env.TWITTER_OAUTH_ACCESS_TOKEN || '1459616382-LgIk3VRzoxOh3ATvUfVCOOazcziZ5zBrVlHpU2B',
    TWITTER_OAUTH_ACCESS_TOKEN_SECRET: process.env.TWITTER_OAUTH_ACCESS_TOKEN_SECRET || 'SuCOHWuyklr1vKqHBVpZB6gIrvKKH8AuQCHP0sugvxrD5'
};
