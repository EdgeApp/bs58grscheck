'use strict'

var { groestl256 } = require('@noble/hashes/groestl256')
var { groestl512 } = require('@noble/hashes/groestl512')
var bs58grscheckBase = require('./base')

// GROESTL512(GROESTL512(buffer))
function groestl (buffer) {
  return Buffer.from(groestl256(groestl512(buffer)))
}
module.exports = bs58grscheckBase(groestl)
