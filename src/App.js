import { Col, Container, Navbar, Row } from "react-bootstrap";
import { BrowserRouter, Link, Routes,Route, Outlet, } from "react-router-dom";
import Comments from "./Components/Comments/Commets";
import PostList from "./Components/Posts/PostList";
import PostForm from "./Components/Posts/PostForm";
import Users from "./Components/Users/Users";
import NotFound from "./Components/NotFound";

function App() {
  
  return (
    <BrowserRouter>
        <Navbar bg='primary' expand='lg' variant='dark'>
            <Container >
            <Link to='/' className='navbar-brand'>Post</Link>
            </Container>
        </Navbar>
        <Container fluid>
          <Row >
              <Col md={3} lg={2} className='border-end border-primary'>
              <div className="position-sticky pt-3 ">
                <ul className="nav flex-column">
                  <li className="nav-item">
                        <Link to='/' className='nav-link'>PostList </Link>
                  </li>
                  <li className="nav-item">
                        <Link to='/postform' className='nav-link'>Add post </Link>
                  </li>
                </ul>
                  
              </div>
              <Outlet/>
              </Col>

              <Col md={9} lg={10} className='pt-3 main' >
                <Container fluid="lg" className=''>
                <Routes>
                  <Route path='/' element={<Users/>}/>
                  <Route path="/postlist/:id" element={<PostList/>} />
                  <Route path="/comments/:id" element={<Comments/>} />
                  <Route path="/postform" element={<PostForm/>} />
                  <Route path="*" element={<NotFound/>} />
                </Routes>
                </Container>
              </Col>
          </Row>
        </Container>
        
        <div className="text-center p-4 bg-light border-top text-secondary " >
              <div >Done with love by Akhror</div>
            
        </div>
    </BrowserRouter>
  );
}

export default App;
