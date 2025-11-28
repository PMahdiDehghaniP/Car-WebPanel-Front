import { Box } from '@mui/material';
import LogoCarsCard from '../components/Home/LogoCarsCard';
import CarSlider from '../components/Home/CarSlider/CarSlider';
import FeatureCardsSection from '../components/Home/FeatureCardsSection';
import AchivementSection from '../components/Home/Achivement';
import HomePageHeader from '../components/Home/HomePageHeader';
import { useLazyQuery } from '@apollo/client';
import {
  GET_BRANDS_BY_RATE,
  GET_TOP_MOTNH_POSTS
} from '@/schemas/HomePageSchemas';
import { useEffect, useState } from 'react';

const HomeContent = () => {
  const [page, setPage] = useState(1);
  const [topPostsData, setTopPostsData] = useState(new Map());
  const handlePageChange = () => setPage((prev) => prev + 1);
  const [
    getBrandsByRate,
    { data: getBrandsByRateData, loading: getBrandsByRateLoading }
  ] = useLazyQuery(
    GET_BRANDS_BY_RATE(`
      count
      nextPage
      previousPage
      page
      pageSize
      results {
      name
      logoUrl
      }`)
  );
  const [
    getTopPostsPreview,
    { data: getTopPostsPreviewData, loading: getTopPostsPreviewLoading }
  ] = useLazyQuery(
    GET_TOP_MOTNH_POSTS(`
      id
    content
    image
    video
    createdAt
    likeCount
    user {
        avatar
        fullName
    }`)
  );
  useEffect(() => {
    getBrandsByRate({
      variables: {
        pageSize: 20,
        page: 1,
        minRate: 0
      }
    });
  }, []);

  useEffect(() => {
    getTopPostsPreview({
      variables: {
        pagination: {
          pageIndex: page,
          pageSize: 20
        }
      }
    });
  }, [page]);
  useEffect(() => {
    if (getTopPostsPreviewData?.topPostsLastMonth.length) {
      const newMap = new Map(topPostsData);
      getTopPostsPreviewData?.topPostsLastMonth?.forEach((post) => {
        newMap.set(post?.id, post);
      });
      setTopPostsData(newMap);
    }
  }, [getTopPostsPreviewData?.topPostsLastMonth]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        alignItems: 'center',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'relative'
      }}
    >
      <HomePageHeader />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          gap: '2rem',
          paddingX: { md: '3rem', sm: '2rem', xs: '1rem' },
          marginTop: '-5rem',
          zIndex: 900,
          overflow: 'hidden'
        }}
      >
        <LogoCarsCard
          getLogoLoading={getBrandsByRateLoading}
          logoData={getBrandsByRateData?.brandsByRate?.results}
        />
        <CarSlider />
        <FeatureCardsSection
          handlePageChange={handlePageChange}
          topPostsData={Array.from(topPostsData.values())}
          getTopPostsDataLoading={getTopPostsPreviewLoading}
        />
        <AchivementSection />
      </Box>
    </Box>
  );
};
export default HomeContent;
