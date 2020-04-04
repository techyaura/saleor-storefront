import gql from "graphql-tag";

export const paymentFragment = gql`
  fragment Payment on Payment {
    id
    gateway
    token
  }
`;
