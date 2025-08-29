"use client"

import { GetAQuote } from '@/assets'
import Calculator from '@/shared/components/calculator/calculator'
import { FLOW_SPACER } from '@/shared/constant/constant'
import { Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            {/* Banner Section */}
            <Stack bgcolor={"background.white"} py={7}>
                <Container maxWidth={"xl"}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={FLOW_SPACER}>
                        {/* ImAage */}
                        <Image src={GetAQuote} alt="Get a Quote" width={250} height={"auto"} objectFit='cover' />
                        {/* Title */}
                        <Stack textAlign={"center"} spacing={2}>
                            <Typography variant="h3" fontWeight={"bold"}>
                                Get a Quote
                            </Typography>
                            <Typography variant="h4" fontWeight={"medium"}>
                                Postage Costs from just £1.99 exc VAT
                            </Typography>
                        </Stack>
                        {/* ImAage */}
                        <Image src={GetAQuote} alt="Get a Quote" width={250} height={"auto"} objectFit='cover' />
                    </Stack>

                    {/* Calculator */}
                    <Container maxWidth={"lg"}>
                    <Calculator />
                    </Container>
                </Container>
            </Stack>
        </>
    )
}

export default page