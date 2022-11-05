const app = new Vue({
    el: '#app',
    data: {
        names: ['Vika', 'Alex', 'Kate', 'Vova'],
        nWord: 'NogGa'
    },
    methods: {
        clickHandler: function(event) {
            console.log('Click', event);
        }
    },
    computed: {
        upperCaseName: function() {
            return this.nWord.toUpperCase();
        }
    }
})