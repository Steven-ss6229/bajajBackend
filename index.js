const express = require('express');
const app = express();

app.use(express.json());

// POST method
app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercase = lowercaseAlphabets.length > 0 ? 
        String.fromCharCode(Math.max(...lowercaseAlphabets.map(char => char.charCodeAt(0)))) : "";

    res.json({
        is_success: true,
        user_id: "your_name_ddmmyyyy",  // Replace with actual user ID logic
        email: "your_email@domain.com", // Replace with your actual email
        roll_number: "your_roll_number", // Replace with your actual roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

// GET method
app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
