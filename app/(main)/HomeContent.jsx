import { Box, useTheme } from '@mui/material';
import LogoCarsCard from '../components/Home/LogoCarsCard';
import CarSlider from '../components/Home/CarSlider/CarSlider';
import FeatureCardsSection from '../components/Home/FeatureCardsSection';
import AchivementSection from '../components/Home/Achivement';
import HomePageHeader from '../components/Home/HomePageHeader';
import { useLazyQuery } from '@apollo/client';

import { useEffect, useState } from 'react';
import {
  GET_BASE_CARS,
  GET_BRANDS_BY_RATE,
  GET_TOP_MOTNH_POSTS
} from '@/schemas/GraphqlSchemas';

const HomeContent = () => {
  const [page, setPage] = useState(1);
  const [topPostsData, setTopPostsData] = useState(new Map());
  const [carSliderData, setCarSliderData] = useState(new Map());
  const [carSliderPage, setCarSliderPage] = useState(1);
  const [carsSortType, setCarsSortType] = useState('NONE');
  const [shouldGetMoreTopLastPosts, setShouldGetMoreTopLastPosts] =
    useState(true);
  const handleCarSliderPageChange = () => setCarSliderPage((prev) => prev + 1);
  const handlePageChange = () => setPage((prev) => prev + 1);
  const [getBaseCars, { data: getBaseCarsData, loading: getBaseCarsLoading }] =
    useLazyQuery(
      GET_BASE_CARS(`    
    hasNext
    hasPrevious
    totalCount
    data {
      topSpeedKmh
      pictureUrl
      gearbox
      fuel
      price
      description
      name
      id
    }`)
    );
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
    if (shouldGetMoreTopLastPosts) {
      getTopPostsPreview({
        variables: {
          pagination: {
            pageIndex: page,
            pageSize: 20
          }
        }
      });
    }
  }, [page, shouldGetMoreTopLastPosts]);

  useEffect(() => {
    if (getTopPostsPreviewData?.topPostsLastMonth.length) {
      const newMap = new Map(topPostsData);
      getTopPostsPreviewData?.topPostsLastMonth?.forEach((post) => {
        newMap.set(post?.id, post);
      });
      setTopPostsData(newMap);
    } else {
      setShouldGetMoreTopLastPosts(false);
    }
  }, [getTopPostsPreviewData?.topPostsLastMonth]);
  useEffect(() => {
    getBaseCars({
      variables: {
        page: carSliderPage,
        pageSize: 20,
        sortBy: carsSortType
      }
    });
  }, [carSliderPage, carsSortType]);
  useEffect(() => {
    if (getBaseCarsData?.basecarsHomePage?.data) {
      const newMap = new Map(carSliderData);
      getBaseCarsData?.basecarsHomePage?.data?.forEach((car) => {
        newMap.set(car?.id, car);
      });
      setCarSliderData(newMap);
    }
  }, [getBaseCarsData]);

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
        <CarSlider
          carsSortType={carsSortType}
          handleCarsSortTypeChange={(newValue) => {
            setCarSliderPage(1);
            setCarSliderData(new Map());
            setCarsSortType(newValue);
          }}
          carsData={Array.from(carSliderData.values())}
          getBaseCarsLoading={!getBaseCarsData || getBaseCarsLoading}
          hasNext={getBaseCarsData?.basecarsHomePage?.hasNext}
          handleCarSliderPageChange={handleCarSliderPageChange}
        />
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
