---
id: 001
title: Create Physical AI Robotics Textbook Constitution
stage: constitution
date: 2025-12-10
surface: agent
model: claude-sonnet-4-5
feature: none
branch: master
user: Hiba Sheikh
command: /sp.constitution
labels: ["constitution", "initialization", "textbook", "physical-ai", "robotics"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - history/prompts/constitution/001-create-physical-ai-robotics-textbook-constitution.constitution.prompt.md
tests:
  - None (documentation task)
---

## Prompt

# Constitution: Physical AI & Humanoid Robotics — AI-Native Textbook

You are generating the official textbook titled:

**"Physical AI & Humanoid Robotics — Bridging Digital Intelligence with the Physical World."**

This project must follow the **Spec-Kit Plus methodology**, using:

- **/sp.specs** → to define the entire structure and chapter hierarchy
- **/sp.plan** → to break down each chapter into weekly planning and sub-sections
- **/sp.tasks** → to generate granular tasks that Claude Code will execute
- **Claude Code** → to write content, code examples, diagrams, workflows, and Docusaurus-ready files

---

## **🎯 Master Requirements (Must Always Be Followed)**

### **1. Complete Book Structure (Docusaurus-Ready)**
The book must map **exactly** to the official course curriculum:

### **📦 Modules**
1. **Module 1 — ROS 2 Fundamentals**
2. **Module 2 — Digital Twin Simulation (Gazebo & Unity)**
3. **Module 3 — NVIDIA Isaac Platform**
4. **Module 4 — Vision-Language-Action Robotics**
5. **Capstone — Autonomous Humanoid Robot System**

### **📚 Book Must Include**
- Weekly breakdowns
- Hardware requirements
- Lab architecture diagrams
- ROS 2 hands-on projects
- Isaac workflows and pipelines
- VLA (Vision-Language-Action) robotics pipelines
- Assessments & quizzes
- Step-by-step project tutorials
- Deployment guides
- High-quality diagrams using Claude Code
- All content fully formatted for **Docusaurus v3**

---

## **2. Integrated RAG Chatbot (Mandatory Requirement)**

You must build and embed a **Retrieval-Augmented Generation (RAG) chatbot** into the book using:

- **OpenAI Agents / ChatKit SDK**
- **FastAPI backend**
- **Neon Serverless Postgres** (for logs + user history)
- **Qdrant Cloud Free Tier** (for vector embeddings)

### **Chatbot Abilities**
- Answer questions **only from the book's content**
- Support **"question on selected text"**
- Fully embedded inside the Docusaurus site
- Provide citations
- Dark mode + light mode friendly

---

## **3. Bilingual Feature (Automatic Urdu Translation)**

Every chapter must include:

- A button at the top: **"Translate to Urdu"**
- When pressed, it shows the **Urdu translation of the chapter**
- Urdu must be clear, formal, and educational

This feature must be included at the **spec**, **plan**, **tasks**, and **code** level.

---

## **4. Required Output Format**
Everything generated must be:

- Structured
- Consistent
- Technically accurate
- Built using Docusaurus v3
- Following Spec-Kit Plus methodology

## Response snapshot

Successfully created the project constitution at `.specify/memory/constitution.md` (Version 1.0.0).

**Core Principles Established:**

1. **Educational Content First** - Learning objectives drive all content decisions
2. **Docusaurus-Native Structure** (NON-NEGOTIABLE) - All content must be valid MDX with proper frontmatter
3. **Bilingual Support (English + Urdu)** - UI toggle for high-quality Urdu translations
4. **RAG Chatbot Integration** (MANDATORY) - OpenAI Agents, FastAPI, Neon Postgres, Qdrant vector DB
5. **Module-Driven Organization** - Strict 5-module curriculum mapping (ROS 2, Gazebo/Unity, Isaac, VLA, Capstone)
6. **Code Quality & Reproducibility** - All code tested, versioned, documented, error-handled
7. **Visual Learning** - Diagrams required for complex concepts (Mermaid.js, PlantUML, Excalidraw)
8. **Incremental Validation** - Spec-first, review gates, user testing, build validation, link checking

**Technical Standards Defined:**
- ROS 2 Humble Hawksbill (LTS)
- Python 3.10+
- Docusaurus 3.0+, React 18+, Tailwind CSS
- FastAPI, Pydantic 2.0+
- Qdrant Cloud, OpenAI embeddings
- Performance benchmarks: <2min builds, <3s page loads, <5s chatbot responses

**Workflow Established:**
1. Spec Phase (`/sp.specify`) - Define scope, learning objectives, prerequisites
2. Plan Phase (`/sp.plan`) - Research, design examples, plan diagrams
3. Tasks Phase (`/sp.tasks`) - Atomic tasks with dependencies
4. Implementation (`/sp.implement`) - Write MDX, create diagrams, test code, add translations
5. Validation - Build checks, code testing, link verification
6. Review & Merge - Automated checks, peer review, deployment

**Governance Rules:**
- Constitution supersedes all practices
- Amendments require justification, approval, version bump
- PHRs mandatory for all AI-assisted work (routed to constitution/, feature/, or general/)
- ADRs suggested for architecturally significant decisions (requires user consent)
- Compliance reviews: pre-merge checks, monthly audits, quarterly retrospectives

## Outcome

- ✅ Impact: Project constitution established with 8 core principles, comprehensive technical standards, and clear governance rules. Ready to guide all textbook development work.
- 🧪 Tests: None (documentation task - constitution itself serves as validation criteria for all future work)
- 📁 Files: Created `.specify/memory/constitution.md` (version 1.0.0) and this PHR
- 🔁 Next prompts:
  - `/sp.specify` to define the first module/chapter structure
  - `/sp.plan` to design content for specific modules
  - Create ADRs for key architectural decisions (chatbot architecture, translation strategy, diagram tooling)
- 🧠 Reflection: Constitution balances educational rigor with technical excellence. The 8 principles create clear guardrails while the governance section ensures adaptability. Key innovation: mandatory bilingual support and RAG chatbot integration differentiate this from traditional textbooks.

## Evaluation notes (flywheel)

- Failure modes observed: None - initial constitution creation
- Graders run and results (PASS/FAIL): Manual review - PASS (all placeholders replaced, principles clearly stated, rationale provided)
- Prompt variant (if applicable): N/A - initial creation
- Next experiment (smallest change to try): Monitor first few specs/plans to validate if constitution principles are clear enough, or if they need more concrete examples/checklists
