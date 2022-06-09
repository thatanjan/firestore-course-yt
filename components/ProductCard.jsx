import React from 'react'
import Link from 'next/link'

import { VStack, Heading, Button } from '@chakra-ui/react'

const ProductCard = ({ name, total, id, price }) => {
	const handleDelete = async () => {}

	return (
		<VStack
			sx={{
				textTransform: 'capitalize',
				cursor: 'pointer',
				mt: '2rem',
				'& h2': {
					fontSize: '2rem',
				},
				alignItems: 'start',
			}}
		>
			<Link href={`/product/${id}`}>
				<Heading>{name}</Heading>
			</Link>

			<Heading>price: {price}</Heading>

			<Heading>total: {total}</Heading>

			<Button onClick={handleDelete}>Delete</Button>
		</VStack>
	)
}

export default ProductCard
