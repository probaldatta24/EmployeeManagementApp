import { Component, Input } from '@angular/core';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  @Input() employees:Employee[] = [];

}