export const UsePageStore = defineStore('pages', () => {
  const pageData = ref({
    title: '',
  })

  return {
    pageData,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(UsePageStore, import.meta.hot))
}
