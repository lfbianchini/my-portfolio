import { Button, Container, Text, Title } from '@mantine/core';
import { Dots } from './dots';
import classes from './hero-text.module.css';

export function HeroText() {
  return (
    <Container 
      className={`${classes.wrapper} bg-gradient-to-br from-[#3A3640] to-[#000000] text-white`} size={3000}
    >
      <Dots className={`${classes.dots} opacity-20`} style={{ left: 0, top: 0 }} />
      <Dots className={`${classes.dots} opacity-20`} style={{ left: 60, top: 0 }} />
      <Dots className={`${classes.dots} opacity-20`} style={{ left: 0, top: 140 }} />
      <Dots className={`${classes.dots} opacity-20`} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title 
          className={`${classes.title} text-center text-5xl md:text-6xl font-bold tracking-tight mb-6`}
        >
          <Text 
            variant="gradient" 
            gradient={{ from: '#A594F9', to: '#6247AA' }} 
            className="bg-clip-text text-transparent text-lg"
          >
            Who am I?
          </Text>
        </Title>

        <Container p={0} size={700} className="text-center">
          <Text 
            size="xl" 
            className="text-gray-300 leading-relaxed text-xl font-light"
          >
            I'm a second year Computer Science student at the {' '}
            <Text 
              component="span" 
              variant="gradient" 
              gradient={{ from: '#A594F9', to: '#6247AA' }} 
              className="font-semibold"
              inherit
            >
              University of San Francisco
            </Text>
            , who loves all things tech. 

            Currently, I'm focused on {' '}
            <Text 
              component="span" 
              variant="gradient" 
              gradient={{ from: '#A594F9', to: '#6247AA' }} 
              className="font-semibold"
              inherit
            >
              full stack web development
            </Text>
            , with a keen interest in backend technologies and cloud computing.

            My most recent project involved creating a full stack web application called {' '}
            <Text 
              component="span" 
              variant="gradient" 
              gradient={{ from: '#A594F9', to: '#6247AA' }} 
              className="font-semibold"
              inherit
            >
              "algowar"
            </Text>
            , a platform for users to engage in solo or multiplayer coding challenges.

            I {' '}
            <Text 
              component="span" 
              variant="gradient" 
              gradient={{ from: '#A594F9', to: '#6247AA' }} 
              className="font-semibold"
              inherit
            >
              interned at Lasaria
            </Text>
            {' '} from September 2024 to January 2025, contributing to a new music streaming platform.

            I {' '}
            <Text 
              component="span" 
              variant="gradient" 
              gradient={{ from: '#A594F9', to: '#6247AA' }} 
              className="font-semibold"
              inherit
            >
              plan to intern at Curriculum Associates
            </Text>
            {' '} as a Software Engineer Intern from June 2025 to August 2025.
          </Text>
        </Container>
      </div>
    </Container>
  );
}