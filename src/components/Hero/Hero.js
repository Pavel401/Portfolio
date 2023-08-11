import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
<LeftSection>
  <SectionTitle main center>
  Hey! 👋 <br />
  I'm Mabud Alam
  </SectionTitle>
  <SectionText>
   I'm a Software Developer and an open source lover. 
  </SectionText>
  <Button onClick={() => window.location = 'https://bit.ly/myresume-mabud'}>Resume</Button>
</LeftSection>

</Section>
);

export default Hero;