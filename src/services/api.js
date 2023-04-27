import config from './config'
export default {
    async shorturl(params) {
        return await config().get('new-url', { params })
    },
    async signin(option, params) {
        return await config('medhr').get('SingleSign/'+option, { params })
    },
    async manageQrcode(params,authconfig){
        return await config('hosapp').post('medqrcode',params,authconfig)
    }

}
