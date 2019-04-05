module.exports = class UserPresentation {
    static render (users, res) {
        let head = `<!DOCTYPE HTML>
                <html>
                    <head>
                        <meta http-equiv="content-type"
                              content="text/html; charset=utf-8" />
                        <title>Index</title>
                    </head>
                    <body>
                        <h1>Users</h1>
                        <ul>`;

        let body = '';
        for (var i = 0; i < users.length; i++) {
            body += `<li>${users[i].nome}</li>`;
        };
        let footer = `</ul>
                    </body>
                </html>`;
        res.write(head);
        res.write(body);
        res.end(footer);
    }
}
