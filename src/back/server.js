import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import config from './config/config.js';
import initModels from './models/user.js';

const app = express();
const port = 3000;

const sequelize = new Sequelize(config.development);
const User = initModels(sequelize);

app.use(cors());
app.use(bodyParser.json());

sequelize.sync()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error connecting to database:', err));

app.get('/', (req, res) => {
    res.send('Hello World! from backend');
});

app.post('/api/register', async (req, res) => {
    const { registerLogin, registerEmail, registerPassword } = req.body;

    try {
        const existingUser = await User.findOne({
            where: {
                [Sequelize.Op.or]: [{ login: registerLogin }, { email: registerEmail }]
            }
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User with this login or email already exists' });
        }

        const newUser = await User.create({
            login: registerLogin,
            email: registerEmail,
            password: registerPassword
        });

        const token = "some-random-token-" + newUser.id;
        res.json({ user: { login: newUser.login, email: newUser.email }, token: token, message: 'Registration success' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
});

app.post('/api/login', async (req, res) => {
    const { login, password } = req.body;
    try {
        const user = await User.findOne({ where: { login: login, password: password } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid login or password' });
        }

        const token = "some-random-token-" + user.id;
        res.json({ user: { login: user.login, email: user.email }, token: token, message: 'Login success' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
});

app.delete('/api/logout', (req, res) => {
    res.status(200).send('Logout success');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});