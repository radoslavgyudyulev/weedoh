const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: { 
        type: mongoose.SchemaTypes.String, 
        enum: {
            values: ['Art', 'Books', 'Cameras', 'Cloting', 'Crafts', 'Cell Phones', 'Health and Beauty', 'Jewerly and Watches', 'Sporting Goods'] 
        } 
    },
    products: { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;