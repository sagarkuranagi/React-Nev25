const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const configureDB = require('./config/db');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const usersCltr = require('./app/controllers/user-cltr');
const noteCltr = require('./app/controllers/note-cltr');
const authenticateUser = require('./app/middlewares/authenticate');
const authorizeUser = require('./app/middlewares/authorize');
const port = process.env.PORT || 5050

app.use(express.json());
app.use(cors());
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
})); 
configureDB();

app.post('/api/users/register', usersCltr.register);
app.post('/api/users/login', usersCltr.login);
app.get('/api/users/account', authenticateUser, usersCltr.account);

app.get('/api/users/all',authenticateUser, authorizeUser(['admin', 'modarator']), usersCltr.list);

app.delete('/app/users/:id', authenticateUser, authorizeUser(['admin']), usersCltr.remove)
/*Note app */
//Retrieve all notes
app.get('/api/notes', authenticateUser, noteCltr.list);
//Retrieve a single notes
app.get('/api/notes/:noteId',authenticateUser, noteCltr.show);
//create a new notes
app.post('/api/notes',authenticateUser, noteCltr.create);
//update an existing notes
app.put('/api/notes/:noteId',authenticateUser, noteCltr.update);
//delete an notes
app.delete('/api/notes/:noteId',authenticateUser, noteCltr.remove);



app.listen(port, () => {
    console.log(`user server is running on port ${port}`);
});