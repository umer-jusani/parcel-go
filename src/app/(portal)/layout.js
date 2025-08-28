import { GlobalUIContext } from '@/shared/centralizeManagement/context/GlobalUIContext'
import Footer from '@/shared/common-layouts/footer/footer'
import Header from '@/shared/common-layouts/header/Header'
import { Container, Stack } from '@mui/material'

const DashboardLayout = ({ children }) => {
    return (
        <>
            {/* <Drawer routes={sideBarRoutes?.super_admin} /> */}
            <Stack sx={{ width: '100%', backgroundColor: 'background.default' }}
            >
                <Header />
                <Stack sx={{ position: "relative", minHeight: "80vh" }}>
                    <GlobalUIContext>
                        {children}
                    </GlobalUIContext>
                </Stack>
                <Footer />
            </Stack>
        </>
    )
}

export default DashboardLayout
