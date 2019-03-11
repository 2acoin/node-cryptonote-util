'use strict'

const cnUtil = require('./')
const Buffer = require('safe-buffer').Buffer
const assert = require('assert')

var validAddressPrefix = 0x1fcdee
var addressPrefix = cnUtil.address_decode(new Buffer('gunsGwwGCqEdXYkT7fHxGVZT6aR3bVL3tbW6uDAAr3CQJbKGYgtXDRiGA8Xpm4UKikNXUZ4WATFkCUu62zxoDDM155TYthufc9'))
console.log("Address Prefix: ", addressPrefix)

assert.deepEqual(validAddressPrefix, addressPrefix)