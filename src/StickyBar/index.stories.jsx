import React from 'react';
import styled from 'styled-components';
import StickyBar from './StickyBar';
import KeyValueDisplay from '../KeyValueDisplay';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #fafdff;
  padding: 64px;
  box-sizing: border-box;
`;

const Container = styled.div`
  height: 500px;
  width: 350px;
  overflow: auto;
  position: relative;
  background-color: #fafafa;
`;

const Other = styled.div`
  height: 100px;
  width: 100%;
`;

export default {
  title: 'Components 2.0|StickyBar',

  parameters: {
    jest: ['StickyBar'],
  },
};

export const defaultStory = () => (
  <Center>
    <Container>
      <Other />
      <StickyBar>
        <KeyValueDisplay label="Sticky">Bar</KeyValueDisplay>
      </StickyBar>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nunc elit, euismod sit
      amet rhoncus sed, ornare id sem. Ut rutrum odio quis purus interdum, at porta augue semper.
      Morbi pretium id dui id finibus. Sed tempus mi erat, in ullamcorper sem imperdiet sed. Sed
      dolor nulla, sollicitudin non urna eleifend, tempus imperdiet massa. Aenean viverra id sapien
      ac laoreet. Nulla vel libero et leo placerat egestas. Sed auctor viverra ligula, in placerat
      nibh blandit sed. Cras lobortis accumsan nisl id faucibus. Fusce sed ligula sapien. Praesent
      velit libero, mollis eu varius vitae, malesuada quis nulla. Duis pulvinar sed orci non
      placerat. Fusce vitae tellus tincidunt, euismod dolor ac, elementum nisl. Aenean ac elementum
      neque. Nulla porttitor, dolor eget iaculis fermentum, dolor eros auctor enim, vitae mattis
      nisl lectus nec lacus. Aenean tristique condimentum lectus. Aenean odio turpis, maximus quis
      tortor vitae, lacinia vestibulum est. Maecenas sit amet libero vel nisl aliquet tempor vitae
      sit amet tellus. Proin finibus odio sed vehicula ornare. Sed ultricies venenatis nulla
      bibendum vehicula. Duis malesuada tellus sed purus porta, et malesuada odio interdum. Proin
      sed placerat risus, at porttitor ante. Sed lobortis mollis sapien, vel bibendum odio ultrices
      ac. Aliquam congue non justo non porttitor. Nam tristique tellus metus, ut dictum quam lacinia
      eu. Quisque eleifend libero ligula, consectetur aliquet felis pellentesque sed. Nulla ut
      venenatis est, ut elementum mauris. Donec sed feugiat ligula. Maecenas nec lacinia risus, id
      accumsan justo. Phasellus ultricies nunc sed turpis euismod efficitur. Sed et orci sed orci
      pharetra interdum non in eros. Maecenas lectus erat, semper vel dolor nec, luctus porta
      ligula. Nullam felis lorem, tincidunt et dignissim nec, consequat in quam. Fusce ut nulla
      rutrum, euismod nulla a, condimentum magna. Nunc eget tellus vehicula, tristique urna non,
      bibendum quam. Aenean at nibh et erat faucibus dapibus. Nulla facilisi. Cras finibus cursus
      semper. Sed mollis tortor id sapien viverra, et fermentum orci consectetur. Sed sit amet odio
      sed ipsum mollis pharetra. Nulla dictum nunc eget varius varius. Donec id suscipit nisi. Cras
      rhoncus ex non pharetra fermentum. Vivamus in est eros. Duis vitae tellus ac nunc suscipit
      pharetra id ac diam. Mauris vestibulum at est in congue. Nunc vitae sagittis nulla. Aliquam
      ultrices gravida semper. Maecenas mattis tristique imperdiet. Fusce quis eleifend neque. Ut
      sed leo ex. Mauris commodo, lectus eu rutrum tempor, enim mauris feugiat velit, ut scelerisque
      dolor libero quis diam. Nullam finibus, sem in lobortis laoreet, justo urna scelerisque massa,
      sit amet condimentum ex mauris a ipsum. Vestibulum fermentum tellus eget lectus vehicula, nec
      hendrerit nisl vehicula. Nullam at leo in massa aliquam faucibus. Nulla maximus placerat lorem
      quis vestibulum.
    </Container>
  </Center>
);

defaultStory.story = {
  name: 'default',
};
