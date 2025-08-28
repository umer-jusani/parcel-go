import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Drawer, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function FaqDrawer({ open, onClose, selected = null }) {

    const toggleRightDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        onClose();
    };

    const list = () => (
        <Box
            sx={{
                width: 400,
                padding: 2
            }}
            role="presentation"
            onClick={toggleRightDrawer(false)}
            onKeyDown={toggleRightDrawer(false)}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                pb: 1,
                borderBottom: '1px solid #e0e0e0'
            }}>
                <h3 style={{ margin: 0, color: '#333' }}> {selected?.question}</h3>
            </Box>

            <Typography dangerouslySetInnerHTML={{ __html: selected?.answer }} sx={{
                color: 'text.disabled',
            }} />

        </Box>
    );

    return (
        <Drawer
            variant='temporary'
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    borderLeft: '1px solid #e0e0e0'
                }
            }}
        >
            {list()}
        </Drawer>
    );
}