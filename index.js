

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./lib/production.min.js');
} else {
    module.exports = require('./lib/development.js');
}