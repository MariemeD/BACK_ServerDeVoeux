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

// ----------------------------
// -----------[POST]-----------
// ----------------------------


// ----------------------------
module.exports = router;
