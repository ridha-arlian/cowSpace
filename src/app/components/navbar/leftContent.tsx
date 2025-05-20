import { Container, Flex, Heading, HStack } from '@chakra-ui/react'

export function LeftContent(){
  return (
    <HStack>
      <Container>
        <Flex>
          <Heading textStyle="gugi" color="brown.500">
            cowSpace
          </Heading>
        </Flex>
      </Container>
    </HStack>
  )
}