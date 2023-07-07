const app = Vue.createApp({
    data() {
        return {
            product: 'Socks', // updated data value //
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 100,
            onSale: true
        }
    }
})
