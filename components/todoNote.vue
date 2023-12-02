<script setup>
    const props = defineProps(['text', 'date', 'color', "id"]);
</script>

<template>
    <div class="relative">
        <p class="absolute left-2 top-2 font-black text-gray-600 hover:text-black cursor-pointer" @click="$emit('deleteMe', id)">X</p>
        <div class="shadow-2xl p-2 h-[200px] overflow-auto rounded-lg indent-3" :class="color">
            {{ text }} {{ date }}
        </div>
    </div>
</template>