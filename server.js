const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

app.get('/organizations', (req, res) => {
    // use as basePath/organizations?county=x
    if (req.query.county) {
        const organizations = require('./data/organizations');
        const orgs = organizations.orgs;
        const county = req.query.county;
        const filtered = orgs.filter(o => o.county.toLowerCase() === county.toLowerCase());
        return res.status(200).json(filtered);
    }
    return res.status(406).json(
        {
            code: '1',
            type: 'error',
            message: 'County was not given.'
        }
    )
})

app.post('/register', (req, res) => {
    if (!req.body) return res.status(406).json(
        {
            code: '2',
            type: 'error',
            message: 'No body given'
        }
    );
    const user = {
        first: req.body.parentFirstName,
        last: req.body.parentLastName,
        phone: req.body.parentPhoneNumber,
        sendSMS: req.body.sendSMS,
        address: {
            street: req.body.parentAddr1,
            street2: req.body.parentAddr2,
            city: req.body.parentAddrCity,
            state: req.body.parentAddrState,
            zip: req.body.parentAddrZip
        },
        oldestChild: {
            name: req.body.ChName
        },
        username: req.body.userName,
        password: req.body.Password
    };

    // validation
    if (isValid) {
        return res.status(200).json(user);
    }
    return res.status(400).json(
        {
            code: '3',
            type: 'error',
            message: 'User creation - Invalid'
        }
    );
})

app.listen(3000);