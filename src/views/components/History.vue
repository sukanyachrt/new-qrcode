<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title py-3 font-bold">
                                History Create QRCode
                            </div>
                        </div>
                    </template>
                    <div class="block w-full overflow-x-auto whitespace-nowrap borderless hover">
                        <div class="dataTable-wrapper dataTable-loading no-footer fixed-columns">
                            <div
                                class="dataTable-container block w-full overflow-x-auto whitespace-nowrap borderless hover">
                                <table class="dataTable-table min-w-full table-auto w-full" id="tablesampleTable">
                                    <thead class="">
                                        <tr class="text-center font-semibold bg-purple-400 ">


                                            <th class="border-b pb-5 pt-5 mb-3 text-white ">
                                                NO.
                                            </th>
                                            <th class="px-16 py-2 border-b pb-5 pt-5 mb-3 text-white ">
                                                Create_Date
                                            </th>
                                            <th class="px-16 py-2 border-b pb-5 pt-5 mb-3 text-white">
                                                URL
                                            </th>
                                            <th class="px-16 py-2 border-b pb-5 pt-5 mb-3 text-white ">
                                                Short_URL
                                            </th>
                                            <th class="text-left border-b pb-5 pt-5 mb-3 text-white">
                                                QRCode
                                            </th>
                                            <th class="border-b pb-5 pt-5 mb-3 text-white">
                                                status
                                            </th>

                                            <th class="px-16 py-2">

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-center">
                                        <tr class="hover:bg-gray-100 cursor-pointer" v-for="(item, index) in items">
                                            <td class="px-16 py-2 border-b-2">
                                                {{ index + 1 }}
                                            </td>

                                            <td class="px-16 py-2 border-b-2">
                                                {{ moment(String(item.created_date)).format('DD/MM/YYYY H:mm') }}
                                            </td>
                                            <td class="px-16 py-2 border-b-2 text-left">
                                                {{ item.url }}
                                            </td>
                                            <td class="px-16 py-2 border-b-2">
                                                {{ item.short_url }}
                                            </td>
                                            <td class="py-5 border-b-2">
                                                <div class="flex">

                                                    <img class="w-9 h-9 rounded-full mr-2"
                                                        src="/src/assets/images/qr-header.png" alt="" />
                                                </div>
                                            </td>
                                            <td class="py-5 border-b-2">
                                                {{ item.status == 1 ? 'กำลังใช้งาน' : 'ยกเลิก' }}
                                            </td>

                                            <td class="px-16 py-2 text-center border-b-2">
                                                <button  @click="updateData(index, item)" data-modal-target="defaultModal" data-modal-toggle="defaultModal">
                                                    <svg class="h-6 w-6 text-blue-500" width="24" height="24"
                                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                    </svg>
                                                </button>

                                                <BaseBtn @click="updateStatus(index, item)" v-if="item.status == 1">
                                                    <svg class="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <polyline points="3 6 5 6 21 6" />
                                                        <path
                                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                        <line x1="10" y1="11" x2="10" y2="17" />
                                                        <line x1="14" y1="11" x2="14" y2="17" />
                                                    </svg>
                                                </BaseBtn>
                                                <BaseBtn v-else>
                                                    <svg class="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <polyline points="3 6 5 6 21 6" />
                                                        <path
                                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                        <line x1="10" y1="11" x2="10" y2="17" />
                                                        <line x1="14" y1="11" x2="14" y2="17" />
                                                    </svg>
                                                </BaseBtn>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="dataTable-bottom pb-5 pt-5">
                                <div class="dataTable-info">
                                    Showing 1 to {{ items.length }} of {{ items.length }} entries
                                </div>
                                <nav class="dataTable-pagination">
                                    <ul class="dataTable-pagination-list"></ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
    </div>
    <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
    <Edit-dialog ref="updateQr"></Edit-dialog>
</template>
<script setup>
import { ref } from "vue";
import api from './../../services/api';
import ConfirmDialogue from './../../components/popup/ConfirmDialogue.vue';
import EditDialog from './../../components/popup/EditDialog.vue';
import moment from 'moment';
let items = ref([]);
let confirmDialogue=ref();
let updateQr=ref();
let perid = ref('0001');
let table = ref();
let token = ref('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEyMzQ1LCJuYW1lIjoi4Liq4Li44LiB4Lix4LiN4LiN4LiyIiwic3VybmFtZSI6IuC5hOC4iuC4ouC4o-C4seC4leC4meC5jCIsInBvc2l0aW9uIjoi4LiZ4Lix4LiB4Lin4Li04LiK4Liy4LiB4Liy4Lij4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIiwiZGVwYXJ0bWVudCI6IuC4neC5iOC4suC4ouC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4quC4suC4o-C4quC4meC5gOC4l-C4qCIsImRlcGFydG1lbnRfZ3JvdXAiOiLguJ3guYjguLLguKLguYDguJfguITguYLguJnguYLguKXguKLguLXguKrguLLguKPguKrguJnguYDguJfguKgifQ.7vvsYEYe9GiKU3FVcO87VP4Hfv-FVPGMEh9IW4JxuLM')
let article = {
    "service": "history",
    "data": {
        "perid": perid.value
    }
};
const AuthStr = {
    headers: {
        "Authorization": "Bearer " + token.value,
        "Content-Type": "application/json"
    }
}

api.manageQrcode(article, AuthStr).then((result) => {
    if (result.status === 200) {
        items.value = result.data.data
    }
    else {

    }
})
async function updateData(index, item) {
  let ok=  await this.updateQr.show({
        okButton: "Save Changes",
        shorturl : item.short_url,
        url : item.url,
        logo : '',
        id : item.id
    });
    if (ok.status) {
        this.items[index].url = ok.data.url
        this.items[index].shorturl = ok.data.shorturl
    } else {

    }

 
}
async function updateStatus(index, item) {
    const ok = await this.confirmDialogue.show({
        message: 'Are you sure you want to delete this QRCode? ',
        okButton: "Yes, I'm sure",
    })

    if (ok) {
        let bodyupdate = {
            "service": "updateqrcode",
            "data": {
                "id": item.id,
                "url": item.url,
                "shorturl": item.short_url,
                "expired": 1000,
                "status": 0
            }
        };
        await  api.manageQrcode(bodyupdate, AuthStr).then((result) => {
            if (result.status === 200) {
                this.items[index].status = 0
            }
        })
    } else {

    }
}
</script>
