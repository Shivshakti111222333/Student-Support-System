// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    // Handle login logic here (e.g., check username and password)
    const { username, password, role } = req.body;
    if (username && password && role) {
        // Example: Validate credentials (dummy logic)
        if (username === 'admin' && password === 'admin' && role === 'admin') {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } else {
        res.json({ success: false });
    }
});

app.post('/api/register', (req, res) => {
    // Handle registration logic here
    const { username, password, role } = req.body;
    if (username && password && role) {
        // Example: Save user data (dummy logic)
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
