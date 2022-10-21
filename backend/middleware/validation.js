const joi = require('joi')
const validatejoi = joi.object({
    Name:joi.string().min(5).max(30).required(),
    Email:joi.string().email().required(),
    Password:joi.string().required(),
    Phone:joi.string().min(10).max(12).required(),
    Role:joi.string().required()
})
module.exports = validatejoi