import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
  Box
} from "@mui/material";
import { useTheme } from "@mui/system";
import InfoIcon from "./InfoIcon";
import {
  SpeedOutlined,
  LocalGasStationOutlined,
  CallMadeOutlined,
  BookmarkBorderOutlined
} from "@mui/icons-material";

const CarCard = ({
  imageSrc,
  imageAlt,
  carName,
  description,
  carInformation,
  price,
  onClick,
  maxWidth = 250,
  maxHeight = 350
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth,
        maxHeight,
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
        position: "relative"
      }}
    >
      {/* تصویر خودرو */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt={imageAlt}
          sx={{
            height: maxHeight * 0.45,
            width: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px"
          }}
          image={imageSrc}
        />

        {/* دکمه Bookmark روی تصویر */}
        <Box
          component="button"
          onClick={onClick}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: theme.palette?.carSlider?.iconMediBgColor || "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            border: "none",
            cursor: "pointer"
          }}
        >
          <BookmarkBorderOutlined
            sx={{ fontSize: 20, color: theme.palette?.carSlider?.iconMediaColor || "#000" }}
          />
        </Box>
      </Box>

      {/* محتوا */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexGrow: 1,
          padding: "0.75rem",
          gap: "0.4rem"
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>{carName}</Typography>

        <Tooltip title={description} placement="bottom-end">
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 400,
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
              textOverflow: "ellipsis",
              cursor: "pointer"
            }}
          >
            {description}
          </Typography>
        </Tooltip>

        <Divider sx={{ borderColor: "#E9E9E9", width: "100%" }} />

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <InfoIcon icon={<SpeedOutlined fontSize="small" />} info={carInformation?.maxSpeed} />
          <InfoIcon icon={<LocalGasStationOutlined fontSize="small" />} info={carInformation?.gasType} />
          <InfoIcon icon={<LocalGasStationOutlined fontSize="small" />} info={carInformation?.gearboxType} />
        </Box>

        <Divider sx={{ borderColor: "#E9E9E9", width: "100%" }} />

        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Button sx={{ display: "flex", gap: "0.25rem" }}>
            <CallMadeOutlined fontSize="medium" />
            مشخصات کامل
          </Button>
          <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>{price}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCard;
