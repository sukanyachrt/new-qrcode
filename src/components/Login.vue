<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-gray-200 h-screen w-screen">
    <div
      class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0"
    >
      <div
        class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
        style="height: 600px"
      >
        <div class="flex flex-col w-full md:w-1/2 p-4">
          <div class="flex w-full justify-center items-center">
            <img
              src="./../assets/images/qr-header.png "
              class="md:block w-1/3 mx-auto"
            />
          </div>
          <div class="flex flex-col flex-1 justify-center mb-8">
            <h1 class="text-4xl text-center font-bold">QRCode Generator</h1>
            <div class="w-full mt-4">
              <div class="form-horizontal w-3/4 mx-auto">
                <div class="flex flex-col mt-8">
                  <button
                    @click="signin('psupassportv2')"
                    class="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      class="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span class="ml-3"> PSU Passport </span>
                  </button>
                  <button
                    @click="signin('medmailv2')"
                    class="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      class="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span class="ml-3"> Medicine Mail </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/src/assets/images/bg1.png"
          class="hidden md:block md:w-1/2 rounded-r-lg"
          style="background-size: cover; background-position: center center"
        />
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
  methods: {
    signin(typesign) {
      console.log(typesign)
     // this.$router.push("/qrcode");
    }
  },
  
};
</script>
