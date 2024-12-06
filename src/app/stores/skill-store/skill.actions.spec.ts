import {SkillActions} from './skill.actions';
import {MOCK_SKILLS} from "../../shared/mocks/skill-mocks";

describe('SkillActions', () => {
  it('should create a "triggered" action', () => {
    const action = SkillActions.triggered();
    expect(action.type).toBe('[Skill] Loading skills triggered');
  });

  it('should create a "loaded" action with the correct payload', () => {
    const action = SkillActions.loaded({skills: MOCK_SKILLS});

    expect(action.type).toBe('[Skill] Skills loaded successfully');
    expect(action.skills).toEqual(MOCK_SKILLS);
  });

  it('should create a "failed" action', () => {
    const action = SkillActions.failed();
    expect(action.type).toBe('[Skill] Loading skills failed');
  });
});
