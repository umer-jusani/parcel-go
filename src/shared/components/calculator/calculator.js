"use client";
import { Quantity, SendFrom, SendTo } from "@/shared/constant/constant";
import InputField from "@/shared/form-control/InputField";
import SelectBox from "@/shared/form-control/select-box";
import theme from "@/shared/hoc/theme/theme";
import UIButton from "@/shared/pure-components/button/button";
import {
  Checkbox,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

function CustomTabPanel(props) {


  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, backgroundColor: "background.lightBlue" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Calculator() {
  const [value, setValue] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderRadius: 2, overflow: "hidden", mx: "auto", mt: 2 }}>
      <Box sx={{ borderBottom: 0 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="shipping calculator tabs"
          variant="fullWidth"
          sx={{
            width: "100%",
            "& .MuiTabs-flexContainer": {
              width: "100%",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTab-root": {
              background: "linear-gradient(135deg,rgb(28, 129, 31)  0%,rgb(28, 129, 31) 100%)",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: { xs: "12px", md: "16px" },
              minHeight: "60px",
              flex: 1,
              maxWidth: "none",
              width: "100%",
              "&.Mui-selected": {
                background: "linear-gradient(135deg,rgb(28, 129, 31) 0%,rgb(28, 129, 31) 100%)",
                color: "white",
              },
              "&:not(:last-child)": {
                marginRight: "2px",
              },
            },
          }}
        >
          <Tab
            label="Send Internationally"
            {...a11yProps(0)}
            sx={{ textWrap: "nowrap", }}
          />
          <Tab
            label="Multiple Parcels"
            {...a11yProps(1)}
            sx={{ textWrap: "nowrap" }}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "stretch", md: "flex-end" }}
        >
          <Stack direction={{ xs: "column", md: "row" }} spacing={1} sx={{ width: { xs: "100%", md: "auto" } }}>
            {/* Send From */}
            <SelectBox
              items={SendFrom}
              label="Send From"
              sx={{ minWidth: { xs: "100%", md: 200 } }}
              size={isMobile ? "small" : "medium"}
            />

            {/* Send To */}
            <SelectBox
              items={SendTo}
              label="Send To"
              sx={{ minWidth: { xs: "100%", md: 200 } }}
              size={isMobile ? "small" : "medium"}
            />
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 0 }} sx={{ width: { xs: "100%", md: "auto" } }}>
            {/* Length */}
            <Box sx={{ minWidth: { xs: "100%", md: 80 }, flex: { xs: 1, md: 0.8 } }}>
              <InputField
                label="Length"
                type="number"
                placeholder="L..."
                sx={{ backgroundColor: "background.white" }}
                size={isMobile ? "small" : "medium"}
              />
            </Box>

            {/* Width */}
            <Box sx={{ minWidth: { xs: "100%", md: 80 }, flex: { xs: 1, md: 0.8 } }}>
              <InputField
                label="Width"
                type="number"
                placeholder="W..."
                sx={{ backgroundColor: "background.white" }}
                size={isMobile ? "small" : "medium"}
              />
            </Box>

            {/* Height */}
            <Box sx={{ minWidth: { xs: "100%", md: 80 }, flex: { xs: 1, md: 0.8 } }}>
              <InputField
                label="Height"
                type="number"
                placeholder="W..."
                sx={{ backgroundColor: "background.white" }}
                size={isMobile ? "small" : "medium"}
              />
            </Box>
          </Stack>

          {/* Weight */}
          <Box sx={{ minWidth: { xs: "100%", md: 120 }, flex: { xs: 1, md: 1 } }}>
            <InputField
              label="Weight"
              type="number"
              placeholder="Weight"
              sx={{ backgroundColor: "background.white" }}
              size={isMobile ? "small" : "medium"}
            />
          </Box>

          {/* Get Quote Button */}
          <Box sx={{ minWidth: { xs: "100%", md: 140 } }}>
            <UIButton
              variant="contained"
              sx={{
                width: "100%",
                minHeight: 56,
                backgroundColor: "rgb(28, 129, 31)",
                "&:hover": {
                  backgroundColor: "success.dark",
                },
              }}
            >
              Get A Quote
            </UIButton>
          </Box>
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            {/* Send From */}
            <SelectBox items={SendFrom} size={isMobile ? "small" : "medium"} label="Send From" minWidth="100%" />
          </Grid>

          {/* Send To */}
          <Grid item xs={12} md={3}>
            <SelectBox items={SendTo} size={isMobile ? "small" : "medium"} label="Send To" minWidth="100%" />
          </Grid>
          {/* Quantity */}
          <Grid item xs={12} md={2}>
            <SelectBox
              items={Quantity}
              label="Quantity"
              size={isMobile ? "small" : "medium"}
              initValue={Quantity[0].value}
              handleChange={(e) =>
                e.target.value && setRows(Number(e.target.value))
              }
              minWidth="100%"
            />
          </Grid>

          {/* Checkbox */}
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "flex-start", md: "center" }}
            gap={1}
          >
            <Typography color="text.primary">Parcels are the same size and weight</Typography>
            <Checkbox size={isMobile ? "small" : "medium"} />
          </Grid>

          {/* Desktop table (md and up) */}
          <Grid item xs={12} md={12} sx={{ display: { xs: "none", md: "block" } }}>
            <Table>
              <TableBody>
                {Array.from({ length: rows }, (_, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ padding: "5px" }}>
                      <Typography variant="h6" color="text.primary" fontWeight="bold">
                        {index + 1}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: "5px" }}>
                      <InputField
                        label="Length"
                        type="number"
                        placeholder="Length"
                        size={isMobile ? "small" : "medium"}
                        sx={{ backgroundColor: "background.white" }}
                      />
                    </TableCell>
                    <TableCell sx={{ padding: "5px" }}>
                      <InputField
                        label="Width"
                        type="number"
                        placeholder="Width"
                        size={isMobile ? "small" : "medium"}
                        sx={{ backgroundColor: "background.white" }}
                      />
                    </TableCell>
                    <TableCell sx={{ padding: "5px" }}>
                      <InputField
                        label="Height"
                        type="number"
                        placeholder="Height"
                        size={isMobile ? "small" : "medium"}
                        sx={{ backgroundColor: "background.white" }}
                      />
                    </TableCell>
                    <TableCell sx={{ padding: "5px" }}>
                      <InputField
                        label="Weight"
                        type="number"
                        placeholder="Weight"
                        sx={{ backgroundColor: "background.white" }}
                        size={isMobile ? "small" : "medium"}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>

          {/* Mobile stacked rows */}
          <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
            {Array.from({ length: rows }, (_, index) => (
              <Box key={`mobile-row-${index}`} sx={{ mb: 2 }}>
                <Typography variant="h6" color="text.primary" fontWeight="bold" sx={{ mb: 1 }}>
                  {index + 1}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <InputField
                      label="Length"
                      type="number"
                      placeholder="Length"
                      size={isMobile ? "small" : "medium"}
                      sx={{ backgroundColor: "background.white" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputField
                      label="Width"
                      type="number"
                      placeholder="Width"
                      size={isMobile ? "small" : "medium"}
                      sx={{ backgroundColor: "background.white" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputField
                      label="Height"
                      type="number"
                      placeholder="Height"
                      size={isMobile ? "small" : "medium"}
                      sx={{ backgroundColor: "background.white" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputField
                      label="Weight"
                      type="number"
                      placeholder="Weight"
                      size={isMobile ? "small" : "medium"}
                      sx={{ backgroundColor: "background.white" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
            ml={{ md: "auto" }}
          >
            <UIButton
              variant="contained"
              sx={{
                backgroundColor: "success.main",
                "&:hover": {
                  backgroundColor: "success.dark",
                },
                width: { xs: '100%', md: 'auto' }
              }}
            >
              Get A Quote
            </UIButton>
          </Grid>
          {/* Get Quote Button */}
          {/* <Grid item xs={12} md={4}>
            <UIButton
              variant="contained"
              sx={{
                backgroundColor: "success.main",
                "&:hover": {
                  backgroundColor: "success.dark",
                },
                minWidth: "100%",
              }}
            >
              Get A Quote
            </UIButton>
          </Grid> */}
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}
