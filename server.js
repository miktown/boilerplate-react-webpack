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
        username: 'slifszyc',
        avatar: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/11031148_10153448564292612_2579019413701631604_n.jpg?oh=d83cdd0687c87c91b247a42375fc5a57&oe=57B12767'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'slifszyc',
        avatar: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/11031148_10153448564292612_2579019413701631604_n.jpg?oh=d83cdd0687c87c91b247a42375fc5a57&oe=57B12767'
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
