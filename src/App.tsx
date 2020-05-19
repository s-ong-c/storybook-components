import React, { useEffect } from 'react';
import Card from './components/common/Card';
import FlatCard from './components/common/FlatCard';
import { useDispatch, useSelector } from 'react-redux';
import { CARD, ICard, cardSelectors, cardDataThunk } from './modules/card';
import { IRootState } from './modules';
import styled from '@emotion/styled';
import Write from './components/common/Write';
import { mediaQuery } from './lib/styles/media';

const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    padding: 0;
    flex-direction: column;
    display: flex;
    & + & {
      margin-top: 1rem;
    }
  }
`;
const CardBlock = styled.div`
  display: flex;
  ${mediaQuery(1440)} {
    width: 18rem;
  }
  ${mediaQuery(1312)} {
    width: 15rem;
  }

  ${mediaQuery(944)} {
    width: 20rem;
  }
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

const WriteBlock = styled.div`
  width: 1024px;
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    flex-direction: column;
    display: flex;
  }
  .description {
    margin-bottom: 0.5rem;
  }
`;
function App() {
  const dispatch = useDispatch();
  const items = useSelector<IRootState, ICard[]>(state =>
    cardSelectors.card(state[CARD]),
  );

  useEffect(() => {
    dispatch(cardDataThunk());
    return () => {};
  }, [dispatch]);

  return (
    <Wrapper>
      <CardBlock>
        <h3> CARD UI</h3>
        {items.map((item, index) =>
          item.type === 1 ? (
            <Card
              key={item.id}
              title={item.title}
              score={item.score}
              subTitle={item.subTitle}
              description={item.description}
            />
          ) : (
            <FlatCard
              key={item.id}
              title="Card Title"
              score={item.score}
              description={item.description}
              author={item.author}
            />
          ),
        )}
      </CardBlock>
      <WriteBlock>
        <h3> 입력창 UI</h3>
        <div>
          <div className="description">placeholder </div>
          <Write />
        </div>
        <div>
          <div className="description">입력중 또는 변경일때만 버튼 활성화</div>
          <Write intialValue="입력중 ... 또는 내용 변경시" />
        </div>
        <div>
          <div className="description">disabled</div>
          <Write disabled={true} />
        </div>
        <div>
          <div className="description">읽기 전용 </div>
          <Write
            intialValue="이것은 읽기 전용입니다. 수정을 할수가 없습니다."
            readOnly={true}
          />
        </div>
      </WriteBlock>
    </Wrapper>
  );
}

export default App;
