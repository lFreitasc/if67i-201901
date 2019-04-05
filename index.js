let http = require('http'),
    UserDAO = require('./dao/user'),
    presentation = require('./view/user');

http.createServer((req, res) => {
    UserDAO.get((users) => {
        presentation.render(users, res);
    });
}).listen(3000);
