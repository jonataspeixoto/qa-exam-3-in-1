const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', [
    body('name').notEmpty().withMessage('O nome é obrigatório'),
    body('email').notEmpty().withMessage('O email é obrigatório'),
    body('confirmEmail').notEmpty().withMessage('O confirmEmail é obrigatório'),
    body('password').notEmpty().withMessage('O password é obrigatório'),

    body('email').isEmail().withMessage('E-mail inválido'),
    body('confirmEmail').custom((value, { req }) => {
        if (value !== req.body.email) {
            throw new Error('Os e-mails não coincidem');
        }
        return true;
    }),
    body('password').isLength({ min: 8 }).withMessage('A senha deve ter no mínimo 8 caracteres')
        .matches(/[A-Z]/).withMessage('A senha deve conter pelo menos uma letra maiúscula')
        .matches(/[a-z]/).withMessage('A senha deve conter pelo menos uma letra minúscula')
        .matches(/\d/).withMessage('A senha deve conter pelo menos um número')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render('register', { errors: errors.array() });
    }
    res.redirect('/success');
});

app.get('/success', (req, res) => {
    res.render('success');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
