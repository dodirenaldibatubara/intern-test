<template>
  <!-- <div class="container mx-auto flex gap-8 justify-center"> -->
  <div class="card md:w-[32%] w-[80%] h-[280px] overflow-hidden mb-10 rounded-lg shadow-md">
    <!-- kita mengirim paramer dataPizza di bawah untuk mengirim dataPizza yang sudah di pilih dengan card -->
    <button @click="$emit('showModal', dataPizza)" class="bg-[#f9fbfd] w-full h-full pb-12 pt-4 rounded-lg px-4">
      <img src="../assets/image/pizza1.jpg" alt="image" class="rounded-lg" />
      <h3 class="text-2xl font-bold mt-5">{{ dataPizza.name }}</h3>
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
