function barcode() {
  let angka='1234567890'
  let result=''
  while(result.length<12){
    result+=(angka[Math.floor(Math.random()*angka.length)])
  }
  return Number(result)
}

module.exports = barcode;
