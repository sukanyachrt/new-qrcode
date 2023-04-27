<template>
    <div>
        <div v-if="showModal"
            class="overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <!-- <div class="relative  my-6 w-auto mx-auto max-w-full"> -->
            <div class="relative  my-6 mx-auto w-auto max-w-2xl  md:w-32 lg:w-1/2">
                <!--content-->
                <div
                    class="border-0 rounded-lg shadow-lg relative flex flex-col max-w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 class="text-2xl font-semibold">
                            Edit Generate QR Code
                        </h3>
                        <button @click="_cancel" type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="popup-modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!--body-->
                    <div class="relative p-4 flex-auto w-full overflow-y-auto">
                        <form action="">
                            <div class="mb-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name">URL :</label>
                                <div class="flex">
                                    <div class="relative w-full">
                                        <input type="text" id="search-dropdown"
                                            class="block rounded-full p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                            placeholder="ลิงค์ URL" required v-model="url" @input="checkUrl" />
                                        <p v-if="isUrlValid === false && url" class="text-red-900 text-sm">
                                            *ลิงค์ URL เท่านั้น
                                        </p>

                                        <button type="button" @click="createshorturl"
                                            class="rounded-full absolute top-0 right-0 p-2 text-sm font-medium text-white bg-blue-500 rounded-r-lg border border-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Create QR
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name">
                                    Size (width x height) pixel:
                                </label>
                                <input
                                    class="w-full px-4 py-1.5 bg-gray-100 focus:outline-none border border-gray-400 rounded-full"
                                    v-model.number="size" min="100" max="10000" type="number" maxlength="5"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    @input="checknumber" placeholder="ขนาดของรูป Qrcode" />
                                <p v-if="isSizeValid === false && size" class="text-red-900 text-sm">
                                    *minimum ไม่ต่ำกว่า 200 And maximum ได้ไม่เกิน 10000
                                </p>
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                    * default 200px , Max 10000px
                                </p>
                            </div>
                            <div class="mb-3">
                                <form></form>
                            </div>
                            <div class="mb-3">
                                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name">
                                    Center Image :
                                </label>

                                <div class="flex">
                                    <input
                                        class="rounded-none rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        id="file-input" type="file" @change="onLogoUpload" accept="image/*" ref="logo" />

                                    <button type="button" @click="resetInput"
                                        class="inline-flex items-center px-5 text-sm bg-gray-200 border border-r-0 border-gray-200 rounded-r-md dark:bg-gray-200 dark:text-gray-200 dark:border-gray-200">
                                        <svg class="icon" width="25px" height="20px" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                                                stroke="#000" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                    * SVG, PNG, JPG or GIF
                                </p>
                            </div>

                            <div class="mb-4">
                                <label class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                                    for="grid-first-name">
                                    Preview :
                                </label>
                                <div class="flex justify-center flex-col items-center max-h-screen overflow-y-auto">
                                    <div v-if="shorturl && isSizeValid === true" :width="size === '' ? '200' : size"
                                        :height="size === '' ? '200' : size" style="margin: 0; padding: 0">

                                        <div class="text-center">
                                            <div class="flex flex-row justify-center pb-5" ref="qrcode">
                                                <vue-qr :logoSrc="logo" :text="shorturl" :size="size === '' ? '200' : size"
                                                    :margin="0" :logoMargin="0" @scanned="onScanned">
                                                </vue-qr>
                                            </div>
                                            <div
                                                class="flex flex-row justify-center pb-3 mb-4 sm:text-xs md:text-xs lg:text-sm">
                                                <!-- class="p-2 bg-indigo-200 items-center text-indigo-900 leading-none lg:rounded-full  flex lg:inline-flex" -->
                                                <div class="sm:text-xs md:text-xs lg:text-sm p-2 bg-indigo-200 items-center text-indigo-900 leading-none lg:rounded-l-full   flex lg:inline-flex"
                                                    role="alert">
                                                    <span class="flex  rounded-full bg-gray-400  px-2 py-1  font-bold mr-3">
                                                        Short URL
                                                    </span>

                                                    <span class="font-semibold rounded-r-lg text-left flex-auto ">
                                                        {{ shorturl }}
                                                    </span>





                                                </div>


                                                <button type="button" @click="copyURL" class="rounded-full 
                                         right-0 p-2 sm:text-xs md:text-xs lg:text-sm text-white 
                                         bg-gray-400 rounded-l-lg border border-gray-400
                                          hover:bg-gray-40 focus:ring-4 focus:outline-none 
                                          focus:ring-blue-300 dark:bg-gray-400 dark:hover:bg-blue-700
                                           dark:focus:ring-blue-800">
                                                    Copy Url
                                                </button>
                                            </div>
                                            <div class="flex flex-row justify-center pb-3">
                                                <div class="pr-4">
                                                    <label>
                                                        <input type="radio" name="radio" checked="true" value="png"
                                                            v-model="typeImage" />
                                                        <span>PNG</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input type="radio" name="radio" value="jpg" v-model="typeImage" />
                                                        <span>JPG</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="button" @click="downloadQrCode" block
                                                class="rounded-full w-full h-12 px-6 sm:text-sm md:text-xl lg:text-2xl xl:text-2xl text-indigo-100 transition-colors duration-150 bg-purple-500 focus:shadow-outline hover:bg-indigo-800">
                                                Download
                                            </button>
                                        </div>
                                    </div>

                                    <div class="opacity-10 hover:opacity-10" v-else>
                                        <svg version="1.1" x="0px" y="0px" width="200px" height="200px"
                                            viewBox="-260 40 520 520" style="
                                    enable-background: new -260 40 520 520;
                                    width: 100%;
                                " xml:space="preserve">
                                            <g>
                                                <polygon id="XMLID_14_" class="st0"
                                                    points="100,360 60,360 60,320 20.1,320 20.1,440.1 60,440.1 60,480 100,480 	">
                                                </polygon>
                                                <rect id="XMLID_13_" x="100" y="480" class="st0" width="40" height="40">
                                                </rect>
                                                <rect id="XMLID_12_" x="179.9" y="480" class="st0" width="40" height="40">
                                                </rect>
                                                <polygon id="XMLID_11_" class="st0"
                                                    points="220,320 179.9,320 179.9,360 139.9,360 139.9,480 179.9,480 179.9,440.1 220,440.1">
                                                </polygon>
                                                <rect id="XMLID_10_" x="20.1" y="480" class="st0" width="40" height="40">
                                                </rect>
                                                <g>
                                                    <rect id="XMLID_9_" x="-139.9" y="159.9" class="st0" width="40"
                                                        height="40"></rect>
                                                    <path class="st0"
                                                        d="M-220,80v200h199.9V80H-220z M-60,239.9h-119.9V120h120v119.9H-60z">
                                                    </path>
                                                </g>
                                                <g>
                                                    <rect id="XMLID_6_" x="100" y="159.9" class="st0" width="40"
                                                        height="40"></rect>
                                                    <path class="st0"
                                                        d="M20.1,80v200H220V80H20.1z M179.9,239.9H60V120h120v119.9H179.9z">
                                                    </path>
                                                </g>
                                                <g>
                                                    <rect id="XMLID_3_" x="-139.9" y="399.9" class="st0" width="40"
                                                        height="40"></rect>
                                                    <path class="st0"
                                                        d="M-220,320v200h199.9V320H-220z M-60,480h-119.9V360h120V480H-60z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <div class="mb-3">
                                            <div class="flex flex-row justify-center pb-3">
                                                <div class="p-2 bg-indigo-200 items-center text-indigo-900 leading-none lg:rounded-full flex lg:inline-flex"
                                                    role="alert">
                                                    <span
                                                        class="flex rounded-full bg-gray-400 uppercase px-2 py-1 text-xs font-bold mr-3">
                                                        Short URL
                                                    </span>
                                                    <span class="font-semibold mr-2 text-left flex-auto">

                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex flex-row justify-center">
                                                <div class="pr-4">
                                                    <label>
                                                        <input type="radio" name="radio" checked="true" value="png"
                                                            v-model="typeImage" />
                                                        <span>PNG</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input type="radio" name="radio" value="jpg" v-model="typeImage" />
                                                        <span>JPG</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="button" @click="downloadQrCode" block
                                            class="rounded-full w-full h-12 px-6 sm:text-sm md:text-xl lg:text-2xl xl:text-2xl text-indigo-100 transition-colors duration-150 bg-purple-500 focus:shadow-outline hover:bg-indigo-800">
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!-- <p class="my-4 text-slate-500 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main
                thing people are controlled by! Thoughts- their perception
                of themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you
                won’t do anything. I was taught I could do everything.
              </p> -->
                    </div>
                    <!--footer-->
                    <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button @click="_confirm" data-modal-hide="popup-modal" type="button"
                            class="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            {{ okButton }}
                        </button>
                        <button @click="_cancel" data-modal-hide="popup-modal" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            {{ cancelButton }}</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>
  
<script>
import vueQr from 'vue-qr/src/packages/vue-qr.vue';
import api from './../../services/api';
export default {
    name: "Edit-dialog",
    components: {
        vueQr,
    },
    data() {
        return {
            showModal: false,
            message: undefined,
            okButton: undefined,
            cancelButton: 'Close',
            resolvePromise: undefined,
            rejectPromise: undefined,
            size: '200',
            shorturl: '',
            url: '',
            logo: '',
            id : null,
            isUrlValid: true,
            isSizeValid: true,
            typeImage: 'png',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEyMzQ1LCJuYW1lIjoi4Liq4Li44LiB4Lix4LiN4LiN4LiyIiwic3VybmFtZSI6IuC5hOC4iuC4ouC4o-C4seC4leC4meC5jCIsInBvc2l0aW9uIjoi4LiZ4Lix4LiB4Lin4Li04LiK4Liy4LiB4Liy4Lij4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIiwiZGVwYXJ0bWVudCI6IuC4neC5iOC4suC4ouC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4quC4suC4o-C4quC4meC5gOC4l-C4qCIsImRlcGFydG1lbnRfZ3JvdXAiOiLguJ3guYjguLLguKLguYDguJfguITguYLguJnguYLguKXguKLguLXguKrguLLguKPguKrguJnguYDguJfguKgifQ.7vvsYEYe9GiKU3FVcO87VP4Hfv-FVPGMEh9IW4JxuLM',
            perid: '0002'
            
        }
    },
    methods: {
        checkUrl() {
            const pattern = /^(ftp|http|https):\/\/[^ "]+$/
            this.shorturl = ''
            this.isUrlValid = pattern.test(this.url)
        },
        checknumber() {
            if (this.size < 200) {
                this.isSizeValid = false
            }
            else if (this.size > 10000) {
                this.size = 10000
                this.isSizeValid = false

            }
            else {
                this.isSizeValid = true
            }
        },
        resetInput() {
            //clear image
            ; (this.$refs['logo'].value = null), (this.logo = '')
        },
        async createshorturl() {
            //get short url

            if (this.isUrlValid && this.isSizeValid === true) {
                console.log("kk" + this.isSizeValid)
                //, expire: 50
                const params = { url: this.url }
                await api.shorturl(params).then((result) => {
                    if (result.status === 200) {
                        this.shorturl = result.data.short_url
                    }
                })
            }
        },
        onLogoUpload(event) {
            //add logo to qrcode
            const file = event.target.files[0]
            if (!file) {
                return
            }
            if (!file.type.match('image.*')) {
                return
            }

            const reader = new FileReader()
            reader.onload = () => {
                this.logo = reader.result
            }
            reader.readAsDataURL(file)
        },
        async copyURL() {
            try {
                await navigator.clipboard.writeText(this.shorturl);
                alert('Copied');
            } catch ($e) {
                alert('Cannot copy');
            }
        },

        async downloadQrCode() {
            // download qr

            if (this.shorturl === '') {
                return
            }
            if (this.size === '') {
                console.log('dd')
                this.size = 200
            }
            this.loadImage();
            // let body = {
            //     "service": "saveqrcode",
            //     "data": {
            //         "perid": this.perid,
            //         "url": this.url,
            //         "shorturl": this.shorturl,
            //         "expired": 0,
            //         "status": 1
            //     }
            // }
            // const AuthStr = {
            //     headers: {
            //         "Authorization": "Bearer " + this.token,
            //         "Content-Type": "application/json"
            //     }
            // }
            // await api.manageQrcode(body, AuthStr).then((result) => {
            //     if (result.status === 200) {
            //         this.loadImage();
            //     }
            // })
        },
        loadImage() {
            const qrcode = this.$refs.qrcode
            const canvas = document.createElement('canvas')
            canvas.width = this.size
            canvas.height = this.size
            const context = canvas.getContext('2d')
            const img = new Image()
            img.onload = () => {
                context.drawImage(img, 0, 0)
                const link = document.createElement('a')
                link.download = 'qrcode.' + this.typeImage
                link.href = canvas.toDataURL('image/png')
                link.click()
            }
            img.src = qrcode.querySelector('img').src
        },
        show(opts = {}) {

            this.message = opts.message
            this.okButton = opts.okButton
            this.shorturl = opts.shorturl
            this.url = opts.url
            this.id = opts.id
            if (opts.cancelButton) {
                this.cancelButton = opts.cancelButton
            }
            this.showModal = true
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },
       async  _confirm() {
       
            
            const AuthStr = {
                headers: {
                    "Authorization": "Bearer " + this.token,
                    "Content-Type": "application/json"
                }
            }
            let bodyupdate = {
                "service": "updateqrcode",
                "data": {
                    "id": this.id,
                    "url": this.url,
                    "shorturl": this.shorturl,
                    "expired": 1000,
                    "status": 0
                }
            };
            await api.manageQrcode(bodyupdate, AuthStr).then((result) => {
                if (result.status === 200) {
                    this.showModal = false
                    this.resolvePromise({
                        status : true,
                        'data':bodyupdate.data
                    });
                }
            })

        },
        _cancel() {
            this.showModal = false
            this.resolvePromise({
                status : false
            })

        },
    }
}
</script>