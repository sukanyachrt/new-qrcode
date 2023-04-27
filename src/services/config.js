import axios from 'axios'
export default (url) => {
    var baseurl
    switch (url) {
        case 'medhr':
            baseurl = 'https://medhr.medicine.psu.ac.th/'
            break;
        case 'hosapp':
            
            baseurl = 'http://hosapp01.medicine.psu.ac.th/medservice/'
            break;
        default:
            baseurl = 'https://link.medicine.psu.ac.th/'
            break;
    }
    return axios.create({
        baseURL: baseurl,
       
    })
    // return  axios.create({
    //  baseURL : 'https://link.medicine.psu.ac.th/'

    // baseURL : 'http://61.19.201.20:19539/'
    // baseURL : 'https://hosapp01.medicine.psu.ac.th/'
    //  })
}
