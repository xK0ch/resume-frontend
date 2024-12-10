import {SkillActions} from './skill.actions';
import {MOCK_SKILLS} from "../../shared/mocks/skill-mocks";

describe('SkillActions', () => {
  it('should create a "loadingTriggered" action', () => {
    const action = SkillActions.loadingTriggered();
    expect(action.type).toBe('[Skill] loadingTriggered');
  });

  it('should create a "loadingSuccessful" action with the correct payload', () => {
    const action = SkillActions.loadingSuccessful({skills: MOCK_SKILLS});

    expect(action.type).toBe('[Skill] loadingSuccessful');
    expect(action.skills).toEqual(MOCK_SKILLS);
  });

  it('should create a "loadingFailed" action', () => {
    const action = SkillActions.loadingFailed();
    expect(action.type).toBe('[Skill] loadingFailed');
  });
});
