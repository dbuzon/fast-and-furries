'use strict'

const app = require('../src/app');
const http = require('http');
const mongoose = require('mongoose')

const port = 3000;
app.set('port', port);

const server = http.createServer(app);

//inseguro!!! a conexão só é feita desse jeito 
//por fins educacionais.
const conn = 'mongodb+srv://fandf:1_h0p3_n0t-Le4k-th1s_ag4in@agravain.jl2re.mongodb.net/agravain'

mongoose.connect(conn, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongoose.'));
db.once('open', function(){
	console.log('Mongoose connected! Ya-hoo!');
	console.log('API is running on port ' + port)
	server.listen(port);
});
