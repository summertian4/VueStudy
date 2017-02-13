var app = new Vue({
  el: '#computed-e',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

var app = new Vue({
  el: '#computed-setter-e',
  data: {
    firstName: 'Lingyu',
    lastName: 'Zhou'
  },
  computed: {
    fullName: {
    // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})