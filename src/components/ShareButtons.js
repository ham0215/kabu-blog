import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import styled from 'styled-components/macro';

const ShareButtons = styled.div`
  display: flex;
`;

const Share = styled.div`
  margin: 0 10px 0 10px;
`;

export default (props) => {
  return (
    <ShareButtons>
      <Share>
        <FacebookShareButton url={props.shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </Share>
      <Share>
        <TwitterShareButton title={props.title} via="HamInvestor" url={props.shareUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </Share>
    </ShareButtons>
  );
};
