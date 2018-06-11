import styled from 'styled-components';

export const ProjectTitle = styled.h3`
font-size: 3em;
font-family: "Museo Slab";
text-align:left;

`;

export const Title = styled.h1`
font-size: 3em;
font-family: "Museo Slab";
text-transform: uppercase;
&:after {
  content:"";
  padding-top:  10px;
  display:block;
  border-bottom: 1px solid #2872b9;
  width:75px;
  margin: 0 auto;
}
`;

export const Subtitle = styled.h3`
font-size: 2em;
font-family: "Museo Slab";
&:after {
  content:"";
  padding-top:  10px;
  display:block;
  border-bottom: 1px solid #ae193e;
  width:75px;
  margin: 0 auto;
}
`;

export const ProjectDesc = styled.p`
font-size: 1em;
text-align:left;

`;

export const AboutDesc = styled.p`
font-size: 1.5em;
text-align:center;
max-width:800px;
margin: 0 auto;
padding:15px 0 30px;
`;

export const ContactTitle = styled.h3`
font-size: 1.25em;
font-family: "Museo Slab";
`;

export const BlueButton = styled.button`
font-size: 1.25em;
background:#2872b9;
`;

export const RedButton = styled.button`
font-size: 1.25em;
background:#ae193e;
`;

// About

export const AboutTitle = styled.h5`
font-family: "Museo Slab";
font-size: 1.5em;
text-align:left;
`;

export const AboutText = styled.p`
font-size: 1.2em;
text-align:left;
`;

// Services

export const ServicesTitle = styled.h5`
font-size: 1.5em;
text-align:left;
font-family: "Museo Slab";

`;

export const ServicesSubtitle = styled.h5`
font-size: 1em;
text-align:left;
font-family: "Museo Slab";

`;

export const ServicesText = styled.p`
text-align:left;
font-size: 1em;
`;


// Portfolio

export const PortfolioTitle = styled.h5`
font-size: 1.5em;
text-align:left;
font-family: "Museo Slab";

`;

export const PortfolioText = styled.p`
text-align:left;
font-size: 1em;
`;