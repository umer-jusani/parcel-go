"use client"
import { DHLAbout, DHLBanner, DHLFreeTracking, DHLVan, FedexBanner2, UPSFreeTracking, World } from '@/assets'
import Faqs from '@/shared/common-layouts/faqs/faqs'
import DynamicBanner from '@/shared/components/banner/dynamic-banner'
import AboutSection from '@/shared/components/service-couriers/AboutSection'
import FreeTrackingSection from '@/shared/components/service-couriers/FreeTrackingSection'
import NavigationSection from '@/shared/components/service-couriers/NavigationSection'
import ServicesSection from '@/shared/components/service-couriers/ServicesSection'
import WhySendSection from '@/shared/components/service-couriers/WhySendSection'
import { faqsDHL } from '@/shared/constant/constant'
import { Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'

const navigationItems = [
  "DHL Services",
  "About DHL Couriers",
  "DHL Tracking",
  "FAQs",
];

const dhlBenefits = [
  "Free parcel tracking on all services",
  "Next day UK delivery available",
  "Delivery notifications via text",
  "Send up to 25kg per parcel",
];

const dhlAboutParagraphs = [
  "DHL UK is one of the most well-known and trusted brands around the globe. It was created in San Francisco in the USA in 1969, but it is now owned by German logistics company Deutsche Post. Currently present in over 220 countries and territories, DHL UK strives to be the leading logistics company for UK and international needs.",
  "Offering a range of express logistical solutions that are focused around their customers, DHL home delivery makes sending parcels simpler. That’s why Parcel2Go is proud to include them in our extensive delivery network.",
  "Get a DHL quote now with our quick quote tool - prices start from £8.14 exc VAT. Book your DHL shipping through Parcel2Go and get reliable and safe door to door delivery."
];


const DHL = () => {
  return (
    <>
      {/* Banner Section */}
      <DynamicBanner
        image1={
          <Image
            src={DHLBanner}
            alt="DHL Banner"
            width={350}
            style={{ height: "auto" }}
          />
        }
        isCalculator={true}
        image2={
          <Image
            src={FedexBanner2}
            alt="Fedex Banner"
            width={350}
            style={{ height: "auto" }}
          />
        }
      >
        <Typography variant="h3" fontWeight={"bold"}>
          Send a Parcel with DHL
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £8.14 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          {/* Why send a parcel with DHL? */}
          <WhySendSection
            courierName="DHL"
            benefits={dhlBenefits}
            image={DHLVan}
            imageAlt="DHL Van"
          />

          {/* About DHL */}
          <AboutSection
            courierName="DHL Couriers"
            paragraphs={dhlAboutParagraphs}
            image={DHLAbout}
            imageAlt="DHL About"
            backgroundColor="lightBlue"
          />

          {/* DHL Services */}
          <ServicesSection
            title="DHL Services"
            image={World}
            imageAlt="DHL Services"
            items={[
              {
                heading: "",
                body: "With over 42 depots and 1,200 service points across the UK, you can rest assured that DHL UK has a service that’s right for you!",
              },
              {
                heading: "",
                body: "You can either book a DHL collection at a place of your choosing, or you can book DHL Drop Off Services if that is more convenient for your needs",
              },
            ]}
          />

          {/* Free Tracking */}
          <FreeTrackingSection
            title="Free DHL Tracking"
            description="Looking for professional courier tracking at no extra cost? Get free parcel tracking on all DHL delivery services with Parcel2Go."
            image={DHLFreeTracking}
            imageAlt="Free UPS Tracking"
          />

          {/* Faqs Section */}
          <Faqs faqa={faqsDHL} />
        </Stack>
      </Container>
    </>
  )
}

export default DHL