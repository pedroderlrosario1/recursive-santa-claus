function deliverPresents(houses) {

  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  }
  else {
    var middle = parseInt(houses.length / 2)
    var firstList = houses.slice(0, middle)
    var secondList = houses.slice(middle, houses.length)
    deliverPresents(firstList)
    deliverPresents(secondList)

  }

}
module.exports = deliverPresents
