/** @jsx jsx */
import Write from './Write';
import { jsx, css } from '@emotion/core';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';
export default {
  title: 'components|입력창',
  component: Write,
  decorators: [withKnobs],
};
export const write = () => {
  const intialValue = text('intialValue', '');
  const disabled = boolean('disabled', false);
  const readOnly = boolean('readOnly', false);
  return (
    <Write intialValue={intialValue} disabled={disabled} readOnly={readOnly} />
  );
};

const writeWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;
export const writeList = () => {
  return (
    <div css={writeWrapper}>
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
    </div>
  );
};
write.story = {
  name: '입력창 UI',
};

writeList.story = {
  name: '상태 값 별 입력창 UI',
};
