const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user = models.User;
let tracking = models.Tracking;
let product = models.Product;

// app.get('/create', async (req, res) => {
//     let create = await user.create({
//         name: "User 1",
//         password: "123",
//         createdAt: new Date(),
//         updatedAt: new Date()
//     })
//     res.send('Usuário criado com sucesso!');
// })

// app.get('/read', async (req, res) => {
//     let read = await user.findAll({
//         raw: true
//     });
//     console.log(read);
// });

// app.get('/update', async (req, res) => {
//     let update = await user.findByPk(1,
//         { include: [{ all: true }] }
//     ).then((response) => {
//         // response.name = 'User atualizado';
//         // response.password = '1234';
//         // response.save();
//         // response.Tracking[0].local='Nova Cidade'
//         // response.Tracking[0].save();
//     });
// });

// app.get('/delete', async (req, res) => {
//     user.destroy({
//         where: {
//             id: 1
//         }
//     });
// });

// app.get('/', (req, res) => {
//     res.send('Meu server!');
// })

app.post('/login', (req, res) => {
    user.findOne({
        where: { name: req.body.name, password: req.body.password }
    })
    if(Response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
})

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Server ON!');
});