# It's All 200 — Frontend

**It's All 200** is a comprehensive automotive platform combining a technical car database, social network, and interactive tools such as comparison, cost estimation, and achievements.

This repository contains the **Next.js frontend** of the project.

---

## Overview

### The platform provides:
- Detailed car database with specs, performance, and prices  
- Social feed for posts, likes, and comments  
- Car comparison and filtering tools  
- Personal garage for saved or owned cars  
- Annual cost estimation (fuel, insurance, maintenance)  
- Achievements and event participation for gamification  

### Target users include:
- Car owners  
- Enthusiasts and racers  
- Potential buyers  
- Event organizers  

### Key Pages:
- **Home:** car feed, social posts, upcoming events  
- **Car Details:** specs, reviews, and cost estimation  
- **Garage:** saved car collections  
- **Compare:** side-by-side car comparison  
- **Social Feed:** posts, likes, comments, follow system  
- **Profile:** user info and owned car  
- **Achievements:** rewards and badges  
- **Events:** automotive festivals and contests  

---

## Tech Stack

### Frontend
- Next.js  
- React.js  
- NextAuth (Auth.js)  
- Redux Toolkit  
- Apollo Client (GraphQL)  
- WebSocket (Socket.io)  
- MUI  

### Backend (for reference)
- Django + Django Channels  
- PostgreSQL + Redis  
- Celery + RabbitMQ  
- Apollo Server (GraphQL)  
- JWT, Docker Compose  

---

## Getting Started

```bash
# clone
git clone https://github.com/your-org/itsall200-frontend.git
cd itsall200-frontend

# install dependencies
npm install

# start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=<your_backend_graphql_endpoint>
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your_secret>
ACCESS_TOKEN_KEY=accessToken
```

---

## Deployment

**Vercel**
```bash
vercel deploy
```

**Docker**
```bash
docker compose up
```

---

## Team

### Frontend
- مهدی دهقانی محمدآبادی  
- آرین سعیدکندری  
- عرفان قاسمیان  
- رامین کلانتری  

### Backend
- ابوالفضل شهسواری  
- محمد متین نوری  
