const express = require("express");
const router = express.Router();
const fs = require("fs")

router.get("/", (req, res) => res.render("login"));
router.get("/action_logs", (req, res) => res.render("action_logs"));
router.route("/").get((req, res) => res.render("login"));
router.get("/secret", (req, res) => {
  if (req.isAuthenticated()) {
    //trả về true nếu đã đăng nhập rồi
    res.send("Đã đăng nhập");
  } else {
    res.redirect("/");
  }
});

// var devices = fs.promises.readFile('./dashboard.json','utf8');


router.get("/dashboard", async(req, res) =>{
    fs.readFile('./public/controller/dashboard.json', 'utf8', function (err, data) {
        if (err) throw err;
        var devices = JSON.parse(data)
        var total = 0;
        for (var i =0; i< devices.length; i++){
                total += Number(devices[i].power_consume)
            }
            
        // fs.writeFile('./public/controller/dashboard.json', "abc",  err => {
        //     if (err) {
        //         console.log('Error writing file', err)
        //     } else {
        //         console.log('Successfully wrote file')
        //     }
        // })
        res.render("dashboard", {devices, total})
    });
});

function getCurrDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();


    return yyyy + '-' + mm + '-' + dd;
}

router.post('/dashboard', (req, res) => {
    console.log('Got body:', req.body);
    fs.readFile('./public/controller/dashboard.json', 'utf8', function (err, data) {
        if (err) throw err;
        var devices = JSON.parse(data)
            
        devices.push(
            {
                "device": req.body.name,
                "created_date" :  getCurrDate(),
                "power_consume" : req.body.power_consume
            }
        )
        fs.writeFile('./public/controller/dashboard.json', JSON.stringify(devices),  err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    });
    res.redirect("/dashboard")
});

module.exports = router;

