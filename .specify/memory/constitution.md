<!--
Sync Impact Report (Version 1.0.0):
- Initial constitution created for Physical AI & Humanoid Robotics textbook project
- Version: 1.0.0 (new project)
- Ratification: 2025-12-10
- Last Amended: 2025-12-10
- Principles Defined: 8 core principles tailored for educational content creation
- Templates Status:
  ✅ spec-template.md - aligned with educational content structure
  ✅ plan-template.md - aligned with module and chapter planning
  ✅ tasks-template.md - aligned with content creation and technical implementation tasks
- Follow-up items: None
-->

# Physical AI & Humanoid Robotics — Textbook Constitution

## Core Principles

### I. Educational Content First

Every piece of content must serve a clear learning objective. Content must be:
- **Pedagogically sound**: Progresses from fundamentals to advanced topics
- **Hands-on focused**: Theory paired with practical exercises and code examples
- **Assessment-driven**: Each module includes quizzes, labs, and project milestones
- **Independently testable**: Each chapter can be validated for completeness and accuracy

**Rationale**: This is an educational textbook, not a reference manual. Learning outcomes drive all content decisions.

### II. Docusaurus-Native Structure (NON-NEGOTIABLE)

All content MUST be structured for Docusaurus v3:
- Proper frontmatter with metadata (title, description, sidebar_position)
- MDX format for interactive components
- Sidebar navigation matching course module hierarchy
- Assets in static/ directory with proper paths
- No HTML-only content; all markup must be valid MDX

**Rationale**: The textbook is delivered as a Docusaurus site. Non-conformant content breaks builds and navigation.

### III. Bilingual Support (English + Urdu)

Every chapter MUST support bilingual delivery:
- Original content in clear, technical English
- High-quality Urdu translation available via UI toggle
- Urdu text must be formal, educational, and technically accurate
- Translation integrated at component level, not as separate files
- Both languages use identical structure and formatting

**Rationale**: Accessibility to Urdu-speaking learners is a core project requirement and differentiator.

### IV. RAG Chatbot Integration (MANDATORY)

The textbook MUST include an embedded RAG (Retrieval-Augmented Generation) chatbot:
- **Technology stack**: OpenAI Agents/ChatKit SDK, FastAPI, Neon Serverless Postgres, Qdrant Cloud
- **Scope**: Answers questions strictly from book content (no external knowledge)
- **Features**: Text selection queries, citation references, conversation history
- **UI/UX**: Dark/light mode compatible, non-intrusive placement, accessible via keyboard
- **Privacy**: User queries logged to Postgres; no PII stored without consent

**Rationale**: AI-assisted learning is core to the "AI-Native Textbook" vision. The chatbot provides personalized guidance.

### V. Module-Driven Organization

Content hierarchy strictly follows the 5-module curriculum:
1. **Module 1**: ROS 2 Fundamentals
2. **Module 2**: Digital Twin Simulation (Gazebo & Unity)
3. **Module 3**: NVIDIA Isaac Platform
4. **Module 4**: Vision-Language-Action Robotics
5. **Capstone**: Autonomous Humanoid Robot System

Each module contains:
- Weekly breakdowns with learning objectives
- Hands-on labs with hardware/software requirements
- Architecture diagrams (Mermaid.js or PlantUML)
- Code examples (Python, ROS 2, YAML configs)
- Assessments (quizzes, project milestones)

**Rationale**: The textbook maps directly to the official course curriculum. Deviation creates learner confusion.

### VI. Code Quality & Reproducibility

All code examples and tutorials MUST be:
- **Tested**: Every code block has been validated in the target environment
- **Versioned**: Explicit dependency versions (ROS 2 Humble, Python 3.10+, Isaac Sim 2023.1.1)
- **Documented**: Inline comments explaining non-obvious logic
- **Self-contained**: Can be copy-pasted and run with minimal setup (or clear setup instructions)
- **Error-handled**: Shows proper error handling patterns, not just happy paths

**Rationale**: Broken or untested code destroys learner trust and wastes hours debugging.

### VII. Visual Learning (Diagrams & Media)

Every complex concept MUST include visual aids:
- **System architecture**: Block diagrams showing component interactions
- **Data flow**: Sequence diagrams for ROS 2 topics, services, actions
- **Hardware setup**: Photos/diagrams of physical robot configurations
- **Simulation**: Screenshots from Gazebo/Unity/Isaac Sim showing expected outputs
- **Deployment**: Flowcharts for deployment pipelines and workflows

Generated diagrams use:
- Mermaid.js (preferred for simple diagrams)
- PlantUML (for complex UML)
- Excalidraw exports (for hand-drawn style explanations)

**Rationale**: Robotics and AI are visual domains. Text-only explanations fail to convey spatial and system relationships.

### VIII. Incremental Validation (Test as You Build)

Content creation follows a test-first approach:
- **Spec-first**: Define learning objectives and acceptance criteria before writing
- **Review gates**: Each chapter reviewed for technical accuracy before publication
- **User testing**: Sample exercises validated by target learners (students/practitioners)
- **Build validation**: Docusaurus builds successfully with no warnings
- **Link checking**: All internal and external links functional

**Rationale**: Catching errors early prevents compounding issues and rework across dependent chapters.

## Technical Standards

### Dependency Management

- **ROS 2**: Humble Hawksbill (LTS) as baseline; note Jazzy/Rolling differences where applicable
- **Python**: 3.10+ (match ROS 2 Humble requirements)
- **Simulation**: Gazebo Classic 11 or Gazebo Fortress; Unity 2022 LTS; Isaac Sim 2023.1.1+
- **AI/ML**: PyTorch 2.0+, Transformers 4.30+, NVIDIA TAO Toolkit 5.0+
- **Frontend**: React 18+, Docusaurus 3.0+, Tailwind CSS 3.0+
- **Backend (chatbot)**: FastAPI 0.100+, Uvicorn, Pydantic 2.0+
- **Vector DB**: Qdrant Cloud (free tier), embedding model: OpenAI text-embedding-3-small

All dependencies declared in:
- `requirements.txt` (Python packages)
- `package.json` (Node/Docusaurus)
- Environment setup scripts (ROS 2, Isaac Sim)

### Hardware Requirements

Textbook MUST document hardware requirements for each module:
- **Minimal setup**: Laptop specs (CPU, GPU, RAM, storage) for simulation-only
- **Recommended setup**: Workstation specs for full Isaac Sim + hardware integration
- **Physical robots**: Supported platforms (Unitree G1, custom humanoid kits)
- **Sensors**: Cameras, LiDAR, IMUs with specific models/specs
- **Compute**: Jetson Orin, edge TPUs if applicable

### Security & Privacy

- **No hardcoded secrets**: API keys, database credentials via environment variables only
- **Chatbot privacy**: Clear disclosure of data logging; opt-out mechanism
- **External dependencies**: Only trusted sources (ROS.org, NVIDIA NGC, official GitHub repos)
- **Code safety**: No `eval()`, `exec()`, or unsafe deserialization in examples

### Performance Benchmarks

- **Docusaurus build**: <2 minutes for full site
- **Page load**: <3 seconds for content pages (excluding interactive 3D embeds)
- **Chatbot response**: <5 seconds for typical queries (excluding cold starts)
- **Image optimization**: <500KB per image; WebP format preferred

## Development Workflow

### Content Creation Process

1. **Spec Phase** (`/sp.specify`):
   - Define module/chapter scope
   - List learning objectives (measurable, e.g., "Student can write a ROS 2 publisher node")
   - Identify prerequisite knowledge
   - Draft assessment criteria

2. **Plan Phase** (`/sp.plan`):
   - Research technical content (ROS 2 docs, Isaac Sim guides)
   - Design code examples and labs
   - Plan diagram requirements
   - Identify dependencies (software, hardware, prior chapters)

3. **Tasks Phase** (`/sp.tasks`):
   - Break chapter into atomic tasks (write section X, create diagram Y, test code Z)
   - Assign task order (dependencies, e.g., code example before explanation)
   - Flag parallel work (independent sections)

4. **Implementation** (`/sp.implement`):
   - Write MDX content following Docusaurus conventions
   - Create diagrams (Mermaid/PlantUML source committed)
   - Write and test all code examples
   - Add Urdu translation strings
   - Integrate chatbot context (if new concepts introduced)

5. **Validation**:
   - Build Docusaurus site locally (no errors/warnings)
   - Test all code snippets in target environment
   - Verify all links and images load
   - Run through chapter as a learner (self-review)

6. **Review & Merge**:
   - Create PR with chapter content
   - Automated checks (build, link validation, linting)
   - Peer review (technical accuracy, pedagogical clarity)
   - Merge to main; deploy to staging

### Git Workflow

- **Branch naming**: `module-X-chapter-Y-topic` (e.g., `module-1-chapter-3-ros2-nodes`)
- **Commit messages**: Conventional Commits format (`docs: add ROS 2 publisher tutorial`)
- **PR requirements**:
  - Description links to spec/plan
  - Screenshots for UI changes (chatbot, diagrams)
  - Checklist: code tested, build passes, links checked
- **No force-push** to main; squash merges allowed

### Review Gates

- **Pre-merge**:
  - Technical accuracy verified (code runs, facts correct)
  - Pedagogical review (learning objectives met, flow logical)
  - Language review (grammar, clarity; Urdu translation quality)
  - Build successful (Docusaurus, no console errors)

- **Post-merge**:
  - Staging deployment review (visual QA)
  - User testing (sample exercises attempted by test learners)
  - Feedback integration (iterative improvements)

## Quality Assurance

### Acceptance Criteria (Per Chapter)

- [ ] Learning objectives clearly stated and measurable
- [ ] All code examples tested and functional
- [ ] At least one diagram/visual aid for complex concepts
- [ ] Urdu translation complete and reviewed
- [ ] Assessment questions or exercises included
- [ ] Frontmatter metadata correct (title, description, sidebar_position)
- [ ] All links functional (internal chapter refs, external docs)
- [ ] Docusaurus build successful with zero warnings
- [ ] Chatbot context updated (if new terminology introduced)

### Non-Functional Requirements

- **Accessibility**: WCAG 2.1 AA compliance (alt text, heading hierarchy, keyboard nav)
- **Mobile-friendly**: Responsive design; content readable on tablets/phones
- **SEO**: Proper meta tags, semantic HTML, Open Graph tags
- **Load time**: <3s on 4G connection for content pages

### Error Handling

- **Broken code**: Never commit untested code; use CI checks to catch Python/ROS 2 errors
- **Missing assets**: 404 images break trust; validate asset paths before commit
- **Outdated links**: External links decay; quarterly review and update cycle
- **Translation gaps**: Missing Urdu sections flagged automatically; no partial translations

## Governance

### Constitution Authority

This constitution supersedes all informal practices and preferences. Any deviation requires:
1. **Documented justification**: Why the principle doesn't apply (file in `history/adr/`)
2. **Explicit approval**: Reviewed and accepted by project lead
3. **Migration plan**: How to bring existing content into compliance (if retroactive)

### Amendment Process

1. **Proposal**: Submit PR updating constitution with rationale
2. **Impact analysis**: Identify affected templates, existing content, workflows
3. **Version bump**:
   - MAJOR: Breaking changes (remove/redefine principle)
   - MINOR: Add new principle or expand existing
   - PATCH: Clarification, typo fixes
4. **Approval**: Requires consensus from core team
5. **Propagation**: Update all templates and dependent docs

### Compliance Reviews

- **Pre-merge**: Every PR checked against constitution (automated + human review)
- **Monthly audit**: Random sample of chapters reviewed for compliance
- **Quarterly retrospective**: Assess if principles still serve project goals; propose amendments

### Complexity Justification

If violating a principle (e.g., exceeding performance budget, skipping a test):
1. Document in `history/adr/<decision-title>.md`
2. Explain simpler alternative and why rejected
3. Link ADR from relevant spec/plan
4. Tag as technical debt if temporary workaround

### Prompt History Records (PHRs)

All AI-assisted work MUST generate a PHR:
- **Location**: `history/prompts/constitution/`, `history/prompts/<feature-name>/`, `history/prompts/general/`
- **Trigger**: After every user request (implementation, planning, debugging)
- **Required fields**: ID, title, stage, date, prompt text (verbatim), response summary, files changed
- **Validation**: No unresolved placeholders; full user input captured

### Architectural Decision Records (ADRs)

For significant decisions during planning/tasks:
- **Test**: Impact (long-term?), Alternatives (multiple options?), Scope (cross-cutting?)
- **Suggestion**: "📋 Architectural decision detected: <brief> — Document reasoning and tradeoffs? Run `/sp.adr <title>`"
- **Never auto-create**: Always wait for user consent
- **Grouping**: Related decisions (e.g., "ROS 2 stack selection") in one ADR

---

**Version**: 1.0.0 | **Ratified**: 2025-12-10 | **Last Amended**: 2025-12-10
