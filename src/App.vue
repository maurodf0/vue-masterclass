<script setup lang="ts">
import TopNavigation from '@/components/Layout/TopNavigation.vue'
import Sidebar from '@/components/Layout/Sidebar.vue'
</script>

<template>
  <Sidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavigation />
    <main>
      <RouterView />
    </main>
  </div>
</template>
