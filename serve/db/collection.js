export function addColletion(request) {
  return `insert into colletion(title, desc, link) values (
    '${request.title}', 
    '${request.desc}',
    '${request.link}')`
}

export function updateColletion(request) {
  return `update colletion set 
  colletion_title='${request.title}',
  colletion_desc='${request.desc}',
  colletion_link='${request.content}' where id = '${+ request.id}'`
}

export function deleteCollection() {
  return `delete from collection where id='${request.id}'`
}

export function getColletionList() {
  return `select * from colletion`
}

export function getColletionById(id) {
  return `select * from colletion where id ='${id}'`
}