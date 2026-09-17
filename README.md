# 🤖 Enterprise AI Support Dashboard (KiProjekt)

A full-stack B2B support dashboard featuring a real-time AI intent-classification chat interface and a live metrics visualization panel. Built with modern enterprise architecture, strict typing, and a clean corporate design.

![Tech Stack](https://img.shields.io/badge/Stack-Spring%20Boot%20%2B%20Angular%2018-blue)
![Architecture](https://img.shields.io/badge/Architecture-Clean%20%2B%20Standalone-success)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Key Features

- **Live AI Chat Interface:** Real-time communication with backend intent-classification algorithms. Displays confidence scores and categorical tags instantly.
- **Corporate Dashboard:** Split-screen layout featuring active conversation counters, top intent breakdowns, and agent status panels.
- **Modern UI/UX:** Styled using custom SCSS variables mirroring professional B2B branding (Navy Blue, White, and Slate accents) integrated with Angular Material.
- **Robust Error Handling:** Graceful fallbacks and loading states across HTTP requests.

---

## 🛠️ Tech Stack

### Backend

- **Java 17+** / **Spring Boot**
- RESTful API Design
- DTO Mapping & Intent Classification Engine

### Frontend

- **Angular 18+** (Standalone Components)
- **Angular Material** & **SCSS**
- **RxJS** for reactive asynchronous data streams
- TypeScript (Strict Mode enabled)

---

## 📂 Project Architecture

```text
kiprojekt-support-system/
├── backend/          # Spring Boot REST API
└── frontend/         # Angular 18+ Single Page Application
```

## ⚙️ How to Run Locally

Prerequisites

- **Java** JDK 17 or higher

- **Node.js** (v18+) & **Angular CLI**

- **Maven** (for backend building)

## 1. Run the Backend (Spring Boot)

```
cd backend
mvn spring-boot:run
```

## 2. Run the Frontend (Angular)

```
cd frontend
npm install
ng serve
```

## 🛡️ Intellectual Property Notice

This project is a generic, clean-room implementation designed strictly for portfolio and educational demonstration of full-stack engineering proficiency
