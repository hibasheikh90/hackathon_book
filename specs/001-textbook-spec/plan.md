# Implementation Plan: Physical AI & Humanoid Robotics — AI-Native Textbook

**Branch**: `001-textbook-spec` | **Date**: 2025-12-10 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-textbook-spec/spec.md`

## Summary

This plan architects the complete implementation of an AI-native textbook covering Physical AI and Humanoid Robotics. The textbook will be delivered as a Docusaurus v3 static site with integrated RAG chatbot (OpenAI Agents + FastAPI + Qdrant + Neon Postgres), bilingual support (English/Urdu), and comprehensive hands-on labs.

**Primary Requirement**: Create 5 modules (32 total chapters) with learning objectives, code examples, diagrams, labs, and assessments covering ROS 2 Fundamentals → Digital Twin Simulation → NVIDIA Isaac Platform → Vision-Language-Action Robotics → Autonomous Humanoid Capstone.

**Technical Approach**:
1. Build Docusaurus v3 frontend with custom theme for bilingual toggle and chatbot integration
2. Develop FastAPI backend microservice for RAG chatbot with Qdrant vector search
3. Author module content incrementally (Module 1 first), validating each chapter before proceeding
4. Generate diagrams using Mermaid.js and PlantUML embedded in MDX
5. Test all code examples in ROS 2 Humble + Ubuntu 22.04 environment

## Technical Context

**Language/Version**:
- **Backend (Chatbot)**: Python 3.10+ (matches ROS 2 Humble requirements)
- **Frontend (Docusaurus)**: Node.js 18+, React 18+
- **Content**: MDX (Markdown + JSX), Python code examples

**Primary Dependencies**:
- **Frontend**: Docusaurus 3.0+, React 18+, Tailwind CSS 3.0+, Mermaid.js
- **Backend**: FastAPI 0.100+, Uvicorn, Pydantic 2.0+, OpenAI SDK, Qdrant Client, Psycopg3
- **ROS 2**: Humble Hawksbill (LTS), rclpy, common ROS 2 packages
- **Simulation**: Gazebo Classic 11, Unity 2022 LTS, NVIDIA Isaac Sim 2023.1.1+

**Storage**:
- **Content**: Static MDX files in Git repository
- **Chatbot Vectors**: Qdrant Cloud (free tier: 1GB, 100k vectors)
- **Conversation Logs**: Neon Serverless Postgres (free tier: 0.5GB)
- **User Progress**: localStorage (browser-side, no backend persistence)

**Testing**:
- **Content**: Manual peer review + automated link checking + Docusaurus build validation
- **Code Examples**: pytest for Python ROS 2 code, manual testing in Humble environment
- **Backend API**: pytest + FastAPI TestClient for chatbot endpoints
- **Frontend**: Manual testing for bilingual toggle, chatbot UI, responsive design

**Target Platform**:
- **Frontend**: Static site hosted on Vercel/Netlify (CDN, global edge)
- **Backend**: Railway or Render (containerized FastAPI service)
- **Content Development**: Ubuntu 22.04 LTS (ROS 2 Humble native environment)

**Project Type**: Web application (static frontend + API backend)

**Performance Goals**:
- Docusaurus build: <2 minutes for full 32-chapter site
- Page load time: <3 seconds on 4G connection (Lighthouse score >90)
- Chatbot response: <5 seconds for 90th percentile queries
- Vector search: <500ms for top-5 retrieval from Qdrant

**Constraints**:
- Code examples MUST run successfully on ROS 2 Humble + Ubuntu 22.04
- All content MUST have Urdu translation at launch (100% completeness)
- Chatbot MUST only answer from textbook content (no external knowledge hallucination)
- Zero broken internal links at build time (automated check enforced)
- WCAG 2.1 AA accessibility compliance (keyboard nav, screen readers, alt text)

**Scale/Scope**:
- 5 modules, 32 chapters, ~100,000 words of content
- ~100 code examples (Python, YAML, launch files)
- ~80 diagrams (Mermaid.js, PlantUML)
- ~50 hands-on labs with validation tests
- ~200 quiz questions across modules
- Chatbot: ~500-1000 embedded chunks, support 1000 concurrent users

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

✅ **Educational Content First**: Plan prioritizes learning objectives for each chapter before technical content
✅ **Docusaurus-Native Structure**: All content designed as MDX with proper frontmatter
✅ **Bilingual Support**: Translation workflow planned for every chapter (English → Urdu)
✅ **RAG Chatbot Integration**: FastAPI backend + Qdrant + Neon architecture designed
✅ **Module-Driven Organization**: Plan follows exact 5-module curriculum from spec
✅ **Code Quality & Reproducibility**: All code examples include testing strategy
✅ **Visual Learning**: Diagrams planned for each complex concept (Mermaid.js/PlantUML)
✅ **Incremental Validation**: Each module validated before next module begins

**Constitution Compliance**: PASS. No violations detected.

## Project Structure

### Documentation (this feature)

```text
specs/001-textbook-spec/
├── spec.md              # Feature specification (COMPLETED)
├── plan.md              # This file - implementation plan (IN PROGRESS)
├── tasks.md             # Phase 2 output (/sp.tasks command - NOT YET CREATED)
└── research/            # Supporting research artifacts
    ├── ros2-concepts.md       # ROS 2 core concepts research
    ├── isaac-sim-apis.md      # NVIDIA Isaac API documentation
    └── vla-frameworks.md      # Vision-Language-Action frameworks survey
```

### Source Code (repository root)

```text
hackathon_book/
├── docs/                          # Docusaurus content (MDX files)
│   ├── module-1-ros2/             # Module 1: ROS 2 Fundamentals
│   │   ├── week-1/
│   │   │   ├── chapter-1-intro.mdx
│   │   │   └── chapter-2-setup.mdx
│   │   ├── week-2/
│   │   │   ├── chapter-3-nodes.mdx
│   │   │   └── chapter-4-topics.mdx
│   │   ├── week-3/
│   │   │   ├── chapter-5-services.mdx
│   │   │   └── chapter-6-actions.mdx
│   │   ├── week-4/
│   │   │   ├── chapter-7-parameters.mdx
│   │   │   └── chapter-8-launch.mdx
│   │   └── module-1-assessment.mdx
│   ├── module-2-simulation/       # Module 2: Digital Twin Simulation
│   ├── module-3-isaac/            # Module 3: NVIDIA Isaac Platform
│   ├── module-4-vla/              # Module 4: Vision-Language-Action
│   ├── module-5-capstone/         # Module 5: Capstone Project
│   └── intro.mdx                  # Homepage
│
├── static/                        # Static assets
│   ├── img/
│   │   ├── module-1/              # Diagrams, screenshots for Module 1
│   │   ├── module-2/
│   │   └── ...
│   └── code-examples/             # Downloadable code packages
│       ├── module-1-examples.zip
│       └── ...
│
├── src/                           # Docusaurus theme customization
│   ├── components/
│   │   ├── ChatbotWidget.tsx     # RAG chatbot UI component
│   │   ├── LanguageToggle.tsx    # English/Urdu toggle button
│   │   ├── CodeBlockWithCopy.tsx # Enhanced code block with copy button
│   │   └── ProgressTracker.tsx   # Chapter completion tracking
│   ├── theme/                     # Docusaurus theme overrides
│   └── css/
│       ├── custom.css             # Global styles
│       └── urdu.css               # RTL styles for Urdu content
│
├── i18n/                          # Internationalization files
│   └── ur/                        # Urdu translations
│       ├── docusaurus-plugin-content-docs/
│       │   └── current/           # Translated MDX files mirror structure
│       └── code.json              # UI string translations
│
├── backend/                       # FastAPI chatbot backend (separate service)
│   ├── src/
│   │   ├── main.py               # FastAPI app entry point
│   │   ├── api/
│   │   │   ├── chat.py           # Chat endpoint (/api/v1/chat)
│   │   │   └── health.py         # Health check endpoint
│   │   ├── services/
│   │   │   ├── embeddings.py    # OpenAI embedding generation
│   │   │   ├── retrieval.py     # Qdrant vector search
│   │   │   └── llm.py            # OpenAI chat completion
│   │   ├── models/
│   │   │   ├── chat.py           # Pydantic models for chat requests/responses
│   │   │   └── database.py       # SQLAlchemy models for Postgres
│   │   └── db/
│   │       └── postgres.py       # Neon Postgres connection
│   ├── tests/
│   │   ├── test_chat_api.py
│   │   └── test_retrieval.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env.example
│
├── scripts/                       # Utility scripts
│   ├── build-embeddings.py       # Generate embeddings for all chapters
│   ├── validate-links.py         # Check for broken links
│   ├── validate-translations.py  # Ensure 100% Urdu translation completeness
│   └── test-code-examples.sh     # Run all ROS 2 code examples
│
├── .github/
│   └── workflows/
│       ├── build-docusaurus.yml  # CI: Build and deploy static site
│       ├── test-backend.yml      # CI: Test FastAPI backend
│       └── validate-content.yml  # CI: Link checking, translation validation
│
├── docusaurus.config.js          # Docusaurus configuration
├── sidebars.js                   # Sidebar navigation structure
├── package.json                  # Node.js dependencies
└── README.md                     # Project documentation
```

**Structure Decision**: Selected **Web application** structure with separate `docs/` (Docusaurus frontend) and `backend/` (FastAPI service) directories. This separation allows independent deployment: static site on CDN (Vercel/Netlify) and API backend on Railway/Render. Content is organized by module and week to match curriculum structure.

## Complexity Tracking

No constitution violations detected. All architectural decisions align with project principles.

---

# Module 1: ROS 2 Fundamentals (4 Weeks, 8 Chapters)

## Module Overview

**Duration**: 4 weeks
**Total Chapters**: 8 (2 chapters per week)
**Prerequisites**:
- Basic Python programming (variables, functions, classes)
- Linux command-line familiarity (cd, ls, mkdir)
- Basic understanding of software processes and inter-process communication

**Module Learning Objectives**:
By the end of Module 1, students will be able to:
1. Install and configure ROS 2 Humble Hawksbill on Ubuntu 22.04
2. Create ROS 2 packages using Python and colcon build system
3. Write publisher and subscriber nodes for asynchronous communication
4. Implement service servers and clients for synchronous request-response patterns
5. Design action servers and clients for long-running, preemptable tasks
6. Configure and use parameters for runtime node customization
7. Create launch files to start multiple nodes with complex configurations
8. Debug ROS 2 systems using command-line tools (ros2 topic, ros2 service, rqt)

**Hardware Requirements**:
- **Minimum**: Laptop with 4GB RAM, dual-core CPU, 20GB storage, Ubuntu 22.04 LTS
- **Recommended**: 8GB RAM, quad-core CPU, 50GB storage, SSD preferred
- **Alternative**: Cloud VM (AWS EC2 t3.medium, Google Cloud e2-medium) with X11 forwarding for GUI tools

**Software Requirements**:
- Ubuntu 22.04 LTS (Jammy Jellyfish)
- ROS 2 Humble Hawksbill (installed via apt or source)
- Python 3.10+
- VS Code or PyCharm (recommended IDEs with ROS extensions)
- Git for version control

---

## Week 1: ROS 2 Introduction and Environment Setup

### Chapter 1: Introduction to ROS 2 and Physical AI

**File**: `docs/module-1-ros2/week-1/chapter-1-intro.mdx`
**Estimated Reading Time**: 45 minutes
**Sidebar Position**: 1

#### Learning Objectives
- LO-1.1.1: Explain what ROS 2 is and how it differs from ROS 1
- LO-1.1.2: Describe the role of ROS 2 in Physical AI and robotics systems
- LO-1.1.3: Identify real-world applications of ROS 2 in humanoid robotics
- LO-1.1.4: Understand the ROS 2 communication paradigms (topics, services, actions)

#### Content Outline
1. **What is Physical AI?** (500 words)
   - Definition: AI systems that interact with physical world
   - Examples: Humanoid robots, autonomous vehicles, robotic arms
   - Contrast with digital-only AI (chatbots, recommendation systems)

2. **Introduction to ROS 2** (800 words)
   - History: ROS 1 (2007) → ROS 2 (2017) → Humble (2022)
   - Why ROS 2? (real-time, multi-robot, production-ready)
   - Core concepts: Nodes, topics, services, actions, parameters
   - ROS 2 architecture diagram (DDS middleware layer)

3. **ROS 2 in Humanoid Robotics** (600 words)
   - Case studies: Boston Dynamics (Spot, Atlas), Agility Robotics (Digit), Unitree (G1)
   - ROS 2 packages for humanoid control (ros2_control, MoveIt 2)
   - Industry adoption (NASA, automotive, healthcare)

4. **Course Roadmap** (300 words)
   - Module overview: ROS 2 → Simulation → Isaac → VLA → Capstone
   - Expected time commitment (10-15 hours/week)
   - Assessment structure (quizzes, labs, capstone project)

#### Diagrams
1. **Physical AI Landscape** (Mermaid.js mindmap)
   - Central node: Physical AI
   - Branches: Perception (vision, sensors), Reasoning (planning, learning), Action (control, manipulation)

2. **ROS 2 Architecture** (Mermaid.js block diagram)
   - Layers: Application (nodes) → RCL (client libraries) → DDS (middleware) → OS (Linux/Windows)

3. **Humanoid Robot ROS 2 Stack** (Mermaid.js flowchart)
   - Sensors (cameras, IMU, force sensors) → Perception nodes → Planning nodes → Control nodes → Actuators (motors)

#### Code Examples
*None for this introductory chapter (conceptual only)*

#### Lab Exercise
**Lab 1.1: Explore Existing ROS 2 Robots (Theory)**
- **Objective**: Research and document one real-world ROS 2 robot
- **Instructions**:
  1. Choose a robot from provided list (Spot, Digit, TurtleBot 3, etc.)
  2. Research its ROS 2 packages (GitHub repos)
  3. Write 300-word summary: hardware specs, ROS 2 nodes used, key capabilities
- **Deliverable**: Markdown document uploaded to course forum
- **Time**: 30 minutes

#### Assessment
**Quiz 1.1: ROS 2 Concepts (5 questions)**
1. What is the primary advantage of ROS 2 over ROS 1? (Multiple choice)
   - A) Better graphics support
   - B) Real-time capabilities and DDS middleware ✓
   - C) Easier installation
   - D) Requires less memory

2. Which communication pattern is best for sending sensor data continuously? (Multiple choice)
   - A) Services
   - B) Actions
   - C) Topics ✓
   - D) Parameters

3. True or False: ROS 2 can only run on Linux. (False - also Windows, macOS)

4. What is Physical AI? (Short answer - 50 words)
   - *Expected answer*: AI systems that interact with and manipulate the physical world through sensors and actuators, such as robots and autonomous vehicles.

5. Name two ROS 2 packages used in humanoid robotics. (Short answer)
   - *Expected answers*: ros2_control, MoveIt 2, navigation2, tf2, etc.

#### Urdu Translation Notes
- **Key terms to preserve in English**: ROS 2, Physical AI, DDS, middleware, nodes, topics
- **RTL considerations**: Diagrams remain LTR, but captions translated
- **Cultural context**: Use local examples (e.g., "جیسے پاکستان میں صنعتی روبوٹس" - "like industrial robots in Pakistan")

#### What's Next
→ Chapter 2: Installing ROS 2 Humble on Ubuntu 22.04

---

### Chapter 2: Installing and Configuring ROS 2 Humble

**File**: `docs/module-1-ros2/week-1/chapter-2-setup.mdx`
**Estimated Reading Time**: 60 minutes (+ 30 minutes hands-on installation)
**Sidebar Position**: 2

#### Learning Objectives
- LO-1.2.1: Install ROS 2 Humble Hawksbill on Ubuntu 22.04 using apt packages
- LO-1.2.2: Configure environment variables (source setup.bash) for ROS 2
- LO-1.2.3: Verify installation using ROS 2 CLI tools (ros2 doctor, ros2 topic list)
- LO-1.2.4: Run demo nodes (talker/listener) to confirm working installation

#### Content Outline
1. **Prerequisites Check** (300 words)
   - Ubuntu 22.04 LTS verification (`lsb_release -a`)
   - Locale setup (UTF-8 encoding requirement)
   - System updates (`sudo apt update && sudo apt upgrade`)

2. **Installing ROS 2 Humble** (1000 words)
   - Step 1: Setup sources and keys
   - Step 2: Install `ros-humble-desktop` package (includes RViz, demos)
   - Step 3: Install development tools (`ros-dev-tools`, `python3-colcon-common-extensions`)
   - Alternative: Docker installation for non-Ubuntu systems
   - Troubleshooting common issues (GPG key errors, package conflicts)

3. **Environment Configuration** (600 words)
   - Sourcing setup script: `. /opt/ros/humble/setup.bash`
   - Adding to `.bashrc` for automatic sourcing
   - Understanding workspace overlays (base ROS 2 vs. user workspace)
   - Setting domain ID for multi-robot systems (`ROS_DOMAIN_ID`)

4. **Verification and Testing** (500 words)
   - Run `ros2 doctor` to check installation health
   - List available topics: `ros2 topic list`
   - Run demo talker: `ros2 run demo_nodes_cpp talker`
   - Run demo listener: `ros2 run demo_nodes_cpp listener` (in second terminal)
   - Inspect message flow with `ros2 topic echo /chatter`

#### Diagrams
1. **Installation Flow** (Mermaid.js flowchart)
   - Start → Check Ubuntu 22.04 → Setup sources → Install ROS 2 → Configure environment → Verify → Done

2. **ROS 2 Workspace Hierarchy** (Mermaid.js tree diagram)
   - Base: `/opt/ros/humble/` (system install)
   - Overlay: `~/ros2_ws/` (user workspace, sourced after base)

#### Code Examples

**Example 1: Complete Installation Script** (bash)
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Setup locale
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

# Setup sources
sudo apt install software-properties-common -y
sudo add-apt-repository universe
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
sudo sh -c 'echo "deb http://packages.ros.org/ros2/ubuntu jammy main" > /etc/apt/sources.list.d/ros2.list'

# Install ROS 2 Humble Desktop
sudo apt update
sudo apt install ros-humble-desktop -y

# Install development tools
sudo apt install python3-colcon-common-extensions python3-rosdep -y

# Initialize rosdep
sudo rosdep init
rosdep update

# Source ROS 2 environment
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc

# Verify installation
ros2 doctor
```

**Example 2: Testing Installation** (bash)
```bash
# Terminal 1: Run talker
ros2 run demo_nodes_cpp talker

# Terminal 2: Run listener
ros2 run demo_nodes_cpp listener

# Terminal 3: Inspect messages
ros2 topic echo /chatter
ros2 topic hz /chatter  # Check publishing frequency
```

#### Lab Exercise
**Lab 1.2: Install ROS 2 and Run Demo Nodes**

**Objective**: Successfully install ROS 2 Humble and verify functionality

**Hardware Requirements**: Ubuntu 22.04 system or VM (4GB RAM minimum)

**Software Prerequisites**: Internet connection for apt packages (~1GB download)

**Step-by-Step Instructions**:
1. Follow installation script from Example 1 above
2. Open three terminals and run talker, listener, topic echo (Example 2)
3. Take screenshot showing all three terminals with output
4. Run `ros2 doctor --report` and save output to text file

**Expected Output**:
- Talker terminal: `[INFO] [timestamp]: Publishing: 'Hello World: X'` (incrementing X)
- Listener terminal: `[INFO] [timestamp]: I heard: 'Hello World: X'`
- Topic echo terminal: Raw message data with `data: "Hello World: X"`

**Validation Test**:
```bash
# Run this command - should show 0 errors
ros2 doctor --report | grep -i error
```

**Common Errors and Solutions**:
- **Error**: "Package 'ros-humble-desktop' has no installation candidate"
  - **Solution**: Check Ubuntu version (`lsb_release -a` should show 22.04), re-add ROS 2 apt repository
- **Error**: "ros2: command not found"
  - **Solution**: Source setup script: `source /opt/ros/humble/setup.bash`
- **Error**: "GPG key error"
  - **Solution**: Re-run apt-key add command with curl

**Deliverable**: Screenshot + doctor report file uploaded to course platform

**Time**: 45 minutes (30 min install + 15 min testing)

#### Assessment
**Quiz 1.2: ROS 2 Installation (5 questions)**
1. Which Ubuntu version is required for ROS 2 Humble? (Multiple choice)
   - A) 20.04 LTS
   - B) 22.04 LTS ✓
   - C) 23.10
   - D) Any Ubuntu version

2. What command sources the ROS 2 environment? (Multiple choice)
   - A) `source /opt/ros/humble/setup.bash` ✓
   - B) `install ros2`
   - C) `ros2 source`
   - D) `export ROS2=humble`

3. What does `ros2 doctor` do? (Short answer)
   - *Expected answer*: Checks ROS 2 installation health and reports warnings/errors about configuration issues.

4. True or False: You need to source setup.bash in every new terminal. (True)

5. What is ROS_DOMAIN_ID used for? (Multiple choice)
   - A) Setting robot name
   - B) Isolating ROS 2 networks ✓
   - C) Configuring internet connection
   - D) Setting log level

#### Urdu Translation Notes
- **Command outputs**: Keep terminal outputs in English (standard practice)
- **Step numbers**: Use Urdu numerals in RTL text (۱، ۲، ۳) but English numerals in code blocks
- **Troubleshooting section**: Ensure error messages remain in English for searchability

#### What's Next
→ Week 2, Chapter 3: Understanding ROS 2 Nodes and Creating Your First Package

---

## Week 2: ROS 2 Nodes and Publisher-Subscriber Communication

### Chapter 3: Understanding ROS 2 Nodes and Creating Packages

**File**: `docs/module-1-ros2/week-2/chapter-3-nodes.mdx`
**Estimated Reading Time**: 50 minutes
**Sidebar Position**: 3

#### Learning Objectives
- LO-1.3.1: Define what a ROS 2 node is and its role in distributed systems
- LO-1.3.2: Create a ROS 2 workspace and package using colcon and `ros2 pkg create`
- LO-1.3.3: Write a minimal Python node that initializes rclpy and spins
- LO-1.3.4: List and inspect running nodes using ROS 2 CLI tools

#### Content Outline
1. **What is a ROS 2 Node?** (600 words)
   - Definition: Independent process that performs computation
   - Node graph concept: Distributed system of cooperating nodes
   - Analogy: Nodes as microservices in robotics
   - Single responsibility principle (one node = one task)

2. **ROS 2 Workspace Structure** (500 words)
   - Workspace anatomy: `src/`, `build/`, `install/`, `log/`
   - Package structure: `package.xml`, `setup.py`, source files
   - Creating workspace: `mkdir -p ~/ros2_ws/src && cd ~/ros2_ws`

3. **Creating Your First Package** (800 words)
   - Using `ros2 pkg create`: `ros2 pkg create --build-type ament_python my_first_package --dependencies rclpy`
   - Understanding `package.xml`: metadata, dependencies, license
   - Understanding `setup.py`: entry points for executables
   - Building with colcon: `colcon build --symlink-install`
   - Sourcing workspace: `. install/setup.bash`

4. **Writing a Minimal Node** (700 words)
   - Node lifecycle: initialize → spin → shutdown
   - `rclpy.init()` and `rclpy.shutdown()`
   - Creating node class: inherit from `rclpy.node.Node`
   - Node constructor: `super().__init__('node_name')`
   - Spinning: `rclpy.spin(node)` to process callbacks

#### Diagrams
1. **ROS 2 Workspace Structure** (Mermaid.js directory tree)
```
ros2_ws/
├── src/                  # Source code (Git-tracked)
│   └── my_first_package/
│       ├── my_first_package/
│       │   └── minimal_node.py
│       ├── package.xml
│       └── setup.py
├── build/                # Build artifacts (ignored)
├── install/              # Installed packages (sourced)
└── log/                  # Build logs (ignored)
```

2. **Node Lifecycle** (Mermaid.js state diagram)
```
[Start] → rclpy.init() → Create Node → rclpy.spin() → [Running] → Ctrl+C → rclpy.shutdown() → [Exit]
```

3. **ROS 2 Graph with Multiple Nodes** (Mermaid.js graph)
```
[Camera Node] → /image_raw topic → [Object Detector Node] → /detections topic → [Robot Controller Node]
```

#### Code Examples

**Example 1: Create Workspace and Package** (bash)
```bash
# Create workspace
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws/src

# Create package with rclpy dependency
ros2 pkg create --build-type ament_python my_first_package --dependencies rclpy

# Navigate to workspace root
cd ~/ros2_ws

# Build package
colcon build --symlink-install

# Source workspace (add to ~/.bashrc for persistence)
source install/setup.bash
```

**Example 2: Minimal Python Node** (Python)

*File*: `~/ros2_ws/src/my_first_package/my_first_package/minimal_node.py`
```python
#!/usr/bin/env python3
"""
Minimal ROS 2 Node Example
This node demonstrates the basic structure of a ROS 2 node in Python.
"""

import rclpy
from rclpy.node import Node


class MinimalNode(Node):
    """
    A minimal ROS 2 node that does nothing except exist.

    This class inherits from rclpy.node.Node and demonstrates
    the basic initialization pattern for ROS 2 nodes.
    """

    def __init__(self):
        # Initialize parent class with node name
        super().__init__('minimal_node')

        # Log startup message
        self.get_logger().info('Minimal node has started!')

        # Create timer to print message every 2 seconds
        self.timer = self.create_timer(2.0, self.timer_callback)
        self.counter = 0

    def timer_callback(self):
        """Called every 2 seconds by the timer."""
        self.counter += 1
        self.get_logger().info(f'Timer callback executed {self.counter} times')


def main(args=None):
    """Main function to initialize and run the node."""
    # Initialize ROS 2 Python client library
    rclpy.init(args=args)

    # Create node instance
    node = MinimalNode()

    try:
        # Keep node running until Ctrl+C
        rclpy.spin(node)
    except KeyboardInterrupt:
        node.get_logger().info('Keyboard interrupt detected, shutting down...')
    finally:
        # Clean shutdown
        node.destroy_node()
        rclpy.shutdown()


if __name__ == '__main__':
    main()
```

**Example 3: Updated setup.py with Entry Point** (Python)

*File*: `~/ros2_ws/src/my_first_package/setup.py`
```python
from setuptools import setup

package_name = 'my_first_package'

setup(
    name=package_name,
    version='0.0.1',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='Your Name',
    maintainer_email='your.email@example.com',
    description='My first ROS 2 package',
    license='Apache License 2.0',
    tests_require=['pytest'],
    entry_points={
        'console_scripts': [
            # Format: 'executable_name = package.module:function'
            'minimal_node = my_first_package.minimal_node:main',
        ],
    },
)
```

**Example 4: Running and Inspecting Nodes** (bash)
```bash
# Build and source workspace
cd ~/ros2_ws
colcon build --packages-select my_first_package
source install/setup.bash

# Run the node
ros2 run my_first_package minimal_node

# In another terminal, inspect running nodes
ros2 node list  # Should show: /minimal_node

# Get detailed node info
ros2 node info /minimal_node

# View node's logger output
ros2 topic echo /rosout  # Shows all ROS 2 log messages
```

#### Lab Exercise
**Lab 1.3: Create and Run Your First ROS 2 Node**

**Objective**: Create a ROS 2 package and write a node that logs custom messages

**Instructions**:
1. Create workspace and package (Example 1)
2. Write `minimal_node.py` (Example 2) and update `setup.py` (Example 3)
3. Modify the node to log your name instead of "Timer callback executed"
4. Build, run, and inspect the node (Example 4)
5. Take screenshots of:
   - Terminal showing node output
   - `ros2 node list` output
   - `ros2 node info /minimal_node` output

**Extension Challenge** (Optional):
- Add a parameter to control timer interval (default 2.0 seconds)
- Log the parameter value on startup

**Validation Test**:
```bash
# Node should appear in list
ros2 node list | grep minimal_node

# Node should have a timer (shown in node info)
ros2 node info /minimal_node | grep Timer
```

**Deliverable**: Screenshots + modified `minimal_node.py` file

**Time**: 30 minutes

#### Assessment
**Quiz 1.3: ROS 2 Nodes and Packages (6 questions)**
1. What is a ROS 2 node? (Short answer - 30 words)
2. Which directory in a workspace contains source code? (A) src ✓ (B) build (C) install (D) log
3. What does `colcon build --symlink-install` do? (Multiple choice with explanation)
4. True or False: You must source install/setup.bash after building. (True)
5. What does `rclpy.spin()` do? (Short answer)
6. How do you list all running nodes? (A) ros2 node list ✓ (B) ros2 list nodes (C) ros2 show nodes

#### Urdu Translation Notes
- **Code comments**: Translate comments in code blocks to Urdu
- **File paths**: Keep paths like `~/ros2_ws/src` in English (universal Linux convention)
- **Technical terms**: "Node" → "نوڈ", "Package" → "پیکیج", "Workspace" → "ورک اسپیس" (use English terms in parentheses first time)

#### What's Next
→ Chapter 4: Publisher-Subscriber Communication with Topics

---

### Chapter 4: Publisher-Subscriber Communication with Topics

**File**: `docs/module-1-ros2/week-2/chapter-4-topics.mdx`
**Estimated Reading Time**: 60 minutes
**Sidebar Position**: 4

#### Learning Objectives
- LO-1.4.1: Explain the publisher-subscriber pattern and when to use it
- LO-1.4.2: Create a publisher node that sends messages to a topic
- LO-1.4.3: Create a subscriber node that receives messages from a topic
- LO-1.4.4: Use ROS 2 message types (std_msgs, geometry_msgs) appropriately
- LO-1.4.5: Inspect topic data flow using ros2 topic commands

#### Content Outline
1. **Publisher-Subscriber Pattern** (700 words)
   - Concept: Asynchronous, many-to-many communication
   - Use cases: Sensor data streaming, status broadcasts
   - Topics vs. services (when to use each)
   - Message types: Standard messages (std_msgs, geometry_msgs, sensor_msgs)

2. **Creating a Publisher Node** (800 words)
   - Import message type: `from std_msgs.msg import String`
   - Create publisher: `self.create_publisher(String, 'topic_name', queue_size)`
   - Publishing messages: `self.publisher.publish(msg)`
   - Quality of Service (QoS) profiles intro

3. **Creating a Subscriber Node** (700 words)
   - Create subscriber: `self.create_subscription(String, 'topic_name', callback, queue_size)`
   - Callback function: Processes received messages
   - Message access: `msg.data` for String messages

4. **Testing and Debugging Topics** (600 words)
   - `ros2 topic list`: View all active topics
   - `ros2 topic echo /topic_name`: Monitor messages in real-time
   - `ros2 topic hz /topic_name`: Check publishing frequency
   - `ros2 topic info /topic_name`: See publishers and subscribers
   - `ros2 interface show std_msgs/msg/String`: View message structure

#### Diagrams
1. **Publisher-Subscriber Architecture** (Mermaid.js sequence diagram)
```
Publisher Node → Topic (/chatter) → Subscriber Node 1
                              → Subscriber Node 2
```

2. **Message Flow Timeline** (Mermaid.js sequence)
```
Publisher: create_publisher() → publish(msg1) → publish(msg2) → ...
Topic: [queue: msg1, msg2]
Subscriber: create_subscription() → callback(msg1) → callback(msg2) → ...
```

3. **ROS 2 Message Types Hierarchy** (Mermaid.js mindmap)
```
std_msgs: String, Int32, Float64, Bool
geometry_msgs: Point, Pose, Twist, Transform
sensor_msgs: Image, LaserScan, Imu, JointState
```

#### Code Examples

**Example 1: Publisher Node** (Python)

*File*: `~/ros2_ws/src/my_first_package/my_first_package/simple_publisher.py`
```python
#!/usr/bin/env python3
"""
Simple Publisher Node
Publishes string messages to /chatter topic at 2 Hz.
"""

import rclpy
from rclpy.node import Node
from std_msgs.msg import String


class SimplePublisher(Node):
    """Publisher node that sends incrementing messages."""

    def __init__(self):
        super().__init__('simple_publisher')

        # Create publisher for String messages on /chatter topic
        # Queue size of 10 means it can buffer up to 10 messages
        self.publisher_ = self.create_publisher(String, 'chatter', 10)

        # Create timer to publish every 0.5 seconds (2 Hz)
        self.timer = self.create_timer(0.5, self.timer_callback)

        self.counter = 0
        self.get_logger().info('Simple Publisher started, publishing to /chatter')

    def timer_callback(self):
        """Publishes a message every time timer triggers."""
        # Create message
        msg = String()
        msg.data = f'Hello ROS 2! Message #{self.counter}'

        # Publish message
        self.publisher_.publish(msg)

        # Log to terminal
        self.get_logger().info(f'Publishing: "{msg.data}"')

        self.counter += 1


def main(args=None):
    rclpy.init(args=args)
    node = SimplePublisher()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        node.get_logger().info('Publisher shutting down')
    finally:
        node.destroy_node()
        rclpy.shutdown()


if __name__ == '__main__':
    main()
```

**Example 2: Subscriber Node** (Python)

*File*: `~/ros2_ws/src/my_first_package/my_first_package/simple_subscriber.py`
```python
#!/usr/bin/env python3
"""
Simple Subscriber Node
Subscribes to /chatter topic and logs received messages.
"""

import rclpy
from rclpy.node import Node
from std_msgs.msg import String


class SimpleSubscriber(Node):
    """Subscriber node that receives and logs messages."""

    def __init__(self):
        super().__init__('simple_subscriber')

        # Create subscription to String messages on /chatter topic
        # The callback function is called every time a message is received
        self.subscription = self.create_subscription(
            String,
            'chatter',
            self.listener_callback,
            10  # Queue size
        )

        # Prevent unused variable warning
        self.subscription

        self.get_logger().info('Simple Subscriber started, listening to /chatter')

    def listener_callback(self, msg):
        """
        Callback function executed when message received.

        Args:
            msg (String): The received message object
        """
        # Access message data and log it
        self.get_logger().info(f'I heard: "{msg.data}"')


def main(args=None):
    rclpy.init(args=args)
    node = SimpleSubscriber()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        node.get_logger().info('Subscriber shutting down')
    finally:
        node.destroy_node()
        rclpy.shutdown()


if __name__ == '__main__':
    main()
```

**Example 3: Update setup.py with New Entry Points** (Python)

*File*: `~/ros2_ws/src/my_first_package/setup.py` (add to entry_points)
```python
entry_points={
    'console_scripts': [
        'minimal_node = my_first_package.minimal_node:main',
        'simple_publisher = my_first_package.simple_publisher:main',
        'simple_subscriber = my_first_package.simple_subscriber:main',
    ],
},
```

**Example 4: Running Publisher and Subscriber** (bash)
```bash
# Terminal 1: Build and run publisher
cd ~/ros2_ws
colcon build --packages-select my_first_package
source install/setup.bash
ros2 run my_first_package simple_publisher

# Terminal 2: Run subscriber
source ~/ros2_ws/install/setup.bash
ros2 run my_first_package simple_subscriber

# Terminal 3: Inspect topic
ros2 topic list  # Should show: /chatter, /rosout, /parameter_events
ros2 topic echo /chatter  # View raw messages
ros2 topic hz /chatter  # Should show ~2.0 Hz
ros2 topic info /chatter  # Shows 1 publisher, 1 subscriber (+ echo if running)

# View message type definition
ros2 interface show std_msgs/msg/String
```

#### Lab Exercise
**Lab 1.4: Build a Temperature Sensor Simulator**

**Objective**: Create publisher/subscriber nodes for simulated temperature sensor data

**Scenario**: You're building a robot with a temperature sensor. Create a publisher that simulates temperature readings and a subscriber that warns if temperature is too high.

**Instructions**:

**Part 1: Publisher (temp_publisher.py)**
1. Create a node that publishes Float64 messages to `/temperature` topic
2. Generate random temperature values between 20.0 and 40.0 Celsius
3. Publish at 1 Hz (every 1 second)
4. Log each published temperature

**Part 2: Subscriber (temp_monitor.py)**
1. Create a node that subscribes to `/temperature` topic
2. In callback, check if temperature > 35.0
3. If too hot, log WARNING: "Temperature critical: XX.X °C"
4. If normal, log INFO: "Temperature normal: XX.X °C"

**Starter Code Template**:
```python
from std_msgs.msg import Float64
import random

# Publisher
def timer_callback(self):
    temp = random.uniform(20.0, 40.0)  # Random temperature
    msg = Float64()
    msg.data = temp
    self.publisher_.publish(msg)
    self.get_logger().info(f'Publishing temperature: {temp:.1f} °C')

# Subscriber
def temp_callback(self, msg):
    temp = msg.data
    if temp > 35.0:
        self.get_logger().warn(f'Temperature critical: {temp:.1f} °C')
    else:
        self.get_logger().info(f'Temperature normal: {temp:.1f} °C')
```

**Expected Output**:
- Publisher logs: "Publishing temperature: 28.3 °C"
- Subscriber logs: "Temperature normal: 28.3 °C" (or critical if > 35)

**Validation Test**:
```bash
# Check topic type
ros2 topic info /temperature | grep "std_msgs/msg/Float64"

# Check publishing rate (should be ~1 Hz)
ros2 topic hz /temperature
```

**Extension Challenge** (Optional):
- Add a parameter for warning threshold (default 35.0)
- Calculate and log average temperature over last 10 readings

**Deliverable**: Source files (temp_publisher.py, temp_monitor.py) + screenshot showing both nodes running

**Time**: 45 minutes

#### Assessment
**Quiz 1.4: Topics and Pub/Sub (7 questions)**
1. When should you use topics instead of services? (Multiple choice)
   - A) When you need confirmation of receipt
   - B) For continuous sensor data streams ✓
   - C) For request-response interactions
   - D) When order of messages matters

2. What does queue_size=10 mean in create_publisher()? (Short answer)

3. How do you monitor messages on a topic in real-time? (A) ros2 topic echo ✓ (B) ros2 monitor (C) ros2 topic watch

4. True or False: A topic can have multiple publishers and subscribers. (True)

5. What message type would you use for robot velocity commands? (Multiple choice)
   - A) std_msgs/String
   - B) geometry_msgs/Twist ✓
   - C) sensor_msgs/LaserScan
   - D) std_msgs/Float64

6. Write the Python code to create a subscriber to /cmd_vel topic (geometry_msgs/Twist). (Code snippet - 3 lines)

7. What command shows the structure of a message type? (A) ros2 interface show ✓ (B) ros2 msg show (C) ros2 type info

#### Urdu Translation Notes
- **Message types**: Keep message type names in English (e.g., "std_msgs/String" not translated)
- **Code variable names**: Keep in English (e.g., `msg.data`) but translate comments
- **Callback concept**: "کال بیک فنکشن" (callback function) - provide English term in parentheses

#### What's Next
→ Week 3, Chapter 5: Service Servers and Clients for Request-Response Communication

---

## Week 3: Services and Actions

### Chapter 5: Service Servers and Clients

**File**: `docs/module-1-ros2/week-3/chapter-5-services.mdx`
**Estimated Reading Time**: 55 minutes
**Sidebar Position**: 5

#### Learning Objectives
- LO-1.5.1: Understand service communication pattern (synchronous request-response)
- LO-1.5.2: Create a service server that processes requests and returns responses
- LO-1.5.3: Create a service client that sends requests and handles responses
- LO-1.5.4: Use standard service types and create custom service definitions

#### Content Outline
1. **Services vs. Topics** (600 words)
   - When to use services: Request-response interactions (e.g., "What's the battery level?")
   - When to use topics: Continuous data streams (e.g., sensor readings)
   - Synchronous vs. asynchronous communication
   - Use case examples: Configuration queries, computation requests, state queries

2. **Service Architecture** (700 words)
   - Service definition files (.srv format): Request fields + Response fields
   - Standard service types: example_interfaces/srv/AddTwoInts, std_srvs/srv/SetBool
   - Service naming conventions: /namespace/service_name
   - Quality of Service (QoS) for services

3. **Creating a Service Server** (800 words)
   - Import service type: `from example_interfaces.srv import AddTwoInts`
   - Create service: `self.create_service(AddTwoInts, 'add_two_ints', callback)`
   - Service callback: Takes request, returns response
   - Response object construction: `response.sum = request.a + request.b`
   - Error handling in service callbacks

4. **Creating a Service Client** (700 words)
   - Create client: `self.create_client(AddTwoInts, 'add_two_ints')`
   - Wait for service: `client.wait_for_service(timeout_sec=5.0)`
   - Create request object: `request = AddTwoInts.Request()`
   - Call service: `future = client.call_async(request)` (asynchronous)
   - Handle response: Callback or blocking wait

5. **Custom Service Definitions** (500 words)
   - Creating .srv files in package: `srv/ComputeDistance.srv`
   - Request/response format with `---` separator
   - Building interface packages with ament_cmake
   - Using custom services in Python nodes

#### Diagrams
1. **Service Communication Pattern** (Mermaid.js sequence diagram)
```
Client Node → Service Request → Server Node
Server Node → Processes Request
Server Node → Service Response → Client Node
```

2. **Service vs. Topic Comparison** (Mermaid.js table)
```
| Feature      | Topics        | Services      |
|--------------|---------------|---------------|
| Pattern      | Pub/Sub       | Request/Reply |
| Timing       | Asynchronous  | Synchronous   |
| Cardinality  | Many-to-many  | One-to-one    |
| Use Case     | Sensor data   | Queries       |
```

3. **Service File Structure** (Mermaid.js block)
```
# Request fields
int64 a
int64 b
---
# Response fields
int64 sum
```

#### Code Examples

**Example 1: Service Server - Addition Service** (Python)

*File*: `~/ros2_ws/src/my_first_package/my_first_package/add_two_ints_server.py`
```python
#!/usr/bin/env python3
"""
Service Server Example
Provides a service to add two integers.
"""

import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts


class AddTwoIntsServer(Node):
    """Service server that adds two integers."""

    def __init__(self):
        super().__init__('add_two_ints_server')

        # Create service
        self.srv = self.create_service(
            AddTwoInts,
            'add_two_ints',
            self.add_two_ints_callback
        )

        self.get_logger().info('Add Two Ints service is ready')

    def add_two_ints_callback(self, request, response):
        """
        Service callback that processes the request.

        Args:
            request (AddTwoInts.Request): Contains a and b integers
            response (AddTwoInts.Response): Will contain sum

        Returns:
            response with sum calculated
        """
        # Perform calculation
        response.sum = request.a + request.b

        # Log the operation
        self.get_logger().info(
            f'Incoming request: a={request.a}, b={request.b}'
        )
        self.get_logger().info(f'Sending response: sum={response.sum}')

        return response


def main(args=None):
    rclpy.init(args=args)
    node = AddTwoIntsServer()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        node.get_logger().info('Service server shutting down')
    finally:
        node.destroy_node()
        rclpy.shutdown()


if __name__ == '__main__':
    main()
```

**Example 2: Service Client - Synchronous Call** (Python)

*File*: `~/ros2_ws/src/my_first_package/my_first_package/add_two_ints_client.py`
```python
#!/usr/bin/env python3
"""
Service Client Example
Calls the add_two_ints service with command-line arguments.
"""

import sys
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts


class AddTwoIntsClient(Node):
    """Service client that requests addition of two numbers."""

    def __init__(self):
        super().__init__('add_two_ints_client')

        # Create client
        self.client = self.create_client(AddTwoInts, 'add_two_ints')

        # Wait for service to be available
        while not self.client.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('Service not available, waiting...')

    def send_request(self, a, b):
        """
        Send service request with two integers.

        Args:
            a (int): First integer
            b (int): Second integer

        Returns:
            Future object for async response
        """
        # Create request object
        request = AddTwoInts.Request()
        request.a = a
        request.b = b

        self.get_logger().info(f'Sending request: {a} + {b}')

        # Send request asynchronously
        future = self.client.call_async(request)
        return future


def main(args=None):
    rclpy.init(args=args)

    # Parse command-line arguments
    if len(sys.argv) != 3:
        print('Usage: ros2 run my_first_package add_two_ints_client <a> <b>')
        return

    try:
        a = int(sys.argv[1])
        b = int(sys.argv[2])
    except ValueError:
        print('Arguments must be integers')
        return

    node = AddTwoIntsClient()
    future = node.send_request(a, b)

    # Wait for response (blocking)
    rclpy.spin_until_future_complete(node, future)

    if future.result() is not None:
        response = future.result()
        node.get_logger().info(f'Result: {a} + {b} = {response.sum}')
    else:
        node.get_logger().error('Service call failed')

    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

**Example 3: Custom Service Definition** (.srv file)

*File*: `~/ros2_ws/src/my_first_package/srv/ComputeDistance.srv`
```
# Request: Two 2D points
float64 x1
float64 y1
float64 x2
float64 y2
---
# Response: Euclidean distance
float64 distance
```

**Example 4: Using Custom Service in CMakeLists.txt** (CMake)

*Note*: Python packages with custom interfaces need ament_cmake. Add to `CMakeLists.txt`:
```cmake
find_package(rosidl_default_generators REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "srv/ComputeDistance.srv"
)
```

**Example 5: Running Server and Client** (bash)
```bash
# Terminal 1: Start service server
ros2 run my_first_package add_two_ints_server

# Terminal 2: Call service from client
ros2 run my_first_package add_two_ints_client 15 27

# Terminal 3: Call service from command line (no client node needed)
ros2 service call /add_two_ints example_interfaces/srv/AddTwoInts "{a: 10, b: 20}"

# List available services
ros2 service list

# Show service type
ros2 service type /add_two_ints

# View service definition
ros2 interface show example_interfaces/srv/AddTwoInts
```

#### Lab Exercise
**Lab 1.5: Build a Battery Status Service**

**Objective**: Create a service that returns simulated battery status

**Scenario**: You're building a robot that needs to report its battery level on request. Create a service server that returns current battery percentage and a client that queries it.

**Instructions**:

**Part 1: Service Server (battery_server.py)**
1. Create service `/get_battery_status` using std_srvs/srv/Trigger
2. Response should include:
   - success: True
   - message: "Battery level: XX%"
3. Simulate battery drain: Start at 100%, decrease by 1% every 5 seconds
4. If battery < 20%, set success=False and message="Battery critical: XX%"

**Part 2: Service Client (battery_client.py)**
1. Create client that calls `/get_battery_status` service
2. Call service every 3 seconds
3. Log the battery status received
4. If battery critical (success=False), log WARNING

**Starter Code**:
```python
from std_srvs.srv import Trigger
import time

# Server callback
def battery_callback(self, request, response):
    # Calculate battery level (stored in self.battery_level)
    if self.battery_level >= 20:
        response.success = True
        response.message = f"Battery level: {self.battery_level}%"
    else:
        response.success = False
        response.message = f"Battery critical: {self.battery_level}%"
    return response

# Timer to drain battery
def drain_callback(self):
    if self.battery_level > 0:
        self.battery_level -= 1
        self.get_logger().info(f'Battery drained to {self.battery_level}%')
```

**Expected Output**:
- Server logs: "Battery drained to 95%"
- Client logs: "Battery level: 95%"
- Client WARNING when < 20%: "Battery critical: 18%"

**Validation Test**:
```bash
# Check service is running
ros2 service list | grep battery_status

# Call service manually
ros2 service call /get_battery_status std_srvs/srv/Trigger
```

**Extension Challenge**:
- Add a `/charge_battery` service (SetBool) to reset battery to 100%
- Add parameter for battery drain rate

**Deliverable**: Source files (battery_server.py, battery_client.py) + screenshot showing service calls

**Time**: 40 minutes

#### Assessment
**Quiz 1.5: Services (6 questions)**
1. When should you use a service instead of a topic? (Multiple choice)
   - A) For continuous sensor data
   - B) For one-time queries that need a response ✓
   - C) For broadcasting messages to multiple nodes
   - D) When you don't need a response

2. What separates request and response fields in a .srv file? (Multiple choice)
   - A) `+++`
   - B) `---` ✓
   - C) `===`
   - D) Empty line

3. True or False: Service clients must wait for the server to be available. (True)

4. How do you call a service from the command line? (A) ros2 service call ✓ (B) ros2 call service (C) ros2 srv call

5. What does `wait_for_service()` do? (Short answer - 30 words)

6. Write Python code to create a service server for std_srvs/srv/SetBool on topic /enable_motor. (Code snippet - 3 lines)

#### Urdu Translation Notes
- **Request/Response**: "درخواست" (darkhwast) for request, "جواب" (jawab) for response
- **Service definition format**: Keep .srv file syntax in English with Urdu comment explanations
- **Callback pattern**: "سروس کال بیک" with English term in parentheses

#### What's Next
→ Chapter 6: Action Servers and Clients for Long-Running Tasks

### Chapter 6: Action Servers and Clients

**File**: `docs/module-1-ros2/week-3/chapter-6-actions.mdx`
**Estimated Reading Time**: 65 minutes
**Sidebar Position**: 6

#### Learning Objectives
- LO-1.6.1: Understand actions for long-running, preemptable tasks
- LO-1.6.2: Implement action server with goal, feedback, and result
- LO-1.6.3: Implement action client with goal submission and feedback monitoring
- LO-1.6.4: Handle goal preemption and cancellation

#### Content Outline
1. **Actions vs. Services and Topics** (700 words)
   - When to use actions: Long-running tasks with feedback (e.g., "Navigate to waypoint")
   - Three components: Goal, Feedback, Result
   - Preemptable: Client can cancel goal mid-execution
   - Use cases: Navigation, manipulation, trajectory execution
   - Comparison table: Topics (streaming) vs. Services (quick query) vs. Actions (long task)

2. **Action Architecture** (800 words)
   - Action definition files (.action format): Goal + Result + Feedback
   - Standard action types: example_interfaces/action/Fibonacci
   - Action states: IDLE → ACTIVE → SUCCEEDED/ABORTED/CANCELED
   - Goal handle: Unique identifier for each action request
   - Multiple simultaneous goals: Queue management

3. **Creating an Action Server** (900 words)
   - Import action type: `from example_interfaces.action import Fibonacci`
   - Create action server: `ActionServer(self, Fibonacci, 'fibonacci', callback)`
   - Execute callback: Long-running function with goal_handle parameter
   - Publishing feedback: `goal_handle.publish_feedback(feedback_msg)`
   - Setting result: `goal_handle.succeed()` with result message
   - Handling cancellation: Check `goal_handle.is_cancel_requested`

4. **Creating an Action Client** (800 words)
   - Create client: `ActionClient(self, Fibonacci, 'fibonacci')`
   - Wait for server: `client.wait_for_server()`
   - Send goal: `send_goal_async(goal_msg)` returns future
   - Goal response callback: Handle goal acceptance/rejection
   - Feedback callback: Process intermediate feedback messages
   - Result callback: Handle final result when action completes
   - Cancel goal: `cancel_goal_async(goal_handle)`

5. **Custom Action Definitions** (500 words)
   - Creating .action files: `action/NavigateToPoint.action`
   - Three-part format with `---` separators: Goal --- Result --- Feedback
   - Building action packages with ament_cmake
   - Using custom actions in nodes

#### Diagrams
1. **Action State Machine** (Mermaid.js state diagram)
```
[IDLE] → send_goal → [PENDING] → accepted → [ACTIVE] → [SUCCEEDED/ABORTED/CANCELED]
                                → rejected → [IDLE]
[ACTIVE] → cancel_goal → [CANCELING] → [CANCELED]
```

2. **Action Communication Flow** (Mermaid.js sequence diagram)
```
Client → Send Goal → Server
Server → Accept/Reject → Client
Server → Feedback (periodic) → Client
Client → (optional) Cancel Goal → Server
Server → Result (final) → Client
```

3. **Actions vs Services vs Topics** (Mermaid.js comparison table)
```
| Feature       | Topics      | Services     | Actions        |
|---------------|-------------|--------------|----------------|
| Duration      | Continuous  | Instant      | Long-running   |
| Feedback      | N/A         | N/A          | Yes            |
| Preemptable   | N/A         | No           | Yes            |
| Response      | None        | Single       | Feedback + Result |
| Use Case      | Sensor data | Query state  | Navigation     |
```

#### Code Examples

**Example 1: Action Server - Fibonacci Sequence** (Python)

*File*: `~/ros2_ws/src/my_first_package/my_first_package/fibonacci_action_server.py`
```python
#!/usr/bin/env python3
"""
Action Server Example
Generates Fibonacci sequence as a long-running action with feedback.
"""

import time
import rclpy
from rclpy.action import ActionServer
from rclpy.node import Node
from example_interfaces.action import Fibonacci


class FibonacciActionServer(Node):
    """Action server that computes Fibonacci sequence."""

    def __init__(self):
        super().__init__('fibonacci_action_server')

        # Create action server
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'fibonacci',
            self.execute_callback
        )

        self.get_logger().info('Fibonacci action server started')

    def execute_callback(self, goal_handle):
        """
        Execute the Fibonacci action.

        Args:
            goal_handle: Handle for this goal execution

        Returns:
            Result message
        """
        self.get_logger().info('Executing goal...')

        # Get the order from the goal
        order = goal_handle.request.order

        # Initialize feedback message
        feedback_msg = Fibonacci.Feedback()
        feedback_msg.sequence = [0, 1]

        # Compute Fibonacci sequence
        for i in range(1, order):
            # Check if goal was canceled
            if goal_handle.is_cancel_requested:
                goal_handle.canceled()
                self.get_logger().info('Goal canceled')
                return Fibonacci.Result()

            # Compute next Fibonacci number
            feedback_msg.sequence.append(
                feedback_msg.sequence[i] + feedback_msg.sequence[i-1]
            )

            # Publish feedback
            self.get_logger().info(f'Feedback: {feedback_msg.sequence}')
            goal_handle.publish_feedback(feedback_msg)

            # Simulate computation time
            time.sleep(1)

        # Mark goal as succeeded
        goal_handle.succeed()

        # Prepare result
        result = Fibonacci.Result()
        result.sequence = feedback_msg.sequence

        self.get_logger().info(f'Goal succeeded! Result: {result.sequence}')
        return result


def main(args=None):
    rclpy.init(args=args)
    node = FibonacciActionServer()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        node.get_logger().info('Action server shutting down')
    finally:
        node.destroy_node()
        rclpy.shutdown()


if __name__ == '__main__':
    main()
```

**Example 2: Action Client with Callbacks** (Python)

*File*: `~/ros2_ws/src/my_first_package/my_first_package/fibonacci_action_client.py`
```python
#!/usr/bin/env python3
"""
Action Client Example
Sends goal to Fibonacci action server and monitors feedback.
"""

import rclpy
from rclpy.action import ActionClient
from rclpy.node import Node
from example_interfaces.action import Fibonacci


class FibonacciActionClient(Node):
    """Action client that requests Fibonacci sequence."""

    def __init__(self):
        super().__init__('fibonacci_action_client')

        # Create action client
        self._action_client = ActionClient(
            self,
            Fibonacci,
            'fibonacci'
        )

    def send_goal(self, order):
        """
        Send goal to action server.

        Args:
            order (int): Fibonacci sequence length
        """
        self.get_logger().info('Waiting for action server...')

        # Wait for server to be available
        self._action_client.wait_for_server()

        # Create goal message
        goal_msg = Fibonacci.Goal()
        goal_msg.order = order

        self.get_logger().info(f'Sending goal: order={order}')

        # Send goal with callbacks
        self._send_goal_future = self._action_client.send_goal_async(
            goal_msg,
            feedback_callback=self.feedback_callback
        )

        # Register callback for goal response
        self._send_goal_future.add_done_callback(self.goal_response_callback)

    def goal_response_callback(self, future):
        """Called when server accepts or rejects goal."""
        goal_handle = future.result()

        if not goal_handle.accepted:
            self.get_logger().info('Goal rejected by server')
            return

        self.get_logger().info('Goal accepted by server')

        # Register callback for final result
        self._get_result_future = goal_handle.get_result_async()
        self._get_result_future.add_done_callback(self.get_result_callback)

    def feedback_callback(self, feedback_msg):
        """Called when server publishes feedback."""
        feedback = feedback_msg.feedback
        self.get_logger().info(f'Feedback: {feedback.sequence}')

    def get_result_callback(self, future):
        """Called when action completes."""
        result = future.result().result
        status = future.result().status

        if status == 4:  # SUCCEEDED
            self.get_logger().info(f'Goal succeeded! Final sequence: {result.sequence}')
        elif status == 5:  # CANCELED
            self.get_logger().info('Goal was canceled')
        elif status == 6:  # ABORTED
            self.get_logger().info('Goal was aborted')

        # Shutdown after result
        rclpy.shutdown()


def main(args=None):
    rclpy.init(args=args)

    action_client = FibonacciActionClient()
    action_client.send_goal(10)  # Request Fibonacci sequence of length 10

    rclpy.spin(action_client)


if __name__ == '__main__':
    main()
```

**Example 3: Custom Action Definition** (.action file)

*File*: `~/ros2_ws/src/my_first_package/action/MoveRobot.action`
```
# Goal: Target position
float64 target_x
float64 target_y
---
# Result: Final position reached
float64 final_x
float64 final_y
bool success
---
# Feedback: Current position during movement
float64 current_x
float64 current_y
float64 distance_remaining
```

**Example 4: Running Action Server and Client** (bash)
```bash
# Terminal 1: Start action server
ros2 run my_first_package fibonacci_action_server

# Terminal 2: Start action client
ros2 run my_first_package fibonacci_action_client

# Terminal 3: Inspect actions
ros2 action list  # Shows available actions
ros2 action info /fibonacci  # Shows server and client info

# Send goal from command line
ros2 action send_goal /fibonacci example_interfaces/action/Fibonacci "{order: 5}" --feedback

# View action definition
ros2 interface show example_interfaces/action/Fibonacci
```

**Example 5: Action Client with Goal Cancellation** (Python snippet)
```python
# In action client class
def cancel_goal(self):
    """Cancel the current goal."""
    if hasattr(self, '_goal_handle'):
        self.get_logger().info('Canceling goal...')
        cancel_future = self._goal_handle.cancel_goal_async()
        cancel_future.add_done_callback(self.cancel_done_callback)

def cancel_done_callback(self, future):
    """Called when cancellation completes."""
    cancel_response = future.result()
    if len(cancel_response.goals_canceling) > 0:
        self.get_logger().info('Goal successfully canceled')
    else:
        self.get_logger().info('Goal failed to cancel')
```

#### Lab Exercise
**Lab 1.6: Build a Countdown Timer Action**

**Objective**: Create an action for a countdown timer with feedback and cancellation support

**Scenario**: You're building a robot that needs to perform timed operations. Create an action server that counts down from a specified number and allows cancellation mid-countdown.

**Instructions**:

**Part 1: Action Server (countdown_action_server.py)**
1. Create action `/countdown` using example_interfaces/action/Fibonacci (repurpose for countdown)
   - Goal: `order` represents seconds to count down
   - Feedback: `sequence` contains countdown numbers [N, N-1, N-2, ...]
   - Result: `sequence` contains full countdown history
2. Count down from `order` to 0, one number per second
3. Publish feedback after each second
4. Support cancellation at any time
5. Log "Countdown complete!" when finished

**Part 2: Action Client (countdown_action_client.py)**
1. Send goal with order=10 (10-second countdown)
2. Log each feedback message received
3. After 5 seconds, cancel the goal using a timer
4. Log final result or cancellation status

**Starter Code**:
```python
# Server execute callback
def execute_callback(self, goal_handle):
    feedback_msg = Fibonacci.Feedback()
    feedback_msg.sequence = []

    for i in range(goal_handle.request.order, -1, -1):
        if goal_handle.is_cancel_requested:
            goal_handle.canceled()
            return Fibonacci.Result()

        feedback_msg.sequence.append(i)
        goal_handle.publish_feedback(feedback_msg)
        self.get_logger().info(f'Countdown: {i}')
        time.sleep(1)

    goal_handle.succeed()
    result = Fibonacci.Result()
    result.sequence = feedback_msg.sequence
    return result

# Client cancellation timer
self.cancel_timer = self.create_timer(5.0, self.cancel_goal)
```

**Expected Output**:
- Server logs: "Countdown: 10", "Countdown: 9", ..., "Countdown: 5", "Goal canceled"
- Client logs: "Feedback: [10]", "Feedback: [10, 9]", ..., "Canceling goal...", "Goal was canceled"

**Validation Test**:
```bash
# Check action is running
ros2 action list | grep countdown

# Send goal from command line
ros2 action send_goal /countdown example_interfaces/action/Fibonacci "{order: 5}" --feedback
```

**Extension Challenge**:
- Create custom action definition with goal=seconds, feedback=seconds_remaining, result=total_elapsed
- Add parameter for countdown speed (default 1 second per tick)
- Support multiple simultaneous countdowns

**Deliverable**: Source files (countdown_action_server.py, countdown_action_client.py) + video showing cancellation

**Time**: 50 minutes

#### Assessment
**Quiz 1.6: Actions (7 questions)**
1. When should you use an action instead of a service? (Multiple choice)
   - A) For instant computations
   - B) For long-running tasks with feedback ✓
   - C) For continuous sensor data
   - D) For simple queries

2. What are the three parts of an action? (Multiple choice)
   - A) Request, Response, Error
   - B) Goal, Feedback, Result ✓
   - C) Input, Output, Status
   - D) Start, Progress, End

3. True or False: Actions can be canceled by the client. (True)

4. What method publishes feedback from an action server? (Short answer)
   - *Expected: goal_handle.publish_feedback(feedback_msg)*

5. How do you check if a goal was canceled in the execute callback? (Code snippet - 1 line)
   - *Expected: if goal_handle.is_cancel_requested:*

6. What command sends an action goal from the command line? (A) ros2 action send_goal ✓ (B) ros2 send action (C) ros2 goal send

7. Explain the difference between actions and services in 50 words.

#### Urdu Translation Notes
- **Goal/Feedback/Result**: "ہدف" (hadaf) for goal, "رائے" (raye) for feedback, "نتیجہ" (natija) for result
- **Preemptable**: "منسوخ ہونے والا" (mansookh hone wala) - cancelable
- **State machine**: Keep technical diagram text in English with Urdu caption
- **Cancellation**: "منسوخی" (mansooki)

#### What's Next
→ Week 4, Chapter 7: Parameters for Dynamic Node Configuration

---

## Week 4: Parameters and Launch Systems

### Chapter 7: Parameters for Dynamic Node Configuration

**File**: `docs/module-1-ros2/week-4/chapter-7-parameters.mdx`
**Estimated Reading Time**: 50 minutes
**Sidebar Position**: 7

#### Learning Objectives
- LO-1.7.1: Declare and use parameters in nodes for runtime configuration
- LO-1.7.2: Set parameters from command line, YAML files, and launch files
- LO-1.7.3: Implement parameter callbacks for dynamic reconfiguration
- LO-1.7.4: Use parameter validation and constraints

#### Content Outline
1. **What Are Parameters?** (600 words)
   - Definition: Runtime configuration values for nodes
   - Use cases: Tuning behavior without recompiling (e.g., speed limits, sensor rates)
   - Parameter types: int, double, string, bool, array
   - Parameters vs. arguments vs. environment variables
   - Dynamic vs. static parameters

2. **Declaring Parameters** (700 words)
   - `declare_parameter()`: Name, default value, descriptor
   - Parameter descriptors: Type constraints, value ranges, read-only
   - Getting parameter values: `get_parameter()`
   - Undeclared parameter policy: Allow/reject undeclared parameters
   - Parameter naming conventions: Use dots for hierarchy (e.g., `robot.max_speed`)

3. **Setting Parameters** (800 words)
   - Command line: `ros2 run pkg node --ros-args -p param:=value`
   - YAML files: `ros2 run pkg node --ros-args --params-file config.yaml`
   - Runtime changes: `ros2 param set /node_name param_name value`
   - Listing parameters: `ros2 param list /node_name`
   - Describing parameters: `ros2 param describe /node_name param_name`

4. **Parameter Callbacks** (600 words)
   - `add_on_set_parameters_callback()`: React to parameter changes
   - Validation in callback: Accept or reject parameter changes
   - Update node behavior based on new parameter values
   - Atomic parameter updates: Multiple parameters changed together
   - Best practices: Validate ranges, handle edge cases

5. **YAML Configuration Files** (500 words)
   - YAML structure: Node names, parameter namespaces
   - Organizing parameters by node: `node_name: { param1: value1, param2: value2 }`
   - Nested parameters: Hierarchical configuration
   - Loading multiple config files
   - Environment variable substitution in YAML

#### Diagrams
1. **Parameter Lifecycle** (Mermaid.js flowchart)
```
Node Startup → Declare Parameters (with defaults) → Load from YAML/CLI → Runtime Parameter Changes → Callback Validation → Update Behavior
```

2. **Parameter Sources Priority** (Mermaid.js diagram)
```
Command Line Args (highest priority)
    ↓
YAML Config File
    ↓
Default Values (lowest priority)
```

3. **Parameter Callback Flow** (Mermaid.js sequence)
```
External Change (ros2 param set) → Node Callback → Validate → Accept/Reject → Update Behavior
```

#### Code Examples

**Example 1: Declaring and Using Parameters** (Python)

*File*: `~/ros2_ws/src/my_first_package/my_first_package/param_node.py`
```python
#!/usr/bin/env python3
"""
Parameter Example Node
Demonstrates declaring, getting, and using parameters.
"""

import rclpy
from rclpy.node import Node
from rcl_interfaces.msg import ParameterDescriptor


class ParameterNode(Node):
    """Node that uses parameters for configuration."""

    def __init__(self):
        super().__init__('parameter_node')

        # Declare parameters with default values
        self.declare_parameter('robot_name', 'Robot1')
        self.declare_parameter('max_speed', 1.0)
        self.declare_parameter('publish_rate', 10.0)

        # Declare parameter with descriptor (constraints)
        speed_descriptor = ParameterDescriptor(
            description='Maximum robot speed in m/s',
            type=3,  # PARAMETER_DOUBLE
            read_only=False
        )
        self.declare_parameter('max_speed_limit', 2.0, speed_descriptor)

        # Get parameter values
        self.robot_name = self.get_parameter('robot_name').value
        self.max_speed = self.get_parameter('max_speed').value
        self.publish_rate = self.get_parameter('publish_rate').value

        # Log current configuration
        self.get_logger().info(f'Robot Name: {self.robot_name}')
        self.get_logger().info(f'Max Speed: {self.max_speed} m/s')
        self.get_logger().info(f'Publish Rate: {self.publish_rate} Hz')

        # Create timer using parameter value
        self.timer = self.create_timer(
            1.0 / self.publish_rate,
            self.timer_callback
        )

    def timer_callback(self):
        """Timer callback that uses parameters."""
        # Refresh parameter values (in case changed at runtime)
        self.max_speed = self.get_parameter('max_speed').value

        self.get_logger().info(
            f'{self.robot_name} running at max {self.max_speed} m/s'
        )


def main(args=None):
    rclpy.init(args=args)
    node = ParameterNode()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        node.get_logger().info('Shutting down')
    finally:
        node.destroy_node()
        rclpy.shutdown()


if __name__ == '__main__':
    main()
```

**Example 2: Parameter Callback with Validation** (Python)

*File*: `~/ros2_ws/src/my_first_package/my_first_package/dynamic_param_node.py`
```python
#!/usr/bin/env python3
"""
Dynamic Parameter Node
Demonstrates parameter callbacks for runtime reconfiguration.
"""

import rclpy
from rclpy.node import Node
from rcl_interfaces.msg import SetParametersResult


class DynamicParameterNode(Node):
    """Node that responds to parameter changes at runtime."""

    def __init__(self):
        super().__init__('dynamic_parameter_node')

        # Declare parameters
        self.declare_parameter('speed', 1.0)
        self.declare_parameter('direction', 'forward')
        self.declare_parameter('enable', True)

        # Add parameter callback
        self.add_on_set_parameters_callback(self.parameter_callback)

        self.get_logger().info('Dynamic parameter node started')
        self.get_logger().info('Try: ros2 param set /dynamic_parameter_node speed 2.5')

        # Timer to show current configuration
        self.timer = self.create_timer(2.0, self.status_callback)

    def parameter_callback(self, params):
        """
        Called when parameters are changed.

        Args:
            params (list): List of Parameter objects being changed

        Returns:
            SetParametersResult: Success or failure with reason
        """
        result = SetParametersResult()
        result.successful = True

        for param in params:
            if param.name == 'speed':
                # Validate speed range
                if param.value < 0.0 or param.value > 5.0:
                    result.successful = False
                    result.reason = f'Speed must be between 0.0 and 5.0 m/s (got {param.value})'
                    self.get_logger().warn(result.reason)
                    return result
                else:
                    self.get_logger().info(f'Speed changed to {param.value} m/s')

            elif param.name == 'direction':
                # Validate direction options
                valid_directions = ['forward', 'backward', 'left', 'right']
                if param.value not in valid_directions:
                    result.successful = False
                    result.reason = f'Direction must be one of {valid_directions}'
                    self.get_logger().warn(result.reason)
                    return result
                else:
                    self.get_logger().info(f'Direction changed to {param.value}')

            elif param.name == 'enable':
                self.get_logger().info(f'Enable set to {param.value}')

        return result

    def status_callback(self):
        """Periodically log current configuration."""
        speed = self.get_parameter('speed').value
        direction = self.get_parameter('direction').value
        enabled = self.get_parameter('enable').value

        status = 'ENABLED' if enabled else 'DISABLED'
        self.get_logger().info(
            f'Status: {status} | Speed: {speed} m/s | Direction: {direction}'
        )


def main(args=None):
    rclpy.init(args=args)
    node = DynamicParameterNode()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        node.get_logger().info('Shutting down')
    finally:
        node.destroy_node()
        rclpy.shutdown()


if __name__ == '__main__':
    main()
```

**Example 3: YAML Configuration File**

*File*: `~/ros2_ws/src/my_first_package/config/robot_config.yaml`
```yaml
# Robot configuration parameters
parameter_node:
  ros__parameters:
    robot_name: "ExplorerBot"
    max_speed: 1.5
    max_speed_limit: 2.0
    publish_rate: 20.0

dynamic_parameter_node:
  ros__parameters:
    speed: 2.0
    direction: "forward"
    enable: true

# Nested parameters example
robot:
  navigation:
    goal_tolerance: 0.1
    max_velocity: 1.0
  sensors:
    camera_fps: 30
    lidar_rate: 10
```

**Example 4: Setting Parameters from Command Line** (bash)
```bash
# Method 1: Pass parameters when launching node
ros2 run my_first_package parameter_node --ros-args -p robot_name:=TestBot -p max_speed:=2.5

# Method 2: Load from YAML file
ros2 run my_first_package parameter_node --ros-args --params-file ~/ros2_ws/src/my_first_package/config/robot_config.yaml

# Method 3: Set parameters at runtime
ros2 param set /parameter_node max_speed 1.8

# List all parameters for a node
ros2 param list /parameter_node

# Get parameter value
ros2 param get /parameter_node robot_name

# Describe parameter
ros2 param describe /parameter_node max_speed

# Dump all parameters to YAML
ros2 param dump /parameter_node
```

**Example 5: Loading Parameters in setup.py**

*File*: `~/ros2_ws/src/my_first_package/setup.py` (add data_files)
```python
import os
from glob import glob
from setuptools import setup

package_name = 'my_first_package'

setup(
    name=package_name,
    version='0.0.1',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        # Install config files
        (os.path.join('share', package_name, 'config'), glob('config/*.yaml')),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    entry_points={
        'console_scripts': [
            'parameter_node = my_first_package.param_node:main',
            'dynamic_parameter_node = my_first_package.dynamic_param_node:main',
        ],
    },
)
```

#### Lab Exercise
**Lab 1.7: Build a Configurable LED Controller**

**Objective**: Create a node that controls simulated LEDs using parameters

**Scenario**: You're building a robot with status LEDs. Create a node that simulates LED behavior (color, blink rate) controlled entirely through parameters.

**Instructions**:

**Part 1: LED Node (led_controller.py)**
1. Declare parameters:
   - `led_color` (string): "red", "green", "blue", "yellow" (default: "green")
   - `blink_rate` (double): Blinks per second, 0.1-10.0 Hz (default: 1.0)
   - `enabled` (bool): LED on/off (default: true)
2. Add parameter callback that validates:
   - Color must be in valid list
   - Blink rate must be 0.1-10.0
3. Create timer based on blink_rate that toggles LED state
4. Log LED state changes: "LED: ON (green)" or "LED: OFF"

**Part 2: Test Parameters**
1. Run node with default parameters, observe 1 Hz green blink
2. Change color at runtime: `ros2 param set /led_controller led_color blue`
3. Change blink rate: `ros2 param set /led_controller blink_rate 5.0`
4. Disable LED: `ros2 param set /led_controller enabled false`
5. Try invalid values and verify rejection

**Part 3: Create YAML Config**
Create `config/led_config.yaml`:
```yaml
led_controller:
  ros__parameters:
    led_color: "yellow"
    blink_rate: 2.0
    enabled: true
```

Run with config: `ros2 run my_first_package led_controller --ros-args --params-file config/led_config.yaml`

**Starter Code**:
```python
def parameter_callback(self, params):
    result = SetParametersResult()
    result.successful = True

    for param in params:
        if param.name == 'led_color':
            valid_colors = ['red', 'green', 'blue', 'yellow']
            if param.value not in valid_colors:
                result.successful = False
                result.reason = f'Invalid color. Choose: {valid_colors}'
                return result
        elif param.name == 'blink_rate':
            if param.value < 0.1 or param.value > 10.0:
                result.successful = False
                result.reason = 'Blink rate must be 0.1-10.0 Hz'
                return result
            # Update timer period
            self.timer.timer_period_ns = int(1e9 / (2 * param.value))

    return result
```

**Expected Output**:
```
[INFO] LED: ON (green)
[INFO] LED: OFF
[INFO] Color changed to blue
[INFO] LED: ON (blue)
[INFO] LED: OFF
```

**Validation Test**:
```bash
# Verify parameter rejection
ros2 param set /led_controller blink_rate 15.0  # Should fail
ros2 param set /led_controller led_color purple  # Should fail

# Verify parameter acceptance
ros2 param set /led_controller blink_rate 3.0  # Should succeed
```

**Extension Challenge**:
- Add `brightness` parameter (0.0-1.0) that affects log message
- Support RGB color codes: `led_color: "255,128,0"`
- Add parameter for blink pattern: "solid", "fast_blink", "slow_pulse"

**Deliverable**: Source files (led_controller.py, led_config.yaml) + terminal recording showing parameter changes

**Time**: 45 minutes

#### Assessment
**Quiz 1.7: Parameters (6 questions)**
1. What is the main purpose of parameters in ROS 2? (Multiple choice)
   - A) Store permanent data
   - B) Configure node behavior at runtime ✓
   - C) Share data between nodes
   - D) Control node lifecycle

2. How do you declare a parameter with a default value? (Code snippet - 1 line)
   - *Expected: self.declare_parameter('param_name', default_value)*

3. What command sets a parameter at runtime? (A) ros2 param set ✓ (B) ros2 set param (C) ros2 config set

4. True or False: Parameter callbacks can reject invalid parameter values. (True)

5. What file format is used for parameter configuration? (Multiple choice)
   - A) JSON
   - B) XML
   - C) YAML ✓
   - D) TOML

6. What does `SetParametersResult.successful = False` do? (Short answer - 30 words)

#### Urdu Translation Notes
- **Parameters**: "پیرامیٹر" (parameter) - keep English term with Urdu explanation
- **Configuration**: "تشکیل" (tashkeel) or "ترتیب" (tarteeb)
- **Runtime**: "رن ٹائم" (run time) - transliterate with Urdu explanation "پروگرام چلنے کے دوران"
- **Validation**: "توثیق" (tawseeq) - verification/validation

#### What's Next
→ Chapter 8: Launch Files for Multi-Node System Orchestration

### Chapter 8: Launch Files for Multi-Node System Orchestration

**File**: `docs/module-1-ros2/week-4/chapter-8-launch.mdx`
**Estimated Reading Time**: 60 minutes
**Sidebar Position**: 8

#### Learning Objectives
- LO-1.8.1: Create Python launch files to start multiple nodes simultaneously
- LO-1.8.2: Pass arguments and parameters through launch files
- LO-1.8.3: Use launch file includes and compositions
- LO-1.8.4: Implement conditional logic and event handlers in launch files

#### Content Outline
1. **Why Launch Files?** (600 words)
   - Problem: Starting many nodes manually is tedious and error-prone
   - Solution: Launch files orchestrate multi-node systems
   - Use cases: Robot systems (sensors + planning + control), complex simulations
   - Launch file formats: Python (preferred for ROS 2), XML, YAML
   - Benefits: Reproducibility, automation, parameterization

2. **Basic Python Launch Files** (800 words)
   - Import statement: `from launch import LaunchDescription`
   - `Node` action: Launch a ROS 2 node
   - Required parameters: package, executable, name
   - Optional parameters: output, parameters, remappings, namespace
   - `generate_launch_description()` function: Returns LaunchDescription
   - Running launch files: `ros2 launch package_name launch_file.py`

3. **Passing Arguments and Parameters** (700 words)
   - Launch arguments: User-configurable values at launch time
   - `DeclareLaunchArgument`: Define available arguments with defaults
   - `LaunchConfiguration`: Access argument values
   - Passing parameters to nodes: `parameters=[{}]` or YAML files
   - Substitutions: `TextSubstitution`, `PathJoinSubstitution`, `FindPackageShare`
   - Example: `ros2 launch my_package robot.launch.py robot_name:=bot1`

4. **Composing Launch Files** (600 words)
   - `IncludeLaunchDescription`: Import other launch files
   - `GroupAction`: Group nodes with shared configuration
   - Namespaces: Isolate nodes for multi-robot systems
   - Remapping topics: Change topic names at launch time
   - Lifecycle nodes: Manage node states (configure, activate, deactivate)

5. **Advanced Launch Features** (600 words)
   - Conditional execution: `IfCondition`, `UnlessCondition`
   - Event handlers: Execute actions on events (process exit, startup)
   - Timers: Delay node startup
   - Environment variables: `SetEnvironmentVariable`
   - Logging: Configure log levels and output locations
   - Shutdown handlers: Cleanup on system shutdown

#### Diagrams
1. **Launch File Execution Flow** (Mermaid.js flowchart)
```
ros2 launch → Parse Launch File → Resolve Arguments → Start Nodes (parallel) → Monitor Processes → Handle Events
```

2. **Launch File Hierarchy** (Mermaid.js tree)
```
main_launch.py
├── sensors_launch.py (included)
│   ├── camera_node
│   └── lidar_node
├── planning_launch.py (included)
│   └── path_planner_node
└── control_node (direct)
```

3. **Argument Substitution** (Mermaid.js diagram)
```
User: robot_name:=explorer
    ↓
LaunchArgument: robot_name (default: robot1)
    ↓
LaunchConfiguration: robot_name
    ↓
Node Parameter: robot_name = "explorer"
```

#### Code Examples

**Example 1: Basic Launch File - Multiple Nodes** (Python)

*File*: `~/ros2_ws/src/my_first_package/launch/multi_node.launch.py`
```python
#!/usr/bin/env python3
"""
Basic Launch File
Starts multiple nodes simultaneously.
"""

from launch import LaunchDescription
from launch_ros.actions import Node


def generate_launch_description():
    """Generate launch description with multiple nodes."""

    # Define nodes
    publisher_node = Node(
        package='my_first_package',
        executable='simple_publisher',
        name='publisher',
        output='screen',  # Print output to terminal
    )

    subscriber_node = Node(
        package='my_first_package',
        executable='simple_subscriber',
        name='subscriber',
        output='screen',
    )

    # Return launch description
    return LaunchDescription([
        publisher_node,
        subscriber_node,
    ])
```

**Example 2: Launch File with Arguments and Parameters** (Python)

*File*: `~/ros2_ws/src/my_first_package/launch/configurable_robot.launch.py`
```python
#!/usr/bin/env python3
"""
Configurable Launch File
Demonstrates launch arguments and parameter passing.
"""

from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration, TextSubstitution
from launch_ros.actions import Node


def generate_launch_description():
    """Generate launch description with configurable parameters."""

    # Declare launch arguments
    robot_name_arg = DeclareLaunchArgument(
        'robot_name',
        default_value='RobotA',
        description='Name of the robot'
    )

    max_speed_arg = DeclareLaunchArgument(
        'max_speed',
        default_value='1.0',
        description='Maximum robot speed in m/s'
    )

    use_simulation_arg = DeclareLaunchArgument(
        'use_sim',
        default_value='false',
        description='Use simulation time'
    )

    # Access launch configuration values
    robot_name = LaunchConfiguration('robot_name')
    max_speed = LaunchConfiguration('max_speed')
    use_sim = LaunchConfiguration('use_sim')

    # Define node with parameters from arguments
    parameter_node = Node(
        package='my_first_package',
        executable='parameter_node',
        name='configurable_robot',
        output='screen',
        parameters=[{
            'robot_name': robot_name,
            'max_speed': max_speed,
            'use_sim_time': use_sim,
        }]
    )

    return LaunchDescription([
        robot_name_arg,
        max_speed_arg,
        use_simulation_arg,
        parameter_node,
    ])
```

**Example 3: Launch File with YAML Config** (Python)

*File*: `~/ros2_ws/src/my_first_package/launch/robot_with_config.launch.py`
```python
#!/usr/bin/env python3
"""
Launch File with YAML Configuration
Loads parameters from external YAML file.
"""

import os
from ament_index_python.packages import get_package_share_directory
from launch import LaunchDescription
from launch_ros.actions import Node


def generate_launch_description():
    """Generate launch description loading YAML config."""

    # Get package directory
    package_dir = get_package_share_directory('my_first_package')

    # Path to YAML config file
    config_file = os.path.join(package_dir, 'config', 'robot_config.yaml')

    # Node with YAML parameters
    parameter_node = Node(
        package='my_first_package',
        executable='parameter_node',
        name='robot',
        output='screen',
        parameters=[config_file]  # Load all parameters from YAML
    )

    return LaunchDescription([
        parameter_node,
    ])
```

**Example 4: Advanced Launch with Conditionals and Includes** (Python)

*File*: `~/ros2_ws/src/my_first_package/launch/advanced_robot.launch.py`
```python
#!/usr/bin/env python3
"""
Advanced Launch File
Includes other launch files, conditionals, and namespaces.
"""

import os
from ament_index_python.packages import get_package_share_directory
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, GroupAction, IncludeLaunchDescription
from launch.conditions import IfCondition
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution
from launch_ros.actions import Node, PushRosNamespace


def generate_launch_description():
    """Generate advanced launch description."""

    # Declare arguments
    use_sensors_arg = DeclareLaunchArgument(
        'use_sensors',
        default_value='true',
        description='Launch sensor nodes'
    )

    robot_namespace_arg = DeclareLaunchArgument(
        'namespace',
        default_value='robot1',
        description='Robot namespace'
    )

    use_sensors = LaunchConfiguration('use_sensors')
    namespace = LaunchConfiguration('namespace')

    # Control node (always launches)
    control_node = Node(
        package='my_first_package',
        executable='simple_publisher',
        name='control',
        namespace=namespace,
        output='screen',
    )

    # Sensor nodes (conditional - only if use_sensors=true)
    sensor_group = GroupAction(
        condition=IfCondition(use_sensors),
        actions=[
            PushRosNamespace(namespace),
            Node(
                package='my_first_package',
                executable='simple_subscriber',
                name='camera',
                output='screen',
            ),
            Node(
                package='my_first_package',
                executable='simple_subscriber',
                name='lidar',
                output='screen',
            ),
        ]
    )

    # Include another launch file
    package_dir = get_package_share_directory('my_first_package')
    included_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(
            os.path.join(package_dir, 'launch', 'multi_node.launch.py')
        )
    )

    return LaunchDescription([
        use_sensors_arg,
        robot_namespace_arg,
        control_node,
        sensor_group,
        # included_launch,  # Uncomment to include another launch file
    ])
```

**Example 5: Running Launch Files** (bash)
```bash
# Basic launch
ros2 launch my_first_package multi_node.launch.py

# Launch with arguments
ros2 launch my_first_package configurable_robot.launch.py robot_name:=Explorer max_speed:=2.5

# Launch with specific namespace
ros2 launch my_first_package advanced_robot.launch.py namespace:=robot2 use_sensors:=false

# List all launch files in a package
ros2 launch my_first_package --show-args

# Get info about launch file arguments
ros2 launch my_first_package configurable_robot.launch.py --show-args
```

**Example 6: Installing Launch Files in setup.py**

*File*: `~/ros2_ws/src/my_first_package/setup.py`
```python
import os
from glob import glob
from setuptools import setup

package_name = 'my_first_package'

setup(
    name=package_name,
    version='0.0.1',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        # Install launch files
        (os.path.join('share', package_name, 'launch'), glob('launch/*.launch.py')),
        # Install config files
        (os.path.join('share', package_name, 'config'), glob('config/*.yaml')),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    entry_points={
        'console_scripts': [
            # Node executables here
        ],
    },
)
```

#### Lab Exercise
**Lab 1.8: Create a Multi-Node Robot System with Launch File**

**Objective**: Build a complete robot control system launched with a single command

**Scenario**: Create a simulated robot with velocity control, status monitoring, and emergency stop, all orchestrated by a launch file.

**Instructions**:

**Part 1: Create Nodes (reuse from previous labs)**
1. **velocity_commander.py**: Publishes geometry_msgs/Twist to /cmd_vel (random velocities)
2. **status_monitor.py**: Subscribes to /cmd_vel and logs velocity
3. **emergency_stop_server.py**: Action server on /emergency_stop (stops robot slowly)

**Part 2: Create YAML Config**

*File*: `config/robot_system.yaml`
```yaml
velocity_commander:
  ros__parameters:
    max_linear_speed: 1.0
    max_angular_speed: 0.5
    publish_rate: 2.0

status_monitor:
  ros__parameters:
    warning_speed_threshold: 0.8
```

**Part 3: Create Launch File**

*File*: `launch/robot_system.launch.py`
1. Declare launch arguments:
   - `robot_name` (default: "TestBot")
   - `enable_emergency_stop` (default: "true")
   - `config_file` (path to YAML)
2. Launch all three nodes with namespace=robot_name
3. Conditionally launch emergency_stop_server based on enable_emergency_stop
4. Load parameters from YAML config file
5. Set output='screen' for all nodes

**Starter Code**:
```python
def generate_launch_description():
    # Declare arguments
    robot_name_arg = DeclareLaunchArgument('robot_name', default_value='TestBot')
    enable_estop_arg = DeclareLaunchArgument('enable_emergency_stop', default_value='true')

    robot_name = LaunchConfiguration('robot_name')
    enable_estop = LaunchConfiguration('enable_emergency_stop')

    # Nodes
    velocity_node = Node(
        package='my_first_package',
        executable='velocity_commander',
        name='velocity_commander',
        namespace=robot_name,
        output='screen',
        parameters=[config_file]
    )

    # Add monitor node and conditional emergency stop...

    return LaunchDescription([
        robot_name_arg,
        enable_estop_arg,
        velocity_node,
        # Add other nodes...
    ])
```

**Expected Behavior**:
```bash
ros2 launch my_first_package robot_system.launch.py

# Terminal output shows:
# [velocity_commander]: Publishing velocity: linear=0.5, angular=0.2
# [status_monitor]: Current velocity: linear=0.5, angular=0.2
# [emergency_stop_server]: Action server ready
```

**Validation Test**:
```bash
# Check all nodes launched
ros2 node list | grep TestBot

# Test emergency stop action
ros2 action send_goal /TestBot/emergency_stop <action_type> "{}"

# Try with different arguments
ros2 launch my_first_package robot_system.launch.py robot_name:=Robot2 enable_emergency_stop:=false
```

**Extension Challenge**:
- Add `use_sim_time` argument that affects all nodes
- Include another launch file for visualization nodes
- Add event handler to restart velocity_commander if it crashes
- Create multi-robot launch: Launch 3 robots with namespaces robot1, robot2, robot3

**Deliverable**: Launch file + config YAML + video showing all nodes running from single launch command

**Time**: 50 minutes

#### Assessment
**Quiz 1.8: Launch Files (7 questions)**
1. What is the main purpose of launch files in ROS 2? (Multiple choice)
   - A) Store robot data
   - B) Start multiple nodes simultaneously ✓
   - C) Compile ROS packages
   - D) Monitor node performance

2. What Python function must every launch file define? (Short answer)
   - *Expected: generate_launch_description()*

3. How do you declare a launch argument with a default value? (Code snippet - 2 lines)

4. True or False: Launch files can only start nodes from one package. (False)

5. What action is used to include another launch file? (Multiple choice)
   - A) IncludeLaunchDescription ✓
   - B) ImportLaunch
   - C) AddLaunchFile
   - D) RequireLaunch

6. How do you pass parameters from a YAML file to a node in a launch file? (Code snippet - 1 line)
   - *Expected: parameters=[config_file]*

7. What command shows available arguments for a launch file? (A) ros2 launch pkg file.py --show-args ✓ (B) ros2 launch --help (C) ros2 args list

#### Urdu Translation Notes
- **Launch**: "لانچ" (launch) - transliterate, add explanation "متعدد نوڈز کو ایک ساتھ شروع کرنا" (start multiple nodes together)
- **Orchestration**: "ہم آہنگی" (humahangi) - coordination/synchronization
- **Include**: "شامل کرنا" (shamil karna) - to include
- **Namespace**: "نام اسپیس" (name space) - transliterate with explanation

#### What's Next
→ Module 1 End-of-Module Assessment: Integrated Robot Simulation Project

---

## Module 1 Assessment

**End-of-Module Project**: Build a Simple Robot Simulation

**Objective**: Integrate all Module 1 concepts into a simulated 2-wheeled robot

**Components**:
1. **velocity_publisher** node: Publishes geometry_msgs/Twist to /cmd_vel
2. **odometry_publisher** node: Publishes robot position (simulated)
3. **velocity_monitor** service: Returns current velocity on request
4. **emergency_stop** action server: Stops robot over 2 seconds (preemptable)
5. **robot_launch.py**: Launches all nodes with parameters from YAML

**Deliverables**:
- Source code for all 5 components
- Launch file + parameter YAML
- 5-minute video demo showing all interactions
- Documentation (README.md) with setup instructions

**Grading Rubric** (100 points):
- Code quality and documentation (20 pts)
- Publisher/subscriber implementation (20 pts)
- Service implementation (20 pts)
- Action implementation (20 pts)
- Launch file and integration (20 pts)

**Time**: 8-10 hours

---

## Technical Dependencies for Module 1

**ROS 2 Packages**:
- ros-humble-desktop (includes rclpy, std_msgs, geometry_msgs, sensor_msgs)
- python3-colcon-common-extensions
- ros-humble-rqt (for graphical debugging)
- ros-humble-ros2-control (mentioned in later chapters)

**Python Packages**:
- rclpy (ROS 2 Python client library)
- Standard library only (no additional pip packages for Module 1)

**Development Tools**:
- VS Code with ROS extension
- terminator or tmux (for multiple terminals)
- git (for version control)

---

## Module 1 Completion Checklist

Before proceeding to Module 2, ensure:
- [ ] All 8 chapters written with complete content (2000-4000 words each)
- [ ] All code examples tested in ROS 2 Humble environment
- [ ] All diagrams generated and rendered correctly
- [ ] All labs have clear instructions and validation tests
- [ ] All quizzes have answer keys
- [ ] Urdu translation completed for all chapters
- [ ] End-of-module project tested end-to-end
- [ ] Peer review completed for technical accuracy

---

**Sources**:
- [ROS 2 Humble Documentation](https://docs.ros.org/en/humble/index.html)
- [ROS 2 Tutorials](https://docs.ros.org/en/humble/Tutorials.html)
- [Writing a simple publisher and subscriber (Python)](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html)
- [Understanding Publisher and Subscriber in ROS2](https://medium.com/@aadhilkumar989/understanding-publisher-and-subscriber-in-ros2-d8a1ee546cd3)

---

# Module 2: Digital Twin Simulation - Gazebo & Unity (3 Weeks, 6 Chapters)

## High-Level Module Overview

**Duration**: 3 weeks
**Total Chapters**: 6 chapters
**Learning Path**: Gazebo Classic → Gazebo Sim (Ignition) → Unity Robotics Hub → Digital Twin Concepts

**Module Purpose**: Students learn to create and test robot behaviors in simulation before deploying to physical hardware. Covers two major simulation platforms: Gazebo (ROS-native) and Unity (game engine for photorealistic simulations).

**Key Topics**:
1. **Week 1 (Chapters 9-10)**: Gazebo Classic basics, URDF robot models, sensor plugins
2. **Week 2 (Chapters 11-12)**: Gazebo Sim (Ignition), SDF world files, physics engines
3. **Week 3 (Chapters 13-14)**: Unity Robotics Hub, ROS-Unity integration, digital twins

**Hardware Requirements**: Minimum 8GB RAM, GPU recommended for Unity, 50GB storage

**Software Stack**:
- Gazebo Classic 11 (integrated with ROS 2 Humble)
- Gazebo Sim (Ignition Fortress)
- Unity 2022 LTS with Robotics Hub package
- RViz 2 for visualization
- xacro for parameterized URDF

**End-of-Module Project**: Build a warehouse robot that navigates in Gazebo simulation using lidar and camera sensors, with Unity visualization for photorealistic rendering.

**Prerequisites**: Module 1 complete (understanding of ROS 2 nodes, topics, launch files)

---

# Module 3: NVIDIA Isaac Platform (4 Weeks, 8 Chapters)

## High-Level Module Overview

**Duration**: 4 weeks
**Total Chapters**: 8 chapters
**Learning Path**: Isaac Sim Setup → Robot Modeling → Synthetic Data → Isaac ROS → Manipulation → Navigation

**Module Purpose**: Master NVIDIA's Isaac platform for AI-enabled robotics, including Isaac Sim (Omniverse-based simulation) and Isaac ROS (hardware-accelerated perception packages).

**Key Topics**:
1. **Week 1 (Chapters 15-16)**: Isaac Sim installation, USD scene creation, robot import
2. **Week 2 (Chapters 17-18)**: Synthetic data generation, domain randomization, Isaac ROS packages
3. **Week 3 (Chapters 19-20)**: Isaac Manipulator (robot arm control), motion planning with cuMotion
4. **Week 4 (Chapters 21-22)**: Isaac AMR (autonomous mobile robots), Nav2 integration

**Hardware Requirements**:
- **GPU Required**: NVIDIA RTX 2070 or better (RTX 4000+ recommended)
- 16GB RAM minimum (32GB recommended)
- 100GB SSD storage
- Ubuntu 22.04 LTS (native, not VM/WSL for GPU passthrough)

**Software Stack**:
- NVIDIA Isaac Sim 2023.1.1+ (includes Omniverse)
- Isaac ROS packages (image processing, depth estimation, pose estimation)
- NVIDIA cuDNN and TensorRT for AI inference
- ROS 2 Humble with Isaac ROS extensions

**End-of-Module Project**: Create a humanoid robot in Isaac Sim that picks and places objects using vision-language commands, with Isaac ROS-accelerated perception pipeline.

**Cloud Alternative**: NVIDIA NGC cloud instances for students without local GPU

**Prerequisites**: Modules 1-2 complete (ROS 2 fundamentals + simulation concepts)

---

# Module 4: Vision-Language-Action (VLA) Robotics (3 Weeks, 6 Chapters)

## High-Level Module Overview

**Duration**: 3 weeks
**Total Chapters**: 6 chapters
**Learning Path**: Vision Encoders → Language Models → Action Policies → VLA Integration → RT-1/RT-2 Models

**Module Purpose**: Learn cutting-edge AI robotics where vision (cameras), language (natural language instructions), and actions (robot control) are integrated using large multimodal models.

**Key Topics**:
1. **Week 1 (Chapters 23-24)**: Vision foundation models (CLIP, DINOv2), robot perception pipelines
2. **Week 2 (Chapters 25-26)**: Language grounding for robotics, instruction parsing, task planning with LLMs
3. **Week 3 (Chapters 27-28)**: VLA architectures (RT-1, RT-2, OpenVLA), policy learning, deployment

**Hardware Requirements**:
- GPU with 16GB+ VRAM (RTX 3090, 4090, or A100 for training)
- 32GB RAM minimum
- Cloud TPU/GPU access for large model training (Google Colab Pro, AWS, RunPod)

**Software Stack**:
- PyTorch 2.0+ with CUDA 11.8+
- Hugging Face Transformers (CLIP, LLaMA, GPT models)
- OpenVLA framework (open-source VLA models)
- ROS 2 with Python 3.10+
- Isaac Sim or Gazebo for VLA testing

**Key Frameworks**:
- **RT-1 (Robotics Transformer 1)**: Google's vision-language-action model
- **RT-2 (Robotics Transformer 2)**: VLM-based policy learning
- **OpenVLA**: Open-source VLA models (7B parameter policy)
- **PerAct**: 3D action prediction from language

**End-of-Module Project**: Deploy a VLA-based robot that follows natural language instructions like "Pick up the red block and place it on the table" using open-source OpenVLA model with ROS 2 integration.

**Prerequisites**: Modules 1-3 complete, Python programming, basic machine learning concepts helpful

---

# Module 5: Capstone - Autonomous Humanoid Robot System (2 Weeks, 4 Chapters)

## High-Level Module Overview

**Duration**: 2 weeks
**Total Chapters**: 4 chapters
**Learning Path**: System Architecture → Integration → Testing → Deployment

**Module Purpose**: Integrate all learned concepts into a complete autonomous humanoid robot system that perceives, reasons, and acts in simulated and real-world environments.

**Key Topics**:
1. **Week 1 (Chapters 29-30)**: Full-stack architecture, perception-planning-control pipeline, humanoid kinematics
2. **Week 2 (Chapters 31-32)**: Behavior trees for task execution, deployment to real humanoid (if available), final project showcase

**Capstone Project Requirements**:

Students will build **one of three project tracks** (choose based on interest and hardware availability):

### Track A: Kitchen Assistant Humanoid (Simulation + Optional Hardware)
- **Task**: Robot assists in kitchen by identifying objects, following voice commands, and performing pick-and-place
- **Skills**: VLA for language understanding, Isaac Sim for simulation, MoveIt 2 for manipulation, Nav2 for navigation
- **Deliverable**: Video demo showing robot responding to commands like "Bring me the apple from the table"

### Track B: Warehouse Inspection Robot (Simulation Required)
- **Task**: Autonomous mobile robot navigates warehouse, inspects shelves using vision, reports anomalies
- **Skills**: Nav2 navigation, SLAM (Simultaneous Localization and Mapping), object detection, multi-robot coordination
- **Deliverable**: Gazebo simulation + dashboard showing robot telemetry and inspection results

### Track C: Social Interaction Humanoid (Simulation + Optional Hardware)
- **Task**: Humanoid robot engages in natural conversation, recognizes emotions, performs expressive gestures
- **Skills**: Speech recognition (Whisper), LLM integration (local LLaMA/GPT), facial expression generation, gesture control
- **Deliverable**: Interactive demo with real-time human-robot conversation

**Hardware Options**:
- **Simulation Only**: Use Isaac Sim or Gazebo with humanoid models (Unitree G1, Agility Digit, custom URDF)
- **Low-Cost Hardware** (~$200-500): Raspberry Pi + ROS 2 + cameras + servos for simple humanoid upper body
- **Commercial Platforms** ($5k+): Unitree G1 Edu, Trossen ViperX arm, or similar (if institution provides access)

**Grading Rubric** (Final Project = 40% of course grade):
- System Architecture & Design (20%)
- ROS 2 Integration Quality (20%)
- Simulation/Hardware Implementation (25%)
- Documentation & Code Quality (15%)
- Presentation & Demo (20%)

**Deliverables**:
1. **Technical Report** (10-15 pages): Architecture, implementation details, challenges, results
2. **Source Code Repository**: GitHub with README, installation guide, launch files
3. **Video Demo** (5-10 minutes): Narrated demonstration of robot capabilities
4. **Live Presentation** (15 minutes): Present to class/instructor with Q&A

**Prerequisites**: Modules 1-4 complete

---

# Implementation Roadmap

## Phase 1: Content Authoring (Modules 1-5)
**Timeline**: 12-16 weeks

1. **Module 1** (Weeks 1-4): Write all 8 chapters, test code examples, create diagrams ✓ PLANNED IN DETAIL
2. **Module 2** (Weeks 5-7): Write 6 chapters on Gazebo/Unity simulation
3. **Module 3** (Weeks 8-11): Write 8 chapters on NVIDIA Isaac platform
4. **Module 4** (Weeks 12-14): Write 6 chapters on VLA robotics
5. **Module 5** (Weeks 15-16): Write 4 capstone chapters + project templates

## Phase 2: Docusaurus Site Setup
**Timeline**: 2-3 weeks (can overlap with Phase 1)

1. Initialize Docusaurus v3 project with custom theme
2. Configure sidebars for 5-module structure
3. Implement dark/light mode with diagram support
4. Set up MDX components for code blocks, diagrams, videos
5. Deploy to Vercel/Netlify with CI/CD pipeline

## Phase 3: RAG Chatbot Development
**Timeline**: 3-4 weeks

1. **Week 1**: Backend setup (FastAPI, Qdrant, Neon Postgres schema)
2. **Week 2**: Embedding pipeline (chunk content, generate vectors, upload to Qdrant)
3. **Week 3**: Chat API (query handling, retrieval, OpenAI integration with citations)
4. **Week 4**: Frontend integration (React chatbot widget in Docusaurus)

## Phase 4: Bilingual Translation (English → Urdu)
**Timeline**: 6-8 weeks

1. **Automated Translation**: Use GPT-4 for initial translation of all content
2. **Human Review**: Native Urdu speaker with technical background reviews all translations
3. **i18n Integration**: Set up Docusaurus i18n with Urdu language pack
4. **RTL Styling**: Implement CSS for right-to-left text rendering
5. **Testing**: Verify all pages render correctly in both languages

## Phase 5: Testing & Quality Assurance
**Timeline**: 2-3 weeks

1. Code example testing in ROS 2 Humble + Ubuntu 22.04 VM
2. Link validation (internal + external)
3. Accessibility audit (WCAG 2.1 AA compliance)
4. Beta testing with 10-15 target users
5. Performance optimization (Lighthouse scores >90)

## Phase 6: Launch & Iteration
**Timeline**: Ongoing

1. Soft launch to limited audience (university class, robotics community)
2. Collect user feedback via embedded surveys
3. Monitor chatbot logs for common questions and content gaps
4. Monthly content updates based on feedback
5. Quarterly dependency updates (ROS 2, Isaac Sim, OpenAI models)

---

**STATUS**:
- ✅ **Module 1 Complete** - All 8 chapters fully detailed with learning objectives, content outlines, code examples, labs, and assessments
- ✅ **Modules 2-5 Outlined** - High-level structure defined for remaining 24 chapters
- 🔄 **Next Step**: Proceed to `/sp.tasks` to break down implementation into executable tasks, OR continue detailed planning for Module 2 if desired
