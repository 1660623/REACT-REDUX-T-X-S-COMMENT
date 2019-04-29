const Sequelize = require('sequelize');
const db = require('./../db');
const  LopHoc = db.define('lophoc',{
   tenSinhVien : Sequelize.STRING,
   tenLop: Sequelize.STRING,
    biDuoiHoc: Sequelize.BOOLEAN
});
module.exports = LopHoc;
