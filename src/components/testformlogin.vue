<template>
    <div class="auth-layout-wrap flex justify-center min-h-screen flex-col bg-cover items-center">
        <div class="container-session-v1 max-w-2xl">

            <BaseCard noPadding class="overflow-hidden">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 lg:col-span-6">
                        <div class="p-5">
                            <img src="/src/assets/logo.jpg " class="md:block w-1/3 mx-auto" />
                            <h1 class="mb-3 text-lg text-center">ระบบยืนยันตัวตน</h1>
                            <div class="mb-4">
                                <button type="button" class="w-full text-gray-900  hover:text-white border border-gray-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-6 py-4 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 text-xl">
                                    <!-- <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                                     -->
                                     <img src="/src/assets/images/psu.png " class="md:block w-1/3 mx-auto" />
                                    PSU PASSPORT.</button>
                                <button type="button" class="w-full text-gray-900  hover:text-white border border-gray-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-6 py-4 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 text-xl">
                                    <img src="/src/assets/images/med.gif " class="md:block w-1/3 mx-auto" />
                                    Medicine Mail.</button>
                                
                            </div>

                        </div>
                    </div>
                    <div class="col-span-12 bg-cover lg:col-span-6">
                        <div class="flex justify-center items-center flex-col h-full px-4 py-2">

                            <img src="/src/assets/images/qr-header.png " class="md:block w-1/2 mx-auto" />
                            <h1 class="text-xl text-center font-bold">QRCode Generator</h1>

                        </div>
                    </div>
                   
                </div>
            </BaseCard>

        </div>
    </div>
</template>
  