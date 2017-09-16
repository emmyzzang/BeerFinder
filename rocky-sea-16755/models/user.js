// Changed the second param from Sequelize to DataTypes
// Has to describe the "type" of data in the object

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define('user', {
        // Since UUID, do not worry about autoIncrement
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        lastname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        username: {
            type: DataTypes.TEXT
        },
        about: {
            type: DataTypes.TEXT
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_login: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });
    return User;
}
