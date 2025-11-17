import { ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Box, Typography, Rating } from '@mui/material';

const CommentCard = ({
  username,
  job,
  rateValue,
  profileSrc,
  title,
  description
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'start',
        width: { md: '400px', xs: '90%' },
        borderRadius: '1rem',
        p: { xs: '1rem', md: '2rem' },
        boxShadow: 3,
        bgcolor: 'background.paper',
        gap: '1rem'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          gap: '0.5rem',
          mb: 1
        }}
      >
        <Box
          component="img"
          src={profileSrc}
          sx={{
            width: { xs: '62px', md: '96px' },
            height: { xs: '62px', md: '96px' },
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            flex: 1
          }}
        >
          <Typography fontWeight={700}>{username}</Typography>
          <Typography fontSize={14} color="text.secondary">
            {job}
          </Typography>
          <Rating
            value={rateValue}
            precision={0.5}
            readOnly
            sx={{
              '& .MuiRating-iconFilled': { color: '#ffc107' },
              '& .MuiRating-iconHover': { color: '#ffc107' },
              direction: 'ltr'
            }}
          />
        </Box>
      </Box>
      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>
      <Typography variant="body2" fontWeight={400}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', gap: '0.5rem', alignSelf: 'end' }}>
        <ThumbUpAltOutlined sx={{ cursor: 'pointer' }} />
        <ThumbDownAltOutlined sx={{ cursor: 'pointer' }} />
      </Box>
    </Box>
  );
};

export default CommentCard;
