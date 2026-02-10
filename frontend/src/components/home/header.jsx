import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="bg-secondary text-2xl font-heading w-full font-normal p-4">
      <img src="" alt="" />
      <div className="flex justify-between">
    <h1 className="text-3xl capitalize">somstudyhub</h1>
    <nav className="flex justify-center items-center gap-3 capitalize">
      <Link to="/">Home</Link>
      <Link to="grade6">Grade6</Link>
      <Link to="grade8">Grade8</Link>
      <Link to="entranceexam">entrance exam</Link>
      <Link to="developer">developers</Link>
      <Link to="contact">contact</Link>
      <Link to="login">login</Link>
      <Link to="icon">icon</Link>
    </nav>
    </div>
    </div>
  )
}

export default Header