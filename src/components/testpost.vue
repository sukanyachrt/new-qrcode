<template>
    <button type="button" @click="getPatientProfile">
        test create
    </button>
</template>
<script>

import axios from 'axios';

export default {
    methods: {
        // sendData() {
        //     const headers = {
        //         "Content-Type": "application/json",
        //          Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjQ2NzczLCJuYW1lIjoiXHUwZTJkXHUwZTE4XHUwZTM0XHUwZTIwXHUwZTM5Iiwic3VybmFtZSI6Ilx1MGUyYVx1MGUwN1x1MGUxOVx1MGUyN1x1MGUyNSIsInBvc2l0aW9uIjoiXHUwZTE5XHUwZTMxXHUwZTAxXHUwZTI3XHUwZTM0XHUwZTBhXHUwZTMyXHUwZTAxXHUwZTMyXHUwZTIzXHUwZTA0XHUwZTJkXHUwZTIxXHUwZTFlXHUwZTM0XHUwZTI3XHUwZTQwXHUwZTE1XHUwZTJkXHUwZTIzXHUwZTRjIiwiZGVwYXJ0bWVudCI6Ilx1MGUxZFx1MGU0OFx1MGUzMlx1MGUyMlx1MGU0MFx1MGUxN1x1MGUwNFx1MGU0Mlx1MGUxOVx1MGU0Mlx1MGUyNVx1MGUyMlx1MGUzNVx1MGUyYVx1MGUzMlx1MGUyM1x1MGUyYVx1MGUxOVx1MGU0MFx1MGUxN1x1MGUyOCIsImRlcGFydG1lbnRfZ3JvdXAiOiJcdTBlMWRcdTBlNDhcdTBlMzJcdTBlMjJcdTBlNDBcdTBlMTdcdTBlMDRcdTBlNDJcdTBlMTlcdTBlNDJcdTBlMjVcdTBlMjJcdTBlMzVcdTBlMmFcdTBlMzJcdTBlMjNcdTBlMmFcdTBlMTlcdTBlNDBcdTBlMTdcdTBlMjgifQ.R9skJPDwtFw0XtvaP0gunVrWGRVh4Ug6xSctM8Z-_Qc",
        //     };
        //     axios.post('http://hosapp01.medicine.psu.ac.th/medservice/medqrcode/', {
        //         "service": "history",
        //         "data": {
        //             "perid": "0001"
        //         },
        //         headers
        //     })
        //         .then(response => {
        //             console.log("success");
        //             console.log(response.data);
        //         })
        //         .catch(error => {
        //             console.log("no");
        //             console.log(error);
        //         });
        // }
        async getPatientProfile() {
            // 2188464
            //   eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjIsImV4cCI6MTc5MDg2NjIxM30.vH3RVDA81Ocp9Fr1lslQoJAKrsMxx5qaAtSFj0EUqQo
           
             let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEyMzQ1LCJuYW1lIjoi4Liq4Li44LiB4Lix4LiN4LiN4LiyIiwic3VybmFtZSI6IuC5hOC4iuC4ouC4o-C4seC4leC4meC5jCIsInBvc2l0aW9uIjoi4LiZ4Lix4LiB4Lin4Li04LiK4Liy4LiB4Liy4Lij4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIiwiZGVwYXJ0bWVudCI6IuC4neC5iOC4suC4ouC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4quC4suC4o-C4quC4meC5gOC4l-C4qCIsImRlcGFydG1lbnRfZ3JvdXAiOiLguJ3guYjguLLguKLguYDguJfguITguYLguJnguYLguKXguKLguLXguKrguLLguKPguKrguJnguYDguJfguKgifQ.7vvsYEYe9GiKU3FVcO87VP4Hfv-FVPGMEh9IW4JxuLM"
            // let patienthn = "";
            // console.log("TOKEN: " + token);
            // *Get Patient Profile
            const headers = {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            };
            await axios
                .post('https://hosapp01.medicine.psu.ac.th/medservice/medqrcode', {
                    headers,
                })
                .then((profileresponse) => {
                    if (profileresponse.status === 200) {
                        let profileData = profileresponse.data.data;
                        if (profileData.length != 0) {
                            // console.log(profileData);
                            let patientHN = profileData[0].patientCode;
                            this.checkupreport(patientHN);
                        }
                    }
                });
        },
    }
}
</script>