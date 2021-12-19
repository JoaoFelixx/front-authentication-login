import styled from 'styled-components';


export const GridAreas = styled.div`
	display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  grid-template-areas: "cardAboutPage welcome welcome welcome" 
                       "cardAboutPage history content content"
                       "cardAboutPage history content content"
                       "footer        footer  footer  footer";
  grid-gap: 20px 20px;
  margin: 10px;
  @media (max-width: 850px) {
    justify-content: center;
    grid-template-columns: 95%;
    grid-template-areas: "welcome" 
                         "cardAboutPage" 
                         "history"
                         "content"
                         "footer";
    margin: 0px;
`;  

export const CardAboutPage = styled.div` 
	grid-area: cardAboutPage;
	background-color: blue;
  height: auto;
`; 

export const Welcome = styled.div` 
	grid-area: welcome;
	background-color: yellow;
  height: 400px;
`; 

export const History = styled.div` 
	grid-area: history;
	background-color: green;
  height: 400px;
`;

export const Content = styled.div` 
	grid-area: content;
	background-color: gray;
  height: 400px;
`; 

export const Footer = styled.div` 
  grid-area: footer;
  background-color: orange;
  height: 100px;
`;