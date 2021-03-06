var mysql = require('mysql');
var config = require('../configuration/config');
var pool = mysql.createPool(config.MySQL_db);

module.exports = {
    selectAllInstitutes: function (passData) {

        var queryResult;
        pool.query("SELECT * FROM skilllocatedatabase.institute where city = 'SASKATOON'", function (err, result) {
            if (err) throw err;
            passData(result);
        });

        return queryResult;
    },

    selectInstituteNames: function (passData) {

        var queryResult;
        pool.query("SELECT NAME FROM skilllocatedatabase.institute where city = 'SASKATOON'", function (err, result) {
            if (err) throw err;
            passData(result);
        });

        return queryResult;
    }

};
//module.exports = selectAllInstitutes;

