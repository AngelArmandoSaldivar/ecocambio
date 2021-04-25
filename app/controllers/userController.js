const users = require('../models/users');


//Funcion para hacer busquedas
function index (req, res) {
    users.find({})
        .then(users => {
            if(users.length) return res.status(200).send({users});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch((err) => res.status(500).send({err}));
}

function show (req, res) {
    if(req.body.err) return res.status(500).send({err});
    if(!req.body.users)  return res.status(404).send({message: 'NOT FOUND'});
    let user = req.body.users;
    return res.status(200).send({user});
   
}

function created (req, res) {

    let user = new users(req.body);
    user.save().then(user => res.status(200).send(user))
    .catch((err) => res.status(500).send({err}))

}

function update (req, res) {
    if(req.body.err) return res.status(500).send({err});
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'});//En caso de que no exista el registro
    let user = req.body.users[0];
    user = Object.assign(user, req.body);
    user.save().then(user => res.status(200).send({message: 'UPDATE', user}))
    .catch((err) => res.status(500).send({err}))
}

function remove (req, res) {
    if(req.body.err) return res.status(500).send({err});
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'});
    req.body.users[0].remove().then(user => res.status(200).send({message: 'REMOVE', user}))
    .catch((err) => res.status(500).send({err}))
}

function find (req, res, next){
    let query = {};
    query[req.params.key] = req.params.value;

    users.find(query).then(users => {
        if(!users.length) return next();
        req.body.users = users;
        return next();
    }).catch((err) => {
        req.body.err = err;
        next();
    })
}

module.exports = {
    index, 
    show,
    update,
    created, 
    remove,
    find

}