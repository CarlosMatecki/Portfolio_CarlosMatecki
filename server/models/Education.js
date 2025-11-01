const { Schema, model } = require('mongoose');

const educationSchema = new Schema(
  {
    title: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    completion: { type: Date, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Education', educationSchema, 'educations');

