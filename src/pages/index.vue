<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

const projects = ref([])
const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*')
  if (error) console.log(error)

  console.log(data)
  projects.value = data
}

onMounted(getProjects)
</script>

<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>
