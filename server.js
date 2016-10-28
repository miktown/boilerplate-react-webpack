var express = require('express')

var app = express()

app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.sendFile('./index.html', { title: 'informes app ' })
})

app.get('/api/mock', function (req, res, next) {
  var pictures = [
    {
      user: {
        username: 'mimotic',
        avatar: ''
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'mimotic',
        avatar: ''
      },
      url: 'office.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ]

  setTimeout(function () {
    res.send(pictures)
  }, 2000)
})

app.listen(3000, function (err) {
  if (err) return (console.log('Hubo un error'), process.exit(1))

  console.log('Informes app escuchando en el puerto 3000')
})
