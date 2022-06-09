import React, { useEffect, useState } from 'react'

import { Box } from '@chakra-ui/react'

import ProductCard from './ProductCard'

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		;(async () => {
			console.log('component is mounted')
		})()
	}, [])

	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridGap: '1rem',
			}}
		>
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</Box>
	)
}

export default Products
