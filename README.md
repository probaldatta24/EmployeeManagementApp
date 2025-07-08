# EmployeeManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# 🧑‍💼 Employee Management App

A simple Employee Management application built with **Angular** for the frontend and **JSON Server** for the mock backend. It includes a search panel and a data table for listing and filtering employee records.

---

## 📁 Project Structure

- `src/` – Angular application (Search Panel, Data Table, etc.)
- `db.json` – Mock backend data for employees
- `json-server` – Used for fake RESTful APIs

## ⚙️ Setup Instructions

- Node.js and npm installed: [Download here](https://nodejs.org/)

 Install Angular CLI
- npm install -g @angular/cli

## ⚙️ Clone the Repository

git clone https://github.com/probaldatta24/EmployeeManagementApp.git
cd employee-management

## ⚙️ Install Angular Project Dependencies

npm install

## ⚙️ Start JSON Server

npm json-server --watch db.json --port 3000
This will start your mock API at: http://localhost:3000/employees

## ⚙️ Start Angular Frontend

ng serve
Angular app runs at: http://localhost:4200


🧪 Features

✅ Search employees by firstname, phone, email, address, or gender
✅ Fake API with json-server

## 📐 Design Decisions

✅Component-Based Architecture: The app is divided into reusable components like SearchPanelComponent and DataTableComponent to ensure clean separation of concerns and maintainability.
✅Reactive Forms: Used for search input to provide better form control, validation, and reactive updates.
✅Service Layer (EmployeeService): All API interactions are handled via a service, keeping components clean and focusing only on presentation logic.
✅ JSON Server: Chosen for its simplicity and ease of mocking REST APIs without needing a backend setup.
✅Git Branching (dev → main): Feature development is done on the dev branch and later merged into main for production stability.