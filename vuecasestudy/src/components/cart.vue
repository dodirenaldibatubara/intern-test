<template>
  <div div class="cart bg-[#e8ecf9] w-[80%] mt-8 py-10 px-4 mx-auto mb-10">
    <h2 class="text-4xl font-bold">Cart</h2>
    <div class="mt-6 min-h-[400px]">
      <p v-if="!pizzaOrder.length" class="text-xl">The shopping cart is still empty, click item to add to chart</p>

      <!-- <div v-if="toppingView"> -->
      <div v-for="(order, index) in pizzaOrder" :key="order.index" class="card mt-5 bg bg-[#ffc700] flex items-center space-x-5 rounded-xl p-3">
        <img src="../assets/image/pizza1.jpg" alt="pizza" class="w-[30%] rounded-lg" />
        <div class="text-xl flex flex-col items-start justify-around">
          <div class="flex space-x-14 font-bold">
            <h5 class="font-bold">{{ order.name }}</h5>
            <h5>Quantity : {{ order.quantity }}</h5>
          </div>
          <h5 class="font-bold text-lg">Toppings</h5>
          <div class="flex space-x-2">
            <p class="text-base" v-for="topping in order.topping" :key="topping.index">{{ topping.name }} ${{ topping.price }}</p>
          </div>
          <h5>toppings total : ${{ order.totalTopping }}</h5>
          <p class="font-bold">$.{{ order.price }}</p>
          <div class="flex space-x-8">
            <h4 class="text-xl font-bold mt-4">Total Pizza : ${{ order.totalPizza }}</h4>
            <button @click="$emit('cancel', index)" class="bg-[#00b2ff] text-base font-bold px-4 py-2 rounded-md">Cancel</button>
          </div>
        </div>
      </div>
      <!-- <pre>{{ pizzaOrder }}</pre> -->
      <!-- <pre>{{ quantity }}</pre> -->
    </div>

    <button class="bg-[#00b2ff] font-bold px-4 py-2 rounded-md w-[80%] mx-auto mt-10 text-[42px]">Total $ {{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "chart-app",
  props: ["pizzaOrder"],
  data() {
    return {
      toppingView: false,
      orderPizzas: [],
    };
  },

  methods: {},

  computed: {
    // quantity() {
    //   // let sameItem = this.pizzaOrder;
    //   // array ini berguna untuk menampung data yang sama. yang kita cari
    //   // return sameItem;
    //   // let duplicateArr = [];
    //   // for (let i = 0; i < sameItem.length; i++) {
    //   //   for (let j = i + 1; j < sameItem.length; j++) {
    //   //     if (JSON.stringify(sameItem[i]) === JSON.stringify(sameItem[j])) {
    //   //       duplicateArr.push(sameItem[i]);
    //   //     }
    //   //   }
    //   // }
    //   // return duplicateArr;
    // },
    total() {
      // console.log(this.pizzaOrder);
      let sum = this.pizzaOrder.reduce((accumulator, object) => {
        return (accumulator + object.totalPizza) * object.quantity;
      }, 0);
      // console.log(sum);
      // this.totalPrice = sum;
      return sum;
    },
  },
};
</script>
