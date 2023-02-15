import service from '../services/collectionService.js'


export function router (app) {
	// 发布收藏
  app.post('/collection/add', service.addColletion)

	// 修改收藏
	app.post('/collection/update', service.updateColletion)

  // 查询收藏列表
  app.post('/collection/list', service.delectCollection)

  // 根据id查询收藏
  app.post('/collection/detail/${id}', service.getColletionList)

  // 删除收藏
  app.post('/collection/delete/${id}', service.getColletionById)

}