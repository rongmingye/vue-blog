import axios from '@/config/axios.js'
import { header } from '@/config/header.js'

export default {
  getDialogDetail: function (id) {
    return axios.get(`dialog/config/detail?id=${id}`, header);
  },
  UpdateDialogConfig: function (parmas) {
    return axios.post('dialog/config/update', parmas, header);
  },
}