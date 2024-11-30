import {Component, effect, inject, ViewChild} from '@angular/core';
import {SkillStore} from "../../stores/skill.store";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {SkillView} from "../../../../api/src/models/skill-view";
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {CustomMatPaginatorIntlService} from "../../shared/services/custom-mat-paginator-intl.service";
import {TranslocoDirective} from "@jsverse/transloco";
import {SkillComponent} from "./skill/skill.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinner,
    MatSortModule,
    MatTableModule,
    SkillComponent,
    TranslocoDirective,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  providers: [
    {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntlService}
  ]
})
export class SkillsComponent {

  skillStore = inject(SkillStore);

  displayedColumns: Array<string> = ['name', 'skillCategory', 'skillLevel'];
  dataSource: MatTableDataSource<SkillView> = new MatTableDataSource(this.skillStore.skills());

  @ViewChild(MatPaginator, {static: false}) set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  @ViewChild(MatSort, {static: false}) set sort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor() {
    effect(() => {
      this.dataSource.data = this.skillStore.skills();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
