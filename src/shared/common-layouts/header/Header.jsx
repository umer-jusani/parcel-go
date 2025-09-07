"use client";
import { Logo, ShoppingBasketIcon } from "@/assets";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { AppBarStyled, ToolbarStyled } from "./ui";

const navItems = [
  { label: "Smart Send", link: "/smart-send" },
  { label: "Get a Quote", link: "/quick-quote" },
  { label: "Services", link: "/services" },
  { label: "Track a Parcel", link: "/track-parcel" },
  { label: "Bussiness", link: "/home/business" },
  { label: "Help", link: "/home/help" },
  { label: "cart", link: "/cart" },
];

const Header = () => {
  const { openMenu } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.appReducer);
  const { notificationCount } = useSelector((state) => state.appReducer);
  const router = useRouter();

  // Services menu state
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const servicesOpen = Boolean(servicesAnchorEl);

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  return (
    <>
      <AppBarStyled
        position="sticky"
        sx={{ backgroundColor: "background.white", py: 1 }}
        elevation={1}
      >
        <ToolbarStyled>
          <Container maxWidth="xl">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                src={Logo}
                style={{ cursor: "pointer" }}
                alt="logo"
                width={130}
                objectFit="contain"
                onClick={() => router.push("/home")}
              />

              {/* Navigation Items */}
              <List sx={{ display: "flex", gap: 0 }}>
                {navItems.map((item) =>
                  item.label === "cart" ? (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={() => router.push(item.link)}
                      >
                        <ShoppingBasketIcon sx={{ color: "text.primary" }} />
                      </ListItemButton>
                    </ListItem>
                  ) : item.label === "Services" ? (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={handleServicesClick}
                      >
                        {/* <Button
                          id="services-button"
                          aria-controls={
                            servicesOpen ? "services-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={servicesOpen ? "true" : undefined}
                          onClick={handleServicesClick}
                        >
                          {item.label}
                        </Button> */}
                        <Typography
                          id="services-button"
                          aria-controls={
                            servicesOpen ? "services-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={servicesOpen ? "true" : undefined}
                          onClick={handleServicesClick}
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            color: "text.primary",
                            textWrap: "nowrap",
                          }}
                        >
                          {item.label}
                        </Typography>
                      </ListItemButton>
                      <ServicesMenu
                        anchorEl={servicesAnchorEl}
                        open={servicesOpen}
                        onClose={handleServicesClose}
                      />
                    </ListItem>
                  ) : (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={() => router.push(item.link)}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            color: "text.primary",
                            textWrap: "nowrap",
                          }}
                        >
                          {item.label}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>

              <Profile dropdown={true} />
            </Stack>
          </Container>
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
};

export default Header;

const ServicesMenu = ({ anchorEl, open, onClose }) => {
  const router = useRouter();

  const handleMenuItemClick = (link) => {
    router.push(link);
    onClose();
  };

  return (
    <Menu
      id="services-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: "100vw",
            maxWidth: "100vw",
            // backgroundColor: "background.white",
            left: "0 !important",
            right: "0 !important",
            transform: "none !important",
            mt: 1,
            borderRadius: 0,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
            border: "1px solid #e0e3ea",
            borderLeft: "none",
            borderRight: "none",
          },
        },
      }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <Paper sx={{ width: "100%", p: 0, backgroundColor: "background.white" }}>
        <Container maxWidth="xl" sx={{ py: 4, px: 2 }}>
          <Grid container spacing={4}>
            {/* Range of Couriers */}
            <Grid item xs={12} sm={6} md={3}>
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#2E5B8A",
                    fontSize: "1.1rem",
                    mb: 1,
                  }}
                >
                  Range of Couriers
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {[
                    "All Couriers",
                    "Royal Mail",
                    "FedEx Express",
                    "Parcelforce",
                    "UPS",
                    "UPS Access Point",
                    "TNT",
                    "Evri Drop-off",
                    "DPD",
                    "Yodel Direct",
                    "Evri Collection",
                    "CitySprint",
                    "InPost",
                    "DHL",
                    "DHL Parcel",
                    "DX",
                    "Whistl",
                    { name: "Relay", isNew: true },
                    "Business Account",
                  ].map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleMenuItemClick("/services/couriers")}
                      sx={{
                        p: 0,
                        py: 0,
                        minHeight: "auto",
                        "&:hover": {
                          backgroundColor: "rgba(46, 91, 138, 0.04)",
                          color: "#2E5B8A",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.9rem",
                            "&:hover": {
                              color: "#2E5B8A",
                            },
                          }}
                        >
                          {typeof item === "string" ? item : item.name}
                        </Typography>
                        {typeof item === "object" && item.isNew && (
                          <Typography
                            component="span"
                            sx={{
                              ml: 1,
                              fontSize: "0.7rem",
                              color: "white",
                              backgroundColor: "#4A90E2",
                              px: 0.8,
                              py: 0.2,
                              borderRadius: 0.5,
                              fontWeight: 600,
                            }}
                          >
                            NEW
                          </Typography>
                        )}
                      </Box>
                    </MenuItem>
                  ))}
                </Box>
              </Stack>
            </Grid>

            {/* UK Parcel Delivery */}
            <Grid item xs={12} sm={6} md={3}>
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#2E5B8A",
                    fontSize: "1.1rem",
                    mb: 1,
                  }}
                >
                  UK Parcel Delivery
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {[
                    "All UK Delivery Services",
                    "Postage Costs",
                    "Large Parcels",
                    "Drop-Off Services",
                    "Collection Services",
                    "eBay Quicksend",
                    "Pallet Delivery",
                    "Same-Day Delivery",
                    "Letters & Small Parcels",
                    "Next-Day Delivery",
                    "Weekend Delivery",
                    "Small Parcels",
                    "No Printer Couriers",
                    "3 Day Delivery",
                    "Heavy Parcels",
                    "2 to 3 Day",
                    "Express Delivery",
                    "Recorded Delivery",
                    "Evri Postable",
                  ].map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() =>
                        handleMenuItemClick("/services/uk-delivery")
                      }
                      sx={{
                        p: 0,
                        py: 0,
                        minHeight: "auto",
                        "&:hover": {
                          backgroundColor: "rgba(46, 91, 138, 0.04)",
                          color: "#2E5B8A",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.9rem",
                          "&:hover": {
                            color: "#2E5B8A",
                          },
                        }}
                      >
                        {item}
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Stack>
            </Grid>

            {/* International Parcel Delivery */}
            <Grid item xs={12} sm={6} md={3}>
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#2E5B8A",
                    fontSize: "1.1rem",
                    mb: 1,
                  }}
                >
                  International Parcel Delivery
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {[
                    { name: "EU Shipping info", isNew: true },
                    "All International Delivery",
                    "Economy Delivery",
                    "Express Delivery",
                    "Germany Delivery",
                    "Australia Delivery",
                    "Spain Delivery",
                    "USA Delivery",
                    "European Delivery",
                    "Asia Delivery",
                    "Worldwide Delivery",
                    "Delivery Services",
                  ].map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() =>
                        handleMenuItemClick("/services/international")
                      }
                      sx={{
                        p: 0,
                        py: 0,
                        minHeight: "auto",
                        "&:hover": {
                          backgroundColor: "rgba(46, 91, 138, 0.04)",
                          color: "#2E5B8A",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.9rem",
                            "&:hover": {
                              color: "#2E5B8A",
                            },
                          }}
                        >
                          {typeof item === "string" ? item : item.name}
                        </Typography>
                        {typeof item === "object" && item.isNew && (
                          <Typography
                            component="span"
                            sx={{
                              ml: 1,
                              fontSize: "0.7rem",
                              color: "white",
                              backgroundColor: "#4A90E2",
                              px: 0.8,
                              py: 0.2,
                              borderRadius: 0.5,
                              fontWeight: 600,
                            }}
                          >
                            NEW
                          </Typography>
                        )}
                      </Box>
                    </MenuItem>
                  ))}
                </Box>
              </Stack>
            </Grid>

            {/* Delivery Tools */}
            <Grid item xs={12} sm={6} md={3}>
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#2E5B8A",
                    fontSize: "1.1rem",
                    mb: 1,
                  }}
                >
                  Delivery Tools
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {[
                    "Parcel2Go Prepay",
                    "Postcode Finder",
                    "Parcel Volume Calculator",
                    "Print Your Labels",
                    "Print a Commercial Invoice",
                    "Rearrange Your Collection",
                    "Prohibited Items",
                    "Track a Parcel",
                    "Content Hub",
                    "Parcel Delivery Advice",
                    "Mobile App",
                    "Ecommerce Shipping",
                    "Despatch Bay Alternative",
                  ].map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleMenuItemClick("/services/tools")}
                      sx={{
                        p: 0,
                        py: 0,
                        minHeight: "auto",
                        "&:hover": {
                          backgroundColor: "rgba(46, 91, 138, 0.04)",
                          color: "#2E5B8A",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.9rem",
                          "&:hover": {
                            color: "#2E5B8A",
                          },
                        }}
                      >
                        {item}
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Menu>
  );
};
