import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="bg-secondary text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">SomStudyHub</h1>
        <nav>
          <ul className="flex space-x-4 text-lg text-black">
            <li><Link to="/">Home</Link></li>
            <li><Link to="grade6">Grade6</Link></li>
            <li><Link to="grade8">Grade8</Link></li>
            <li><Link to="entranceexam">Entrance Exam</Link></li>
            <li><Link to="developer">Developers</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header