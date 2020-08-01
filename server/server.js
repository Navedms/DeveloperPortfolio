const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);


const {
    User
} = require('./models/user');
const {
    PortFolio
} = require('./models/portfolio');

const {
    auth
} = require('./middleware/auth');

app.use(bodyParser.json());
app.use(cookieParser());


app.use(express.static('client/build'));

// ####################  PORTFOLIO #################### // 

//########## GET //
// Singel Work Page
app.get('/api/getportfolio', (req, res) => {
    let id = req.query.id;
    PortFolio.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})
// End Singel Work Page 

// Get List of Works for the home page
app.get('/api/portfolios', (req, res) => {

    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    PortFolio.find().skip(skip).sort({
        _id: order
    }).limit(limit).exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})
// End Home Page 

//########## POST //
// Add portfolio
app.post('/api/portfolio', (req, res) => {
    const portfolio = new PortFolio(req.body)

    portfolio.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            portfolioId: doc._id
        })
    })
})
// End Add portFolio

//########## UPDATE //
app.post('/api/portfolio_update', (req, res) => {
    PortFolio.findByIdAndUpdate(req.body._id, req.body, {
        new: true
    }, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
})

//########## DELETE //
app.delete('/api/portfolio_delete', (req, res) => {
    let id = req.query.id;
    PortFolio.findByIdAndRemove(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(true)
    })
})
// ####################  END PORTFOLIO #################### //

app.get('/api/user_posts', (req, res) => {
    PortFolio.find({
        developerId: req.query.user
    }).exec((err, docs) => {
        if (err) return res.status(400).send(err);
        res.send(docs);
    })
})


// ####################  USER #################### // 

//########## GET //
// Developer name

app.get('/api/getDeveloper', (req, res) => {
    let id = req.query.id;

    User.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname
        })
    })
})
// End developer name

// Get All the users in the DATABASE

app.get('/api/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(users)
    })
})

// End Get All users

//########## POST //
// register user
app.post('/api/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({
            success: false
        })
        res.status(200).json({
            success: true,
            user: doc
        })
    })
})
// End register

// Login User

app.post('/api/login', (req, res) => {
    User.findOne({
        'email': req.body.email
    }, (err, user) => {
        if (!user) return res.json({
            isAuth: false,
            message: 'Auth failed, email not found'
        })
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({
                isAuth: false,
                message: 'Wrong Password'
            });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie('auth', user.token).json({
                    isAuth: true,
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    lastname: user.lastname
                })
            })

        })
    })
})

// End Login


// Logout

app.get('/api/logout', auth, (req, res) => {
    req.user.deleteToken(req.token, (err, user) => {
        if (err) return res.status(400).send(err);
        res.sendStatus(200);
    })
})

// End Logout

// Did the user login?

app.get('/api/auth', auth, (req, res) => {
    res.json({
        isAuth: true,
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname
    })
})

// End

// ####################  END USER #################### // 

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendfile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Server running');
})