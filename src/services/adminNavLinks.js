const adminNavLinks = [
  {
    id: 1,
    text: 'ساخت پست جدید',
    link: '/admin/createPost',
    icon: 'fa fa-plus feather'
  },
  {
    id: 2,
    text: 'لیست پست ها',
    link: '/admin/allPosts',
    icon: 'fa fa-list feather'
  },
  {
    id: 3,
    text: 'ساخت دوره جدید',
    link: '/admin/createCourse',
    icon: 'fa fa-plus feather'
  },
  {
    id: 4,
    text: 'لیست دوره ها',
    link: '/admin/allCourses',
    icon: 'fa fa-list feather'
  }
]

const getAdminNavLinks = () => {
  return [...adminNavLinks]
}

export default getAdminNavLinks
