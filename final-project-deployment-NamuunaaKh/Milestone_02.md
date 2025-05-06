Milestone 02
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

URL to github that shows line of code where research topic(s) are used / implemented
--- 
🔬 Research Topic: Connecting a MongoDB Atlas Database Using Mongoose

For my research topic, I explored how to connect a Node.js + Express web application to a cloud-based MongoDB Atlas database using Mongoose. I learned how to:

- Create a free MongoDB Atlas cluster
- Set up a database user and IP whitelist to allow connections
- Write a `.env` file to store sensitive credentials securely
- Use the `dotenv` package to load environment variables (learned in class too)
- Use Mongoose to define a schema for contact messages (learned in class too)
- Save form submissions to the database using `ContactMessage.create()` (learned in class too)

This allowed me to build a fully functional contact form that stores user input in the cloud. The app connects to the remote MongoDB server and writes data through a Mongoose model in my backend route.

GitHub Link to implementation:
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-NamuunaaKh/blob/9241b9f285af49569fd6e0b4e59fd6c4c18a06bc/.env#L2