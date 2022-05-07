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
                name: 'Damian Bond',
                email: 'damian@damian.pl',
                position: 'Back-end Developer',
                department: 'Dział IT',
                organization: 'Ostendi Global',
                date: '04.04.2022',
                status: 1
            },
            {
                name: 'Dzordz Klunej',
                email: 'dzordz@klunej.pl',
                position: 'Back-end Developer',
                department: 'Dział IT',
                organization: 'Ostendi Global',
                date: '04.04.2022',
                status: 1
            },
            {
                name: 'Iwan Karawka',
                email: 'damian@damian.pl',
                position: 'Back-end Developer',
                department: 'Dział IT',
                organization: 'Ostendi Global',
                date: '04.04.2022',
                status: 1
            },
        ]
    })
});

app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`))