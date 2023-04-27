<template>
  <v-snackbar v-if="showSnackbar"
      :color="color"
      :timeout="timer"
      v-model="showSnackbar"
      bottom
      right
  >
  {{ 
  message
   }}
    <!-- <v-icon left>{{icon}}</v-icon>{{message}} -->
  </v-snackbar>
</template>

<script>
export default {
  name: "vtoast",
  data() {
    return{
      showSnackbar: false,
      message: '',
      color: 'success',
      timer: 60
    }
  },
  methods:{
    show(data) {
      this.message = data.message || 'success'
      this.color = data.color || 'success'
      this.timer = data.timer || 60
      
      this.showSnackbar = true
    }
  }
}
</script>