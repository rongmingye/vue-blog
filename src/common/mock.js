//引入mockjs
import Mock from 'mockjs'
import env from '../config/env.js'

//使用mockjs模拟数据
let mockApiList = [
    Mock.mock(env.serveHost + '/article/list', {
        'articleList|1-10': [
            {
                'id|+1': 1,
                'type': 'string',
                'createTime': '@datetime',
                'title': '标题',
                'description': '描述',
                'content': '内容',
                'author': '作者',
                'readNum|1-5': 5,
                'tags|1-2': ['vue', '前端', 'javascript'],
                'praise|1-5': 5,
              },
        ]
    }),
]

export default mockApiList;
