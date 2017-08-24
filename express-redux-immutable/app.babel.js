require('babel-register')({
	presets: ['es2015']
});
const app = require('./app');
module.exports = app;