
var app = new Vue({
  el: '#app',
  data: {
    message: 'abc'
  }
})

Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})