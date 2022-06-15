
import * as article from './article'
import  * as collection from './collection'

export function init(app) {
  article.router(app)
  collection.router(app)
}