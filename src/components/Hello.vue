<template>
  <div id="app">
    <div class="columns">
      <div class="column is-three-quarters">
        <table id="myTable" class="table sortable is-bordered is-striped is-narrow">
          <thead>
            <tr>
              <th>Revenue Type</th>
              <th>Year start</th>
              <th>Year end</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in sokratiData">
              <th>{{ item.eng_rev_type }}</th>
              <th>{{ item.year_start }}</th>
              <th>{{ item.year_end }}</th>
              <th>{{ item.type }}</th>
              <th>{{ item.amount }}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">

        <a @click.prevent="filters = true;" v-if="!filters" class="button is-black is-outlined">Add Filters</a>

        <form v-if="filters">
          
          <div class="field">
            <p class="control">
              <span class="select">
                <select v-model="selectedFilter">
                  <option value="">Select Filter</option>
                  <option value="eng_rev_type">eng_rev_type</option>
                  <option value="year_start">year_start</option>
                  <option value="year_end">year_end</option>
                  <option value="type">type</option>
                  <option value="amount">amount</option>
                </select>
              </span>
            </p>
          </div>

          <div class="field" style="max-width:50%" v-if="selectedFilter">
            <p class="control">
              <input class="input" type="text" :placeholder="selectedFilter">
            </p>
          </div>

        </form>

        <div class="field is-grouped" v-if="filters" style="margin-top:15px;">
          <p class="control">
            <a class="button is-primary">
              Save changes
            </a>
          </p>
          <p class="control">
            <a @click.prevent="filters = false;" class="button is-black is-outlined">
              Hide Filters
            </a>
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted () {
    this.getData()
  },
  data () {
    return {
      filters: false,
      selectedFilter: null,
      sokratiData: []
    }
  },
  methods: {
    getData () {
      let t = this
      this.$http.get('http://preview.sokrati.com/data/open_spendings.json').then(
        response => { t.sokratiData = response.data.data })
    }
  }
}
</script>
