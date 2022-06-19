import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import image1 from './../assets/images/bubble.png';
import image2 from './../assets/images/insertion.png';
import image3 from './../assets/images/selection.png';
import './landing.css';

function LandingPage() {
  return (
    <Container className='landingPage'>
    <Row>
        <Col sm={6}><img
          className="image1"
          src={image1}
          alt="bubble"
        /></Col>
        <Col sm={6} className='box'>
            <h2 className='title'>Bubble Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <h4>Working of Bubble Sort</h4>
            <ul>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
            </ul>
            <Button variant="success" className='buttons'>Bubble Sort</Button>{' '}
        </Col>
    </Row>
    <Row>
    <Col sm={6} className='box'>
            <h2 className='title'>Insertion Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <h4>Working of Bubble Sort</h4>
            <ul>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
            </ul>
            <Button variant="success" className='buttons'>Insertion Sort</Button>{' '}
        </Col>
      <Col sm={6}><img
          className="image1"
          src={image2}
          alt="insertion"
        /></Col>
    </Row>
    <Row>
      <Col sm={6}><img
          className="image1"
          src={image3}
          alt="selection"
        /></Col>
      <Col sm={6} className='box'>
            <h2 className='title'>Selection Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <h4>Working of Bubble Sort</h4>
            <ul>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
            </ul>
            <Button variant="success" className='buttons'>Selection Sort</Button>{' '}
        </Col>
    </Row>
    <Row>
        <Col sm={6}><img
          className="image1"
          src={image1}
          alt="bubble"
        /></Col>
        <Col sm={6} className='box'>
            <h2 className='title'>Bubble Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <h4>Working of Bubble Sort</h4>
            <ul>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
            </ul>
            <Button variant="success" className='buttons'>Bubble Sort</Button>{' '}
        </Col>
    </Row>
    <Row>
    <Col sm={6} className='box'>
            <h2 className='title'>Insertion Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <h4>Working of Bubble Sort</h4>
            <ul>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
            </ul>
            <Button variant="success" className='buttons'>Insertion Sort</Button>{' '}
        </Col>
      <Col sm={6}><img
          className="image1"
          src={image2}
          alt="insertion"
        /></Col>
    </Row>
    <Row>
        <Col sm={6}><img
          className="image1"
          src={image1}
          alt="bubble"
        /></Col>
        <Col sm={6} className='box'>
            <h2 className='title'>Bubble Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <h4>Working of Bubble Sort</h4>
            <ul>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
            </ul>
            <Button variant="success" className='buttons'>Bubble Sort</Button>{' '}
        </Col>
    </Row>
    <Row>
    <Col sm={6} className='box'>
            <h2 className='title'>Insertion Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <h4>Working of Bubble Sort</h4>
            <ul>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
            </ul>
            <Button variant="success" className='buttons'>Insertion Sort</Button>{' '}
        </Col>
      <Col sm={6}><img
          className="image1"
          src={image2}
          alt="insertion"
        /></Col>
    </Row>
    <Row>
        <Col sm={6}><img
          className="image1"
          src={image1}
          alt="bubble"
        /></Col>
        <Col sm={6} className='box'>
            <h2 className='title'>Bubble Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <h4>Working of Bubble Sort</h4>
            <ul>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
            </ul>
            <Button variant="success" className='buttons'>Bubble Sort</Button>{' '}
        </Col>
    </Row>
    <Row>
    <Col sm={6} className='box'>
            <h2 className='title'>Insertion Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <h4>Working of Bubble Sort</h4>
            <ul>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
            </ul>
            <Button variant="success" className='buttons'>Insertion Sort</Button>{' '}
        </Col>
      <Col sm={6}><img
          className="image1"
          src={image2}
          alt="insertion"
        /></Col>
    </Row>
  </Container>
  );
}

export default LandingPage;
