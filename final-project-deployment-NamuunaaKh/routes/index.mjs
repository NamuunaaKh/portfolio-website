import express from 'express'
import { BlogPost, ContactMessage, Project, Feedback } from '../db.mjs'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/contact', (req, res) => {
    res.render('contact', {showThankYou: false})
})

router.post('/contact', async(req, res) => {
    const {name, email, message} = req.body
    try {
        await ContactMessage.create({name, email, message})
        res.render('contact', {showThankYou: true})
    }
    catch(err) {
        res.status(500).send("Oops! Something went wrong.")
    }
})

router.get('/work-experience', (req, res) => {
    res.render('work')
})

router.get('/about-me', (req, res) => {
    res.render('about-me')
})

router.get('/mini-blogs', async (req, res) => {
    const blogs = await BlogPost.find().sort({ createdAt: -1 })
    // { blogs } is short for { blogs: blogs }
    res.render('mini-blogs', {blogs: blogs})

})

router.get('/mini-blogs/:id', async (req, res) => {
    const blog = await BlogPost.findById(req.params.id);
    res.render('single-blog', { blog });

})

router.post('/mini-blogs/:id', async (req, res) => {
    const { name, message } = req.body;
    const blogId = req.params.id;
    const blog = await BlogPost.findById(blogId);

    blog.comments.push({
        name,
        message,
        date: new Date()
    });

    await blog.save();
    res.redirect(`/mini-blogs/${blogId}`);
});

router.get('/interests-inspiration', async(req, res) => {
    res.render('interests-inspiration')
})

router.get('/coding-project', async(req, res) => {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.render('coding-project', { projects });
})

router.get('/coding/project/:id', async (req, res) => {
    const project = await Project.findById(req.params.id);
    res.json(project);
});
  
router.post('/submit-feedback', async (req, res) => {
    try {
      const { knowMe, improve, elaboration } = req.body;
      const feedback = new Feedback({ knowMe, improve, elaboration });
      await feedback.save();
      res.status(200).json({ message: 'Feedback saved successfully!' });
    } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;