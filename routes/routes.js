// ----------------------------
// --------[DECLARATION]-------
// ----------------------------

const express = require('express');
const router = express.Router();
const group = require('../schemas/group.js');
const professor = require('../schemas/professor.js');
const status = require('../schemas/status.js');
const user = require('../schemas/user.js');
const prime = require('../schemas/prime.js');
const origin = require('../schemas/origin.js');
const course = require('../schemas/course.js');
const discharge = require('../schemas/discharge.js');
const request = require('../schemas/request.js');
const responsible = require('../schemas/responsible.js');
const fetch = require('node-fetch');
const requestHTTPS = require("request");
const axios = require("axios");
const bcrypt =require('bcrypt');

// ----------------------------
// ----------[SCHEMAS]---------
// ----------------------------

/**
 * @typedef group
 * @property {string} name
 */

/**
 * @typedef professor
 * @property {string} lastname
 * @property {string} firstname
 * @property {string} email
 * @property {boolean} isSupervisor
 * @property {boolean} isAdmin
 * @property {string} status
 * @property {string} origin
 * @property {number} hoursDone
 * @property {date} lastConnection
 * @property {date} lastWishUpdate
 * @property {array} modules
 */

/**
 * @typedef status
 * @property {string} name
 * @property {number} mandatoryHours
 * @property {number} extraHours
 */

/**
 * @typedef user
 * @property {string} email
 * @property {string} password
 * @property {string} profile
 */

/**
 * @typedef prime
 * @property {string} name
 */

/**
 * @typedef origin
 * @property {string} name
 */

/**
 * @typedef course
 * @property {string} name
 * @property {string} type
 * @property {string} professor
 */

/**
 * @typedef discharge
 * @property {string} name
 */

/**
 * @typedef request
 * @property {string} requestor
 * @property {string} emailRequestor
 * @property {string} detailRequest
 * @property {string} groupRequested
 * @property {string} courseRequested
 * @property {boolean} response
 */

/**
 * @typedef responsible
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} professorID
 * @property {string} email
 * @property {string} group
 */

// ----------------------------
// -----------[POST]-----------
// ----------------------------

/**
 * Add a new user
 * @route POST /user
 * @group user - Operations about user
 * @returns {user.model} 201 - A new user is added
 * @returns {Error}  400 - Bad request
 */
router.post("/user",async (req,res)=>{
    const isUsernameExist = await user.findOne({ email: req.body.email });
    const isResponsible = await responsible.findOne({ email: req.body.email });

    /*if ( isProfessorExist === null){
        return res.status(401).json({ error: "Vous n'êtes pas autorisé à vous inscrire. Contactez l'administrateur" });
    }
    else if(isUsernameExist) {
        return res.status(401).json({ error: "Utilisateur déjà existant" });
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        let newUser = new user(req.body);
        newUser.password = password;
        await newUser.save().then((result)=>{
            res.status(201).json({ NewUser : "201 => https://cpel.herokuapp.com/api/professors/"+newUser._id})
        },(err)=>{
            res.status(401).json(err)
        })
    }*/
});

/**
 * LOGIN
 * @route POST /login
 * @group user - Operations about user
 * @returns {user.model} 201 - Success
 * @returns {Error}  400 -  Echec
 */
router.get("/login/:email/:password", async (req, res) => {
    const userLogin = await user.findOne({ email: req.params.email });
    if (!userLogin) return res.status(401).json({ error: "Nom d'utilisateur incorrect" });
    const validPassword = await bcrypt.compare(req.params.password, userLogin.password);
    if (!validPassword) return res.status(401).json({ error: "Mot de passe incorrect" });
    res.status(200).json({userLogin})
});

/**
 * Add a new professor
 * @route POST /professor
 * @group professor - Operations about professor
 * @returns {professor.model} 201 - A new professor is added
 * @returns {Error}  400 -  Bad Request
 */
router.post("/professor",async (req,res)=>{
    let newProfessor = new professor(req.body);
    await newProfessor.save().then((result)=>{
        res.status(201).json({ NewProfessor : "201 => " + newProfessor._id})
    },(err)=>{
        res.status(400).json(err)
    })
});

/**
 * Add a new status
 * @route POST /status
 * @group status - Operations about status
 * @returns {status.model} 201 - A new status is added
 * @returns {Error}  400 -  Bad Request
 */
router.post("/status",async (req,res)=>{
    let newStatus = new status(req.body);
    await newStatus.save().then((result)=>{
        res.status(201).json({ NewStatus : "201 => " + newStatus._id})
    },(err)=>{
        res.status(400).json(err)
    })
});

/**
 * Add a new prime
 * @route POST /prime
 * @group prime - Operations about prime
 * @returns {prime.model} 201 - A new prime is added
 * @returns {Error}  400 -  Bad Request
 */
router.post("/prime",async (req,res)=>{
    let newPrime = new prime(req.body);
    await newPrime.save().then((result)=>{
        res.status(201).json({ NewPrime : "201 => " + newPrime._id})
    },(err)=>{
        res.status(400).json(err)
    })
});

/**
 * Add a new group
 * @route POST /group
 * @group group - Operations about group
 * @returns {group.model} 201 - A new group is added
 * @returns {Error}  400 -  Bad Request
 */
router.post("/group",async (req,res)=>{
    let newGroup = new group(req.body);
    await newGroup.save().then((result)=>{
        res.status(201).json({ NewGroup : "201 => " + newGroup._id})
    },(err)=>{
        res.status(400).json(err)
    })
});

/**
 * Add a new origin
 * @route POST /origin
 * @group origin - Operations about origin
 * @returns {origin.model} 201 - A new origin is added
 * @returns {Error}  400 -  Bad Request
 */
router.post("/origin",async (req,res)=>{
    let newOrigin = new origin(req.body);
    await newOrigin.save().then((result)=>{
        res.status(201).json({ NewOrigin : "201 => " + newOrigin._id})
    },(err)=>{
        res.status(400).json(err)
    })
});

/**
 * Add a new discharge
 * @route POST /discharge
 * @group discharge - Operations about discharge
 * @returns {discharge.model} 201 - A new discharge is added
 * @returns {Error}  400 -  Bad Request
 */
router.post("/discharge",async (req,res)=>{
    let newDischarge = new discharge(req.body);
    await newDischarge.save().then((result)=>{
        res.status(201).json({ NewDischarge : "201 => " + newDischarge._id})
    },(err)=>{
        res.status(400).json(err)
    })
});

/**
 * Add a new course
 * @route POST /course
 * @group course - Operations about course
 * @returns {course.model} 201 - A new course is added
 * @returns {Error}  400 -  Bad Request
 */
router.post("/course",async (req,res)=>{
    let newCourse = new course(req.body);
    await newCourse.save().then((result)=>{
        res.status(201).json({ NewCourse : "201 => " + newCourse._id})
    },(err)=>{
        res.status(400).json(err)
    })
});

/**
 * Add a new request
 * @route POST /request
 * @group request - Operations about request
 * @returns {request.model} 201 - A new request is added
 * @returns {Error}  400 -  Bad Request
 */
router.post("/request",async (req,res)=>{
    let newRequest = new request(req.body);
    await newRequest.save().then((result)=>{
        res.status(201).json({ NewRequest : "201 => " + newRequest._id})
    },(err)=>{
        res.status(400).json(err)
    })
});

/**
 * Add a new responsible
 * @route POST /responsible
 * @group responsible - Operations about responsible
 * @returns {responsible.model} 201 - A new responsible is added
 * @returns {Error}  400 -  Bad Request
 */
router.post("/responsible",async (req,res)=>{
    let newResponsible = new responsible(req.body);
    await newResponsible.save().then((result)=>{
        res.status(201).json({ NewResponsible : "201 => " + newResponsible._id})
    },(err)=>{
        res.status(400).json(err)
    })
});

// ----------------------------
// -----------[GET]------------
// ----------------------------

/**
 * Get all users
 * @route GET /users
 * @group user - Operations about user
 * @returns {object} 200 - All users
 * @returns {Error}  404 - Users Not found
 */
router.get("/users",async (req,res)=>{
    await user.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
});

/**
 * Get all professors
 * @route GET /professors
 * @group professor - Operations about professor
 * @returns {object} 200 - All Professors
 * @returns {Error}  404 - Professors Not found
 */
router.get("/professors/:email",async (req,res)=>{
    const url = "http://146.59.195.214:8006/api/v1/teachers/all";
    /*axios.get(url)
        .then((response) => {
            for (let prof of response.data) {
                if (prof.email === req.params.email) {
                    console.log(prof);
                    res.status(200).json(prof)
                }
            }
        })*/
    requestHTTPS.get(url, (error, response, body) => {
        let json = JSON.parse(body);
        res.status(200).json(json)
    });
});

/**
 * Get all status
 * @route GET /status
 * @group status - Operations about status
 * @returns {object} 200 - All Status
 * @returns {Error}  404 - Status Not found
 */
router.get("/status",async (req,res)=>{
    await status.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
});

/**
 * Get all primes
 * @route GET /primes
 * @group prime - Operations about prime
 * @returns {object} 200 - All Primes
 * @returns {Error}  404 - Primes Not found
 */
router.get("/primes",async (req,res)=>{
    await prime.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
});

/**
 * Get all groups
 * @route GET /groups
 * @group group - Operations about group
 * @returns {object} 200 - All Groups
 * @returns {Error}  404 - Groups Not found
 */
router.get("/groups",async (req,res)=>{
    await group.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
});

/**
 * Get all origins
 * @route GET /origins
 * @group origin - Operations about origin
 * @returns {object} 200 - All Origins
 * @returns {Error}  404 - Origins Not found
 */
router.get("/origins",async (req,res)=>{
    await origin.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
});

/**
 * Get all discharges
 * @route GET /discharges
 * @group discharge - Operations about discharge
 * @returns {object} 200 - All Discharges
 * @returns {Error}  404 - Discharges Not found
 */
router.get("/discharges",async (req,res)=>{
    await discharge.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
});

/**
 * Get all courses
 * @route GET /courses
 * @group course - Operations about course
 * @returns {object} 200 - All Courses
 * @returns {Error}  404 - Courses Not found
 */
router.get("/courses",async (req,res)=>{
    await course.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
});

/**
 * Get all request
 * @route GET /requests
 * @group request - Operations about request
 * @returns {object} 200 - All Requests
 * @returns {Error}  404 - Requests Not found
 */
router.get("/requests",async (req,res)=>{
    await request.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
});

/**
 * Get all responsibles
 * @route GET /responsibles
 * @group responsible - Operations about responsible
 * @returns {object} 200 - All responsibles
 * @returns {Error}  404 - Responsibles Not found
 */
router.get("/responsibles",async (req,res)=>{
    await responsible.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
});

/**
 * Get a Course by id
 * @route GET /course/{idCourse}
 * @group course - Operations about course
 * @param {string} idCourse.path.required - The id of the course we are looking for
 * @returns {object} 200 - A course
 * @returns {Error}  404 - Course Not found
 */
router.route('/course/:idCourse').get(function async(req,res){
    course.findById(req.params.idCourse, function(err, course) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(course);
    });
});

/**
 * Get a Discharge by id
 * @route GET /discharge/{idDischarge}
 * @group discharge - Operations about discharge
 * @param {string} idDischarge.path.required - The id of the discharge we are looking for
 * @returns {object} 200 - A discharge
 * @returns {Error}  404 - Discharge Not found
 */
router.route('/discharge/:idDischarge').get(function async(req,res){
    discharge.findById(req.params.idDischarge, function(err, discharge) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(discharge);
    });
});

/**
 * Get a Group by id
 * @route GET /group/{idGroup}
 * @group group - Operations about group
 * @param {string} idGroup.path.required - The id of the group we are looking for
 * @returns {object} 200 - A group
 * @returns {Error}  404 - Group Not found
 */
router.route('/group/:idGroup').get(function async(req,res){
    group.findById(req.params.idGroup, function(err, group) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(group);
    });
});

/**
 * Get a Origin by id
 * @route GET /origin/{idOrigin}
 * @group origin - Operations about origin
 * @param {string} idOrigin.path.required - The id of the origin we are looking for
 * @returns {object} 200 - A origin
 * @returns {Error}  404 - Origin Not found
 */
router.route('/origin/:idOrigin').get(function async(req,res){
    origin.findById(req.params.idOrigin, function(err, origin) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(origin);
    });
});

/**
 * Get a Prime by id
 * @route GET /prime/{idPrime}
 * @group prime - Operations about prime
 * @param {string} idPrime.path.required - The id of the prime we are looking for
 * @returns {object} 200 - A prime
 * @returns {Error}  404 - Prime Not found
 */
router.route('/prime/:idPrime').get(function async(req,res){
    prime.findById(req.params.idPrime, function(err, prime) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(prime);
    });
});

/**
 * Get a Professor by email
 * @route GET /professor/{email}
 * @group professor - Operations about professor
 * @param {string} email.path.required - The email of the professor we are looking for
 * @returns {object} 200 - A professor
 * @returns {Error}  404 - Professor Not found
 */
router.route('/professor/:email').get(function async(req,res){
    const url = "http://146.59.195.214:8006/api/v1/teachers/all";
    axios.get(url)
        .then((response) => {
            for (let prof of response.data) {
                if (prof.email === req.params.email) {
                    console.log(prof);
                    res.status(200).json(prof)
                }
            }
        })
});

/**
 * Get a Status by id
 * @route GET /status/{idStatus}
 * @group status - Operations about Status
 * @param {string} idStatus.path.required - The id of the status we are looking for
 * @returns {object} 200 - A status
 * @returns {Error}  404 - Status Not found
 */
router.route('/status/:idStatus').get(function async(req,res){
    status.findById(req.params.idStatus, function(err, status) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(status);
    });
});

/**
 * Get a User by id
 * @route GET /user/{idUser}
 * @group user - Operations about User
 * @param {string} idUser.path.required - The id of the user we are looking for
 * @returns {object} 200 - A user
 * @returns {Error}  404 - User Not found
 */
router.route('/user/:idUser').get(function async(req,res){
    user.findById(req.params.idUser, function(err, user) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(user);
    });
});

/**
 * Get a Request by id
 * @route GET /request/{idRequest}
 * @group request - Operations about Request
 * @param {string} idRequest.path.required - The id of the request we are looking for
 * @returns {object} 200 - A request
 * @returns {Error}  404 - Request Not found
 */
router.route('/request/:idRequest').get(function async(req,res){
    request.findById(req.params.idRequest, function(err, request) {
        if (err)
            res.status(404).json(request);
        res.status(200).json(request);
    });
});

/**
 * Get a Responsible by id
 * @route GET /responsible/{idResponsible}
 * @group responsible - Operations about Responsible
 * @param {string} idResponsible.path.required - The id of the responsible we are looking for
 * @returns {object} 200 - A responsible
 * @returns {Error}  404 - Responsible Not found
 */
router.route('/responsible/:idResponsible').get(function async(req,res){
    responsible.findById(req.params.idResponsible, function(err, responsible) {
        if (err)
            res.status(404).json(responsible);
        res.status(200).json(responsible);
    });
});

// ----------------------------
// ---------[UPDATE]-----------
// ----------------------------

/**
 * Update user password
 * @route PUT /user/{idUser}
 * @group user - Operations about user
 * @param {string} idUser.path.required - email
 * @returns {object} 200 - user updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/user/:idUser', async function(req, res) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    user.findByIdAndUpdate(req.params.idUser,
        {password: password}, function(err, data) {
            if (err) {
                res.status(204).json({ Result : "204 - Password not changed"})
            } else {
                res.status(200).json({ Result : "200 - Password changed"})
            }
        });
});

/**
 * Update a professor
 * @route PUT /professor/{idProfessor}
 * @group professor - Operations about professor
 * @param {string} idProfessor.path.required - The id of the professor you want to update
 * @returns {object} 200 - Professor updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/professor/:idProfessor', async (req, res) => {
    try {
        await professor.findByIdAndUpdate(req.params.idProfessor, req.body)
        await professor.save()
        res.status(200).json({ Result : "200 - Professor updated"})
    } catch (err) {
        res.status(204).json({ Result : "204 - Professor not updated"})
    }
});

/**
 * Update a status
 * @route PUT /status/{idStatus}
 * @group status - Operations about status
 * @param {string} idStatus.path.required - The id of the status you want to update
 * @returns {object} 200 - Status updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/status/:idStatus', async (req, res) => {
    try {
        await status.findByIdAndUpdate(req.params.idStatus, req.body)
        await status.save()
        res.status(200).json({ Result : "200 - Status updated"})
    } catch (err) {
        res.status(204).json({ Result : "204 - Status not updated"})
    }
});

/**
 * Update a prime
 * @route PUT /prime/{idPrime}
 * @group prime - Operations about prime
 * @param {string} idPrime.path.required - The id of the prime you want to update
 * @returns {object} 200 - Prime updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/prime/:idPrime', async (req, res) => {
    try {
        await prime.findByIdAndUpdate(req.params.idPrime, req.body)
        await prime.save()
        res.status(200).json({ Result : "200 - Status updated"})
    } catch (err) {
        res.status(204).json({ Result : "204 - Status not updated"})
    }
});

/**
 * Update a group
 * @route PUT /group/{idGroup}
 * @group group - Operations about group
 * @param {string} idGroup.path.required - The id of the group you want to update
 * @returns {object} 200 - Group updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/group/:idGroup', async (req, res) => {
    try {
        await group.findByIdAndUpdate(req.params.idGroup, req.body)
        await group.save()
        res.status(200).json({ Result : "200 - Group updated"})
    } catch (err) {
        res.status(204).json({ Result : "204 - Group not updated"})
    }
});

/**
 * Update a origin
 * @route PUT /origin/{idOrigin}
 * @group origin - Operations about origin
 * @param {string} idOrigin.path.required - The id of the origin you want to update
 * @returns {object} 200 - Origin updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/origin/:idOrigin', async (req, res) => {
    try {
        await origin.findByIdAndUpdate(req.params.idOrigin, req.body)
        await origin.save()
        res.status(200).json({ Result : "200 - Origin updated"})
    } catch (err) {
        res.status(204).json({ Result : "204 - Origin not updated"})
    }
});

/**
 * Update a discharge
 * @route PUT /discharge/{idDischarge}
 * @group discharge - Operations about discharge
 * @param {string} idDischarge.path.required - The id of the discharge you want to update
 * @returns {object} 200 - Discharge updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/discharge/:idDischarge', async (req, res) => {
    try {
        await discharge.findByIdAndUpdate(req.params.idDischarge, req.body)
        await discharge.save()
        res.status(200).json({ Result : "200 - Discharge updated"})
    } catch (err) {
        res.status(204).json({ Result : "204 - Discharge not updated"})
    }
});

/**
 * Update a course
 * @route PUT /course/{idCourse}
 * @group course - Operations about course
 * @param {string} idCourse.path.required - The id of the course you want to update
 * @returns {object} 200 - Course updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/course/:idCourse', async (req, res) => {
    try {
        await course.findByIdAndUpdate(req.params.idCourse, req.body)
        await course.save()
        res.status(200).json({ Result : "200 - Course updated"})
    } catch (err) {
        res.status(204).json({ Result : "204 - Course not updated"})
    }
});

/**
 * Update a request
 * @route PUT /request/{idRequest}
 * @group request - Operations about request
 * @param {string} idRequest.path.required - The id of the request you want to update
 * @returns {object} 200 - Request updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/request/:idRequest', async (req, res) => {
    try {
        await request.findByIdAndUpdate(req.params.idRequest, req.body)
        await request.save()
        res.status(200).json({ Result : "200 - Request updated"})
    } catch (err) {
        res.status(204).json({ Result : "204 - request not updated"})
    }
});

/**
 * Update a responsible
 * @route PUT /responsible/{idResponsible}
 * @group responsible - Operations about responsible
 * @param {string} idResponsible.path.required - The id of the responsible you want to update
 * @returns {object} 200 - Responsible updated
 * @returns {Error}  default - Unexpected error
 */
router.put('/responsible/:idResponsible', async (req, res) => {
    try {
        await responsible.findByIdAndUpdate(req.params.idResponsible, req.body)
        await responsible.save()
        res.status(200).json({ Result : "200 - Responsible updated"})
    } catch (err) {
        res.status(204).json({ Result : "204 - Responsible not updated"})
    }
});

// ----------------------------
// ----------[DELETE]----------
// ----------------------------

/**
 * Delete user
 * @route DELETE /user/{idUser}
 * @group user - Operations about user
 * @param {string} idUser.path.required - The id of the user to be deleted
 * @returns {object} 200 - user deleted
 * @returns {Error}  404 - user not found
 */
router.delete("/user/:idUser", async (req, res) => {
    try {
        await user.deleteOne({ _id: req.params.idUser })
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

/**
 * Delete professor
 * @route DELETE /professor/{idProfessor}
 * @group professor - Operations about professor
 * @param {string} idProfessor.path.required - The id of the professor to be deleted
 * @returns {object} 200 - professor deleted
 * @returns {Error}  404 - professor not found
 */
router.delete("/professor/:idProfessor", async (req, res) => {
    try {
        await professor.deleteOne({ _id: req.params.idProfessor })
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

/**
 * Delete status
 * @route DELETE /status/{idStatus}
 * @group status - Operations about status
 * @param {string} idStatus.path.required - The id of the status to be deleted
 * @returns {object} 200 - status deleted
 * @returns {Error}  404 - status not found
 */
router.delete("/status/:idStatus", async (req, res) => {
    try {
        await status.deleteOne({ _id: req.params.idStatus })
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

/**
 * Delete prime
 * @route DELETE /prime/{idPrime}
 * @group prime - Operations about prime
 * @param {string} idPrime.path.required - The id of the prime to be deleted
 * @returns {object} 200 - prime deleted
 * @returns {Error}  404 - prime not found
 */
router.delete("/prime/:idPrime", async (req, res) => {
    try {
        await prime.deleteOne({ _id: req.params.idPrime })
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

/**
 * Delete group
 * @route DELETE /group/{idGroup}
 * @group group - Operations about group
 * @param {string} idGroup.path.required - The id of the group to be deleted
 * @returns {object} 200 - group deleted
 * @returns {Error}  404 - group not found
 */
router.delete("/group/:idGroup", async (req, res) => {
    try {
        await group.deleteOne({ _id: req.params.idGroup })
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

/**
 * Delete origin
 * @route DELETE /origin/{idOrigin}
 * @group origin - Operations about origin
 * @param {string} idOrigin.path.required - The id of the origin to be deleted
 * @returns {object} 200 - origin deleted
 * @returns {Error}  404 - origin not found
 */
router.delete("/origin/:idOrigin", async (req, res) => {
    try {
        await origin.deleteOne({ _id: req.params.idOrigin })
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

/**
 * Delete discharge
 * @route DELETE /discharge/{idDischarge}
 * @group discharge - Operations about discharge
 * @param {string} idDischarge.path.required - The id of the discharge to be deleted
 * @returns {object} 200 - discharge deleted
 * @returns {Error}  404 - discharge not found
 */
router.delete("/discharge/:idDischarge", async (req, res) => {
    try {
        await discharge.deleteOne({ _id: req.params.idDischarge })
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

/**
 * Delete course
 * @route DELETE /course/{idCourse}
 * @group course - Operations about course
 * @param {string} idCourse.path.required - The id of the course to be deleted
 * @returns {object} 200 - Course deleted
 * @returns {Error}  404 - Course not found
 */
router.delete("/course/:idCourse", async (req, res) => {
    try {
        await course.deleteOne({ _id: req.params.idCourse })
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

/**
 * Delete request
 * @route DELETE /request/{idRequest}
 * @group request - Operations about request
 * @param {string} idRequest.path.required - The id of the request to be deleted
 * @returns {object} 200 - Request deleted
 * @returns {Error}  404 - Request not found
 */
router.delete("/request/:idRequest", async (req, res) => {
    try {
        await request.deleteOne({ _id: req.params.idRequest })
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

/**
 * Delete responsible
 * @route DELETE /responsible/{idResponsible}
 * @group responsible - Operations about responsible
 * @param {string} idResponsible.path.required - The id of the responsible to be deleted
 * @returns {object} 200 - Responsible deleted
 * @returns {Error}  404 - Responsible not found
 */
router.delete("/responsible/:idResponsible", async (req, res) => {
    try {
        await responsible.deleteOne({ _id: req.params.idResponsible})
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({ error: "404" })
    }
});

// ----------------------------
// ----------------------------
// ----------------------------

module.exports = router;
