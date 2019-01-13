var app = new Vue({
  el: "#app",
  data: {
    message1: "Yaaoo!",
    message2: "Waddup Wordl!!!",
    message3: 'You loaded this page on ' + new Date().toLocaleString(),
    message4: "I am awesome!",
    message5: "Yaaoo Vue",
    seen: true,
    todos: [{
        text: 'HTML'
      },
      {
        text: 'CSS'
      },
      {
        text: 'JS'
      },
      {
        text: 'Vue'
      }
    ],
    grocerylist: [{
        id: 0,
        text: 'Fish'
      },
      {
        id: 1,
        text: 'Veges'
      },
      {
        id: 2,
        text: 'Drinks'
      },
      {
        id: 3,
        text: 'Cookies'
      },
      {
        id: 4,
        text: 'Meat'
      }
    ]
  },
  methods: {
    reverseString: function() {
      this.message4 = this.message4.split('').reverse().join('')
    }
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>This is a text</li>'
})
