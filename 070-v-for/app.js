var example = new Vue({
    el: '#example',
    data: {
        items: [
            {message: 'Foo' },
            {message: 'Bar' }
        ]
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

var example3 = new Vue({
    el: '#example-3',
    data: {
        items: [
            {message: 'Foo' },
            {message: 'Bar' }
        ]
    }
})

var example4 = new Vue({
    el: '#repeat-object',
    data: {
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    }
})

var example5 = new Vue({
    el: '#repeat-int',
    data: {
    }
})