const Router = require('express-promise-router');
const router = Router();
const LopHoc =require('../model/model.sinhvien');
 

// router.get('./', async (req, res)=>{
//     const a

// })
// const Sequelize = require('sequelize');
// const db = require('./../db');
// const SinhVien = db.define('sinhvien',{
    
//     tenSinhVien: Sequelize.STRING,
//     //  maLop: Sequelize.UUIDV4,
//     tenLop:  Sequelize.STRING,
//     biDuoiHoc: Sequelize.BOOLEAN
// });

router.get('/', async function (req, res) {
    const sinhviens = await LopHoc.findAll();
     res.json(sinhviens);
    // res.render("todo", {sinhviens})
  });
  router.post('/add', async (req, res)=>{
      const {tenSinhVien, tenLop} = req.body;
     const sinhvien_tao ={
         tenSinhVien,
         tenLop,
         biDuoiHoc :true
     }
      const sinhvien = await LopHoc.create(sinhvien_tao);
     
      res.json(sinhvien);

  })
  router.post('/update/:id', async (req,res)=>{
        const {id} = req.params;
        const {tenSinhVien, tenLop} = req.body;
        //   const  sinhvien_up = {tenSinhVien, tenLop, biDuoiHoc}
        const sinhvien = await LopHoc.update({
            tenSinhVien, tenLop 
        },{
            where:{
                id:id
            }
        }) 
        // sinhvien.save();
        res.json(sinhvien)
         

  })
  router.get('/delete/:id', async (req,res)=>{
    const {id} = req.params;
    // const {tenSinhVien, tenLop, biDuoiHoc} = req.body;
    //   const  sinhvien_up = {tenSinhVien, tenLop, biDuoiHoc}
    const sinhvien = await LopHoc.destroy( {
        where:{
            id:id
        }
    }).then(result=>{
       res.json(result)
    })
     

})
  router.get('/:id', async (req,res)=>{
    const {id} = req.params;
     const sinhvien = await LopHoc.findOne({
          where:{
              id
          }
     });
    //  await sinhvien.save();
    // res.render("sua", {sinhvien})
    res.json(sinhvien);

})
module.exports = router;