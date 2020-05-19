import * as React from 'react';
import styled, { css } from 'styled-components';
import palette from '@/lib/styles/palette';
import { mediaQuery } from '@/lib/styles/media';
import { idusImg } from '@/static/images';
import ImageSection from '@/components/common/ImageSection';
import { MdLens } from 'react-icons/md';

const Wrapper = styled.div`
  width: 15rem;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    flex-direction: column;
    display: flex;
    & + & {
      margin-top: 1rem;
    }
  }
`;
const Block = styled.div`
  flex: 1;
  background: white;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.5);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
    ${mediaQuery(1024)} {
      transform: none;
    }
  }

  overflow: hidden;
  display: flex;
  flex-direction: column;

  .post-thumbnail {
    margin-bottom: 1rem;
  }
  line-height: 1.5;
  .subinfo {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: ${palette.gray6};
    font-size: 0.875rem;

    .hilight {
      color: ${palette.red7};
      text-decoration: none;
    }
    span {
      color: ${palette.gray6};
      text-decoration: line-through;
    }
    span + span {
      margin-left: 0.5rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  padding-left: 1rem;
  flex-direction: column;
  .label {
    color: ${palette.gray6};
    font-size: 0.875rem;
  }
  h4 {
    font-size: 1.125rem;
    margin: 0;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.5;
    color: ${palette.gray9};
    ${mediaQuery(767)} {
      white-space: initial;
    }
  }
`;
const Footer = styled.div<{ isDes?: boolean; isScore?: boolean }>`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.75rem;
  flex-direction: column;
  color: ${palette.gray6};
  ${props =>
    !props.isDes &&
    !props.isScore &&
    css`
      display: none;
    `}
  .scoreWrapper {
    display: flex;
    svg {
      font-size: 1.25rem;
    }
    .yellow {
      color: ${palette.orange6};
    }
  }
  .description {
    height: 1rem;
    display: block;
    line-height: 1.5;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    p {
    }
    ${props =>
      !props.isDes &&
      css`
        display: none;
      `}
  }
`;
const Separator = styled.div<{ isNone?: boolean }>`
  width: 100%;
  height: 1px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: #f5f5f5;
  ${props =>
    !!props.isNone &&
    css`
      display: none;
    `}
`;
export interface CardProps {
  /** 제목 */
  title: string;
  /** 1~5 점 사이 처리 (소수 x) */
  score?: number;
  /** 설명 */
  description?: string;
  /** 소제목 */
  subTitle?: string;
}
function Card({ subTitle, title, score, description }: CardProps) {
  return (
    <Wrapper>
      <Block>
        <ImageSection
          src={idusImg}
          alt="post-thumbnail"
          widthRatio={1.3}
          heightRatio={1}
          className="post-thumbnail"
        />
        <Content>
          <div className="label">{subTitle}</div>
          <h4>{title}</h4>
          <div className="subinfo">
            <span className="hilight">Hilight</span>
            <span>Cross Out</span>
          </div>
        </Content>
        <Separator isNone={!description && !score} />
        <Footer isScore={!!score} isDes={!!description}>
          <div className="scoreWrapper">
            {score && score > 0
              ? Array.from({ length: 5 }).map((n, index) => (
                  <MdLens
                    key={index}
                    className={index < score ? 'yellow' : ''}
                  />
                ))
              : null}
          </div>
          <div className="description">{description}</div>
        </Footer>
      </Block>
    </Wrapper>
  );
}

export default Card;
