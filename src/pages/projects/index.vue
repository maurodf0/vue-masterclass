<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { onMounted, ref, h } from 'vue'
import DataTable from '@/components/ui/dataTable/DataTable.vue'

const projects = ref<Tables<'projects'>[] | null>(null)
const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*')
  if (error) console.log(error)

  projects.value = data
}

onMounted(getProjects)

const columns: columnDef<Tables<'projects'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left font-bold' }, 'Name'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left' }, row.getValue('name'))
    },
  },
]
</script>

<template>
  <div>
    <DataTable class="mt-4" v-if="projects" :columns="columns" :data="projects" />
  </div>
</template>
