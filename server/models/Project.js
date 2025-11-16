const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    client: { type: String },
    summary: { type: String, required: true },
    status: { type: String, enum: ['in-progress', 'completed'], default: 'in-progress' },
    completionDate: { type: Date },
    techStack: [{ type: String }],
    repoUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = model('Project', projectSchema, 'projects');
