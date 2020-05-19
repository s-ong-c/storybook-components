import React from 'react';
import styled from 'styled-components';
import { idusImg } from '@/static/images';
import { MdLens } from 'react-icons/md';
import palette from '@/lib/styles/palette';
import { ellipsis } from '@/lib/styles/utils';
import { mediaQuery } from '@/lib/styles/media';

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const FlatCardBlock = styled.div`
  background: ${palette.gray1};
  display: flex;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.5);
  width: 30rem;
  height: 10rem;
  flex-basis: 40%;
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    display: flex;
    flex-basis: 50%;
    font-size: 0.75rem;
    & + & {
      margin-top: 1rem;
    }
  }
  .img-thumbnail {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  h4 {
    ${ellipsis}
    width: 15rem;
    font-size: 1rem;
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.5;
    color: ${palette.gray9};
  }
  .description {
    color: ${palette.gray6};
    font-size: 0.875rem;
    line-height: 1.5;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
  }
`;

const Footer = styled.div`
  .scoreWrapper {
    display: flex;
    color: ${palette.gray6};
    svg {
      font-size: 1.25rem;
    }
    .yellow {
      color: ${palette.orange6};
    }
  }
`;
export interface FlatCardProps {
  title: string;
  score?: number;
  description?: string;
  author?: string;
}
function FlatCard({ author, title, score, description }: FlatCardProps) {
  return (
    <Wrapper>
      <FlatCardBlock>
        <div className="img-thumbnail">
          <img src={idusImg} alt="idusImg" />
        </div>
        <div className="content-wrapper">
          <Content>
            <h4>{title}</h4>
            <div className="description">{description}</div>
          </Content>
          <Footer>
            <div className="scoreWrapper">
              {score && score > 0
                ? Array.from({ length: 5 }).map((n, index) => (
                    <MdLens
                      key={index}
                      className={index < score ? 'yellow' : ''}
                    />
                  ))
                : null}
              &nbsp;| {author}
            </div>
          </Footer>
        </div>
      </FlatCardBlock>
    </Wrapper>
  );
}

export default FlatCard;
