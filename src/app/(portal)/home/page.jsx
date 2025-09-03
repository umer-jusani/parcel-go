import { Delivery, Duck, GetAQuote, Parcel, SignIn, Star, TikTok, USA, World } from '@/assets'
import Faqs from '@/shared/common-layouts/faqs/faqs'
import HomeBanner from '@/shared/components/banner/home-banner'
import { faqsHome, FLOW_SPACER } from '@/shared/constant/constant'
import theme from '@/shared/hoc/theme/theme'
import { Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'


const Home = () => {
  return (
    <>
      {/* Blue Banner Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          py: 1,
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="center"
          spacing={3}
          px={2}
        >
          {/* Text Content */}
          <Box >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
              }}
            >
              Get the lowest shipping rates to the USA with UPS through Smart Send!
            </Typography>
          </Box>

          {/* Get Started Button */}
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: 'white',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: 2,
              px: 2,
              fontSize: '1rem',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            endIcon={
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  ml: 1,
                  fontSize: '1.2rem',
                }}
              >
                →
              </Box>
            }
          >
            Get started
          </Button>
        </Stack>

        {/* Background Decoration */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '300px',
            height: '150px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            transform: 'translate(50%, 50%)',
            display: { xs: 'none', md: 'block' }
          }}
        />
      </Box>

      <HomeBanner
        title="Compare the Cheapest Parcel Delivery Prices*"
        description="Send from only £2.39 (£1.99 exc VAT)"
        image={Duck}
      />


      {/* Comparing Prices */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Stack textAlign={"center"} spacing={FLOW_SPACER} alignItems={"center"}>
          <Typography variant="h4" fontWeight={"bold"}>Comparing Prices from the UK's Most Trusted Parcel Couriers
          </Typography>

          <Typography fontWeight={"medium"} sx={{ maxWidth: "600px", lineHeight: "1.3", fontSize: "1.2rem" }}>
            We've helped people find the cheapest prices for over 83 million parcels since 2001. Join them and save on your next parcel delivery!
          </Typography>

          {/* Card Container */}
          <Grid container spacing={3}>
            {/* Trustpilot Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  background: theme.palette.background["200"],
                  color: 'white',
                  borderRadius: 3,
                  overflow: 'hidden',
                  height: 'fit-content',
                }}
              >
                <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    We're Rated Great on Trustpilot
                  </Typography>
                  <Typography variant="body1" sx={{ height: '6rem' }}>
                    Based on over 150,000 independent and verified reviews.
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Image src={Star} alt="star" width={250} height={250} style={{ objectFit: 'contain' }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* TikTok Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'white',
                  borderRadius: 3,
                  border: '1px solid #e0e0e0',
                  height: 'fit-content',
                }}
              >
                <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, }}>
                    TikTok's New 50p Shipping Fee Explained
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, }}>
                    Learn about TikTok's new shipping fee and how Smart Send keeps your postage costs low.
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Image src={TikTok} alt="star" width={250} height={250} style={{ objectFit: 'contain' }} />
                  </Box>
                  {/* <Button
                    variant="text"
                    sx={{
                      color: '#4A90E2',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      justifyContent: 'flex-start',
                      pl: 0
                    }}
                  >
                    Read More →
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>

            {/* USA Shipping Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'white',
                  borderRadius: 3,
                  border: '1px solid #e0e0e0',
                  height: 'fit-content',
                }}
              >
                <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, }}>
                    Cheapest Shipping to the USA
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, }}>
                    Book fast and reliable delivery to the States with top couriers like UPS, FedEx and more!
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Image src={USA} alt="star" width={250} height={250} style={{ objectFit: 'contain' }} />
                  </Box>
                  {/* <Button
                    variant="text"
                    sx={{
                      color: '#4A90E2',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      justifyContent: 'flex-start',
                      pl: 0
                    }}
                  >
                    Get a Quote →
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>

            {/* Sign In Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'white',
                  borderRadius: 3,
                  border: '1px solid #e0e0e0',
                  height: 'fit-content',
                }}
              >
                <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, }}>
                    Already Have an Account? Sign In
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, }}>
                    Sign in to view your recent orders, send again & more!
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Image src={SignIn} alt="star" width={250} height={250} style={{ objectFit: 'contain' }} />
                  </Box>
                  {/* <Button
                    variant="text"
                    sx={{
                      color: '#4A90E2',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      justifyContent: 'flex-start',
                      pl: 0
                    }}
                  >
                    Go to Sign In →
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container>



      {/* Parcel Delivery Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Card
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            backgroundColor: "background.white",
          }}
        >
          <Grid container>
            {/* Text Content */}
            <Grid item xs={12} md={7}>
              <Box sx={{ p: { xs: 4, md: 6 } }}>
                {/* Main Heading */}
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: '#2E5B8A',
                    mb: 4,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Cheap Parcel Delivery on All Services
                </Typography>

                {/* First Paragraph */}
                <Typography
                  variant="body1"
                  color={"text.secondary"}
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  Here at Parcel2Go, we're dedicated to bringing you the{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    cheapest parcel delivery in the UK
                  </Box>{' '}
                  and worldwide. Our{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    Lowest Price Guarantee
                  </Box>{' '}
                  means that no matter what delivery service you use, if you find a comparable service elsewhere, we'll match the price.
                </Typography>

                {/* Second Paragraph */}
                <Typography
                  variant="body1"
                  color={"text.secondary"}
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  We work closely with the best{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    UK couriers
                  </Box>
                  , including{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    Royal Mail, Yodel Direct, Evri
                  </Box>{' '}
                  and{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    DPD
                  </Box>
                  , to bring you cheap parcel delivery without compromising on a high quality service. And with parcel delivery expert,{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    Sven Storkofferson
                  </Box>
                  , helping you glide through parcel delivery, finding the best courier services has never been easier.
                </Typography>

                {/* Call to Action */}
                <Typography
                  variant="body1"
                  color={"text.secondary"}
                  sx={{
                    lineHeight: 1.6,
                  }}
                >
                  Send a parcel from just £1.99 exc VAT! Get a{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    quick quote
                  </Box>{' '}
                  today.
                </Typography>

                <Divider sx={{ my: 4 }} />


                {/* Second Section Heading */}
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#2E5B8A',
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.5rem' }
                  }}
                >
                  Send a Parcel to over 180 Countries Worldwide
                </Typography>

                {/* Third Paragraph */}
                <Typography
                  variant="body1"
                  color={"text.secondary"}
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  Booking your parcel delivery is easy, no matter where in the world you're shipping to! All you need to do is put your parcel's destination and measurements into our{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    quick quote tool
                  </Box>
                  . From there you can compare parcel prices from the most reliable{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    international couriers
                  </Box>
                  .
                </Typography>

                {/* Fourth Paragraph */}
                <Typography
                  variant="body1"
                  color={"text.secondary"}
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  Whether you need to send a parcel to{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    Australia
                  </Box>
                  , the{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    USA
                  </Box>{' '}
                  or beyond, we will send you all the documents you need to clear customs.
                </Typography>

                {/* Final Paragraph */}
                <Typography
                  variant="body1"
                  color={"text.secondary"}
                  sx={{
                    lineHeight: 1.6,
                  }}
                >
                  Our{' '}
                  <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold' }}>
                    International Shipping Hub
                  </Box>{' '}
                  is full of helpful information for sending a parcel to the EU, with details on EU VAT, shipping restrictions and more.
                </Typography>
              </Box>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: { xs: 300, md: '100%' },
                  position: 'relative',
                  minHeight: 400
                }}
              >
                <Image
                  src={Parcel}
                  alt="Woman working on laptop with parcels"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* Free Tracking Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          {/* Illustration - No Background */}
          <Grid item xs={12} md={5} sx={{ backgroundColor: "white" }}>
            <Image
              src={World}
              alt="Tracking illustration with globe and devices"
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
                flex: 1

              }}
            />
          </Grid>

          {/* Text Content - Blue Background */}
          <Grid item xs={12} md={7} >
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                color: 'white',
                background: theme.palette.secondary["100"],
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              {/* Main Heading */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Free Tracking on all Parcel Services
              </Typography>

              {/* First Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                Whether you need to send a parcel within the UK or overseas, at Parcel2Go you can always{' '}
                <Box component="span" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                  track a parcel
                </Box>{' '}
                for free.
              </Typography>

              {/* Second Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                We offer parcel tracking on all parcel delivery, including{' '}
                <Box component="span" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                  collection services
                </Box>{' '}
                as well as{' '}
                <Box component="span" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                  drop off services
                </Box>
                . So you can be certain that your parcel will arrive safely at no extra cost.
              </Typography>

              {/* Third Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                And for extra peace of mind, add{' '}
                <Box component="span" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                  Parcel Protection
                </Box>{' '}
                up to the value of £10,000. If you ever have an issue with a parcel, our customer service team is available 24/7 to help you.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Delivery Made Easy */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid
          container
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            backgroundColor: theme.palette.background.lightBlue,
            border: "1px solid #E0E3EA"
          }}
        >
          {/* Illustration - No Background */}
          <Grid item xs={12} md={5} sx={{ backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", p: { xs: 2, md: 4 } }}>
            <Image
              src={Delivery}
              alt="Express delivery illustration"
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
                flex: 1

              }}
            />
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Express Delivery Made Easy
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  fontSize: "1.05rem"
                }}
              >
                Do you need your parcel to arrive <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold', textDecoration: 'underline', display: 'inline' }}>the next day</Box>? Want it there before 9am? Or even the very <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold', textDecoration: 'underline', display: 'inline' }}>same day</Box>?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  fontSize: "1.05rem"
                }}
              >
                We specialise in express delivery. Choose same day delivery with CitySprint or next day delivery is available with many of our <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold', textDecoration: 'underline', display: 'inline' }}>UK couriers</Box> and starts from just £1.99 exc VAT.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.05rem"
                }}
              >
                And if your parcel is of the highest importance, our <Box component="span" sx={{ color: '#2E5B8A', fontWeight: 'bold', textDecoration: 'underline', display: 'inline' }}>signed for delivery</Box> options offer that added layer of protection.
              </Typography>
            </Box>
          </Grid>



        </Grid>
      </Container>

      {/* Faqs Section */}
      <Faqs faqa={faqsHome} />
    </>
  )
}

export default Home