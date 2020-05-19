/** @jsx jsx */
import Card from './Card';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import FlatCard from './FlatCard';
export default {
  title: 'components|카드',
  component: Card,
  decorators: [withKnobs],
};
export const card = () => {
  const title = text('title', 'Card Title');
  const subTitle = text('subTitle', 'Card Label');
  const description = text(
    'description',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
  );
  const score = number('score', 1);
  return (
    <Card
      title={title}
      subTitle={subTitle}
      description={description}
      score={score}
    />
  );
};
export const flatCard = () => {
  const title = text('title', 'Card Title');
  const description = text(
    'description',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
  );
  const score = number('score', 1);
  const author = text('author', 'SONGMINSEOK');
  return (
    <FlatCard
      description={description}
      title={title}
      score={score}
      author={author}
    />
  );
};
const cardWrapper = css`
  display: flex;
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-left: 2rem;
  }
`;
export const CardUI = () => {
  const subTitle = text('subTitle', 'Card label');
  const title = text('title', 'Card Title');
  const description = text(
    'description',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
  );
  const score = number('score', 3);
  const author = text('author', 'SONGMINSEOK');
  return (
    <div css={cardWrapper}>
      <div>
        <div className="description">Default</div>
        <Card
          title={title}
          score={score}
          subTitle={subTitle}
          description={description}
        />
      </div>
      <div>
        <div className="description">점수만 있을때 </div>
        <Card subTitle={subTitle} title={title} score={score} />
      </div>
      <div>
        <div className="description">점수와 description 없을시</div>
        <Card subTitle={subTitle} title="Card Title" />
      </div>
      <div>
        <div className="description">FlatCard</div>
        <FlatCard
          description={description}
          title="Card Title"
          score={score}
          author={author}
        />
      </div>
    </div>
  );
};

card.story = {
  name: 'Card 기본 ',
};
flatCard.stort = {
  name: 'Card 가로형 ',
};
CardUI.story = {
  name: '카드 컴포넌트 상태값 종류 별 ',
};
