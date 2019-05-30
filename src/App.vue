<template>
  <div id="app">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  mounted () {
    axios.get('/test').then(res => {
      console.log(res.data)
    })
    axios.get('/mock').then(res => {
      console.log(res.data)
    })
    axios.get('/categary').then(res => {
      console.log(res.data)
    })
  }
}
</script>
