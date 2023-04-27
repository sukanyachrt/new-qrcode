
<template>
    <div class="container mx-auto max-w-2xl">
        <BaseCard>
            <div class="card-title mb-5 text-center text-xl font-bold">
                Create Generate QR Code
            </div>
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
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Size (width x height) pixel:
                    </label>
                    <input class="w-full px-4 py-1.5 bg-gray-100 focus:outline-none border border-gray-400 rounded-full"
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
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
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
                                    stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        * SVG, PNG, JPG or GIF
                    </p>
                </div>

                <div class="mb-4">
                    <label class="block tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-first-name">
                        Preview :
                    </label>
                    <div class="flex justify-center flex-col items-center max-h-screen overflow-y-auto">
                        <div v-if="shorturl && isSizeValid === true" :width="size === '' ? '200' : size"
                            :height="size === '' ? '200' : size" style="margin: 0; padding: 0">

                            <div class="text-center">
                                <div class="flex flex-row justify-center pb-5" ref="qrcode">
                                    <vue-qr :logoSrc="logo" :text="shorturl" :size="size === '' ? '200' : size" :margin="0"
                                        :logoMargin="0" @scanned="onScanned">
                                    </vue-qr>
                                </div>
                                <div class="flex flex-row justify-center pb-3 mb-4 sm:text-xs md:text-xs lg:text-sm">
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
                            <svg version="1.1" x="0px" y="0px" width="200px" height="200px" viewBox="-260 40 520 520" style="
                                    enable-background: new -260 40 520 520;
                                    width: 100%;
                                " xml:space="preserve">
                                <g>
                                    <polygon id="XMLID_14_" class="st0"
                                        points="100,360 60,360 60,320 20.1,320 20.1,440.1 60,440.1 60,480 100,480 	">
                                    </polygon>
                                    <rect id="XMLID_13_" x="100" y="480" class="st0" width="40" height="40"></rect>
                                    <rect id="XMLID_12_" x="179.9" y="480" class="st0" width="40" height="40"></rect>
                                    <polygon id="XMLID_11_" class="st0"
                                        points="220,320 179.9,320 179.9,360 139.9,360 139.9,480 179.9,480 179.9,440.1 220,440.1">
                                    </polygon>
                                    <rect id="XMLID_10_" x="20.1" y="480" class="st0" width="40" height="40"></rect>
                                    <g>
                                        <rect id="XMLID_9_" x="-139.9" y="159.9" class="st0" width="40" height="40"></rect>
                                        <path class="st0"
                                            d="M-220,80v200h199.9V80H-220z M-60,239.9h-119.9V120h120v119.9H-60z"></path>
                                    </g>
                                    <g>
                                        <rect id="XMLID_6_" x="100" y="159.9" class="st0" width="40" height="40"></rect>
                                        <path class="st0"
                                            d="M20.1,80v200H220V80H20.1z M179.9,239.9H60V120h120v119.9H179.9z"></path>
                                    </g>
                                    <g>
                                        <rect id="XMLID_3_" x="-139.9" y="399.9" class="st0" width="40" height="40"></rect>
                                        <path class="st0"
                                            d="M-220,320v200h199.9V320H-220z M-60,480h-119.9V360h120V480H-60z"></path>
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
           
        </BaseCard>
    </div>
</template>
<script>
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import api from './../../services/api'
export default {
    data() {
        return {
            size: '200',
            shorturl: '',
            url: '',
            logo: '',
            isUrlValid: false,
            isSizeValid: true,
            typeImage: 'png',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEyMzQ1LCJuYW1lIjoi4Liq4Li44LiB4Lix4LiN4LiN4LiyIiwic3VybmFtZSI6IuC5hOC4iuC4ouC4o-C4seC4leC4meC5jCIsInBvc2l0aW9uIjoi4LiZ4Lix4LiB4Lin4Li04LiK4Liy4LiB4Liy4Lij4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIiwiZGVwYXJ0bWVudCI6IuC4neC5iOC4suC4ouC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4quC4suC4o-C4quC4meC5gOC4l-C4qCIsImRlcGFydG1lbnRfZ3JvdXAiOiLguJ3guYjguLLguKLguYDguJfguITguYLguJnguYLguKXguKLguLXguKrguLLguKPguKrguJnguYDguJfguKgifQ.7vvsYEYe9GiKU3FVcO87VP4Hfv-FVPGMEh9IW4JxuLM',
            perid : '0002'
        }
    },
    components: {
        vueQr,
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
            console.log(this.url)
            console.log(this.shorturl)
            let body = {
                "service": "saveqrcode",
                "data": {
                    "perid": this.perid,
                    "url": this.url,
                    "shorturl": this.shorturl,
                    "expired": 0,
                    "status": 1
                }
            }
            const AuthStr = {
                headers: {
                    "Authorization": "Bearer " + this.token,
                    "Content-Type": "application/json"
                }
            }
            await api.manageQrcode(body, AuthStr).then((result) => {
                if(result.status===200){
                    this.loadImage();
                }
            })
        },
        loadImage (){
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
        }
    },
}
</script>

<style scoped>
#file-input {
    width: 400px;
    max-width: 100%;
    color: #444;
    padding: 0px;
    background: #fff;
}

#file-input::-webkit-file-upload-button {
    margin-right: 20px;
    border: none;
    background: #769ced;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    -webkit-transition: background 0.2s ease-in-out;
    transition: background 0.2s ease-in-out;
}

#file-input::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #769ced;
    padding: 6px 20px;
    /* border-radius: 10px; */
    color: #fff;
    cursor: pointer;
    -webkit-transition: background 0.2s ease-in-out;
    transition: background 0.2s ease-in-out;
}

#file-input::-webkit-file-upload-button:hover {
    background: #3771d6;
}

#file-input::file-selector-button:hover {
    background: #3771d6;
}

.container label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
}

.container label input {
    position: absolute;
    left: -9999px;
}

.container label input:checked+span {
    background-color: #769ced;
    color: white;
}

.container label input:checked+span:before {
    box-shadow: inset 0 0 0 0.4375em #0a0a0a;
}

.container label span {
    display: flex;
    align-items: center;
    padding: 0.375em 0.75em 0.375em 0.375em;
    border-radius: 99em;
    transition: 0.25s ease;
    color: #769ced;
}

.container label span:hover {
    background-color: #d6d6e5;
}

.container label span:before {
    display: flex;
    flex-shrink: 0;
    content: '';
    background-color: #fff;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-right: 0.375em;
    transition: 0.25s ease;
    box-shadow: inset 0 0 0 0.125em #0a0a0a;
}
</style>


  