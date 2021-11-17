const dns = require('dns')

dns.resolveAny('pitaya.hjgpscm.com', (err, address) => {
  console.table(address)
})
