"use client"

import { GetAQuote } from '@/assets'
import Calculator from '@/shared/components/calculator/calculator'
import { FLOW_SPACER } from '@/shared/constant/constant'
import TableContainer from '@/shared/pure-components/table/TableContainer'
import { Container, Stack, Typography, TableCell } from '@mui/material'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { StyledTableRow } from '@/shared/pure-components/table/ui'

const tableHeaders = [
    'Courier',
    'Service',
    'Est. Delivery',
    'Price (from)',
    'Tracking',
    'Max Weight',
]

const courierRows = [
    {
        courier: 'Royal Mail',
        service: 'Tracked 24',
        eta: '1-2 business days',
        price: '£3.49',
        tracking: 'End-to-end',
        maxWeight: '20 kg',
    },
    {
        courier: 'DPD',
        service: 'Next Day',
        eta: 'Next business day',
        price: '£5.99',
        tracking: 'Real-time',
        maxWeight: '30 kg',
    },
    {
        courier: 'Evri',
        service: 'Standard',
        eta: '2-4 business days',
        price: '£2.99',
        tracking: 'Basic',
        maxWeight: '15 kg',
    },
    {
        courier: 'FedEx',
        service: 'International Priority',
        eta: '1-3 business days',
        price: '£14.99',
        tracking: 'Advanced',
        maxWeight: '68 kg',
    },
    {
        courier: 'CitySprint',
        service: 'Next Day',
        eta: 'Next business day',
        price: '£4.99',
        tracking: 'Real-time',
        maxWeight: '25 kg',
    },
    {
        courier: 'Parcelforce',
        service: 'Standard',
        eta: '2-4 business days',
        price: '£2.99',
        tracking: 'Basic',
        maxWeight: '15 kg',
    },
]

const renderRow = (item, index) => (
    <StyledTableRow key={index}>
        <TableCell>{item.courier}</TableCell>
        <TableCell>{item.service}</TableCell>
        <TableCell>{item.eta}</TableCell>
        <TableCell>{item.price}</TableCell>
        <TableCell>{item.tracking}</TableCell>
        <TableCell>{item.maxWeight}</TableCell>
    </StyledTableRow>
)

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


            {/* Comapare Couriers */}
            <Container maxWidth={"lg"} >
                <Stack spacing={6} py={8}>
                    <Typography variant="h4" fontWeight={"bold"} textAlign={"center"}>
                        Compare Couriers
                    </Typography>

                    <TableContainer
                        spanTd={tableHeaders.length}
                        isLoading={false}
                        isContent={courierRows.length}
                        thContent={tableHeaders.map((label, i) => (
                            <TableCell key={i}>
                                <Typography variant="h6" color="text.primary" fontWeight={"bold"}>
                                    {label}
                                </Typography>
                            </TableCell>
                        ))}
                    >
                        {courierRows?.map((item, i) => {
                            return <Fragment key={i + 1}>{renderRow(item, i)}</Fragment>
                        })}
                    </TableContainer>

                </Stack>
                {/* <CompareCouriers /> */}
            </Container>
        </>
    )
}

export default page