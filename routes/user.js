var express = require('express');
var router = express.Router();


console.log("///1/////")
router.get('/' , (req, res) =>{

})


console.log("///2/////")

router.post('/registerCandidat',  (req, res, next) =>{
        console.log(req.body)
})

router.post('/registerCandidat', function (req, res) {
        console.log('welcome, ' + req.body.name)
})

module.exports = router;
