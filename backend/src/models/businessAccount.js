import { DataTypes } from 'sequelize';
import { db } from "../database/db.js";


const BusinessAccount = db.define('businessAccount', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    businessName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
}, { timestamps: false });

module.exports = {
    BusinessAccount
}
