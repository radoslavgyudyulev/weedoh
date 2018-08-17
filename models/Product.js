const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: mongoose.SchemaTypes.String, required: true },
    image: { type: mongoose.SchemaTypes.String, default: '' },
    price: { type: mongoose.SchemaTypes.Number, max: 10000 },
    description: { type: mongoose.SchemaTypes.String },
    date: { type: mongoose.SchemaTypes.Date, default: Date.now },
    creator: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    buyer: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category', required: true }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;