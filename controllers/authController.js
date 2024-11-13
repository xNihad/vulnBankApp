
const path = require('path');

exports.getLoginPage = (req, res) => {
    const filePath = path.join(__dirname, '../views/login.html');
    res.sendFile(filePath);
};


