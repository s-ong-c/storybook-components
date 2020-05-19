import * as React from 'react';
import styled, { css } from 'styled-components';
import palette from '@/lib/styles/palette';
import useInput from '@/lib/hook/useInput';
import { mediaQuery } from '@/lib/styles/media';

const WriteBlock = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  padding-bottom: 1.5rem;
  > .buttons-wrapper {
    justify-content: flex-end;
  }
`;

const StyledTextarea = styled.textarea<TextareaProps>`
  border: none;
  resize: none;
  outline: none;
  margin-left: 2rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6rem;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: ${palette.gray9};
  &::placeholder {
    color: ${palette.gray3};
  }
  line-height: 1.75;

  ${props =>
    props.limit &&
    css`
      color: ${palette.red6};
    `}
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: ${palette.red8};
      background: ${palette.gray2};
    `}
  ${props =>
    props.readOnly &&
    css`
      cursor: not-allowed;
      color: ${palette.teal7};
      background: ${palette.gray3};
      &:focus {
        border: 1px solid ${palette.gray3};
      }
    `}

    ${mediaQuery(375)} {
        min-height: 4rem;
    }
`;
const Wrapper = styled.div<TextareaProps>`
  width: 100%;
  display: flex;
  border: 1px solid ${palette.gray3};
  border-radius: 4px;
  ${props =>
    props.focus &&
    css`
      border: 1px solid ${palette.teal3};
    `}
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: ${palette.red8};
      background: ${palette.gray2};
    `}
    ${props =>
      props.readOnly &&
      css`
        cursor: not-allowed;
        color: ${palette.teal7};
        background: ${palette.gray3};
        &:focus {
          border: 1px solid ${palette.gray3};
        }
      `}
`;
const Limit = styled.div<{ limit: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 0.75rem;
  margin-right: 1rem;
  color: ${palette.gray6};
  ${props =>
    props.limit &&
    css`
      color: ${palette.red6};
    `}
`;

const ButtonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: 1px solid ${palette.gray3};
  color: ${palette.teal5};
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-size: 1rem;
  &:hover,
  &:focus {
    border: 1px solid ${palette.teal3};
    background: 1px solid ${palette.gray1};
  }
`;

interface TextareaProps {
  readOnly: boolean;
  disabled: boolean;
  focus?: boolean;
  limit?: boolean;
}
export interface WriteProps {
  /** 초기 값 있을 수도 있다.  */
  intialValue?: string;
  /** 읽기 전용인가?  */
  readOnly?: boolean;
  /** 비활성화 인가? */
  disabled?: boolean;
}
function Write({
  intialValue,
  readOnly = false,
  disabled = false,
}: WriteProps) {
  const [val, onChangeValue] = useInput(intialValue ? intialValue : '');
  const [focus, setFocus] = React.useState(false);
  const onFocus = React.useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur = React.useCallback(() => {
    setFocus(false);
  }, []);
  return (
    <WriteBlock>
      <Wrapper
        disabled={disabled}
        focus={focus}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readOnly}
      >
        <StyledTextarea
          disabled={disabled}
          limit={val.length >= 500}
          value={disabled ? '주문 요청사항을 입력해주세요.' : val}
          onChange={onChangeValue}
          placeholder="초기값이 있을수 있습니다."
          readOnly={readOnly}
        ></StyledTextarea>
        <Limit limit={val.length >= 500}>{500 - val.length}</Limit>
      </Wrapper>
      <div className="buttons-wrapper">
        {intialValue !== val && val.length > 0 && (
          <ButtonStyle>SAVE</ButtonStyle>
        )}
      </div>
    </WriteBlock>
  );
}

export default Write;
