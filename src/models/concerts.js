
const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
  concertName: String,
  artist: String,
  date: Date,
  place: String,
  price: Number,
  description: String,
  image: Object,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Concerts', concertSchema);














// const {Schema, model,} = require('mongoose');

// const concertSchema = new Schema({
//     concertName : {type: String, required: true},
//     artist: {type: String, required: true},
//     place: {type: String, required: true},
//     date: {type: String, required: true},
//     price: {type: Number, required: true},
//     description: {type: String },
//     image: {url: String, public_id: String},

// },
// { 
//     timestamps: true,
   
//     versionKey: false,
// });




// module.exports = model('concerts', concertSchema);