// ----------------------------
// --------[DECLARATION]-------
// ----------------------------

const express = require('express');
const router = express.Router();
const group = require('../schemas/group.js');
const professor = require('../schemas/professor.js');
const spinneret = require('../schemas/spinneret.js');
const status = require('../schemas/status.js');
const user = require('../schemas/user.js');
const prime = require('../schemas/prime.js');
const origin = require('../schemas/origin.js');
const course = require('../schemas/course.js');


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
 * @typedef spinneret
 * @property {string} name
 * @property {string} idgroup
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
})

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
})

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
})

// ----------------------------
// ----------------------------
// ----------------------------

module.exports = router;
