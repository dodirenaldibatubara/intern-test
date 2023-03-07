<template>
  <div class="toppings text-white bg-[#28293d] border-slate-4 border-2 mt-10 w-[50%] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-5 px-5 rounded-md">
    <h2 class="text-2xl font-bold text-white mb-5">Toppings</h2>

    <div v-for="(item, index) in item.topping" :key="index">
      <label for="" class="text-2xl"> {{ item.name }} ${{ item.price }} <input type="checkbox" :value="item" v-model="pizzaToppings" class="text-2xl" /> <br /> </label>
    </div>

    <div class="flex justify-center space-x-7 mt-5">
      <button @click="$emit('closeModal')" class="bg-[#030303] bg-opacity-80 text-2xl px-4 py-2 rounded-md absolute -top-4 -right-3">X</button>

      <!-- disini bisa di akali parameter setelah addToCart => kita membuat object baru yang nantinya akan di kirimkan ke parent, di object ini sudah berisi data yang kit ingin tampilkan yaitu data dari 1 pizza keseluruhan dan topping yang di pilih user -->

      <button @click="$emit('addToCart', { id: item.id, name: item.name, price: item.price, topping: pizzaToppings, quantity: 1 })" class="bg-yellow-200 px-4 py-2 rounded-md">Add to chart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "toppings-app",
  props: ["item"],
  data() {
    return {
      pizzaToppings: [],
    };
  },
  methods: {},
};
</script>
