import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

function Messages() {
  return (
    <Flex align="center" justify="center" minH="100vh" bg="gray.100">
      <Box
        p={8}
        maxWidth="2000px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="#7421de"
        marginRight={14}
        maxHeight="500px" // Set the maximum height as needed
        overflowY="auto"  // Enable vertical scrolling when content exceeds maxHeight
      >
        <Heading as="h3" size="lg" textAlign="center" color="gray.100" mt={5} mb={9}>
          ALL MESSAGES RENDERED HERE ...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque deserunt sunt voluptatem recusandae optio, non eos. Dolores fugiat alias inventore non reprehenderit accusamus necessitatibus nemo repellat voluptates quod maiores quas officiis sapiente voluptatum, fugit laborum similique vel perspiciatis, recusandae perferendis aperiam magni. Voluptatem reiciendis, perferendis quasi distinctio quibusdam ex nobis? Minima in, quo eligendi magni eveniet quaerat voluptas deserunt doloribus consequuntur culpa dignissimos. Consequatur consectetur deserunt consequuntur eos sapiente, modi veniam quasi, autem accusamus corporis molestias fugit voluptas, quibusdam similique qui velit ab necessitatibus tempore fuga rem atque ipsa quod perferendis delectus! Sint alias porro libero laboriosam temporibus quis sit inventore nobis deserunt ea cumque perspiciatis, eos voluptatum sed optio quos hic voluptas aperiam quo exercitationem iste reprehenderit. Consequuntur soluta aliquid laboriosam. Vero quo, quia odit amet nisi culpa tenetur ipsa. Nemo consectetur laboriosam, esse sit eius alias impedit dolorem vitae beatae doloremque reiciendis sint adipisci non provident, deserunt pariatur perspiciatis quo nulla. Modi accusantium quod itaque sed consequatur. Sequi, blanditiis in, illo, inventore fugit tenetur maiores laudantium quas aliquid sunt asperiores? Obcaecati, quo magni dolor laborum omnis corrupti consectetur quibusdam officia, placeat saepe reiciendis, ullam necessitatibus veniam! Mollitia iusto ducimus reprehenderit error doloremque. Aut illum blanditiis, quasi quam alias quia accusantium eos expedita autem aspernatur quisquam odit nihil maxime tempora minima ab eum deserunt tempore, qui fugiat. Ut explicabo porro numquam error. Pariatur accusantium sequi porro quam libero necessitatibus, consequatur similique suscipit officiis, voluptatem unde eaque est temporibus architecto, asperiores expedita vel neque. Impedit, earum soluta. A eligendi sit, totam quam neque ab quas ipsum repudiandae, ex fugit numquam inventore id recusandae dolore atque molestias quae itaque deleniti praesentium possimus cum ratione? Enim deleniti laudantium facilis? Laudantium sint fugit quae odio aspernatur voluptatibus iure itaque nulla ex nam. Ab natus quasi atque tenetur cum unde amet, animi tempora, maxime veritatis commodi magnam est porro quae dicta accusamus similique nam minus nobis dolore quaerat architecto! Autem perferendis, quae labore officia aspernatur atque rerum quia sequi temporibus, optio suscipit veniam praesentium itaque, maxime esse? Sunt quasi magnam recusandae consectetur assumenda dignissimos voluptatibus ullam dolorum quia! Corporis nesciunt blanditiis explicabo maiores ut et impedit velit, eos consectetur alias laudantium rem dolor, animi reiciendis excepturi ducimus aut repellendus beatae quidem illum quaerat. Saepe sint maxime iste ullam commodi reprehenderit molestias mollitia sapiente tempora odit eos quos eveniet, adipisci alias corrupti voluptas earum culpa vitae. Maiores porro rerum soluta deserunt animi natus tenetur fuga ratione fugit pariatur accusantium aliquid quisquam, aspernatur assumenda reiciendis beatae sed architecto odit modi velit debitis. Rerum, error nesciunt ullam odio pariatur consequuntur. Nobis ipsum sapiente a dicta vero dignissimos fugiat recusandae aperiam pariatur dolore veritatis, natus totam accusamus debitis qui quisquam praesentium quis perferendis modi similique ullam dolorem!
        </Heading>
      </Box>
    </Flex>
  );
}

export default Messages;
