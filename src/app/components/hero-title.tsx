import React from 'react';
import { Button, Container, Group, Text, Stack } from '@mantine/core';
import { IconBrandGithub, IconDownload } from '@tabler/icons-react';
import classes from './hero-title.module.css';
import Image from 'next/image';

export function HeroTitle() {
  return (
    <div className={classes.wrapper} id="home">
      <Container className={classes.container}>
        <Stack className={classes.content} gap="xl">
          <div>
            <h1 className={classes.title}>
              Hi, I&apos;m{' '}
              <Text 
                component="span" 
                variant="gradient" 
                gradient={{ from: '#A594F9', to: '#A594F9' }} 
                inherit
              >
                Luca Bianchini
              </Text>
            </h1>
            <Text className={classes.description}>
              19-year-old full stack developer passionate about creating intuitive and functional web applications.
            </Text>
          </div>
          
          <Group className={classes.controls} justify="center">
            <Button
              size="lg"
              className={classes['control-secondary']}
              variant="gradient"
              gradient={{ from: '#A594F9', to: '#6247AA' }}
              leftSection={<IconDownload size={20} />}
              component="a"
              href="https://drive.google.com/file/d/1v28BIuKEpwPTgGKruHRuqN2y-UmzuN8u/view?usp=sharing"
              target="_blank"
              download
            >
              View Resume
            </Button>
            <Button
              component="a"
              href="https://github.com/lfbianchini"
              size="lg"
              variant="outline"
              className={classes['control-primary']}
              leftSection={<IconBrandGithub size={20} />}
              target="_blank"
            >
              GitHub
            </Button>
          </Group>
        </Stack>
        
        <div className={classes.imageGrid}>
          <div className={classes.imageWrapper}>
            <Image 
              src="images/image_2.jpg" 
              alt="Project 2" 
              className={classes.gridImage} 
              width={300}
              height={300}
            />
          </div>
          <div className={classes.imageWrapper}>
            <Image 
              src="images/image_5.jpg" 
              alt="Project 5" 
              className={classes.gridImage} 
              width={300}
              height={300}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}