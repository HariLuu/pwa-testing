// T3: This file only needed when deployed the static files on app server
const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, '/dist')));

// app.get('/about', (req, res) => {
// 	res.status(200).sendFile('/index.html');
// });

// app.get('/about', () => {
// 	res.render
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log('Press Ctrl+C to quit.');
});
