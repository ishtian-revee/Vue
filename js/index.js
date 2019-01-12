var app = new Vue({
  el: "#app",
  data: {
    message1: "Yaaoo!",
    message2: "Waddup Wordl!!!",
    message3: 'You loaded this page on ' + new Date().toLocaleString(),
    seen: true,
    todos: [
      { text: 'HTML' },
      { text: 'CSS' },
      { text: 'JS' },
      { text: 'Vue' }
    ]
  }
})
