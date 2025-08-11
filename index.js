const express = require('express');
const app = express();

const { userRouter } = require('./routes/users');
const { courseRouter } = require('./routes/course');

app.use(express.json()); 

app.use('/user', userRouter);
app.use('/course', courseRouter);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
