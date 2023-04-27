<template>
    <div class="relative py-20 bg-gradient-to-br from-sky-50 to-gray-200">
        <div class="relative container m-auto px-6 text-gray-600 md:px-12 xl:px-40">
            <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div class="rounded-xl bg-white shadow-2xl">
                    <div class="p-6 sm:p-16">
                        <div class="space-y-4">
                            <img src="/src/assets/logo.jpg " class="md:block w-1/4 mx-auto" />
                            <h2 class="mb-8 text-2xl text-cyan-900 font-bold text-center">ระบบ QRCode Generator </h2>
                            <h3 class="text-sm font-bold text-center">
                                คณะแพทย์ศาสตร์ มหาวิทยาลัยสงขลานครินทร์
                            </h3>
                        </div>
                        <div class="mt-6 grid space-y-4">
                            <button type="button" @click="signin('psupassportv2')"
                                class="w-full text-gray-900  hover:text-white border border-gray-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-6 py-4 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 text-xl">
                                <img src="/src/assets/images/psu.png " class="md:block w-1/4 mx-auto" />
                                PSU PASSPORT.</button>
                            <button type="button" @click="signin('medmailv2')"
                                class="w-full text-gray-900  hover:text-white border border-gray-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-6 py-4 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 text-xl">
                                <img src="/src/assets/images/med.gif " class="md:block w-1/4 mx-auto" />
                                Medicine Mail.</button>
                                <button type="button" @click="test"
                                class="w-full text-gray-900  hover:text-white border border-gray-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-6 py-4 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 text-xl">
                                <img src="/src/assets/images/med.gif " class="md:block w-1/4 mx-auto" />
                                go to page.</button>
                        </div>

                        <div class="mt-16 space-y-4 text-gray-600 text-center sm:-mb-8">
                            <p class="text-xs">ทะเบียนบุคลากร :: คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์.</p>
                            <p class="text-xs">ติดต่อ ฝ่ายทรัพยากรมนุษย์ คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์.</p>
                            <p class="text-xs">Email : person@medicine.psu.ac.th โทรศัพท์ : 0 7445 1140-1144.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import config from './../services/api'
export default {

    methods: {
      async  signin(typesign) {
            console.log(typesign)
            let userInfo = {
                "redirect_uri": "https://medhr.medicine.psu.ac.th/",
                "responses": "uid,name,surname,position,department,department_group",
                "redirect_mode": true
            }
           let dataUserinfo= encodeURIComponent(userInfo)
            // https://medhr.medicine.psu.ac.th/SingleSign/{{typesign}}?redirect_uri=encodeURIComponent(userInfo)
              await config.signin(typesign,userInfo).then((result) => {
                   console.log(result)
                })
        },
        test(){
            this.$router.push("/qrcode");
        }
    },

};
</script>
  