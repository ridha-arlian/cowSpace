"use client"

import { PasswordInput } from "../../../components/ui/password-input"
import { Button, Checkbox, Field, Flex, Heading, HStack, Input, Link, Stack, Text } from "@chakra-ui/react"

export function LoginForm () {
  return (
    <Stack w={{ base: "100vw", md: "lg" }} h={{ base: "100vh", md: "fit-content" }} bg="white" boxShadow="md" borderRadius="xl" p="8">
      <Heading textAlign="center" color="black" textStyle="open">Log in to your account</Heading>
      
      <Flex align="center" justify="center" gap={2}>
        <Text color="gray.400">Don&apos;t have an account?</Text>
        <Link href="#" color="brown.500" variant="underline">
          Sign Up
        </Link>
      </Flex>
      
      <Stack gap={4}>
        <Field.Root color="black" required>
          <Field.Label>
            Username/Email <Field.RequiredIndicator />
          </Field.Label>          
          <Input placeholder="Enter your email" color="black" css={{ "--focus-color": "#DDA853" }} />
          <Field.HelperText>
            We&apos;ll never share your email.
          </Field.HelperText>
        </Field.Root>
        
        <Field.Root color="black" required>
          <Field.Label>
            Password <Field.RequiredIndicator />
          </Field.Label>
          <PasswordInput placeholder="Enter your password" color="black" css={{ "--focus-color": "#DDA853" }} />
        </Field.Root>

        <HStack justify="space-between" align="center">
          <Checkbox.Root variant="subtle" colorPalette="black" color="black" mt="2" value="remember me">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>
              Remember me
            </Checkbox.Label>
          </Checkbox.Root>
          <Link href="#" color="brown.500" variant="underline">
            Forgot Password
          </Link>
        </HStack>

        <Button colorPalette="brown" color="black" _hover={{color: "black"}}>
          Sign in
        </Button>
      </Stack>
    </Stack>
  )
}