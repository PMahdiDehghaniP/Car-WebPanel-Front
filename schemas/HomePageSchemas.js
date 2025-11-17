import { gql } from '@apollo/client';

export const GET_BRANDS = gql`
  query GetBrands {
    getBrands {
      brandName
      imageSrc
    }
  }
`;

export const GET_HOME_PAGE_CARS = gql`
  query GetHomePageCars($request: GetHomePageCarsInput) {
    getHomePageCars(request: $request) {
      imageSrc
      name
      description
      topSpeed
      gearBox
      fuelType
      price
      saved
    }
  }
`;

export const GET_WEEK_TOP_RATED_POST = gql`
  query GetWeekTopRatedPost($request: GetHomePageCarsInput) {
    getWeekTopRatedPost(request: $request) {
      imageSrc
      name
      description
      topSpeed
      gearBox
      fuelType
      price
      saved
    }
  }
`;
