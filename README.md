# Logistic UI

**Short description**

> Logistics UI, website to view order tracking management. made in React + TypeScript + Vite + tailwindui

### **Getting Start**

**_First, Install dependencies:_**

```bash
npm install
or
yarn install
```

**_Run project_**

```bash
yarn dev
or
npm dev
```

## Content Page

**Home ( / )**

> Table to see all Orders and redirect Order Detail

**Order Detail (order/:id)**

> Table to see the items and properties associated with the order

**Reports /report**

> Page to download two specific reports in csv format
>
> - "Shipping Promise Ending Report"
> - "Traveling Reporting Tool"

## **Documentation**

### Services

Rest services to use the api

- ReportService - to handler the request for get the reports
- OrderService - to handler the request to get the orders and properties
- HandlerJsonService - to handler the parse json on csv
