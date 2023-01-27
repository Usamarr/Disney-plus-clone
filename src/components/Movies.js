import React from 'react'
import styled from 'styled-components'
function Movies() {
  return (
    <Container>
       <h4> Recommended for You</h4> 
       <Content>
            <Wrap>
                <img src='/images/toystory.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/nemo.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/zootopia.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/the-incredibles-2.png' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/monsters-uni.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/cocoo.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/big-hero.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/turning-red.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/cars.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/inside-out.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/walle.jpg' alt=''/>
            </Wrap>
            <Wrap>
                <img src='/images/up.jpg' alt=''/>
            </Wrap>
       </Content>
    </Container>
  )
}

export default Movies 
const Container = styled.div`

`
const Content =styled.div`
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(4, minmax(0,1fr));
        padding: 30px 26px;
`
const Wrap =styled.div`
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        border: 3px solid rgba(249, 249, 249, 0.1);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &:hover{
            transform: scale(1.05);
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            border-color: rgba(249, 249, 249, 0.8);

        }
`