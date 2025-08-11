const express = require('express');
const app = express();

const { userRouter } = require('./routes/users');
const { courseRouter } = require('./routes/course');
const  { adminRouter } = require('./routes/admin')

app.use(express.json()); 

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
