fetch('/api')
.then(resStream => resStream.json())
.then(result => {
  var child = document.getElementById('hotels-choices').childNodes[1]
  child.append(result.hotels)
})

