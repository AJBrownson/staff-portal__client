import { Routes, Route } from 'react-router-dom'
// import Protected from './Pages/Protected/Protected'
import Create from './Pages/Create/index'
import Home from './Pages/Home'
import Records from './Pages/Records'
import Archive from './Pages/Archive'



const Routing = () => {
  // const [loggedIn, setLoggedIn] = useState(null)

  // const logIn = () => {
  //   setLoggedIn(true)
  // };
  // const logOut = () => {
  //   setLoggedIn(false)
  // }

  return (
    <>
      {/* {loggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={logIn}>Login</button>
      )} */}
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/add-staff' element={ <Create /> } />
            <Route path='/staff' element={
              // <Protected loggedIn={loggedIn}>
                <Records />
              // </Protected>
            } />
            <Route path='/archive' element={ <Archive /> } />
        </Routes>
    </>
  )
}

export default Routing