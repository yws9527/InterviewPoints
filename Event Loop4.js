setTimeout(() => {
  console.log(1)
}, 1000);
setTimeout(() => {
  console.log(2)
}, 500);
new Promise((resolve, reject) => {
  console.log(3)
  resolve()
}).then(() => {
  console.log(4)
})

// 3-4-2-1