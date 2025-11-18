'use client';
import { Box } from '@mui/material';
import CommentCard from './CommentCard/CommentCard';
import GarajinoPagination from '@/app/components/GarajinoPagination';

const mockComments = [
  {
    username: 'علی رضایی',
    job: 'مهندس نرم‌افزار',
    rateValue: 4.5,
    profileSrc: '/money.png',
    title: 'تجربه عالی',
    description: 'محصول خیلی خوب بود و کاملاً رضایت داشتم.'
  },
  {
    username: 'سارا محمدی',
    job: 'طراح گرافیک',
    rateValue: 5,
    profileSrc: '/money.png',
    title: 'عالی!',
    description: 'واقعا ارزش خرید داشت و کیفیتش خیلی خوبه.'
  },
  {
    username: 'رضا کریمی',
    job: 'مدیر پروژه',
    rateValue: 4,
    profileSrc: '/money.png',
    title: 'خوبه',
    description: 'به نسبت قیمتش کیفیتش مناسب بود.'
  }
];

const CommentSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        gap: '3rem'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        {mockComments.map((comment, index) => (
          <CommentCard
            key={index}
            username={comment.username}
            job={comment.job}
            rateValue={comment.rateValue}
            profileSrc={comment.profileSrc}
            title={comment.title}
            description={comment.description}
          />
        ))}
      </Box>
      <GarajinoPagination page={4} items={[]} />
    </Box>
  );
};

export default CommentSection;
