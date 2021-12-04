const Redis = require('ioredis');
const config = require('../config/database.config').RedisDB;

const client = new Redis({
  host: config.host,
  port: config.port,
  password: config.password,
});

client.on('connect', () => {
  console.log('[*] Redis connected.');
});


module.exports = client