import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import NavBar from './components/NavBar';


export default function App() {
  return (
      <Routes>
        <Route element={<Home/>} path='/' exact />
        <Route element={<About/>} path='/about' />
        <Route element={<SinglePost/>} path='/post/:slug' />
        <Route element={<Post/>} path='/post' />
        <Route element={<Project/>} path='project' />
    </Routes>,
    <NavBar />
  )
}