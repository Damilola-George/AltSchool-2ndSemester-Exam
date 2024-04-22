require('dotenv').config();


module.exports = {
    PORT: process.env.PORT || 3000,
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    EXPIRE_TIME: process.env.EXPIRE_TIME,
}