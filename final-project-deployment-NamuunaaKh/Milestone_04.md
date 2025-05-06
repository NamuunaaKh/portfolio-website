Milestone 04 - Final Project Documentation
===

NetID
---
nk3484

Name
---
Namuunaa

Repository Link
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh

URL for deployed site 
---
https://fuzzy-enigma-5wj45795rvv3pvpr.github.dev

URL for form 1 (from previous milestone)
---
https://fuzzy-enigma-5wj45795rvv3pvpr-3000.app.github.dev/contact

Form 1 result
---
After submission, form re-renders with thank you message using showThankYou = true

URL for form 2 (from previous milestone)
---
https://fuzzy-enigma-5wj45795rvv3pvpr-3000.app.github.dev/mini-blogs/680055890261c082b33585a6

Form 2 description
---
This form allows users to leave comments on individual blog posts.  
Each blog post has its own comment section and unique route (e.g., `/mini-blogs/:id`).
Form data (name and comment) is submitted via POST, and the comment is pushed to the `comments` array in the MongoDB `blogposts` collection.  
New comments are displayed immediately after submission, along with their posted time.

URL for form 3 (for current milestone) 
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/941724de48a44505da45b883cd765878e2298b21/views/contact.hbs#L46

Form 3 Description
---
This short feedback form lets visitors share how they felt about my website, like if they got to know me as a person or have any suggestions. The form is submitted using AJAX, so the page doesn't reload. After submission, the form and its title are hidden, and a thank-you message appears in its place.

First link to github line number(s) for constructor, HOF, etc.
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/941724de48a44505da45b883cd765878e2298b21/routes/index.mjs#L40

Second link to github line number(s) for constructor, HOF, etc.
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/941724de48a44505da45b883cd765878e2298b21/routes/index.mjs#L17

Short description for links above
---
First link: router.post('/mini-blogs/:id', async (req, res) => { ... }) is an example of using a higher-order function (router.post) with an async handler. 

Second link: Server-side async/await database operation. 

Link to github line number(s) for schemas (db.js or models folder)
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/941724de48a44505da45b883cd765878e2298b21/db.mjs#L1

Description of research topics above with points
---
Enhancing Handlebars Templates in Express with Custom Helpers -- 4 points
I researched how to extend the functionality of Handlebars by using custom helpers. I created a custom Handlebars instance using the express-handlebars module. I registered the following custom helpers:
- truncate: limits the length of strings for content previews in my blog section.
- eq: compares two values (used in conditionals).
- isActive: checks if a page is currently active (used to style navigation).
I also learned about the use of allowInsecurePrototypeAccess to avoid runtime errors when accessing object properties inside templates. 

Deploying a MongoDB Atlas Database -- 2 points
In class, we only learned how to use MongoDB locally. For my portfolio website, I wanted my data to be accessible anywhere. So, I learned how to use MongoDB Atlas, a cloud-based database service, to connect my Express app to an online database.

CSS Keyframe Animations -- 2 points
I researched how to use CSS animations to improve user experience and visual appeal for my portfolio website. I specifically learned how the @keyframes rule can define smooth transitions.

Embedding YouTube Videos into a Dynamic Web Page -- 1 point
I learned how to properly embed YouTube videos using the <iframe> tag.

Rendering HTML Safely in Handlebars -- 1 point
I also explored how to store HTML-formatted content (like <p>...</p> and <h2>...</h2>) directly in the database, and have Handlebars render it as real HTML on the frontend with {{{}}}.

Links to github line number(s) for research topics described above (one link per line)
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/941724de48a44505da45b883cd765878e2298b21/app.mjs#L13

https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/941724de48a44505da45b883cd765878e2298b21/.env#L2

https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/941724de48a44505da45b883cd765878e2298b21/public/style.css#L180

https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/94ae34e9d0ebeca265c757427b6f6180d644ae62/views/interests-inspiration.hbs#L7

https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/94ae34e9d0ebeca265c757427b6f6180d644ae62/views/single-blog.hbs#L5

Attributions
---
I used ChatGPT throughout this project to learn more about CSS styling, writing custom helpers in handlebars, and HTML formatting like using <iframe>. Everything I built was my own work, but ChatGPT definitely helped me learn faster, and debug faster. So big thanks to ChatGPT for helping me understand how to better style my project cards, and for figuring out why my “View Project” button wasn’t working when I was stuck on it. 