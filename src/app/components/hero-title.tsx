import { Button, Container, Group, Text } from '@mantine/core';
import { IconBrandGithub, IconDownload } from '@tabler/icons-react';
import classes from './hero-title.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper} id="home">
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Hi, I'm{' '}
          <Text component="span" variant="gradient" gradient={{ from: '#A594F9', to: '#6247AA' }} inherit>
            Luca Bianchini
          </Text>
        </h1>
        <Text className={classes.description} color="dimmed">
          19 year old full stack developer with a passion for creating intuitive and functional web applications.
        </Text>
        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: '#A594F9', to: '#6247AA' }}
            leftSection={<IconDownload size={20} />}
            component="a"
            href="https://drive.google.com/file/d/1v28BIuKEpwPTgGKruHRuqN2y-UmzuN8u/view?usp=sharing"
            download
          >
            View Resume
          </Button>
          <Button
            component="a"
            href="https://github.com/lfbianchini"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<IconBrandGithub size={20} />}
            target="_blank"
          >
            GitHub
          </Button>
        </Group>
      </Container>
      <div className={classes.imageGrid}>
        <img src="images/image_2.jpg" alt="Project 2" className={classes.gridItem2} />
        {/* <img src="images/image_1.jpg" alt="Project 1" className={classes.gridItem1} />
        <img src="images/image_3.jpg" alt="Project 3" className={classes.gridItem3} /> */}
        <img src="images/image_5.jpg" alt="Project 5" className={classes.gridItem5} />
      </div>
    </div>
  );
}