import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
  

  const { courses } = props
  //console.log("Courses", props.courses[0].name)
  return(
    <>
      {courses.map(course => (
        <div key={course.id}>
          <Header hkey={course.id} course={course.name}/>
          <Content parts={course.parts} />
          {/* {console.log("Courses", course.parts.map(part => part.exercises))} */}
          <Total exercises={course.parts.map(part => part.exercises)} />
        </div>
      ))}
      
    </>
  )
}

export default Course


{/* // <Header course={courses} />
      // <Content course={courses} />
      // <Total course={courses} />  */}