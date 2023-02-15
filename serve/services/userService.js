import query from '../mysql.js'
import db from '../db/index.js'
import * as response from '../utils/response.js'
import {PRIVATE_KEY} from '../utils/constant.js'

export function login(req, res) {

    // 获得token
 const token = jwt.sign(
    { username : req.body.username },
    PRIVATE_KEY,
    { expiresIn:"60s"}
  )

  res.json(response.success({token}))
}