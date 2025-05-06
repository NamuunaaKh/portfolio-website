Milestone 03
===

Repository Link
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh#

URL for form 1
---
https://fuzzy-enigma-5wj45795rvv3pvpr-3000.app.github.dev/contact

Form 1 result
---
After submission, form re-renders with thank you message using showThankYou = true

URL for form 2 (for current milestone)
---
https://fuzzy-enigma-5wj45795rvv3pvpr-3000.app.github.dev/mini-blogs/680055890261c082b33585a6

Form 2 description
---
This form allows users to leave comments on individual blog posts.  
Each blog post has its own comment section and unique route (e.g., `/mini-blogs/:id`).  
Form data (name and comment) is submitted via POST, and the comment is pushed to the `comments` array in the MongoDB `blogposts` collection.  
New comments are displayed immediately after submission, along with their posted time.

URL(s) to github repository with commits that show progress on research
--- 
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/f2e073003d91927f7fde9e66fac9e7a3c686a8ec/app.mjs#L13-L32

Description:
As part of my research topic on using Handlebars, I implemented a custom Handlebars helper function called `truncate` in my Express configuration. This helper shortens blog content when rendering previews on the mini-blogs listing page.

I learned how to:
- Configure Handlebars in Express using express-handlebars
- Register and use custom helper functions
- Control output rendering in .hbs views