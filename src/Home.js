import React,{useState} from 'react'
import {Card,CardGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Home.css"
import styled from 'styled-components';
import Modal from './Modal';
import { GlobalStyle } from './globalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function Home() {
    
    
    const [adds, setadds] = useState(false); 
    const [muls, setmuls] = useState(false);
    const [subs, setsubs] = useState(false); 
    
    function start_addition() {
        setadds(false);
        window.location.href = "./Addition"; 
    }
    function start_subtraction() {
        setsubs(false);
        window.location.href = "./Subtraction"; 
    }
    function start_multiplication() {
        setmuls(false);
        window.location.href = "./Multiplication"; 
    }
    function off() {
        window.location.href = "./"; 
    }

    
return (
        <div className="home">

 <h1 className="f">Games</h1>

    <div className="card_grid">
        

    <CardGroup>
        <Card>
            <Card.Img variant="top" className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYXouFgkGFfMxBQnDUBhFlJEMRp9d5CbozQ&usqp=CAU" />
            <Card.Body>
            <Card.Title>Addition</Card.Title>
            <Card.Text>
            A 10 question Rapid fire Addition Rapid round.
                            </Card.Text>
                            <Container>
                                
                                <Button onClick={() => {setadds(true)}} variant="primary" >Start Quiz !</Button>
                                <Modal open={adds} onClose={start_addition} off={off} ></Modal>
                           
                            </Container>
                      
            </Card.Body>
            
        </Card>
        <Card>
            <Card.Img variant="top" className="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADR0dHd3d3h4eHa2trOzs7Ly8vk5OS3t7fw8PDs7Ozz8/O7u7szMzPp6enV1dUlJSUgICAbGxsTExMtLS2vr6+oqKihoaHBwcG6urqRkZEPDw85OTmpqan5+flUVFQT2vCeAAACbklEQVR4nO3acVPiMBCHYSMghQJFinficYff/1MeRZtUhDbJBMzuvM+fSGbym91NwPLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA7nblT+/Az9Q8xS2cmc087VZuY2ZMXMS348LNIvV20ns1jWn4wuVp4Sr7Kv4xH4KruPxcuKpusa10CmPiIu7adfviNjtLZmwjPoYsswHrzEt4NLERA2bRVTD/gFERbcBt7i36wUX0bFQb0MgIGDyL0irYGIWcqHJO0a6AWZzat47vsbNkJr5VlBrQu1HlBvQ8bmzAvbyAXrMouYKNwYgu4OS+O0tm4Op/Eh9wYBZdwNH9d5ZMz4n6qKCCjauzqCXg1avfBVz/1M6Sudioa0UBLx43ugJemEVtAb9FdAGD/pWTtS9Xv/fXDlHcLK5HCivYcLlqjRVsuN5UGvBbxIgHG9kbaQ/YfaahsEVPiq3SY7Q13irv0qI2XfqqWJgz2iIW+zbZRudp4w6ZqfsAp2kWK1u4nc5P3lXdCRj4ZEqEavslYPSz/myV5wEjn/Vnq3pu0yzdi5oiljbgW/fl4Gf92SrrCxVsaJnF0l4Ts/M/6ThR589XA+qYxflLT0ANV39vBRvSG3UwoPTjZjEcUPYsLlbt3n/1vU1uRM+Acq9+16IDAaXO4uLFO6DME9W16D+ft8ubxcPfoIDyrn4X8LfvElmNelgFB5R13EQFlDSLc9uir2ELxUScRAbsrMz9V25lZMB2FgX8nP3UpxEBP0/U/AMe7/v3uICnRpXxW+FDz9elfuvcZxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAp/8QCRDDEWKRLAAAAABJRU5ErkJggg=="/>
            <Card.Body>
            <Card.Title>Multiplication</Card.Title>
            <Card.Text>
            A 10 question Rapid fire Multiplication Rapid round.{' '}
                            </Card.Text>
                    <Container>
                    
                            <Button onClick={() => { setmuls(true) }} variant="primary" >Start Quiz !</Button>
                            <Modal open={muls} onClose={start_multiplication} off={off} ></Modal>
                    </Container>

                          
                            
            </Card.Body>
            
        </Card>
        <Card>
            <Card.Img variant="top"src="https://printables.space/files/uploads/download-and-print/large-printable-numbers/minus-a4.jpg" className="img" />
            <Card.Body>
            <Card.Title>Subtraction</Card.Title>
            <Card.Text>
            A 10 question Rapid fire Subtraction Rapid round.
                            </Card.Text>
                        <Container>
                            
                            <Button onClick={() => { setsubs(true) }} variant="primary" >Start Quiz !</Button>
                            <Modal open={subs} onClose={start_subtraction} off={off} > </Modal>
                        
                        </Container>
                            
                            <GlobalStyle></GlobalStyle>
            </Card.Body>
            
        </Card>
    </CardGroup>
                

            
            </div>
        </div>
    )
}

export default Home
