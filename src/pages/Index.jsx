import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product" },
  { id: 2, title: "UX Designer", category: "Design" },
  { id: 3, title: "Frontend Engineer", category: "Engineering" },
  { id: 4, title: "Backend Engineer", category: "Engineering" },
  { id: 5, title: "Product Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.category === filter);

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Remote Tech Jobs
        </Heading>
        <Text fontSize="lg">
          Find your next remote job in Product, Design, or Engineering.
        </Text>
        <Flex justify="center" wrap="wrap" gap={4}>
          {["All", "Product", "Design", "Engineering"].map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              colorScheme={filter === category ? "blue" : "gray"}
            >
              {category}
            </Button>
          ))}
        </Flex>
        <Stack spacing={4} width="100%">
          {filteredJobs.map((job) => (
            <Box
              key={job.id}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
            >
              <Heading fontSize="xl">{job.title}</Heading>
              <Text mt={4}>{job.category}</Text>
            </Box>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;