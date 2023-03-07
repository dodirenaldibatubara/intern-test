<template>
  <!-- <div class="container mx-auto flex gap-8 justify-center"> -->
  <div class="card w-[32%] overflow-hidden mb-10 rounded-lg">
    <!-- kita mengirim paramer dataPizza di bawah untuk mengirim dataPizza yang sudah di pilih dengan card -->
    <button @click="$emit('showModal', dataPizza)" class="bg-[#e4e7f0] w-full h-full pb-12 pt-4 rounded-lg px-4">
      <img src="../assets/image/pizza1.jpg" alt="image" class="rounded-lg" />
      <h3 class="text-2xl font-bold">{{ dataPizza.name }}</h3>
      <p class="text-xl">$.{{ dataPizza.price }}</p>
    </button>
  </div>
</template>

<script>
export default {
  props: ["dataPizza", "index"],
  name: "card-app",
};
</script>
