const app = Vue.createApp({
    data() {
        return {
            url: 'https://google.com',
            showBooks: true,
            books : [
                {
                    title: 'Jason the killer',
                    author: 'Creepy man',
                    image: 'assets/1.jpg',
                    isFav: true,
                },
                {
                    title: 'Somewhere over the rainbow',
                    author: 'Dorthy smith',
                    image: 'assets/2.jpg',
                    isFav: false,
                },
                {
                    title: 'Mango',
                    author: 'Bob johnson',
                    image: 'assets/3.jpg',
                    isFav: true,
                }
            ],
            age: 45,
            x: 0,
            y: 0,
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    },
    methods: {
    toggleShowBooks(){
        this.showBooks = !this.showBooks
    },
    toggleFav(b){
        b.isFav = !b.isFav
        console.log(b.isFav)
    },
    handleEvent(e, data) {
        console.log(e, e.type)
        if (data){
            console.log(data)
        }
    },
    handleMousemove(e){
        this.x = e.offsetX
        this.y = e.offsetY
    }
}})

app.mount('#app')