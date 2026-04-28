## Instagram Submission & Posting Automation Platform (Client Project)

### Overview

RoomMeet is a platform built for a client to solve the operational bottlenecks of managing college roommate matching communities on Instagram. It transforms roommate matching into a scalable, revenue-generating system by replacing manual, direct message (DM) submission handling with an automated, queue-driven content pipeline – covering intake, moderation, prioritization and publishing.

### The Problem

The client managed Instagram accounts receiving high-volume submissions for roommate matching via DMs, leading to:

- Unstructured and inconsistent submission formats
- Manual tracking of posting order
- No system for prioritizing submissions
- Time-intensive posting and scheduling workflows
  This created operational bottlenecks and limited scalability.

### The Solution

I architected and engineered the system from the ground up to build a queue-based submission management system that:

- Converts unstructured inputs into structured, trackable submissions
- Introduces priority-based ordering via FIFO and paid upgrades through Stripe
- Enables moderation workflows for approval and filtering
- Automates posting and scheduling via cron jobs
  The system decouples submission intake from execution, allowing reliable and scalable content delivery.

### Key Impact

- Handled 20,000+ user submissions within the first year of launch
- Replaced manual DM workflows with a structured, queue-driven system
- Enabled monetization through paid priority posting with Stripe integration
- Reduced operational friction for Instagram account managers through one-click posting, automation and scheduling system

### Key Architecture Decisions

- **Priority Queue System:** Designed to support both organic and paid submissions with dynamic reordering
- **Monetization Integration:** Integrated **Stripe** to create a "Priority Queue." When a payment is confirmed, the system dynamically reorders the database queue to elevate the submission.
- **Media Pipeline:** Automated image preprocessing via **ImageKit**, ensuring all user-submitted photos meet Instagram’s strict API aspect ratio and resolution requirements before upload.
- **Asynchronous Execution:** Built a **Cron-based scheduling engine** to maintain a 24/7 posting cycle, optimizing content delivery for peak engagement hours without manual intervention.

### My Role

**Contracted Full-Stack Engineer (Sole Developer) – Architecture to Deployment**

- Architected the full system, including data models and workflows
- Built the frontend (user submission + admin dashboard)
- Developed backend APIs, queue logic, and integrations
- Integrated Stripe, ImageKit, and email services
- Deployed and maintained the production system

### Tech Stack

Next.js, TypeScript, MongoDB, Meta Graph API, NextAuth, Stripe, ImageKit, TailwindCSS

### Links

- **Live:** [https://www.roommeet.net/](https://www.roommeet.net/)
- **Source Code:** Private (client-owned) – Technical walkthrough available upon request.
