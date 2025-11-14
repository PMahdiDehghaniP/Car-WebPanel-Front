'use client';
import {
  Box,
  Button,
  Input,
  Rating,
  TextareaAutosize,
  Typography,
  useTheme
} from '@mui/material';

const SubmitCommentSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        paddingX: '2rem',
        gap: '2rem'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          width: '100%',
          gap: '1rem'
        }}
      >
        <Typography>ثبت نظر</Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: {xs:'100%',lg:'80%'},
            border: '1px solid #C4C4C4',
            padding: '2rem',
            borderRadius: '0.5rem'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'start',
              gap: '0.5rem'
            }}
          >
            <Typography variant='body1'>امتیاز</Typography>
                    <Rating
          value={3}
          precision={0.5}
          readOnly
          sx={{
            '& .MuiRating-iconFilled': { color: '#ffc107' },
            '& .MuiRating-iconHover': { color: '#ffc107' },
            direction: 'ltr'
          }}
        />
          </Box>
          <input
            placeholder="عنوان نظر"
            className="border border-[#C4C4C4] rounded-lg focus:border-[#C4C4C4]
            p-2 focus:outline-none"
          />
          <textarea
            placeholder="متن نظر"
            className="border border-[#C4C4C4] rounded-lg focus:border-[#C4C4C4]
             focus:outline-none w-full p-2 max-h-[250px]"
          />
          <Button variant='contained' sx={{width:'30%',alignSelf:'center'}}>ثبت</Button>
        </Box>
      </Box>
      <Box
        display={{ xs: 'none', lg: 'block' }}
        component="img"
        src="/reviewBg.png"
      />
    </Box>
  );
};
export default SubmitCommentSection;
