const { Schema, model } = require('mongoose');

const educationSchema = new Schema(
  {
    institution: { type: String, required: true },
    program: { type: String, required: true },
    level: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Education', educationSchema, 'educations');
