const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: 'https://i.pinimg.com/originals/94/db/1d/94db1d14988ca12f765d8b5947c01ced.png' },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Parts Unknown' },
  state: { type: String, default: 'California' },
  founded: {
    type: Number,
    min: [1900, `Yo Mama ain't that old!`],
    max: [new Date(). getFullYear(), `I wish I have a Time Machine, like you do.`]
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)