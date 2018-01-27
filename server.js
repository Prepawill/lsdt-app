//reste a inserer les sessions
var express = require('express');
var mongoose = require('mongoose');
var app = express();

var options = { server: { socketOptions: { connectTimeoutMS: 30000 } } };
mongoose.connect('mongodb://savetier:Marcelino92@ds123193.mlab.com:23193/salledutemps', options, function (err) {
});





var userSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String,
    confirmPassword: String,
    telephone: String
});
var userModel = mongoose.model('User', userSchema);



var rdvSchema = mongoose.Schema({
    date: String,
    heure: String,
    activite: String,
    nom: String,
    prenom: String,
    telephone: String
});
var rdvModel = mongoose.model('Rdv', rdvSchema);





app.get('/', function (req, res) {
    res.render('index');
});



app.get('/login', function (req, res) {
    var response = { "isLog": false, "nom": null, "prenom": null, "telephone": null, "error": null };
    if (req.query.email != '' && req.query.password != '') {
        userModel.findOne({ email: req.query.email, password: req.query.password }, function (err, user) {
            if (user != null) {
                response.isLog = true;
                response.nom = user.nom;
                response.prenom = user.prenom;
                response.telephone = user.telephone;
            } else {
                response.error = "invalide";
            }

            res.json(response);

        });
    } else {
        response.error = "vide";
        res.json(response);
    }
});



app.get('/rdv', function (req, res) {
    rdvModel.find({ prenom: req.query.prenom, nom: req.query.nom }, function (err, rdvList) {
        res.json(rdvList);
    })
});


app.get('/saveRdv', function (req, res) {
    if (req.query.date != undefined && req.query.heure != undefined && req.query.activite != undefined) {
        var rdv = new rdvModel({
            date: req.query.date,
            heure: req.query.heure,
            activite: req.query.activite,
            prenom: req.query.prenom,
            nom: req.query.nom,
            telephone: req.query.telephone
        });
        rdv.save(function (error, rdv) {
            res.json(rdv);
        });
    }
});


app.get('/timetable', function (req, res) {
    rdvModel.find({ date: req.query.date, activite: req.query.activite }, function (err, timetableUnavaible) {
        res.json(timetableUnavaible);
    })
});


app.get('/deleteRdv', function (req, res) {
    rdvModel.remove({ _id: req.query.id }, function (error) {
        rdvModel.find(function (err, rdv) {
            res.json(rdv);
        });
    });
});


var port = (process.env.PORT || 8080);
app.listen(port, function () {
    console.log("Server listening on port 8080");
});