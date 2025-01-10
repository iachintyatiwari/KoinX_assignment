const mongoose = require("mongoose");

const CryptoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
       trim: true,
    },
    current_price:{
        type: Number,
        required: true
    },
    marketCap:{ 
        type: Number,
         required: true 
        },
    change_24h:{ 
        type: Number, 
        required: true 
    },
}, { timestamps: true });

  const Crypto = mongoose.model('Crypto', CryptoSchema);

    module.exports = Crypto;