<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { onMounted, ref } from 'vue'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)
const getProjects = async () => {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) console.log(error)

  console.log(data)
  tasks.value = data
}

onMounted(getProjects)
</script>

<template>
  <div>
    <h1>Tasks Page</h1>
    <p>Welcome to the home page of the Vue Masterclass project.</p>
    <p>Here you can find a list of all the projects:</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <RouterLink :to="{ name: '/projects/[id]', params: { id: task.id } }">
          {{ task.name }}
        </RouterLink>
      </li>
    </ul>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
  </div>
</template>
