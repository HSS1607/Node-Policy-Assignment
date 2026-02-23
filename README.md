# Node Policy Assessment System

A backend system built with **Node.js, Express, and MongoDB** that processes insurance policy data from CSV/XLSX files, stores structured information across multiple collections, provides search and aggregation APIs, monitors CPU usage in real-time, and supports scheduled message execution.

This project was developed as part of a technical assessment.

---

# Features

✅ Upload CSV / XLSX data into MongoDB using Worker Threads  
✅ Data stored in separate collections (Agent, User, Account, LOB, Carrier, Policy)  
✅ Search policy information by username  
✅ Aggregated policy count per user  
✅ Real-time CPU utilization monitoring  
✅ Auto restart server when CPU exceeds 70%  
✅ Scheduled message service (runs at specific date & time)  
✅ Non-blocking file processing using worker threads  
✅ Production-ready project structure  

---

# Architecture


### MongoDB Collections

- Agents
- Users
- Accounts
- LOB (Policy Category)
- Carriers (Insurance Company)
- Policies
- Messages (Scheduled Jobs)

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Worker Threads
- Multer (file upload)
- XLSX / CSV Parser
- Node Cron
- OS Module (CPU monitoring)

---

# Installation

```bash
git clone <repo-url>
cd node-policy-assessment
npm install
