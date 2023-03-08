<template>
  <div id="app">
    <!-- topping component -->
    <div v-if="this.popUp == true">
      <toppings-app v-on:addToCart="addToCart" v-on:closeModal="closeModal" :item="selectedItem"></toppings-app>
    </div>

    <div v-else></div>
    <!-- End Topping Component -->

    <div></div>

    <div class="grid grid-cols-2">
      <!-- Card Component -->
      <div class="flex flex-wrap justify-around w-[100%] mt-8 h-[1000px] gap-2">
        <card-app v-on:showModal="showModal" v-for="(item, index) in dataPizza" :dataPizza="item" :key="index" class="w-[30%]"></card-app>
      </div>
      <!-- End Card Component -->

      <!-- chart component -->
      <div class="w-30%">
        <!-- NOTE: Pizza, Pizza toppings, totalPrice tidak digunakan -->
        <cart-app v-on:cancel="cancel" :pizzaOrder="pizzaOrder"></cart-app>
      </div>
      <!-- End chart component -->
    </div>
  </div>
</template>

<script>
import Toppings from "./components/toppings.vue";
import Card from "./components/card.vue";
import Cart from "./components/cart.vue";

export default {
  name: "app",
  data() {
    return {
      // dataPizza => data setelah di gabung dengan object topping price
      dataPizza: [],
      selectedItem: null,
      popUp: false,
      pizzaToppings: null,
      // final object pizza
      pizzaOrder: [],
      toppingPrice: [1, 2, 3, 4, 5],
    };
  },
  // create ini ialah fungsi yang di sediakan vue dan di jalankan saat vue di instance.
  // disini kita akan isi data pizzaOrder akan di isi berdasarkan data di localStorage
  created() {
    // pizza di sini ialah, nama key pada local storage => jangan lupa parse ke json dulu
    this.pizzaOrder = JSON.parse(localStorage.getItem("pizza")) || [];
  },
  components: {
    "card-app": Card,
    "cart-app": Cart,
    "toppings-app": Toppings,
  },
  computed: {},
  methods: {
    // cartHandler(pizza) {
    //   console.log(pizza);
    //   // const existingPizzaIndex = this.cart.findIndex((p) => p.id === pizza.id && p.toppings.toString() === pizza.toppings.toString());
    // },
    cancel(index) {
      // console.log(index);
      this.pizzaOrder.splice(index, 1);

      // Ini gunanya ialah untuk set kembali data tervaru ke dalaam local storage. agar yang di hapus ialah hanya data yang di klik oleh user saja. karena di local storage tidak bisa menghapus hanya satu data saja..
      localStorage.setItem("pizza", JSON.stringify(this.pizzaOrder));
    },

    showModal(selectedItem) {
      // selecedItem ini dapat dari card yang di klik user
      this.selectedItem = selectedItem;
      // console.log(selectedItem);
      this.popUp = true;
    },
    closeModal() {
      this.popUp = false;
      // console.log(this.popUp);
    },

    addToCart(event) {
      // Berfungsi untuk menambahkan jumlah harga topping
      let totalTopping = event.topping.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, 0);

      // ini berguna untuk memasukkan hasil dari total topping ke dalam object event
      event.totalTopping = totalTopping;

      let totalPizza = event.price + totalTopping;

      // tambakan object baru ke dalam object event
      event.totalPizza = totalPizza;

      console.log(event);

      // ini berfungsi untuk cek apakah data item yang di klik user sudah ada atau belum di dalam pizza Order dengan ara cek index ke berapa jika data nya di temukan.

      // const existingPizzaIndex = this.pizzaOrder.findIndex((p) => p.id == event.id && p.topping.toString() == event.topping.toString());

      const existingPizzaIndex = this.pizzaOrder.findIndex(checkSame);

      function checkSame(p) {
        return p.id == event.id && p.topping.toString() == event.topping.toString();
      }

      //  batas
      // console.log(event.topping);
      console.log(existingPizzaIndex);

      // jika indexnya >-1 berarti mulai 0 dst. jika index ada maka item telah di tambahkan dan jalankan perintah ini

      if (existingPizzaIndex > -1) {
        // console.log(this.pizzaOrder[existingPizzaIndex].quantity);
        this.pizzaOrder[existingPizzaIndex].quantity++;
      } else {
        this.pizzaOrder.push(event);
      }

      // if (this.pizzaOrder[existingPizzaIndex].quantity) {
      // }

      // Ini berfungsi untuk memasukkan objet yang kita dapat ke dalam array yang akan digunakan
      // this.pizzaOrder.push(event);
      // console.log(event);

      this.closeModal();

      // Masukkan data yang telah di pilih user ke local storage
      localStorage.setItem("pizza", JSON.stringify(this.pizzaOrder));
    },

    async getData() {
      const data = {
        method: "GET",
      };
      const response = await fetch("https://private-anon-e79f49c538-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu", data);

      let result = await response.json();
      // console.log(result);
      // return result;
      // ini tadinya mau pakai push ke dalam array tapi tidak di sarankan karena bakalaan jadi array di dalam array dan susah untuk aksesnya.

      // di bawah ini ialah teknik menggabungkan array yang berbeda menjadi 1
      this.dataPizza = result.map((item) => {
        // console.log(item.topping);
        return {
          ...item,
          topping: (() => {
            if (item.topping) {
              return item.topping.map((toppingItem, index) => {
                return {
                  name: toppingItem,
                  price: this.toppingPrice[index],
                };
              });
            } else {
              return [];
            }
          })(),
        };
      });

      console.log(this.dataPizza);
    },
  },
  // mounted ini ialah fungsi semacam onload pada javascript. jadi langsung di panggil saat halaman di buka
  mounted() {
    this.getData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
