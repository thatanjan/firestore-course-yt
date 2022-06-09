import { ChakraProvider, VStack } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<VStack
				spacing='5'
				sx={{
					w: '80%',
					maxW: '50rem',
					mx: 'auto',
					alignItems: 'strech',
					mt: '3rem',
				}}
			>
				<Component {...pageProps} />
			</VStack>
		</ChakraProvider>
	)
}

export default MyApp
