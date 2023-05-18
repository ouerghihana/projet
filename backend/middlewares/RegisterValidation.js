const { body, validationResult } = require('express-validator');

exports.registerValidation=[
 body('email','Invalid email address').isEmail(),
 body('password', 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number')    
 .isLength({ min: 8 })    ,
 
]
exports.loginValidation=[
    body('email','Invalid email address').isEmail(),
    
   ]


   exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next()

   }