import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { getTranslocoModule } from "../../transloco-testing.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { provideMockStore } from "@ngrx/store/testing";
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { selectSkills, selectIsLoading } from "../../stores/skill-store/skill.reducer";
import { MatTableDataSource } from '@angular/material/table';
import { SkillView } from '../../../../api/src/models/skill-view';
import { By } from '@angular/platform-browser';
import {MOCK_SKILLS} from "../../shared/mocks/skill-mocks";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        NoopAnimationsModule,
        SkillsComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore({})
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate the data source with skills from the store', () => {
    const spy = jest.spyOn(store, 'select').mockReturnValue(of(MOCK_SKILLS));

    component.skills$.subscribe((skills) => {
      expect(skills).toEqual(MOCK_SKILLS);
      expect(component.dataSource.data).toEqual(MOCK_SKILLS);
    });

    fixture.detectChanges();
  });

  it('should update table when skills are emitted from the store', () => {
    store.dispatch = jest.fn();
    jest.spyOn(store, 'select').mockReturnValue(of(MOCK_SKILLS));

    component.skills$.subscribe(() => {
      expect(component.dataSource.data).toEqual(MOCK_SKILLS);
    });
    fixture.detectChanges();
  });

  it('should update loading status when isLoading$ emits', () => {
    store.dispatch = jest.fn();
    const spy = jest.spyOn(store, 'select').mockReturnValue(of(true));

    component.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBeTruthy();
    });
    fixture.detectChanges();
  });

  it('should call applyFilter and filter the data source', () => {
    component.dataSource.data = MOCK_SKILLS;
    const event = { target: { value: 'John' } };

    component.applyFilter(event as any);

    expect(component.dataSource.filter).toBe('john');
  });

  it('should set paginator and sort after view init', () => {
    const paginator: MatPaginator = fixture.debugElement.query(By.directive(MatPaginator)).componentInstance;
    const sort: MatSort = fixture.debugElement.query(By.directive(MatSort)).componentInstance;

    component.paginator = paginator;
    component.sort = sort;

    expect(component.dataSource.paginator).toBe(paginator);
    expect(component.dataSource.sort).toBe(sort);
  });
});
