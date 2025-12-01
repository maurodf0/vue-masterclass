import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const seedProjects = async () => {
  const name = faker.lorem.words(3)
  await supabase.from('projects').insert({
    name,
    slug: name.toLowerCase().replaceAll(' ', '-'),
    status: faker.helpers.arrayElement(['in-progress', 'completed']),
    collaborators: faker.helpers.arrayElements(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']),
  })
}

await seedProjects()
