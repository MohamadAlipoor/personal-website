const courses = [
  {
    id: 1,
    title: 'دوره Node JS',
    imageUrl: 'srccssimagesa-new-way-to-pass-data-between-fragments.jpg',
    text: 'متن تست',
    time: '10:11:00',
    price: 50000
  },
  {
    id: 2,
    title: 'دوره Node JS',
    imageUrl: 'srccssimagesa-new-way-to-pass-data-between-fragments.jpg',
    text: 'متن تست',
    time: '10:11:00',
    price: 50000
  },
  {
    id: 3,
    title: 'دوره Node JS',
    imageUrl: 'srccssimagesa-new-way-to-pass-data-between-fragments.jpg',
    text: 'متن تست',
    time: '10:11:00',
    price: 50000
  }
]

const getCourses = () => {
  return [...courses]
}

export default getCourses
