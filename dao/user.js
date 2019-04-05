let client = require('mongodb').MongoClient;

module.exports = class UserDAO {
    static connect (callback) {
        client.connect('mongodb://mongo:27017',
                {useNewUrlParser: true}, (err, conn) => {
            if (err) throw err;

            let db = conn.db('mongo-test');
            callback(db);
        });
    }

    static get (callback) {
        UserDAO.connect((db) => {
            db.collection('user').find().toArray((err, users) => {
                if (err) throw err;

                callback(users);
            });
        });
    }
}
