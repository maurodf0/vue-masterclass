<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import Input from '@/components/ui/input/Input.vue'
</script>

<template>
  <main>
    <nav class="h-16 border-b bg-muted/40 flex items-center justify-between">
      <form class="w-full max-w-96">
        <Input
          type="text"
          placeholder="Search..."
          class="w-full pl-8 bg-background/80 border-b border-border"
        />
      </form>
      <div class="w-8 h-8 rounded-full bg-background/80 border-b border-border"></div>
    </nav>
    <RouterView />
  </main>
</template>

<style scoped></style>
