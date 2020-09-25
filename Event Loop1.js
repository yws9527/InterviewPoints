setTimeout(function () {
  console.log(1)
}, 1000)
setTimeout(function () {
  console.log(2)
}, 0)
new Promise(function (resolve, reject) {
  console.log(3)
  setTimeout(function () {
    console.log(4)
    resolve()
  }, 0)
  console.log(5)
}).then(function () {
  console.log(6)
})
console.log(7)

// 3-5-7-2-4-6-1