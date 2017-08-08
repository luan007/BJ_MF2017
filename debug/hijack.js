var ProxyDNS = require("proxy-dns").default;

const dns = new ProxyDNS({
  ttl: 600
});

dns.use(function*(next) {
  console.log(this.domain);
  if (this.domain.indexOf("circuitpot.com") == 0) {
    this.answers = ["192.168.40.33"];
  }
  if (this.domain.indexOf("debug.com") >= 0) {
    this.answers = ["182.92.232.37"];
  }
  yield next;
});

dns.listen(53);
