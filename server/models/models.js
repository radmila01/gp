const sequelize = require('../db')
const {DataTypes} = require('sequelize')
//const {fallback_application_name} = require("pg/lib/defaults");


const  Accounts = sequelize.define('accounts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING, unique: true,},
    nam: {type: DataTypes.STRING, unique: true,},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
     //role: {type: DataTypes.STRING, defaultValue: "USER"},
     organization: {type: DataTypes.STRING, unique: true},
})






const Organization = sequelize.define('organization', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
})

const Report = sequelize.define('report', {
    id: {type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true},
    comments: {type: DataTypes.STRING, unique: true},
    photo: {type: DataTypes.STRING, allowNull: false},

})
const Image = sequelize.define('image', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reportId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, unique: false,},
    img: {type: DataTypes.STRING, allowNull: false},
})

const UsersProject = sequelize.define('usersProject', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
})


const AccountOrganization = sequelize.define('usersProject', {
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
    accountsId: {type: DataTypes.INTEGER, unique:true},
    fcmId: {type:DataTypes.STRING, unique:true},
    token:{type:DataTypes.STRING,unique:true}
})


Accounts.hasOne(Report)
Report.belongsTo(Accounts)

Accounts.hasOne(Role)
Role.belongsTo(Accounts)

Accounts.hasOne(FcmId)
FcmId.belongsTo(Accounts)

//Accounts.hasMany(Organization)
//Organization.belongsTo(Accounts)

Accounts.belongsToMany(Organization, { through: 'AccountOrganization' });
Organization.belongsToMany(Accounts, { through: 'AccountOrganization' });

Project.belongsToMany(Accounts, { through: 'UsersProject' });
Accounts.belongsToMany(Project, { through: 'UsersProject' });

Project.hasMany(Organization)
Organization.belongsTo(Project)

Project.hasMany(Assembling)
Assembling.belongsTo(Project)

Assembling.hasOne(Report)
Report.belongsTo(Assembling)

Report.hasMany(Screenshot)
Screenshot.belongsTo(Report)

Image.belongsTo(Report);
Report.hasMany(Image);


module.exports = {
    Accounts,
    Organization,
    Assembling,
    Report,
    Role,
    Screenshot,
    Author,
    Project,
    UsersProject,
    AccountOrganization,
    Image
}











