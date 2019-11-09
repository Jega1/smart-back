var express = require('express');
var router = express.Router();


console.log("////////")

router.post('/registerCandidat', (req, res, next) => {

console.log(req.body.name)
})

module.exports = router;
