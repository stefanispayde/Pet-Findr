const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Member = require('../models/members');

router.get('/login', (req, res)=>{
	res.render('members/login.ejs', {message: req.session.message || ""});
});

router.post('/login', (req, res)=>{
	Member.findOne({username: req.body.username}, (err, user)=>{
if(user){
	if(bcrypt.compareSync(req.body.password, user.password)){
		req.session.message = "";
		req.session.username = req.body.username;
		req.session.logged = true;
		console.log(req.session);

		res.redirect('/');
		}else {
		console.log('else in bcrypt compare');
		req.session.message = "Username or password is incorrect";
		res.redirect('/session/login');
		}
}else{
	req.session.message = "Username or password is incorrect";
	res.redirect('/session/login');
	}

	});
});

router.post('/register', (req, res)=>{
const password = req.body.password;
const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const memberDbEntry = {};
memberDbEntry.username = req.body.username;
memberDbEntry.password = passwordHash;
memberDbEntry.zipcode = req.body.zipcode;

Member.create(memberDbEntry, (err, member)=>{
	console.log(member);
	req.session.test = 'test';
	req.session.message = "";
	req.session.username = member.username;
	req.session.zipcode = member.zipcode;
	req.session.logged = true;
	});
	res.redirect('/session/login');
});

router.get('/register', (req, res)=>{
	res.render('members/register.ejs');
});

router.get('/logout', (req, res)=>{
	req.session.destroy((err)=>{
		if(err){

		}else{
			res.redirect('/');
		}
	});
});

module.exports = router;
