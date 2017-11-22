fetch('/api')
.then(results => {
  var child = document.getElementById('hotels-choices').childNodes[1]
  child.append("from browser")
})
