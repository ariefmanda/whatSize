function flashMessageHandler(req, res, next) {
  res.flash = function(text) {
    res.cookie('asu', text, { httpOnly: true })
  }
  if (req.cookies.nosy_flash_message) {
    res.locals.message = req.cookies.asu
    res.clearCookie('asu')
  }
  next()
}
module.exports = flashMessageHandler;
