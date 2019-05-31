import styled from "styled-components";



const UserAndComment = styled.span `
font-size: 1.3rem;
 

${props => (props.type === "bold" ? `font-weight: 700` : null)}
${props => (props.type === "light" ? `font-weight: 600` : null)}
`;



export default UserAndComment;