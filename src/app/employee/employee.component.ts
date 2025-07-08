import { Component, OnInit } from '@angular/core';
import { SearchPanelComponent } from "../shared/components/search-panel/search-panel.component";
import { DataTableComponent } from "../shared/components/data-table/data-table.component";
import { EmployeeService } from '../core/services/employee.service';
import { Employee } from '../core/models/employee.model';
import { Filter } from '../core/models/filter.model';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [SearchPanelComponent, DataTableComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(filters?: Filter): void {
    this.employeeService.getEmployees(filters).subscribe({
      next: (employees) => this.employees = employees,
      error: (err) => console.error('Error loading employees:', err)
    });
  }

  onSearch(filters: Filter): void {
    this.loadEmployees(filters);
  }
}
