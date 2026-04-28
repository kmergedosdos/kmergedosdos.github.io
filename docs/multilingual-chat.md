## AI Multilingual Messaging & Automation Platform

### Overview

This enterprise platform was engineered to bridge global communication gaps for businesses managing LINE Official Accounts for clients. It enables real-time, multilingual communication through AI-powered translation, user segmentation, and automated messaging workflows.

The system extends standard LINE capabilities into a CRM-like automation engine, allowing businesses to manage conversations, automate engagement, and personalize communication at scale across multiple languages.

### The Problem

Standard messaging APIs often lack enterprise-grade features required for global scale, specifically:

- Language barriers in multi-region customer support
- Limited automated messaging workflows like drip campaigns
- No built-in behavioral user segmentation for targeted communication
- Fragmented tooling for managing conversations, automation and user data
  These limitations made it difficult to scale personalized communication and maintain efficiency across growing user bases.

### The Solution

I architected a real-time messaging interface that bridges the gap between raw API data and actionable business intelligence. The platform provides:

- AI-powered auto-translation integrated directly into the chat pipeline to provide instant, bi-directional translation
- Automated workflows for triggered and scheduled messaging sequences and background API actions
- Behavioral user segmentation system that allows admins to tag and group users dynamically for targeted messaging
- Centralized CRM-like interface that synchronizes LINE user data with internal business logic
  The system integrates directly with the LINE Messaging API while introducing a scalable layer for automation, personalization, and multilingual support.

### Key Impact

- Scaled to 5-language support for communication across regions
- enabled concurrent multi-account conversation and management
- improved engagement through segmented and automated messaging

### Key Architecture Contributions

- **Real-Time Messaging Architecture:** Designed the state management patterns to handle high-frequency updates using WebSockets, ensuring consistent UI state and performance across active conversations
- **Message Translation Pipeline:** Structured frontend logic to handle multiple message states (raw, translated, automated) within a unified rendering system, storing and displaying both original and AI-translated content
- **Scalable Frontend Architecture:** Established modular patterns and state management strategies to support complex, evolving features
- **API Contract Design:** Developed REST APIs and collaborated closely with backend team to define strict TypeScript interfaces, ensuring type-safe communication throughout the tech stack.

### My Role

**Frontend Lead (Full-Stack Engineer) – Architecture, Code Quality, and Implementation**

- Led frontend architecture and technical direction, focusing on code maintainability and scalability
- Managed frontend roadmap and conducted code reviews, ensuring consistency and enterprise-grade quality
- Architected real-time messaging interfaces and state management systems
- Drove frontend implementation of messaging, translation, and automation features
- Collaborated with backend team on API design and data contracts

### Teck Stack

Next.js, TypeScript, PHP Laravel, WebSockets, LINE Messaging API, OpenAI API

### Links

- **Live:** Confidential enterprise system (NDA)
- **Source Code:** Private (corporate-owned)
