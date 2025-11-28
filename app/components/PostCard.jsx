import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography
} from '@mui/material';
import {
  FavoriteBorder,
  ChatBubbleOutline,
  ShareOutlined,
  BookmarkBorder,
  MoreHoriz
} from '@mui/icons-material';
import { formatInstagramDate } from '@/utils/formatters';

const InstagramPostCard = ({ post }) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 300, sm: 375 },
        height: 400,
        borderRadius: 4,
        overflow: 'hidden',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardHeader
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          '& .MuiCardHeader-avatar': {
            marginRight: 0
          }
        }}
        avatar={<Avatar sx={{ bgcolor: '#8A2BE2' }}>g</Avatar>}
        action={
          <IconButton>
            <MoreHoriz />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {post?.user?.fullName || 'No Name'}
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                bgcolor: '#1E88E5',
                color: '#fff',
                borderRadius: '50%',
                width: 14,
                height: 14,
                mr: '4px',
                fontSize: '0.6rem',
                textAlign: 'center'
              }}
            >
              ✓
            </Box>
          </Typography>
        }
      />

      <Box sx={{ position: 'relative', flex: 1, maxHeight: 196 }}>
        <CardMedia
          component={post?.video ? 'video' : 'image'}
          src={post?.video ? post?.video : post?.image}
          alt="car"
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>

      <CardContent sx={{ px: '0.75rem', py: '0.25rem', flex: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography variant="body2">
              <IconButton size="small">
                <FavoriteBorder />
              </IconButton>
              {post?.likeCount}
            </Typography>
            <Typography variant="body2">
              <IconButton size="small">
                <ChatBubbleOutline />
              </IconButton>
              58
            </Typography>
            <Typography variant="body2">
              <IconButton size="small">
                <ShareOutlined />
              </IconButton>
              7
            </Typography>
          </Box>
          <IconButton size="small">
            <BookmarkBorder />
          </IconButton>
        </Box>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.5
          }}
        >
          {post?.content}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: '0.75rem', mt: 'auto' }}>
        <Typography variant="caption" color="text.secondary">
          {formatInstagramDate(post?.createdAt)}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default InstagramPostCard;
