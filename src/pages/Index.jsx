import { Box, Container, Flex, Heading, Text, VStack, Grid, GridItem, Image, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding="1.5rem" justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" padding="3rem" textAlign="center">
        <Heading size="2xl" mb="4">Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb="4">Your one-stop shop for all things electronics</Text>
        <Image src="https://via.placeholder.com/800x400" alt="Featured Product" borderRadius="md" />
      </Box>

      {/* Product Grid */}
      <Container maxW="container.xl" my="6">
        <Heading size="lg" mb="4">Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {Array.from({ length: 8 }).map((_, index) => (
            <GridItem key={index} bg="white" borderRadius="md" boxShadow="md" overflow="hidden">
              <Image src={`https://via.placeholder.com/250x250?text=Product+${index + 1}`} alt={`Product ${index + 1}`} />
              <Box p="4">
                <Heading size="md">Product {index + 1}</Heading>
                <Text mt="2">$99.99</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" py="6">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
          <Flex justifyContent="space-between" mt="4">
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;