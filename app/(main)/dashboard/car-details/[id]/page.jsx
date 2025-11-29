'use client';
import { useParams } from 'next/navigation';
import { Box, CircularProgress, Divider } from '@mui/material';
import GallarySlider from '../components/GallarySlider';
import CarInformation from '../components/CarInformation';
import MoneyCostSection from '../components/MoneyCostSection';
import RatingDistribution from '../components/RatingDistribution';
import CommentSection from '../components/CommentSection';
import SubmitCommentSection from '../components/SubmitCommentSection';
import LineChart from '../CarChart';
import CarBoxSection from '../components/CarBoxSection';
import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CAR_BY_ID, GET_CAR_COSTS } from '@/schemas/HomePageSchemas';
import { perfectCentering } from '@/app/constants/Styles';

const CarDetailsPage = () => {
  const { id } = useParams();
  const [
    getCarInfoById,
    { data: getCarInfoByIdData, loading: getCarInfoByIdLoading }
  ] = useLazyQuery(
    GET_CAR_BY_ID(`    acceleration0100
    availableColors
    brand {
      brandRate
      createdAt
      id
      info
      logoUrl
      name
      updatedAt
    }
    combinedFuelConsumption
    curbWeightKg
    description
    dimensionsMm
    fuelType
    engine
    gallery
    mainImage
    id
    multimediaSystem
    powerHp
    name
    releaseYear
    safetyAssistFeatures
    safetyRating
    seatingCapacity
    topSpeedKmh
    torqueNm
    trunkVolumeL
    wheelbaseMm`)
  );
  const [getCarCosts, { data: getCarCostsData, loading: getCarCostsLoading }] =
    useLazyQuery(
      GET_CAR_COSTS(`   annualFuelCost
    annualInsuranceCost
    annualMaintenanceCost
    annualMiscCost
    annualPartsCost
    annualTaxCost
    annualTotalCost`)
    );
  useEffect(() => {
    if (id) {
      getCarInfoById({ variables: { carId: id } });
      getCarCosts({ variables: { carId: id } });
    }
  }, [id]);
  console.log(getCarCostsData, 'data');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}
    >
      {!getCarInfoByIdData || getCarInfoByIdLoading ? (
        <Box sx={{ width: '100vw', height: '100vh', ...perfectCentering }}>
          <CircularProgress size={64} />
        </Box>
      ) : (
        <>
          <GallarySlider
            galleryData={getCarInfoByIdData?.getCarById?.gallery}
          />
          <CarBoxSection />
          <CarInformation carInfoData={getCarInfoByIdData?.getCarById} />
          <LineChart />
          <MoneyCostSection
            getCarCostsData={getCarCostsData?.getCarCostsByCarId}
          />
          <RatingDistribution />
          <CommentSection />
          <Divider
            sx={{
              backgroundColor: 'c4c4c4',
              height: '2px',
              width: '100%',
              my: 10
            }}
          />
          <SubmitCommentSection />
        </>
      )}
    </Box>
  );
};
export default CarDetailsPage;
