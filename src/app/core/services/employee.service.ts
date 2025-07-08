import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { catchError, map, Observable, throwError } from "rxjs";
import { Employee } from "../models/employee.model";
import { Filter } from "../models/filter.model";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private http: HttpClient) { }

    getEmployees(filters?: Filter): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${environment.apiUrl}/employees`).pipe(
            map(employees => this.filterEmployees(employees, filters)),
            catchError(error => {
                console.error('Error fetching employees:', error);
                return throwError(() => new Error('Failed to fetch employees'));
            })
        );
    }

    private filterEmployees(employees: Employee[], filters?: Filter): Employee[] {
        if (!filters || Object.keys(filters).length === 0) {
            return employees;
        }

        return employees.filter(emp => {
            const matchesFirstName = !filters.firstName || emp.firstName.toLowerCase().includes(filters.firstName.toLowerCase());
            const matchesEmail = !filters.email || emp.email?.toLowerCase().includes(filters.email.toLowerCase());
            const matchesAddress = !filters.address || emp.address?.toLowerCase().includes(filters.address.toLowerCase());
            const matchesPhone = !filters.phoneNumber || emp.phoneNumber.includes(String(filters.phoneNumber));
            const matchesGender = !filters.gender || emp.gender === filters.gender;

            return matchesFirstName && matchesEmail && matchesAddress && matchesPhone && matchesGender;
        });
    }
}



