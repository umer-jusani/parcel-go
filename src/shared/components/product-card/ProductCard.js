import { StarBorderIcon } from '@/assests'
import UIButton from '@/shared/pure-components/button/button'
import { Box, Card, CardContent, Divider, Grid, Stack, Typography, Button, Menu, MenuItem } from '@mui/material'
import React from 'react'
import ImageSlider from '@/shared/components/ImageSlider'

const ProductCard = ({ product, variant }) => {
    return (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "background.default" }}>
                <Box sx={{ position: "relative" }}>
                    <ImageSlider
                        images={product?.images?.map(image => image.image_path)}
                        height={200}
                        width="100%"
                    />
                    <StarBorderIcon
                        color='primary'
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            // color: "#1976d2",
                            cursor: "pointer",
                            zIndex: 10,
                        }}
                    />
                </Box>
                <CardContent>
                    <UiCardContent product={product} variant={variant} />
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ProductCard


export const UiCardContent = ({ product, variant, isButton = true }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showFullDescription, setShowFullDescription] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    // Assuming product.variants is an array of variant objects
    const variants = product?.variants || [variant].filter(Boolean);

    return (
        <Stack spacing={2} height={"fit-content"} flex={1} alignSelf={"center"}>
            <Typography variant="h6" sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                overflow: "hidden",
                // textOverflow: "ellipsis",
                // whiteSpace: "balance",
                // textAlign: "justify"
            }}>
                {product?.name}
            </Typography>

            {/* Price Variants Dropdown */}
            <Box>
                <Button
                    id="variants-button"
                    aria-controls={open ? 'variants-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant="outlined"
                    size="small"
                    sx={{ width: '100%', justifyContent: 'space-between' }}
                >
                    Price Variants
                    <Typography component="span" variant="body2" sx={{ ml: 1 }}>
                        ({variants.length})
                    </Typography>
                </Button>
                <Menu
                    id="variants-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'variants-button',
                    }}
                    PaperProps={{
                        sx: {
                            maxHeight: 200,
                            overflow: 'auto'
                        }
                    }}
                >
                    {variants.map((variantItem, index) => (
                        <MenuItem key={index} onClick={handleClose}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Typography variant="body2">
                                    Variant {index + 1}
                                </Typography>
                                <Typography variant="body2" color="green" fontWeight="bold">
                                    {variantItem?.price || 'N/A'}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                    Qty: {variantItem?.stock || 'N/A'}
                                </Typography>
                            </Stack>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

            {/* Description Section */}
            <Box>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        height: showFullDescription ? 'auto' : '60px',
                        minHeight: '60px',
                        overflow: 'hidden',
                        transition: 'height 0.3s ease-in-out',
                        lineHeight: '1.5',
                        display: '-webkit-box',
                        WebkitLineClamp: showFullDescription ? 'unset' : '3',
                        WebkitBoxOrient: 'vertical',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {product?.description ? (
                        product.description.includes('<div') ? (
                            <div dangerouslySetInnerHTML={{ __html: product.description }} />
                        ) : (
                            product.description
                        )
                    ) : (
                        'No description available'
                    )}
                </Typography>

                {product?.description && product.description.length > 100 && (
                    <Button
                        onClick={toggleDescription}
                        size="small"
                        sx={{
                            mt: 1,
                            p: 0,
                            minWidth: 'auto',
                            textTransform: 'none',
                            color: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        {showFullDescription ? 'See Less' : 'See More'}
                    </Button>
                )}
            </Box>
            <Typography variant="body2" color="rgba(0, 0, 0, 1)">
                0d : 8h : 16m : 20s
            </Typography>
            {isButton && (
                <UIButton variant="contained" size="medium">
                    View All Variants
                </UIButton>
            )}
        </Stack>
    )
}

