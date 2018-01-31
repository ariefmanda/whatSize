function barcode(text) {
  res.flash = function(text) {
    res.cookie('asu', text, { httpOnly: true })
  }
  if (req.cookies.asu) {
    res.locals.message = req.cookies.asu
    res.clearCookie('asu')
  }
  next()
}
module.exports = barcode;
