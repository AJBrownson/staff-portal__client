import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import http from '../lib/http';
import formatDate from '../lib/formatDate';
// Here we import the new components for the seach bar
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Home = () => {
  const [posts, setPosts] = useState([]); 
  useEffect(() => {
    async function fetchData() {
      const { data } = await http.get('/api/posts');
      setPosts(data.data.posts);
    }
    fetchData();
  }, []);
  /* We are creating a new function that calls the API endpoint
     and passing the search value as a query parameter
  */
  const searchPost = async (e) => {
    const searchValue = e.target.value;
    const { data } = await http.get(`/api/posts?search=${searchValue}`);
    // The subset of posts is added to the state that will trigger a re-render of the UI
    setPosts(data.data.posts); 
  };
  
  return (
    <>
      <Container className="my-5" style={{ maxWidth: '800px' }}>
        <Image
          src="avatar.jpeg"
          width="150"
          style={{ borderRadius: '50%' }}
          className="d-block mx-auto img-fluid"
        />
        <h2 className="text-center">Welcome to the Digital Marketing blog</h2>
        {/* // Let's add the search bar under the subheader */}
        <Form>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-5"
            aria-label="Search"
            onChange={searchPost} // onChange will trigger "search post"
          />
        </Form>
      </Container>
      <Container style={{ maxWidth: '800px' }}>
        <ListGroup variant="flush" as="ol">
          {
            posts.map((post) => {
              return (
                <ListGroup.Item key={post._id}> 
                  <div className="fw-bold h3">
                    <Link to={`/posts/${post._id}`} style={{ textDecoration: 'none' }}>{post.title}</Link>
                  </div>
                  <div>{post.author} - <span className="text-secondary">{formatDate(post.createdAt)}</span></div>
                </ListGroup.Item>
              );
            })
          }
        </ListGroup>
      </Container>
    </>
  );
};

export default Home;