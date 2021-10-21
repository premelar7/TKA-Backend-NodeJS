module.exports = (sequelize, Sequelize) => {
    const user_portal = sequelize.define(
        'user_portal',
        {
            user_id: {
                type: Sequelize.UUIDV4,
                field: 'user_id',
                primaryKey: true,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                field: 'email',
                allowNull: false,
                isEmail: true
            },
            firstname: {
                type: Sequelize.STRING,
                field: 'firstname'
            },
            lastname: {
                type: Sequelize.STRING,
                field: 'lastname'
            },
            password: {
                type: Sequelize.STRING,
                field: 'password',
                allowNull: false
            },
            salt: {
                type: Sequelize.STRING,
                field: 'salt',
                allowNull: false
            },
            lastlogin: {
                type: Sequelize.DATE,
                field: 'lastlogin'
            },
            isenable: {
                type: Sequelize.INTEGER,
                field: 'isenable',
                allowNull: false,
                defaultValue: 1
            },
            datecreate: {
                type: Sequelize.DATE,
                field: 'datecreate',
                allowNull: false
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return user_portal;
};