const {Schema, model,} = require('mongoose');

const concertSchema = new Schema({
    concertName : {type: String, required: true},
    artist: {type: String, required: true},
    place: {type: String, required: true},
    date: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String },
    image: {type: String},

},
{ 
    timestamps: true,
   
    versionKey: false,
});




module.exports = model('concerts', concertSchema);