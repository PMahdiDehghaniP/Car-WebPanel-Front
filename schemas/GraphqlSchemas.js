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

export const GET_BRANDS_BY_RATE = (items) => gql`
  query BrandsByRate($pageSize: Int, $page: Int, $minRate: Float) {
    brandsByRate(pageSize: $pageSize, page: $page, minRate: $minRate) {
      ${items}
    }
  }
`;

export const GET_TOP_MOTNH_POSTS = (items) => gql`
  query TopPostsLastMonth($pagination:PaginationInput) {
    topPostsLastMonth(pagination:$pagination) {
      ${items}
    }
  }
`;

export const GET_CAR_BY_ID = (items) => gql`
query GetCarById($carId:ID!) {
  getCarById(carId: $carId) {
    ${items}
  }
}
`;

export const GET_CAR_COSTS = (items) => gql`
query GetCarCosts($carId:ID!) {
  getCarCostsByCarId(carId:$carId) {
    ${items}
  }
}
`;

export const GET_CARS_RATING = (items) => gql`
query GetCarRatingSummary($carId:ID!) {
  getCarRatingSummary(carId: $carId) {
    ${items}
  }
}
`;

export const GET_BASE_CARS = (items) => gql`
query BasecarsHomePage($page:Int,$pageSize:Int,$sortBy:SortByEnum) {
  basecarsHomePage(page:$page,pageSize:$pageSize,sortBy:$sortBy) {
    ${items}
  }
}
`;

export const COMPARE_TWO_PAGES = (items) => gql`
query CompareTwoCars($id1:ID!,$id2:ID!) {
  compareTwoCars(id1: $id1, id2: $id2) {
    ${items}
  }
}
`;
