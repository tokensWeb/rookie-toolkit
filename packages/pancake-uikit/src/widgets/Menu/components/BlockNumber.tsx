import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  blockNumber?: number;
}

const PriceLink = styled.div`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const BlockNumber: React.FC<Props> = ({ blockNumber }) => {
  return blockNumber ? (
    <PriceLink>
      <Text ml="1" color="textSubtle" bold>{`Block Height: `}</Text>
      <Text ml="1" color="textSubtle" bold>{`${blockNumber}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24}>
      <Text ml="1" color="textSubtle" bold>{`Block Height: `}</Text>
    </Skeleton>
  );
};

export default React.memo(BlockNumber);
