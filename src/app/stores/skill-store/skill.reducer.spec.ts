import {initialState, reducer} from "./skill.reducer";
import {SkillActions} from "./skill.actions";
import {MOCK_SKILLS} from "../../shared/mocks/skill-mocks";

describe('Skill Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should set isLoading to true when "triggered" action is dispatched', () => {
    const action = SkillActions.triggered();
    const state = reducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should update skills and set isLoading to false when "loaded" action is dispatched', () => {
    const action = SkillActions.loaded({skills: MOCK_SKILLS});
    const state = reducer(initialState, action);

    expect(state.skills).toEqual(MOCK_SKILLS);
    expect(state.isLoading).toBe(false);
  });

  it('should set isLoading to false when "failed" action is dispatched', () => {
    const action = SkillActions.failed();
    const state = reducer(initialState, action);
    expect(state.isLoading).toBe(false);
  });
});
