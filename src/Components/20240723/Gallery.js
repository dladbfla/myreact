export function Gallery() {
    function onClic(){
        setDetailOn
    }
    return (
        <>
            <Container>
                <h2>
                    <Title>{target.name}</Title>
                    by {target.artist}
                </h2>
                <h4>
                    {index + 1} of {sculpureList.length}
                    <button style={{marginLeft: "20px"}} onClick={onPrev}>
                        Prev
                    </button>
                    <button style={{marginLeft: "20px"}} onClick={onNext}>
                        Next
                    </button>
                </h4>
            </Container>
        </>
    )
}