'use strict';

let cron = require('cron');
let populate = require('./populate.js');

let update = new cron.CronJob({
  cronTime: '0 * * * *',
  onTick: populate,
  start: false,
  timeZone: 'America/Los_Angeles'
});

populate();

update.start();
