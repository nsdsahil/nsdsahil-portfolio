'use client'

import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  Alert,
  AlertIcon,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from 'emailjs-com';

emailjs.init('WTmHq2ZYg4ZPhoLHB');

export default function ContactFormWithSocialButtons() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' }); // 👈 success/error state
  const [loading, setLoading] = useState(false); // 👈 loader for button

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_wd3qk8r',
        'template_ixtx49k',
        templateParams
      );

      setStatus({ type: 'success', message: '✅ Your message has been sent successfully!' });
      setFormData({ name: '', email: '', message: '' }); // reset form
    } catch (error) {
      setStatus({ type: 'error', message: '❌ Oops! Something went wrong. Please try again.' });
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      id="contact"
      bg={useColorModeValue('#f4fff7', 'gray.900')}
      align="center"
      justify="center"
      py={16}
    >
      <Box
        maxW="600px"
        w="100%"
        borderRadius="2xl"
        p={10}
        bg={useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)')}
        boxShadow="2xl"
        backdropFilter="blur(12px)"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <Heading size="lg" textAlign="center" mb={4}>
              Get in Touch
            </Heading>

            {status.message && (
              <Alert status={status.type} borderRadius="md">
                <AlertIcon />
                {status.message}
              </Alert>
            )}

            <FormControl isRequired>
              <FormLabel fontWeight="bold">Name</FormLabel>
              <InputGroup>
                <InputLeftElement><BsPerson /></InputLeftElement>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  borderRadius="xl"
                  boxShadow="sm"
                  _focus={{ boxShadow: '0 0 0 2px #32de84' }}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold">Email</FormLabel>
              <InputGroup>
                <InputLeftElement><MdOutlineEmail /></InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  borderRadius="xl"
                  boxShadow="sm"
                  _focus={{ boxShadow: '0 0 0 2px #32de84' }}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold">Message</FormLabel>
              <Textarea
                name="message"
                placeholder="Write your message..."
                rows={6}
                resize="none"
                value={formData.message}
                onChange={handleInputChange}
                borderRadius="xl"
                boxShadow="sm"
                _focus={{ boxShadow: '0 0 0 2px #32de84' }}
              />
            </FormControl>

            <Button
              type="submit"
              size="lg"
              fontWeight="bold"
              bgGradient="linear(to-r, #32de84, #228b22)"
              color="white"
              borderRadius="full"
              boxShadow="lg"
              _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
              transition="all 0.3s ease"
              isLoading={loading} // 👈 loader during sending
              loadingText="Sending..."
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  )
}
