var tape = require('tape')
var Buffer = require('safe-buffer').Buffer
var createBlakeHash = require('blake-hash')
var bs58grscheckBase = require('../base')
var { hexToBytes } = require('hashes-grs/utils')

function blake256x2 (buffer) {
  buffer = createBlakeHash('blake256').update(Buffer.from(buffer)).digest()
  return Uint8Array.from(createBlakeHash('blake256').update(buffer).digest())
}

var bs58grscheck = bs58grscheckBase(blake256x2)

tape('custom checksum function (blake256x2)', function (t) {
  const address = 'DsRLWShUQexhKE1yRdpe2kVH7fmULcEUFDk'
  const payload = hexToBytes('073f0415e993935a68154fda7018b887c4e3fe8b4e10')

  t.equal(bs58grscheck.encode(payload, blake256x2), address)
  t.same(bs58grscheck.decodeUnsafe(address, blake256x2), payload)
  t.same(bs58grscheck.decode(address, blake256x2), payload)

  t.end()
})
