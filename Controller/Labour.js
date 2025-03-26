const Labour = require('../Model/Labour');

exports.createLabour = (req, res, next) => {
    try {
        Labour.find({}).sort({_id: -1}).limit(1)
        .then(async (filterno) => {
            function nextnum(num){
                num  += 1
                return num;
            }
            const { products } = req.body;
          await Labour.create({
                no:filterno.length <= 0 ? 1 : nextnum(filterno[0].no),
                date: new Date(),
                products: products,
            })
            res.send("Bill Added")
            console.log("Bill Added");
        })
       
    } catch (error) {
        next(error)
        console.log("Bill not Added");
    }
}

exports.getno = (req, res) => {
    let no = Labour.find()
    res.status(200).send(no)
}