import React from 'react';
import {DiAndroid, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiFlutter,SiFigma} from 'react-icons/si';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
   <SectionDivider />
   <SectionTitle main>Technologies</SectionTitle>
   <SectionText>
     I am a Mobile Developer with experience in Android and Flutter. I have worked with a number of different technologies including  web development frameworks. 
   </SectionText>
   <List>
   <ListItem>
   <SiFlutter size='3rem' />
    <ListContainer>
      <ListTitle>Mobile</ListTitle>
      <ListParagraph>
        Experience with <br />
       Flutter & Dart
      </ListParagraph>
    </ListContainer>
   </ListItem>
   <ListItem>
   <SiFigma size='3rem' />
    <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Experience with <br />
       Figma and Canva
      </ListParagraph>
    </ListContainer>
   </ListItem>
   <ListItem>
   <SiFigma size='3rem' />
    <ListContainer>
      <ListTitle>Web</ListTitle>
      <ListParagraph>
        Experience with <br />
       HTMl , CSS and JavaScript frameworks
      </ListParagraph>
    </ListContainer>
   </ListItem>
   </List>
 </Section>

);

export default Technologies;
