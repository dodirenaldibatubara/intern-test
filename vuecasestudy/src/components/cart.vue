<template>
  <div div class="cart bg-[#e7edf3] md:w-[80%] mt-8 py-10 px-4 mx-auto mb-10">
    <h2 class="text-4xl font-bold">Cart</h2>
    <div class="mt-6 min-h-[400px]">
      <p v-if="!pizzaOrder.length" class="text-xl">The shopping cart is still empty, click item to add to chart</p>

      <!-- <div v-if="toppingView"> -->
      <div v-for="(order, index) in pizzaOrder" :key="order.index" class="card mt-5 bg bg-[#ffd43a] flex items-center space-x-5 rounded-xl px-7 py-4">
        <img src="../assets/image/pizza1.jpg" alt="pizza" class="w-[30%] rounded-lg" />
        <div class="text-xl flex flex-col items-start justify-around w-full">
          <div class="flex justify-between font-bold w-full">
            <h5 class="font-bold">{{ order.name }}</h5>
            <h5>Quantity : {{ order.quantity }}</h5>
          </div>
          <!-- <h5 class="font-bold text-lg text-start w-full mt-2">Toppings</h5> -->

          <div class="flex justify-between text-start w-full items-center mt-2">
            <div>
              <h5 class="text-base" v-for="topping in order.topping" :key="topping.index">{{ topping.name }} ${{ topping.price }}</h5>
            </div>
            <div v-if="order.topping == 0" class="text-start m-0 p-0 w-[50%]">
              <h5 class="text-base text-start m-0 p-0 w-full">No Topping!</h5>
            </div>
            <h5 class="font-bold text-[18px]">Toppings : ${{ order.totalTopping }}</h5>
          </div>

          <div class="flex justify-between w-full items-center">
            <h5 class="font-bold mt-2 text-[18h5x]">Pizza Price :</h5>
            <h5 class="font-bold mt-2 text-[18h5x]">$.{{ order.totalPizza }}</h5>
          </div>
          <div class="flex justify-between w-full">
            <h4 class="text-[22px] font-bold mt-4">Total Price :</h4>
            <h4 class="text-[22px] font-bold mt-4">${{ order.totalPizza * order.quantity }}</h4>
          </div>
          <button @click="$emit('cancel', index)" class="bg-[#27b0eb] text-base font-bold px-4 py-2 rounded-md mt-4 mx-auto">Cancel</button>
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
    //  totalPrice(){
    //     let totalPrice =
    //  },
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
