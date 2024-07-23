import styled from "styled-components";


const Li = styled.li`
    color: lightcoral;
    list-style: none;
`;
const Container = styled.div`
    width : 100vw;
    margin: 0 auto;
    text-align: center;
`;
const Title = styled.h1`
    font-size : 2rem;
`;
const Photo = styled.img`
    border-radius : 50%
`;

export function List(props) {
    
    return (
    <>
        <h1>List Component</h1>
        <p>리액트 연습 코드</p>
        <ul>
            {props.products.map((p)=>(
                <Li>{p.title}</Li>
                ))}
        </ul>
        <Container>
            <Title>{props.user.name}</Title>
            <Photo src={props.user.imageUrl}></Photo>
        </Container>
    </>
    );
}