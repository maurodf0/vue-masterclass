<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { onMounted, ref, h } from 'vue'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTable from '@/components/ui/DataTable/DataTable.vue'

const tasks = ref<Tables<'tasks'>[] | null>(null)
const getProjects = async () => {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) console.log(error)

  console.log(data)
  tasks.value = data
}

onMounted(getProjects)

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('name'))
    },
  },
]
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
