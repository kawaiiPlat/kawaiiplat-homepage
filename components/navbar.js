import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiGithubLine } from 'react-icons/ri'

export default function Gslr() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Box> Logo </Box>
              <VisuallyHidden>KawaiiPlat.xyz</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              kawaiiPlat.xyz
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href="/resume"><Button variant="ghost">Resume</Button></Link>
              <Link href="/blog"><Button variant="ghost">Blog</Button></Link>
              <Link href="/work"><Button variant="ghost">Work</Button></Link>
            </HStack>
            <Link href='https://github.com/kawaiiplat' isExternal>
              <Button colorScheme="brand" size="sm" leftIcon={<RiGithubLine/>}>
                Github
              </Button>
            </Link>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link href="/resume">
                  </Link><Button w="full" variant="ghost">
                    Resume
                  </Button>
                <Link/>
                <Link href="/blog">
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                </Link>
                <Link href="/work">
                  <Button w="full" variant="ghost">
                    Work
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}