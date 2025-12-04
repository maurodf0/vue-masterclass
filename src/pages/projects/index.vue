<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { onMounted, ref } from 'vue'

const projects = ref<any[] | null>(null)
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
    <h1>Projects Page</h1>
    <p>Welcome to the home page of the Vue Masterclass project.</p>
    <p>Here you can find a list of all the projects:</p>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <RouterLink :to="{ name: '/projects/[id]', params: { id: project.id } }">
          {{ project.name }}
        </RouterLink>
      </li>
    </ul>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
  </div>
</template>
