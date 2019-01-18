const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('heeey')
})

router.post('/', (req, res, next) => {
  res.send('heeey post')
})

router.get('/add', (req, res, next) => {
  res.send('another HEEEY')
})

module.exports = router