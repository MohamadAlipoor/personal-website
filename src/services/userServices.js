import http from './httpServices'
import config from './config.json'

export function createPost (post) {
  return http.post(config.api_post, post)
}

export function getPosts () {
  return http.get(config.api_post)
}

export function deletePost (postId) {
  return http.delete(config.api_post + '/' + postId)
}

export function editPost (post) {
  const body = { ...post }
  delete body._id
  return http.put(`${config.api_post}/${post._id}`, body)
}

export function createCourse (course) {
  return http.post(config.api_course, course)
}

export function getCourses () {
  return http.get(config.api_course)
}

export function deleteCourse (courseId) {
  return http.delete(config.api_course + '/' + courseId)
}

export function editCourse (course) {
  const body = { ...course }
  delete body._id
  return http.put(`${config.api_course}/${course._id}`, body)
}

export function getPostCount () {
  return http.get(config.api_post + '/count')
}

export function getCourseCount () {
  return http.get(config.api_course + '/count')
}

export function incPostLike (postId) {
  return http.put(`${config.api_post}/like/${postId}`)
}

export function login (email, password) {
  return http.post(config.api_login, { email, password })
}
