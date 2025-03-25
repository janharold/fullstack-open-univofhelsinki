const Header = (props) => {
  
  const {hkey, course} = props
  
  return (
    <h1 hkey={hkey}>{course}</h1>
  )
}

export default Header