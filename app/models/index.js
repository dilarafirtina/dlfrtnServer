db_config = require("../config/db.config.js");
var Sequelize = require("sequelize");

//Connect sequlize to database
const sequelize = new Sequelize(
    db_config.database,
    db_config.user,
    db_config.password,
    {
        dialect: db_config.dialect,
        host: db_config.host,
        port: db_config.port,
        pool: {
            max: db_config.pool.max,
            min: db_config.pool.min,
            acquire: db_config.pool.acquire,
            idle: db_config.pool.idle
        }
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


//Call the models
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.lesson = require("../models/lesson.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(sequelize, Sequelize);



//Set the relationships 

db.user.hasMany(db.refreshToken, { onDelete: 'CASCADE' });
db.refreshToken.belongsTo(db.user);

db.user.hasMany(db.lesson, { as: "lesson" });
db.lesson.belongsTo(db.user, { foreignKey: "userId", as: "user" });

db.Role = {
    Admin: 'Admin',
    User: 'User'
};

module.exports = db;