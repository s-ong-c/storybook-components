import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './index';
import { getCardData } from '@/lib/api/cardData';

const name = 'card';

export interface ICard {
  id: number;
  type: number;
  title: string;
  score?: number;
  description?: string;
  subTitle?: string;
  author?: string;
}

export interface ICardState {
  card: ICard[];
}
const initialState: ICardState = {
  card: [],
};

export type ICardIdentity = Pick<ICard, 'id'>;
const _ = createSlice({
  name,
  initialState,
  reducers: {
    initCardData(state: ICardState, { payload }: PayloadAction<ICard[]>) {
      state.card = payload;
    },
  },
});
const getCard = (state: ICardState) => state.card;
export const cardSelectors = {
  card: getCard,
};
export const CARD = _.name;
export const cardActions = _.actions;
export const cardReducer = _.reducer;

export const cardDataThunk = (): AppThunk => async dispatch => {
  try {
    const cards = await getCardData('/data.json');
    dispatch(cardActions.initCardData(cards));
  } catch (e) {
    throw e;
  }
};
