<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1-Jhb_EoosDdFFwnbX_qeY05MEVa1CYX0

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

#  Mandi-Insights
### Unified Agricultural Market Data Aggregator & Analytics Platform

##  Problem
In India, mandi (APMC) crop price data is scattered across multiple portals like:
- eNAM
- Agmarknet
- State agriculture websites

Farmers and traders must manually check many websites daily and still miss important price insights.  
There is no single platform that provides complete market coverage or historical analysis.

---

##  Solution
Mandi-Insights is a one-stop platform that:

✅ Aggregates mandi prices from multiple sources  
✅ Stores them in a unified database  
✅ Provides dashboards & visualizations  
✅ Shows trends and comparisons  
✅ Helps farmers make better selling decisions  

---

##  Features (Planned MVP)

### Data Aggregation
- eNAM API integration
- Agmarknet API integration
- State portal scraping
- Daily automated sync

### Dashboard
- Today's prices table
- Search & filters
- Price trend charts
- Heatmaps (state-wise)
- Top gainers/losers

### Analytics
- Historical trends
- Seasonal patterns
- Market intelligence insights
- Price alerts

### Export
- CSV/Excel download
- Reports

---

## 🛠 Tech Stack

Frontend:
- React.js
- Recharts / Chart.js
- Leaflet (maps)

Backend:
- Node.js
- Express.js

Database:
- MongoDB

Data Collection:
- Axios (API calls)
- Cheerio/Puppeteer (web scraping)
- Node-cron (scheduler)


##  Current Status
Initial project setup in progress  
Next: Database schema + first API

---

##  Goal
To provide a unified, data-driven platform that improves price transparency
and increases farmer profitability across India.

---

## 📂 Project Structure

