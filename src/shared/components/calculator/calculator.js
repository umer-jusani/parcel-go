"use client";
import { Quantity, SendFrom, SendTo } from "@/shared/constant/constant";
import InputField from "@/shared/form-control/InputField";
import SelectBox from "@/shared/form-control/select-box";
import UIButton from "@/shared/pure-components/button/button";
import {
    Checkbox,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography
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
              background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "16px",
              minHeight: "60px",
              flex: 1,
              maxWidth: "none",
              width: "100%",
              "&.Mui-selected": {
                background: "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)",
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
            sx={{ textWrap: "nowrap" }}
          />
          <Tab
            label="Multiple Parcels"
            {...a11yProps(1)}
            sx={{ textWrap: "nowrap" }}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <Stack direction="row" spacing={1}>
            {/* Send From */}
            <SelectBox
              items={SendFrom}
              label="Send From"
              sx={{ minWidth: 200 }}
            />

            {/* Send To */}
            <SelectBox items={SendTo} label="Send To" sx={{ minWidth: 200 }} />
          </Stack>

          <Stack direction="row" spacing={0}>
            {/* Length */}
            <Box sx={{ minWidth: 80, flex: 0.8 }}>
              <InputField
                label="Length"
                type="number"
                placeholder="L..."
                sx={{ backgroundColor: "background.white" }}
              />
            </Box>

            {/* Width */}
            <Box sx={{ minWidth: 80, flex: 0.8 }}>
              <InputField
                label="Width"
                type="number"
                placeholder="W..."
                sx={{ backgroundColor: "background.white" }}
              />
            </Box>

            {/* Height */}
            <Box sx={{ minWidth: 80, flex: 0.8 }}>
              <InputField
                label="Height"
                type="number"
                placeholder="W..."
                sx={{ backgroundColor: "background.white" }}
              />
            </Box>
          </Stack>

          {/* Weight */}
          <Box sx={{ minWidth: 120, flex: 1 }}>
            <InputField
              label="Weight"
              type="number"
              placeholder="Weight"
              sx={{ backgroundColor: "background.white" }}
            />
          </Box>

          {/* Get Quote Button */}
          <Box sx={{ minWidth: 140 }}>
            <UIButton
              variant="contained"
              sx={{
                width: "100%",
                minHeight: 56,
                backgroundColor: "success.main",
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
            <SelectBox items={SendFrom} label="Send From" minWidth="100%" />
          </Grid>

          {/* Send To */}
          <Grid item xs={12} md={3}>
            <SelectBox items={SendTo} label="Send To" minWidth="100%" />
          </Grid>
          {/* Quantity */}
          <Grid item xs={12} md={2}>
            <SelectBox
              items={Quantity}
              label="Quantity"
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
            justifyContent="center"
            gap={1}
          >
            <Typography>Parcels are the same size and weight</Typography>
            <Checkbox />
          </Grid>

          {/* Table */}
          <Grid item xs={12} md={12}>
            <Table>
              <TableBody>
                {Array.from({ length: rows }, (_, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ padding: "5px" }}>
                      <Typography variant="h6" fontWeight="bold">
                        {index + 1}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: "5px" }}>
                      <InputField
                        label="Length"
                        type="number"
                        placeholder="Length"
                        sx={{ backgroundColor: "background.white" }}
                      />
                    </TableCell>
                    <TableCell sx={{ padding: "5px" }}>
                      <InputField
                        label="Width"
                        type="number"
                        placeholder="Width"
                        sx={{ backgroundColor: "background.white" }}
                      />
                    </TableCell>
                    <TableCell sx={{ padding: "5px" }}>
                      <InputField
                        label="Height"
                        type="number"
                        placeholder="Height"
                        sx={{ backgroundColor: "background.white" }}
                      />
                    </TableCell>
                    <TableCell sx={{ padding: "5px" }}>
                      <InputField
                        label="Weight"
                        type="number"
                        placeholder="Weight"
                        sx={{ backgroundColor: "background.white" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>

          <UIButton
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "success.main",
              "&:hover": {
                backgroundColor: "success.dark",
              },
              marginLeft: "auto",
            }}
          >
            Get A Quote
          </UIButton>
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
