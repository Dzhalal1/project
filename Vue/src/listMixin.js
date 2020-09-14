export default {
  data() {
    return {
      searchName: '',
      names: ['Jalal', 'Artem', 'Andrew', 'Alena']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
}
