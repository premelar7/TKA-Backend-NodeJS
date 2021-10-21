module.exports = (sequelize, Sequelize) => {
    const user_profile = sequelize.define(
        'user_profile',
        {
            user_id: {
                type: Sequelize.UUIDV4,
                field: 'user_id',
                primaryKey: true,
                allowNull: false
            },
            address1: {
                type: Sequelize.STRING,
                field: 'address1'
            },
            address2: {
                type: Sequelize.STRING,
                field: 'address2'
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
    return user_profile;
};