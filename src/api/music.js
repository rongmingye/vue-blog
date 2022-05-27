import axios from '@/config/axios.js'
import { header, header_file } from '@/config/header.js'

export default {
  /* 音乐库 */
  getMusicList: function () {
    return axios.get('music/list', header);
  },
  addMusic: function () {

  },
  deleteMusic: function () {

  },
}