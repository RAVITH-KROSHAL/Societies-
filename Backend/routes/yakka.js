/*const router = require("express").Router();
let Yakka = require("../models/Yakka");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newYakka = new Yakka({
        name,
        age,
        gender
    });

    newYakka.save().then(()=>{
        res.json("Yakka Added")
    }).catch((err)=>{
         console.log(err);
    })
})


router.route("/desplay").get((req,res)=>{

    Yakka.find().then((yakka)=>{
        res.json(yakka)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name,age,gender} = req.body;

    const updateYakka = {
        name,
        age,
        gender
    }

    const update = await Yakka.findByIdAndUpdate(userId, updateYakka).then(()=>{
        res.status(200).send({status:"User Updated", user: update})
    }).catch(()=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
  let userId = req.params.id;

  await Yakka.findByIdAndDelete(userId).then(()=>{
    res.status(200).send({status: "User deleted"});
  }).catch((err)=>{
 console.log(err.message);
 res.status(500).send({status: "Error with delete user", error: err.message});
  })
})


router.route("/get/:id").get(async(req,res)=>{
   let userId = req.params.id;
 const user = await Yakka.findById(userId).then(()=>{
    res.status(200).send({status:"User fetched", user : user})
  }).catch(()=>{
    console.log(err.message);
    res.status(500).send({status: "Error with get user", error: err.message});
  })

})


module.exports = router;

*/