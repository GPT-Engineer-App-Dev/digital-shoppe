import { Box, Flex, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <Box bg="brand.800" p={4} color="white">
      <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
        <Box fontSize="2xl" fontWeight="bold">
          Electronics Store
        </Box>
        <InputGroup maxW="400px">
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg="white"
            color="black"
          />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              onClick={handleSearch}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;