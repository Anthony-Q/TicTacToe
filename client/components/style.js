import styled from 'styled-components';

const TTTstyling = styled.div`
.board-container {
    text-align: center;
    align-content: center;
}

.box {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    display: inline-block;
}

.board {
    display: inline-flex;
    flex-wrap: wrap;
    width: 320px;
    line-height: 100px;

}
`

export default TTTstyling;