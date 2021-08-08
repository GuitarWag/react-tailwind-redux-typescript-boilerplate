import { createActionCreator, createReducer } from '@ez-dux/core';
import { createModule } from '@ez-dux/react/lib/module';

export const NAMESPACE = 'age-module';

export class AgeState {
  age = 78;
}

const changeAgeActionCreator = createActionCreator<number>('change-age');

type Actions = ReturnType<typeof changeAgeActionCreator>;

const reducer = createReducer<Actions, AgeState>(new AgeState());
reducer.addCase(changeAgeActionCreator, (state, action) => ({
  ...state,
  age: action.payload,
}));

// eslint-disable-next-line import/prefer-default-export
export const ageModule = createModule<AgeState>({
  id: NAMESPACE,
  reducerMap: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [NAMESPACE]: reducer,
  },
});
