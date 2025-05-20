import mongoose from 'mongoose';
import mongooseSlugPlugin from 'mongoose-slug-plugin';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DSN);

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  githubLink: String,
  liveDemo: String,
  image: [String],
});

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [
    {
      name: String,
      message: String,
      date: { type: Date, default: Date.now }
    }
  ]
});

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

blogPostSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=title%>' });

const FeedbackSchema = new mongoose.Schema({
  knowMe: { type: String, required: true },
  improve: { type: String, required: true },
  elaboration: { type: String },
  createdAt: { type: Date, default: Date.now,}
});
const Feedback = mongoose.model('Feedback', FeedbackSchema);

const Project = mongoose.model("Project", projectSchema);
const BlogPost = mongoose.model("BlogPost", blogPostSchema);
const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema);

export { mongoose, Project, BlogPost, ContactMessage, Feedback };