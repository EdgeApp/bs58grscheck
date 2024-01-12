'use strict'

var { sha256 } = require('@noble/hashes/sha256')
var bs58grscheckBase = require('./base')

// SHA256(SHA256(buffer))
function sha256x2 (buffer) {
  return sha256(sha256(buffer))
}

// GROESTL512(GROESTL512(buffer))
function groestl (buffer) {
  return Buffer(groestlhash.groestl_2(buffer, 1, 1))
}
module.exports = bs58grscheckBase(groestl)
