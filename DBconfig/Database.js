let Mysql = require('mysql')
let DatabaseSettingsLocal = require('../DBconfig/dbmsrds.json')

module.exports = class Database {

    constructor(isLocal = false) {
        this.currentSettings = (isLocal) ? DatabaseSettingsLocal : DatabaseSettingsLocal;
        this.pool = Mysql.createPool({
            host: this.currentSettings.Host,
            user: this.currentSettings.User,
            port: this.currentSettings.port,
            password: this.currentSettings.Password,
            database: this.currentSettings.Database,
        });
    }

    Connect(callback) {
        let pool = this.pool;
        pool.getConnection((error, connection) => {
            if (error) throw error;
            //    console.log('connected as id ' + connection.threadId);
            callback(connection);
        });
    }

    nameret(ID, callback) {
        this.Connect(connection => {
            let query = "SELECT * FROM collect WHERE id = ?";

            connection.query(query, [ID], (error, results) => {
                connection.release();
                if (error) throw error;
                callback(results);
            });
        });
    }
}
