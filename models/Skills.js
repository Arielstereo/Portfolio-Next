import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  title: {
    type: "string",
  },
  img: {
    type: "string",
  }
});

export default mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
