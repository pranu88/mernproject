const Product = require('../../models/product');
module.exports ={
 index,
 show
}
 
async function index(req,res){
    try{
        const products = await Product.find({}).sort('name').populate('category').exec();
        // re-sort based upon the sortOrder of the categories
        products.sort((a,b)=> a.category.sortOrder - b.category.sortOrder);
        res.status(200).json(products);
    }catch(e){
        res.status(400).json({msg: e.message})
    }
}

async function show(req,res){
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(e){
        res.status(400).json({msg: e.message});
    }
}