async function async1() {
  console.log('1')
  await async2()
  console.log('2')
}
async function async2() {
  console.log('3')
  new Promise((resolve, reject) => {
    console.log('4')
    setTimeout(() => {
      console.log('5')
    }, 0)
  })
}
console.log('6')
setTimeout(function () {
  console.log('7')
}, 0)
async1();
new Promise(function (resolve) {
  console.log('8')
  resolve();
}).then(function () {
  console.log('9')
})
console.log('10')

// 6-1-3-4-8-10-2-9-7-5