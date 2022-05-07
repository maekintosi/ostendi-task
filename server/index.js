import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({
    limit: "1mb",
    extended: true
}));

app.use(cors());

app.get('/users', (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            {
                id: 1,
                firstName: 'Joanna',
                lastName: 'Kalinowska',
                evaluationAverage: 50,
                evaluationDetails: {
                    supervisor: 60,
                    me: 50,
                    coworkers: 40
                }
            },
            {
                id: 2,
                firstName: 'Jan',
                lastName: 'Janowski',
                evaluationAverage: 30,
                evaluationDetails: {
                    supervisor: 30,
                    me: 80,
                    coworkers: 70
                }
            },
            {
                id: 3,
                firstName: 'Stefan',
                lastName: 'Stefanowski',
                evaluationAverage: 60,
                evaluationDetails: {
                    supervisor: 50,
                    me: 80,
                    coworkers: 90
                }
            }
        ]
    })
});

app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`))