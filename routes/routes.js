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
 */

/**
 * @typedef discharge
 * @property {string} name
 */

// ----------------------------
// -----------[POST]-----------
// ----------------------------

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

// ----------------------------
// -----------[GET]------------
// ----------------------------

/**
 * Get all professors
 * @route GET /professors
 * @group professor - Operations about professor
 * @returns {object} 200 - All Professors
 * @returns {Error}  404 - Professors Not found
 */
router.get("/professors",async (req,res)=>{
    await professor.find({}).then((result)=>{
        res.status(200).json(result)
    },(err)=>{
        res.status(404).json(err)
    })
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
 * Get a Course by id
 * @route GET /courses/{idCourse}
 * @group course - Operations about course
 * @param {string} idCourse.path.required - The id of the course we are looking for
 * @returns {object} 200 - A course
 * @returns {Error}  404 - Course Not found
 */
router.route('/courses/:idCourse').get(function async(req,res){
    course.findById(req.params.idCourse, function(err, course) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(course);
    });
});

/**
 * Get a Discharge by id
 * @route GET /discharges/{idDischarge}
 * @group discharge - Operations about discharge
 * @param {string} idDischarge.path.required - The id of the discharge we are looking for
 * @returns {object} 200 - A discharge
 * @returns {Error}  404 - Discharge Not found
 */
router.route('/discharges/:idDischarge').get(function async(req,res){
    discharge.findById(req.params.idDischarge, function(err, discharge) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(discharge);
    });
});

/**
 * Get a Group by id
 * @route GET /groups/{idGroup}
 * @group group - Operations about group
 * @param {string} idGroup.path.required - The id of the group we are looking for
 * @returns {object} 200 - A group
 * @returns {Error}  404 - Group Not found
 */
router.route('/groups/:idGroup').get(function async(req,res){
    group.findById(req.params.idGroup, function(err, group) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(group);
    });
});

/**
 * Get a Origin by id
 * @route GET /origins/{idOrigin}
 * @group origin - Operations about origin
 * @param {string} idOrigin.path.required - The id of the origin we are looking for
 * @returns {object} 200 - A origin
 * @returns {Error}  404 - Origin Not found
 */
router.route('/origins/:idOrigin').get(function async(req,res){
    origin.findById(req.params.idOrigin, function(err, origin) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(origin);
    });
});

/**
 * Get a Prime by id
 * @route GET /primes/{idPrime}
 * @group prime - Operations about prime
 * @param {string} idPrime.path.required - The id of the prime we are looking for
 * @returns {object} 200 - A prime
 * @returns {Error}  404 - Prime Not found
 */
router.route('/primes/:idPrime').get(function async(req,res){
    prime.findById(req.params.idPrime, function(err, prime) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(prime);
    });
});

/**
 * Get a Professor by id
 * @route GET /professors/{idProfessor}
 * @group professor - Operations about prime
 * @param {string} idProfessor.path.required - The id of the professor we are looking for
 * @returns {object} 200 - A professor
 * @returns {Error}  404 - Professor Not found
 */
router.route('/professors/:idProfessor').get(function async(req,res){
    professor.findById(req.params.idProfessor, function(err, professor) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(professor);
    });
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
 * @route GET /users/{idUser}
 * @group user - Operations about User
 * @param {string} idUser.path.required - The id of the user we are looking for
 * @returns {object} 200 - A user
 * @returns {Error}  404 - User Not found
 */
router.route('/users/:idUser').get(function async(req,res){
    user.findById(req.params.idUser, function(err, user) {
        if (err)
            res.status(404).json(err);
        res.status(200).json(user);
    });
});

// ----------------------------
// ---------[UPDATE]-----------
// ----------------------------

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

// ----------------------------
// ----------[DELETE]----------
// ----------------------------

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

// ----------------------------
// ----------------------------
// ----------------------------

module.exports = router;
