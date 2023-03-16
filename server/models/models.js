const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const {fallback_application_name} = require("pg/lib/defaults");

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    name: {type: DataTypes.STRING, unique: true,},
    organization: {type: DataTypes.STRING, unique: true},
    rolle: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Organization = sequelize.define('organization', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
})

const Report = sequelize.define('report', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    comments: {type: DataTypes.STRING, unique: true},
})

const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false,},
})

const UsersProject = sequelize.define('usersProject', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Screenshot = sequelize.define('screenshot', {
    id: {type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},

})

const Assembling = sequelize.define('assembling', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    description: {type: DataTypes.STRING, unique: true,},
    version: {type: DataTypes.STRING, allowNull: false},
    url: {type: DataTypes.STRING, allowNull: false},
    assemblingNumber: {type: DataTypes.INTEGER, allowNull: false},

})

const FcmId = sequelize.define('fcmId', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    userId: {type: DataTypes.INTEGER, unique:true},
    fcmId: {type:DataTypes.STRING, unique:true},
    token:{type:DataTypes.STRING,unique:true}
})

User.hasOne(Report)
Report.belongsTo(User)

User.hasOne(Role)
Role.belongsTo(User)

User.hasOne(FcmId)
FcmId.belongsTo(User)

User.hasMany(Organization)
Organization.belongsTo(User)

User.belongsToMany(Project, {through: UsersProject})
Project.belongsToMany(User, {through: UsersProject})

Project.hasMany(Organization)
Organization.belongsTo(Project)

Project.hasMany(Assembling)
Assembling.belongsTo(Project)

Assembling.hasOne(Report)
Report.belongsTo(Assembling)

Report.hasMany(Screenshot)
Screenshot.belongsTo(Report)

module.exports = {
    User,
    Organization,
    Assembling,
    Report,
    Role,
    Screenshot,
    Author,
    Project,
    UsersProject
}





