# Tasks: Physical AI & Humanoid Robotics — AI-Native Textbook (Book Development Only)

**Input**: Design documents from `specs/001-textbook-spec/`
**Prerequisites**: plan.md, spec.md

**SCOPE**: This task list covers ONLY the textbook/Docusaurus website development. RAG chatbot integration is EXCLUDED and will be implemented in a separate phase.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US4, US5 - excluding US3 chatbot)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Project Infrastructure)

**Purpose**: Initialize Docusaurus v3 project and basic structure

- [ ] T001 Initialize Docusaurus v3 project with TypeScript template in repository root
- [ ] T002 [P] Install core dependencies (Docusaurus 3.0+, React 18+, Mermaid.js, @docusaurus/plugin-content-docs)
- [ ] T003 [P] Configure docusaurus.config.js with site metadata (title, tagline, url, favicon)
- [ ] T004 [P] Setup Tailwind CSS 3.0+ integration in src/css/custom.css
- [ ] T005 Create project folder structure per plan.md (docs/, static/img/, static/code-examples/, src/components/)
- [ ] T006 [P] Configure Git .gitignore for node_modules/, .docusaurus/, build/
- [ ] T007 [P] Create README.md with project overview and setup instructions
- [ ] T008 [P] Setup package.json scripts (start, build, deploy, serve)

---

## Phase 2: Foundational (Blocking Prerequisites for All User Stories)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T009 Configure sidebars.js with 5-module hierarchical navigation structure (modules → weeks → chapters)
- [ ] T010 [P] Create homepage template in docs/intro.mdx with course overview and module cards
- [ ] T011 [P] Create MDX frontmatter template for chapters (title, description, sidebar_position, tags)
- [ ] T012 [P] Setup Mermaid.js plugin in docusaurus.config.js for inline diagram rendering
- [ ] T013 [P] Create custom CodeBlock component in src/components/CodeBlockWithCopy.tsx with copy-to-clipboard functionality
- [ ] T014 [P] Setup syntax highlighting themes for Python, YAML, XML, bash in docusaurus.config.js
- [ ] T015 Create base module folder structure: docs/module-1-ros2/, docs/module-2-simulation/, docs/module-3-isaac/, docs/module-4-vla/, docs/module-5-capstone/
- [ ] T016 [P] Create static asset folders: static/img/module-1/ through static/img/module-5/
- [ ] T017 [P] Create About page in docs/about.mdx explaining textbook purpose and authors
- [ ] T018 [P] Create Prerequisites page in docs/prerequisites.mdx with hardware/software setup instructions
- [ ] T019 [P] Create FAQ page in docs/faq.mdx for common questions
- [ ] T020 [P] Create Glossary page in docs/glossary.mdx with technical terms
- [ ] T021 [P] Create Resources page in docs/resources.mdx with external links

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Complete Learning Path Through 5 Modules (Priority: P1) 🎯 MVP

**Goal**: Create all 32 chapters across 5 modules with learning objectives, content, code examples, diagrams, labs, and assessments

**Independent Test**: Navigate through Module 1 (ROS 2 Fundamentals) and verify all 8 chapters load correctly with learning objectives, content, code examples, and assessments

**Note**: This is the CORE of the textbook. All content authoring happens here.

### Module 1: ROS 2 Fundamentals (4 weeks, 8 chapters)

#### Week 1: ROS 2 Introduction and Environment Setup

- [ ] T022 [P] [US1] Write Chapter 1: Introduction to ROS 2 and Physical AI in docs/module-1-ros2/week-1/chapter-1-intro.mdx (2000-3000 words, frontmatter, learning objectives)
- [ ] T023 [P] [US1] Create Mermaid.js diagram: Physical AI Landscape mindmap for Chapter 1
- [ ] T024 [P] [US1] Create Mermaid.js diagram: ROS 2 Architecture block diagram for Chapter 1
- [ ] T025 [P] [US1] Create Mermaid.js diagram: Humanoid Robot ROS 2 Stack flowchart for Chapter 1
- [ ] T026 [P] [US1] Create Quiz 1.1 component (5 questions) embedded in Chapter 1
- [ ] T027 [P] [US1] Write Chapter 2: Installing and Configuring ROS 2 Humble in docs/module-1-ros2/week-1/chapter-2-setup.mdx (2500-3500 words, step-by-step installation)
- [ ] T028 [P] [US1] Create bash code example: ROS 2 Humble installation script for Chapter 2
- [ ] T029 [P] [US1] Create bash code example: Environment setup script (source setup.bash) for Chapter 2
- [ ] T030 [P] [US1] Create Python code example: Verify installation with demo nodes (talker/listener) for Chapter 2
- [ ] T031 [P] [US1] Create Lab 1.2: Install ROS 2 and run demo nodes with validation steps in Chapter 2
- [ ] T032 [P] [US1] Create Quiz 1.2 component (7 questions) embedded in Chapter 2

#### Week 2: ROS 2 Nodes and Topics

- [ ] T033 [P] [US1] Write Chapter 3: ROS 2 Nodes and Communication in docs/module-1-ros2/week-2/chapter-3-nodes.mdx (2500 words, node lifecycle, executors)
- [ ] T034 [P] [US1] Create Mermaid.js diagram: Node lifecycle state machine for Chapter 3
- [ ] T035 [P] [US1] Create Python code example: Simple ROS 2 node (minimal publisher) for Chapter 3
- [ ] T036 [P] [US1] Create Python code example: Node with logging and parameters for Chapter 3
- [ ] T037 [P] [US1] Create Lab 1.3: Create custom ROS 2 package and node with acceptance criteria in Chapter 3
- [ ] T038 [P] [US1] Write Chapter 4: Topics and Publish/Subscribe Pattern in docs/module-1-ros2/week-2/chapter-4-topics.mdx (3000 words, QoS, topic introspection)
- [ ] T039 [P] [US1] Create Mermaid.js diagram: Publisher-Subscriber pattern data flow for Chapter 4
- [ ] T040 [P] [US1] Create Python code example: Publisher node (sensor data simulation) for Chapter 4
- [ ] T041 [P] [US1] Create Python code example: Subscriber node (data processing) for Chapter 4
- [ ] T042 [P] [US1] Create Python code example: QoS configuration (reliable vs best-effort) for Chapter 4
- [ ] T043 [P] [US1] Create Lab 1.4: Build publisher-subscriber robot sensor system with validation in Chapter 4
- [ ] T044 [P] [US1] Create Quiz 1.3-1.4 combined (10 questions) for Week 2

#### Week 3: Services and Actions

- [ ] T045 [P] [US1] Write Chapter 5: ROS 2 Services for Request-Response in docs/module-1-ros2/week-3/chapter-5-services.mdx (2500 words, service servers/clients, custom srv files)
- [ ] T046 [P] [US1] Create Mermaid.js diagram: Service request-response sequence diagram for Chapter 5
- [ ] T047 [P] [US1] Create Python code example: Service server (add two numbers) for Chapter 5
- [ ] T048 [P] [US1] Create Python code example: Service client with timeout handling for Chapter 5
- [ ] T049 [P] [US1] Create srv file example: Custom service definition (RobotCommand.srv) for Chapter 5
- [ ] T050 [P] [US1] Create Lab 1.5: Implement robot arm control service with validation in Chapter 5
- [ ] T051 [P] [US1] Write Chapter 6: ROS 2 Actions for Long-Running Tasks in docs/module-1-ros2/week-3/chapter-6-actions.mdx (3000 words, action servers/clients, feedback, preemption)
- [ ] T052 [P] [US1] Create Mermaid.js diagram: Action server state machine with goal/feedback/result for Chapter 6
- [ ] T053 [P] [US1] Create Python code example: Action server (navigate to waypoint) for Chapter 6
- [ ] T054 [P] [US1] Create Python code example: Action client with feedback callback for Chapter 6
- [ ] T055 [P] [US1] Create action file example: Custom action definition (NavigateToGoal.action) for Chapter 6
- [ ] T056 [P] [US1] Create Lab 1.6: Build action-based robot navigation system with validation in Chapter 6
- [ ] T057 [P] [US1] Create Quiz 1.5-1.6 combined (10 questions) for Week 3

#### Week 4: Parameters and Launch Files

- [ ] T058 [P] [US1] Write Chapter 7: Parameters for Runtime Configuration in docs/module-1-ros2/week-4/chapter-7-parameters.mdx (2000 words, parameter declaration, dynamic reconfigure)
- [ ] T059 [P] [US1] Create Python code example: Node with declared parameters (max_speed, sensor_rate) for Chapter 7
- [ ] T060 [P] [US1] Create Python code example: Parameter callback for runtime updates for Chapter 7
- [ ] T061 [P] [US1] Create YAML file example: Parameter configuration file for Chapter 7
- [ ] T062 [P] [US1] Create Lab 1.7: Implement parameterized robot controller with validation in Chapter 7
- [ ] T063 [P] [US1] Write Chapter 8: Launch Files and System Integration in docs/module-1-ros2/week-4/chapter-8-launch.mdx (3000 words, Python launch files, composable nodes)
- [ ] T064 [P] [US1] Create Mermaid.js diagram: Launch file execution flow and node startup sequence for Chapter 8
- [ ] T065 [P] [US1] Create Python launch file example: Multi-node system startup for Chapter 8
- [ ] T066 [P] [US1] Create Python launch file example: Launch with parameters and remapping for Chapter 8
- [ ] T067 [P] [US1] Create XML launch file example: Alternative launch syntax for Chapter 8
- [ ] T068 [P] [US1] Create Lab 1.8: Build complete ROS 2 robot system with launch files and validation in Chapter 8
- [ ] T069 [P] [US1] Create Module 1 Assessment in docs/module-1-ros2/module-1-assessment.mdx (20 questions quiz + hands-on project milestone)

### Module 2: Digital Twin Simulation - Gazebo & Unity (3 weeks, 6 chapters)

#### Week 5: Gazebo Classic Integration

- [ ] T070 [P] [US1] Write Chapter 9: Introduction to Digital Twins and Gazebo in docs/module-2-simulation/week-5/chapter-9-intro-gazebo.mdx (2500 words, digital twin concepts, Gazebo architecture)
- [ ] T071 [P] [US1] Create Mermaid.js diagram: Digital twin feedback loop (physical ↔ virtual) for Chapter 9
- [ ] T072 [P] [US1] Create Mermaid.js diagram: Gazebo architecture (physics engine, rendering, sensors) for Chapter 9
- [ ] T073 [P] [US1] Create bash code example: Install Gazebo Classic 11 on Ubuntu 22.04 for Chapter 9
- [ ] T074 [P] [US1] Create Lab 2.1: Launch Gazebo world and explore interface with validation in Chapter 9
- [ ] T075 [P] [US1] Write Chapter 10: Building Robot Models with URDF/Xacro in docs/module-2-simulation/week-5/chapter-10-urdf.mdx (3500 words, URDF syntax, Xacro macros, collision vs visual)
- [ ] T076 [P] [US1] Create Mermaid.js diagram: URDF robot model tree structure (links, joints) for Chapter 10
- [ ] T077 [P] [US1] Create URDF file example: Simple wheeled robot model for Chapter 10
- [ ] T078 [P] [US1] Create Xacro file example: Parameterized robot with macros for Chapter 10
- [ ] T079 [P] [US1] Create Python code example: Spawn URDF model in Gazebo via ROS 2 service for Chapter 10
- [ ] T080 [P] [US1] Create Lab 2.2: Design custom robot URDF and visualize in RViz + Gazebo with validation in Chapter 10

#### Week 6: Gazebo-ROS 2 Integration

- [ ] T081 [P] [US1] Write Chapter 11: Gazebo-ROS 2 Plugins and Sensors in docs/module-2-simulation/week-6/chapter-11-gazebo-plugins.mdx (3000 words, differential drive, camera, lidar plugins)
- [ ] T082 [P] [US1] Create Mermaid.js diagram: Gazebo plugin data flow (simulation → ROS 2 topics) for Chapter 11
- [ ] T083 [P] [US1] Create XML code example: Differential drive plugin configuration for Chapter 11
- [ ] T084 [P] [US1] Create XML code example: Camera sensor plugin configuration for Chapter 11
- [ ] T085 [P] [US1] Create Python code example: Subscribe to simulated sensor data (lidar) for Chapter 11
- [ ] T086 [P] [US1] Create Lab 2.3: Build autonomous robot in Gazebo with sensor fusion with validation in Chapter 11
- [ ] T087 [P] [US1] Write Chapter 12: Gazebo World Design and Environments in docs/module-2-simulation/week-6/chapter-12-worlds.mdx (2500 words, SDF format, model database)
- [ ] T088 [P] [US1] Create SDF file example: Custom Gazebo world with obstacles and lighting for Chapter 12
- [ ] T089 [P] [US1] Create Python code example: Spawn objects dynamically in Gazebo world for Chapter 12
- [ ] T090 [P] [US1] Create Lab 2.4: Design testing environment for robot navigation with validation in Chapter 12

#### Week 7: Unity Simulation Integration

- [ ] T091 [P] [US1] Write Chapter 13: Unity for Robotics - ROS-TCP-Connector in docs/module-2-simulation/week-7/chapter-13-unity-ros.mdx (3000 words, Unity-ROS integration, advantages over Gazebo)
- [ ] T092 [P] [US1] Create Mermaid.js diagram: Unity-ROS-TCP-Connector architecture for Chapter 13
- [ ] T093 [P] [US1] Create C# code example: Unity script to publish ROS 2 messages for Chapter 13
- [ ] T094 [P] [US1] Create Python code example: ROS 2 node receiving Unity sensor data for Chapter 13
- [ ] T095 [P] [US1] Create Lab 2.5: Setup Unity scene with ROS 2 integration and sensor visualization with validation in Chapter 13
- [ ] T096 [P] [US1] Write Chapter 14: Humanoid Animation and Physics in Unity in docs/module-2-simulation/week-7/chapter-14-unity-humanoid.mdx (3000 words, Mecanim, articulation bodies, ragdoll)
- [ ] T097 [P] [US1] Create Mermaid.js diagram: Unity humanoid control pipeline (IK → animation → physics) for Chapter 14
- [ ] T098 [P] [US1] Create C# code example: Unity humanoid joint control via ROS 2 for Chapter 14
- [ ] T099 [P] [US1] Create C# code example: Unity inverse kinematics (IK) for arm reaching for Chapter 14
- [ ] T100 [P] [US1] Create Lab 2.6: Implement humanoid walking animation controlled via ROS 2 with validation in Chapter 14
- [ ] T101 [P] [US1] Create Module 2 Assessment in docs/module-2-simulation/module-2-assessment.mdx (15 questions quiz + simulation project milestone)

### Module 3: NVIDIA Isaac Platform (4 weeks, 8 chapters)

#### Week 8: Isaac Sim Fundamentals

- [ ] T102 [P] [US1] Write Chapter 15: Introduction to NVIDIA Isaac Sim in docs/module-3-isaac/week-8/chapter-15-intro-isaac.mdx (2500 words, Omniverse, Isaac Sim features, GPU requirements)
- [ ] T103 [P] [US1] Create Mermaid.js diagram: Isaac Sim ecosystem (Omniverse, Isaac Gym, Isaac ROS) for Chapter 15
- [ ] T104 [P] [US1] Create bash code example: Install Isaac Sim 2023.1.1 on Ubuntu 22.04 for Chapter 15
- [ ] T105 [P] [US1] Create Lab 3.1: Launch Isaac Sim and load default robot scenes with validation in Chapter 15
- [ ] T106 [P] [US1] Write Chapter 16: Isaac Sim-ROS 2 Bridge in docs/module-3-isaac/week-8/chapter-16-isaac-ros-bridge.mdx (3000 words, ROS 2 bridge setup, topic publishing)
- [ ] T107 [P] [US1] Create Mermaid.js diagram: Isaac Sim-ROS 2 data flow (sensors → topics → nodes) for Chapter 16
- [ ] T108 [P] [US1] Create Python code example: Isaac Sim script to enable ROS 2 bridge for Chapter 16
- [ ] T109 [P] [US1] Create Python code example: ROS 2 node receiving Isaac Sim camera data for Chapter 16
- [ ] T110 [P] [US1] Create Lab 3.2: Stream sensor data from Isaac Sim to ROS 2 with validation in Chapter 16

#### Week 9: Synthetic Data Generation

- [ ] T111 [P] [US1] Write Chapter 17: Synthetic Data Generation for AI Training in docs/module-3-isaac/week-9/chapter-17-synthetic-data.mdx (3500 words, domain randomization, replicator API)
- [ ] T112 [P] [US1] Create Mermaid.js diagram: Synthetic data pipeline (randomization → rendering → annotation → training) for Chapter 17
- [ ] T113 [P] [US1] Create Python code example: Isaac Sim replicator script for object pose randomization for Chapter 17
- [ ] T114 [P] [US1] Create Python code example: Generate annotated RGB-D dataset in Isaac Sim for Chapter 17
- [ ] T115 [P] [US1] Create Lab 3.3: Create synthetic dataset for object detection with validation in Chapter 17
- [ ] T116 [P] [US1] Write Chapter 18: Training Perception Models with Isaac for docs/module-3-isaac/week-9/chapter-18-perception-training.mdx (3000 words, YOLOv8, segmentation, sim-to-real transfer)
- [ ] T117 [P] [US1] Create Mermaid.js diagram: Perception training workflow (dataset → training → deployment → Isaac Sim testing) for Chapter 18
- [ ] T118 [P] [US1] Create Python code example: Train YOLOv8 on Isaac Sim synthetic data for Chapter 18
- [ ] T119 [P] [US1] Create Python code example: Deploy trained model in Isaac Sim for testing for Chapter 18
- [ ] T120 [P] [US1] Create Lab 3.4: Train and test object detector in Isaac Sim with validation in Chapter 18

#### Week 10: Isaac Gym and Reinforcement Learning

- [ ] T121 [P] [US1] Write Chapter 19: Introduction to Isaac Gym in docs/module-3-isaac/week-10/chapter-19-isaac-gym.mdx (2500 words, parallel simulation, RL training acceleration)
- [ ] T122 [P] [US1] Create Mermaid.js diagram: Isaac Gym parallel environments architecture for Chapter 19
- [ ] T123 [P] [US1] Create Python code example: Setup Isaac Gym environment for humanoid walking for Chapter 19
- [ ] T124 [P] [US1] Create Lab 3.5: Run pretrained RL policy in Isaac Gym with validation in Chapter 19
- [ ] T125 [P] [US1] Write Chapter 20: Training Humanoid Locomotion with RL in docs/module-3-isaac/week-10/chapter-20-humanoid-rl.mdx (3500 words, PPO, reward shaping, sim-to-real)
- [ ] T126 [P] [US1] Create Mermaid.js diagram: RL training loop (observation → policy → action → reward → update) for Chapter 20
- [ ] T127 [P] [US1] Create Python code example: Define humanoid locomotion reward function for Chapter 20
- [ ] T128 [P] [US1] Create Python code example: Train PPO policy for bipedal walking in Isaac Gym for Chapter 20
- [ ] T129 [P] [US1] Create Lab 3.6: Train humanoid walking policy from scratch with validation in Chapter 20

#### Week 11: Isaac Advanced Topics

- [ ] T130 [P] [US1] Write Chapter 21: Isaac Cortex for Behavior Trees in docs/module-3-isaac/week-11/chapter-21-isaac-cortex.mdx (2500 words, behavior trees, task planning)
- [ ] T131 [P] [US1] Create Mermaid.js diagram: Behavior tree structure (root → selectors → sequences → actions) for Chapter 21
- [ ] T132 [P] [US1] Create Python code example: Define pick-and-place behavior tree in Isaac Cortex for Chapter 21
- [ ] T133 [P] [US1] Create Lab 3.7: Implement multi-task robot behavior tree with validation in Chapter 21
- [ ] T134 [P] [US1] Write Chapter 22: Deploying Isaac Models to Real Robots in docs/module-3-isaac/week-11/chapter-22-isaac-deployment.mdx (3000 words, Jetson deployment, ROS 2 integration)
- [ ] T135 [P] [US1] Create Mermaid.js diagram: Deployment pipeline (Isaac training → ONNX export → Jetson → ROS 2) for Chapter 22
- [ ] T136 [P] [US1] Create Python code example: Export Isaac Gym policy to ONNX format for Chapter 22
- [ ] T137 [P] [US1] Create Python code example: Deploy ONNX model on Jetson with ROS 2 node for Chapter 22
- [ ] T138 [P] [US1] Create Lab 3.8: Deploy trained policy to simulated robot in ROS 2 with validation in Chapter 22
- [ ] T139 [P] [US1] Create Module 3 Assessment in docs/module-3-isaac/module-3-assessment.mdx (20 questions quiz + Isaac Sim project milestone)

### Module 4: Vision-Language-Action (VLA) Robotics (3 weeks, 6 chapters)

#### Week 12: VLA Fundamentals

- [ ] T140 [P] [US1] Write Chapter 23: Introduction to Vision-Language-Action Models in docs/module-4-vla/week-12/chapter-23-intro-vla.mdx (3000 words, VLA paradigm, RT-1, RT-2, OpenVLA)
- [ ] T141 [P] [US1] Create Mermaid.js diagram: VLA pipeline (vision encoder → language model → action decoder) for Chapter 23
- [ ] T142 [P] [US1] Create Mermaid.js diagram: Comparison of VLA architectures (RT-1, RT-2, OpenVLA) for Chapter 23
- [ ] T143 [P] [US1] Create Lab 4.1: Explore OpenVLA pretrained models and inference with validation in Chapter 23
- [ ] T144 [P] [US1] Write Chapter 24: Vision Encoders for Robotics in docs/module-4-vla/week-12/chapter-24-vision-encoders.mdx (2500 words, ResNet, ViT, CLIP, DINO)
- [ ] T145 [P] [US1] Create Mermaid.js diagram: Vision encoder architectures comparison for Chapter 24
- [ ] T146 [P] [US1] Create Python code example: Extract image features using CLIP for Chapter 24
- [ ] T147 [P] [US1] Create Python code example: Fine-tune vision encoder on robot manipulation dataset for Chapter 24
- [ ] T148 [P] [US1] Create Lab 4.2: Train vision encoder for robot object recognition with validation in Chapter 24

#### Week 13: Language-Conditioned Control

- [ ] T149 [P] [US1] Write Chapter 25: Language Models for Robot Instructions in docs/module-4-vla/week-13/chapter-25-language-models.mdx (3000 words, GPT-4, PaLM-E, instruction following)
- [ ] T150 [P] [US1] Create Mermaid.js diagram: Language-conditioned control flow (text → embedding → policy) for Chapter 25
- [ ] T151 [P] [US1] Create Python code example: Generate robot actions from natural language using GPT-4 for Chapter 25
- [ ] T152 [P] [US1] Create Python code example: Parse complex instructions into robot subtasks for Chapter 25
- [ ] T153 [P] [US1] Create Lab 4.3: Build language-conditioned pick-and-place system with validation in Chapter 25
- [ ] T154 [P] [US1] Write Chapter 26: Action Prediction and Robot Control in docs/module-4-vla/week-13/chapter-26-action-prediction.mdx (2500 words, action spaces, diffusion policies)
- [ ] T155 [P] [US1] Create Mermaid.js diagram: Action decoder architectures (MLP, transformer, diffusion) for Chapter 26
- [ ] T156 [P] [US1] Create Python code example: Implement diffusion policy for robot manipulation for Chapter 26
- [ ] T157 [P] [US1] Create Python code example: Train action decoder with behavior cloning for Chapter 26
- [ ] T158 [P] [US1] Create Lab 4.4: Implement end-to-end VLA model for robot grasping with validation in Chapter 26

#### Week 14: VLA Training and Deployment

- [ ] T159 [P] [US1] Write Chapter 27: Training VLA Models from Demonstrations in docs/module-4-vla/week-14/chapter-27-vla-training.mdx (3500 words, imitation learning, datasets like Open X-Embodiment)
- [ ] T160 [P] [US1] Create Mermaid.js diagram: VLA training pipeline (demonstrations → preprocessing → training → evaluation) for Chapter 27
- [ ] T161 [P] [US1] Create Python code example: Load Open X-Embodiment dataset for training for Chapter 27
- [ ] T162 [P] [US1] Create Python code example: Train VLA model with imitation learning for Chapter 27
- [ ] T163 [P] [US1] Create Lab 4.5: Fine-tune OpenVLA on custom robot tasks with validation in Chapter 27
- [ ] T164 [P] [US1] Write Chapter 28: Deploying VLA Models on Humanoid Robots in docs/module-4-vla/week-14/chapter-28-vla-deployment.mdx (3000 words, real-time inference, ROS 2 integration)
- [ ] T165 [P] [US1] Create Mermaid.js diagram: VLA deployment architecture (camera → VLA model → ROS 2 action server) for Chapter 28
- [ ] T166 [P] [US1] Create Python code example: ROS 2 node for VLA model inference for Chapter 28
- [ ] T167 [P] [US1] Create Python code example: Integrate VLA with humanoid robot control stack for Chapter 28
- [ ] T168 [P] [US1] Create Lab 4.6: Deploy VLA model on simulated humanoid in Isaac Sim with validation in Chapter 28
- [ ] T169 [P] [US1] Create Module 4 Assessment in docs/module-4-vla/module-4-assessment.mdx (15 questions quiz + VLA project milestone)

### Module 5: Capstone - Autonomous Humanoid Robot System (2 weeks, 4 chapters)

#### Week 15: System Integration

- [ ] T170 [P] [US1] Write Chapter 29: Capstone Project Overview and Requirements in docs/module-5-capstone/week-15/chapter-29-capstone-overview.mdx (2000 words, project goals, rubric, deliverables)
- [ ] T171 [P] [US1] Create Mermaid.js diagram: Capstone system architecture (all modules integrated) for Chapter 29
- [ ] T172 [P] [US1] Create project requirements checklist for capstone in Chapter 29
- [ ] T173 [P] [US1] Write Chapter 30: Integrating All Modules - ROS 2 + Isaac + VLA in docs/module-5-capstone/week-15/chapter-30-integration.mdx (3500 words, system design, interfaces)
- [ ] T174 [P] [US1] Create Mermaid.js diagram: Data flow across all modules (perception → planning → control) for Chapter 30
- [ ] T175 [P] [US1] Create Python code example: Master launch file integrating all subsystems for Chapter 30
- [ ] T176 [P] [US1] Create Python code example: System state manager coordinating modules for Chapter 30
- [ ] T177 [P] [US1] Create Lab 5.1: Build integrated perception-planning-control pipeline with validation in Chapter 30

#### Week 16: Testing and Deployment

- [ ] T178 [P] [US1] Write Chapter 31: Testing and Validation Strategies in docs/module-5-capstone/week-16/chapter-31-testing.mdx (2500 words, unit tests, integration tests, sim-to-real)
- [ ] T179 [P] [US1] Create Mermaid.js diagram: Testing pyramid (unit → integration → system → sim-to-real) for Chapter 31
- [ ] T180 [P] [US1] Create Python code example: pytest test suite for robot system validation for Chapter 31
- [ ] T181 [P] [US1] Create bash code example: CI/CD pipeline for automated testing for Chapter 31
- [ ] T182 [P] [US1] Create Lab 5.2: Implement comprehensive test suite for capstone project with validation in Chapter 31
- [ ] T183 [P] [US1] Write Chapter 32: Final Deployment and Future Directions in docs/module-5-capstone/week-16/chapter-32-deployment.mdx (2500 words, deployment checklist, next steps, career paths)
- [ ] T184 [P] [US1] Create Mermaid.js diagram: Deployment workflow (build → test → package → deploy) for Chapter 32
- [ ] T185 [P] [US1] Create Docker code example: Containerize robot system for deployment for Chapter 32
- [ ] T186 [P] [US1] Create bash code example: Deployment script for real robot hardware for Chapter 32
- [ ] T187 [P] [US1] Create Lab 5.3: Deploy complete capstone project to Isaac Sim with validation in Chapter 32
- [ ] T188 [P] [US1] Create Module 5 Capstone Assessment in docs/module-5-capstone/module-5-assessment.mdx (Final project grading rubric and peer review guidelines)

**Checkpoint**: At this point, User Story 1 (Complete Learning Path) should be fully functional - all 32 chapters with content, diagrams, code, labs, and assessments

---

## Phase 4: User Story 2 - Hands-On Labs and Code Execution (Priority: P2)

**Goal**: Enhance code examples with copy functionality, validation tests, and troubleshooting guides to enable immediate hands-on practice

**Independent Test**: Open "Module 1, Week 1: ROS 2 Publisher Node" lab, copy the provided code, follow setup instructions, and successfully run the publisher node

**Note**: This builds on User Story 1's code examples by adding interactivity and validation

### Implementation for User Story 2

- [ ] T189 [P] [US2] Create CodeBlock component wrapper with one-click copy button in src/components/CodeBlockWithCopy.tsx (enhance existing T013)
- [ ] T190 [P] [US2] Add clipboard.js integration for copy-to-clipboard functionality
- [ ] T191 [P] [US2] Create toast notification component for copy success feedback in src/components/ToastNotification.tsx
- [ ] T192 [P] [US2] Create "Common Errors" MDX component in src/components/CommonErrors.tsx (collapsible troubleshooting section)
- [ ] T193 [US2] Enhance all Module 1 chapters (T022-T069) with CommonErrors sections for each code example
- [ ] T194 [US2] Enhance all Module 2 chapters (T070-T101) with CommonErrors sections for each code example
- [ ] T195 [US2] Enhance all Module 3 chapters (T102-T139) with CommonErrors sections for each code example
- [ ] T196 [US2] Enhance all Module 4 chapters (T140-T169) with CommonErrors sections for each code example
- [ ] T197 [US2] Enhance all Module 5 chapters (T170-T188) with CommonErrors sections for each code example
- [ ] T198 [P] [US2] Create LabRequirements component in src/components/LabRequirements.tsx (hardware, software, prerequisites display)
- [ ] T199 [US2] Add LabRequirements component to all labs in Modules 1-5 (50+ labs)
- [ ] T200 [P] [US2] Create validation test script template in scripts/test-code-examples.sh for ROS 2 examples
- [ ] T201 [P] [US2] Write validation tests for all Module 1 code examples (Python, bash, YAML)
- [ ] T202 [P] [US2] Write validation tests for all Module 2 code examples (Python, bash, XML, C#)
- [ ] T203 [P] [US2] Write validation tests for all Module 3 code examples (Python, bash)
- [ ] T204 [P] [US2] Write validation tests for all Module 4 code examples (Python)
- [ ] T205 [P] [US2] Write validation tests for all Module 5 code examples (Python, bash, Docker)
- [ ] T206 [P] [US2] Create downloadable code packages: static/code-examples/module-1-examples.zip
- [ ] T207 [P] [US2] Create downloadable code packages: static/code-examples/module-2-examples.zip
- [ ] T208 [P] [US2] Create downloadable code packages: static/code-examples/module-3-examples.zip
- [ ] T209 [P] [US2] Create downloadable code packages: static/code-examples/module-4-examples.zip
- [ ] T210 [P] [US2] Create downloadable code packages: static/code-examples/module-5-examples.zip
- [ ] T211 [P] [US2] Create setup validation script in scripts/validate-environment.sh (checks ROS 2, Python, dependencies)
- [ ] T212 [P] [US2] Add environment validation instructions to Prerequisites page (docs/prerequisites.mdx)

**Checkpoint**: All code examples now have copy buttons, troubleshooting guides, validation tests, and downloadable packages

---

## Phase 5: User Story 4 - Bilingual Learning (English/Urdu) (Priority: P4)

**Goal**: Add Urdu translation support with language toggle button, preserving formatting and code blocks

**Independent Test**: Open any chapter, click "اردو میں پڑھیں" (Read in Urdu) button, and verify entire chapter content switches to formal Urdu translation while preserving formatting, code blocks, and diagrams

**Note**: Skipping User Story 3 (RAG Chatbot) as requested - will be implemented in separate phase

### Implementation for User Story 4

- [ ] T213 [P] [US4] Configure Docusaurus i18n plugin in docusaurus.config.js with Urdu locale (ur)
- [ ] T214 [P] [US4] Create i18n/ folder structure: i18n/ur/docusaurus-plugin-content-docs/current/
- [ ] T215 [P] [US4] Create LanguageToggle component in src/components/LanguageToggle.tsx with English/Urdu switcher
- [ ] T216 [P] [US4] Add RTL (right-to-left) CSS styles in src/css/urdu.css for Urdu content
- [ ] T217 [P] [US4] Integrate LanguageToggle into Docusaurus navbar via docusaurus.config.js
- [ ] T218 [P] [US4] Create localStorage handler for language preference persistence
- [ ] T219 [P] [US4] Create translation glossary mapping: English technical terms → Urdu equivalents in i18n/ur/glossary.json
- [ ] T220 [P] [US4] Translate UI strings (navigation, buttons, labels) in i18n/ur/code.json
- [ ] T221 [US4] Translate homepage (docs/intro.mdx) to i18n/ur/docusaurus-plugin-content-docs/current/intro.mdx
- [ ] T222 [US4] Translate About page to i18n/ur/docusaurus-plugin-content-docs/current/about.mdx
- [ ] T223 [US4] Translate Prerequisites page to i18n/ur/docusaurus-plugin-content-docs/current/prerequisites.mdx
- [ ] T224 [US4] Translate FAQ page to i18n/ur/docusaurus-plugin-content-docs/current/faq.mdx
- [ ] T225 [US4] Translate Glossary page to i18n/ur/docusaurus-plugin-content-docs/current/glossary.mdx
- [ ] T226 [US4] Translate Resources page to i18n/ur/docusaurus-plugin-content-docs/current/resources.mdx
- [ ] T227 [US4] Translate all Module 1 chapters (8 chapters) to i18n/ur/.../module-1-ros2/ preserving MDX structure
- [ ] T228 [US4] Translate all Module 2 chapters (6 chapters) to i18n/ur/.../module-2-simulation/
- [ ] T229 [US4] Translate all Module 3 chapters (8 chapters) to i18n/ur/.../module-3-isaac/
- [ ] T230 [US4] Translate all Module 4 chapters (6 chapters) to i18n/ur/.../module-4-vla/
- [ ] T231 [US4] Translate all Module 5 chapters (4 chapters) to i18n/ur/.../module-5-capstone/
- [ ] T232 [US4] Translate code comments within all code examples to Urdu (preserve code syntax)
- [ ] T233 [P] [US4] Add English tooltips for technical terms in Urdu content via custom MDX component
- [ ] T234 [P] [US4] Create translation validation script in scripts/validate-translations.py (checks 100% completeness)
- [ ] T235 [US4] Run translation validation and fix any missing translations
- [ ] T236 [P] [US4] Add Mermaid diagram caption translations (diagrams remain visual, captions translated)

**Checkpoint**: Complete bilingual support - all content available in English and Urdu with smooth language switching

---

## Phase 6: User Story 5 - Assessments and Progress Tracking (Priority: P5)

**Goal**: Add quizzes with immediate feedback and progress tracking via localStorage

**Independent Test**: Complete Module 1 quiz (10 questions), receive immediate feedback with explanations, and see progress update to 20% complete

### Implementation for User Story 5

- [ ] T237 [P] [US5] Create Quiz component in src/components/Quiz.tsx with multiple-choice question rendering
- [ ] T238 [P] [US5] Add immediate feedback functionality to Quiz component (correct/incorrect with explanation)
- [ ] T239 [P] [US5] Create QuizResults component in src/components/QuizResults.tsx (score, percentage, time, review)
- [ ] T240 [P] [US5] Create ProgressTracker component in src/components/ProgressTracker.tsx (chapter completion, badges)
- [ ] T241 [P] [US5] Implement localStorage integration for progress persistence (chapters completed, quiz scores)
- [ ] T242 [P] [US5] Create Progress Dashboard page in docs/dashboard.mdx (overall completion, badges, estimated time)
- [ ] T243 [P] [US5] Create chapter completion marker (checkmark in sidebar) via custom Docusaurus theme
- [ ] T244 [US5] Integrate Quiz component into all Module 1 quizzes (6 quizzes created in T026, T032, T044, T057, T069)
- [ ] T245 [US5] Integrate Quiz component into all Module 2 quizzes (T101)
- [ ] T246 [US5] Integrate Quiz component into all Module 3 quizzes (T139)
- [ ] T247 [US5] Integrate Quiz component into all Module 4 quizzes (T169)
- [ ] T248 [US5] Integrate Quiz component into all Module 5 quizzes (T188)
- [ ] T249 [P] [US5] Create badge system with achievements (completed modules, lab milestones, quiz scores)
- [ ] T250 [P] [US5] Add prerequisite check banner component in src/components/PrerequisiteCheck.tsx
- [ ] T251 [US5] Add prerequisite check to Module 2-5 entry pages (verify previous modules completed)
- [ ] T252 [P] [US5] Create progress export functionality (download progress as JSON)
- [ ] T253 [P] [US5] Add retake quiz functionality to all assessments
- [ ] T254 [P] [US5] Create "Review Incorrect Answers" mode in Quiz component
- [ ] T255 [P] [US5] Add estimated time to completion calculator based on average pace

**Checkpoint**: Full assessment and progress tracking system operational - quizzes, badges, completion tracking, prerequisites

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements, deployment preparation, and quality assurance

- [ ] T256 [P] Configure Docusaurus SEO metadata (Open Graph, Twitter cards) in docusaurus.config.js
- [ ] T257 [P] Create sitemap.xml generation in Docusaurus build configuration
- [ ] T258 [P] Add accessibility features: keyboard navigation, ARIA labels, focus indicators
- [ ] T259 [P] Create link validation script in scripts/validate-links.py (check internal and external links)
- [ ] T260 [P] Run link validation and fix all broken links
- [ ] T261 [P] Optimize all images in static/img/ to WebP format (<500KB each)
- [ ] T262 [P] Add alt text to all images for accessibility (80+ images)
- [ ] T263 [P] Configure Algolia DocSearch for site-wide search functionality
- [ ] T264 [P] Create dark mode / light mode theme switcher in Docusaurus config
- [ ] T265 [P] Test responsive design on mobile (sidebar → hamburger, code blocks scroll)
- [ ] T266 [P] Create GitHub Actions workflow in .github/workflows/build-docusaurus.yml (CI: build and deploy)
- [ ] T267 [P] Create GitHub Actions workflow in .github/workflows/validate-content.yml (CI: link checking, translation validation)
- [ ] T268 [P] Configure GitHub Pages deployment in docusaurus.config.js (organization name, project name, base URL)
- [ ] T269 [P] Create deployment script in scripts/deploy-gh-pages.sh
- [ ] T270 [P] Add analytics tracking (Google Analytics or Plausible) in Docusaurus config
- [ ] T271 [P] Create 404 error page in src/pages/404.tsx
- [ ] T272 [P] Add breadcrumb navigation to all pages
- [ ] T273 [P] Create feedback widget component in src/components/FeedbackWidget.tsx (chapter ratings)
- [ ] T274 [P] Run Lighthouse audit and optimize to score >90 (performance, accessibility, SEO)
- [ ] T275 [P] Test WCAG 2.1 AA compliance with automated tools (axe DevTools)
- [ ] T276 [P] Perform manual screen reader testing (NVDA/JAWS)
- [ ] T277 [P] Create CONTRIBUTING.md with content authoring guidelines
- [ ] T278 [P] Create LICENSE file (choose appropriate open-source license)
- [ ] T279 Update README.md with complete setup, build, and deployment instructions
- [ ] T280 Create final build and deploy to GitHub Pages

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion (Phase 1) - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational (Phase 2) - Core content creation
- **User Story 2 (Phase 4)**: Depends on User Story 1 completion (needs existing code examples to enhance)
- **User Story 4 (Phase 5)**: Depends on User Story 1 completion (needs English content to translate)
- **User Story 5 (Phase 6)**: Depends on User Story 1 completion (needs quizzes and chapters to track)
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - BLOCKING for all other stories
- **User Story 2 (P2)**: Depends on US1 (needs code examples to add copy functionality)
- **User Story 4 (P4)**: Depends on US1 (needs English content to translate)
- **User Story 5 (P5)**: Depends on US1 (needs quizzes and chapters to track)

### Within Each User Story

#### User Story 1 (Content Creation):
- Modules can be written in parallel if multiple authors available
- Within each module: weeks can be written in parallel
- Within each chapter: content → diagrams → code examples → labs → assessments (sequential)

#### User Story 2 (Labs & Code):
- Copy button component (T189-T191) must be complete before enhancing chapters (T193-T197)
- CommonErrors component (T192) must be complete before enhancing chapters
- Validation tests (T201-T205) can run in parallel per module

#### User Story 4 (Bilingual):
- i18n configuration (T213-T220) must be complete before translation tasks
- Translation tasks (T221-T231) can run in parallel per module
- Validation (T234-T235) must run after all translations complete

#### User Story 5 (Assessments):
- Quiz/Progress components (T237-T243) must be complete before integration (T244-T248)
- Integration tasks can run in parallel per module

### Parallel Opportunities

- **Phase 1 Setup**: All tasks (T001-T008) can run in parallel
- **Phase 2 Foundational**: Most tasks (T010-T021) can run in parallel
- **Phase 3 US1**: Modules 1-5 can be written in parallel by different authors
  - Within each module: all chapters of the same week can be written in parallel
  - Within each chapter: diagrams (T023-T025, etc.) can be created in parallel
- **Phase 4 US2**:
  - Component creation (T189-T192, T198, T200) can run in parallel
  - Module validation tests (T201-T205) can run in parallel
  - Code packages (T206-T210) can run in parallel
- **Phase 5 US4**:
  - Translation tasks per module (T227-T231) can run in parallel
  - UI translations (T221-T226) can run in parallel
- **Phase 6 US5**:
  - Component creation (T237-T243) can run in parallel
  - Quiz integration per module (T244-T248) can run in parallel
- **Phase 7 Polish**: Most tasks can run in parallel (T256-T279)

---

## Parallel Example: Module 1 Content Creation (User Story 1)

```bash
# Launch all Week 1 chapters in parallel:
Task T022: "Write Chapter 1: Introduction to ROS 2 and Physical AI"
Task T027: "Write Chapter 2: Installing and Configuring ROS 2 Humble"

# Launch all Week 1 Chapter 1 diagrams in parallel:
Task T023: "Create Physical AI Landscape mindmap"
Task T024: "Create ROS 2 Architecture block diagram"
Task T025: "Create Humanoid Robot ROS 2 Stack flowchart"

# Launch all Module 1 code packages in parallel:
Task T028: "Installation script for Chapter 2"
Task T029: "Environment setup script for Chapter 2"
Task T030: "Demo nodes verification for Chapter 2"
```

---

## Implementation Strategy

### MVP First (User Story 1 - Module 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 - **Module 1 ONLY** (8 chapters)
4. **STOP and VALIDATE**: Test Module 1 independently - can navigate all chapters, diagrams load, code examples formatted correctly
5. Deploy Module 1 to GitHub Pages for early feedback

### Incremental Delivery (Full Textbook)

1. Complete Setup + Foundational → Foundation ready
2. Add Module 1 (US1) → Test → Deploy (MVP: ROS 2 learning resource)
3. Add Modules 2-5 (US1) → Test → Deploy (Complete learning path)
4. Add US2 (Labs & Code) → Test → Deploy (Hands-on practice enabled)
5. Add US4 (Bilingual) → Test → Deploy (Urdu support added)
6. Add US5 (Assessments) → Test → Deploy (Progress tracking enabled)
7. Polish & Deploy final version to GitHub Pages

### Parallel Team Strategy

With multiple developers/content authors:

**Phase 1-2**: Complete Setup + Foundational together

**Phase 3 (US1)**: Once Foundational is done:
- Author A: Module 1 + Module 2
- Author B: Module 3 + Module 4
- Author C: Module 5
- Authors can work in parallel on different modules

**Phase 4 (US2)**:
- Developer A: Components (T189-T192, T198, T200)
- Developer B: Validation tests (T201-T205)
- Developer C: Code packages (T206-T212)

**Phase 5 (US4)**:
- Translator A: Modules 1-2 (T227-T228)
- Translator B: Modules 3-4 (T229-T230)
- Translator C: Module 5 + UI (T220-T226, T231)

**Phase 6 (US5)**:
- Developer A: Components (T237-T243)
- Developer B: Integration (T244-T255)

**Phase 7 (Polish)**: All team members can pick parallel tasks

---

## Notes

- **[P] tasks**: Different files, no dependencies - safe to parallelize
- **[Story] label**: Maps task to specific user story for traceability
- **User Story 3 (RAG Chatbot) EXCLUDED**: Per user request, chatbot tasks will be in separate implementation phase
- **Each user story independently testable**: US1 (content), US2 (code interactivity), US4 (translation), US5 (assessments)
- **Module 1 is MVP**: Can deploy just Module 1 as standalone ROS 2 learning resource
- **Content-first approach**: All 32 chapters written before adding interactivity/translation/assessments
- **Verify at checkpoints**: Test each user story independently before moving to next
- **Commit frequently**: After each chapter, each module, each user story phase
- **Avoid**: Trying to translate before English content exists, adding quizzes before quiz component built

---

## Total Task Count

- **Phase 1 (Setup)**: 8 tasks
- **Phase 2 (Foundational)**: 13 tasks
- **Phase 3 (US1 - Content)**: 167 tasks (32 chapters × ~5 tasks/chapter + assessments)
- **Phase 4 (US2 - Labs)**: 24 tasks
- **Phase 5 (US4 - Bilingual)**: 24 tasks
- **Phase 6 (US5 - Assessments)**: 19 tasks
- **Phase 7 (Polish)**: 25 tasks

**TOTAL: 280 tasks**

**Parallelization**: ~120 tasks marked [P] can run in parallel, reducing calendar time significantly with multiple team members.

**MVP Scope** (recommended for initial delivery):
- Phase 1: Setup (8 tasks)
- Phase 2: Foundational (13 tasks)
- Phase 3: User Story 1 - Module 1 ONLY (42 tasks)
- **MVP Total: 63 tasks** → Delivers functional ROS 2 learning module

---

## Success Criteria Mapping

This task breakdown ensures all success criteria from spec.md are met:

- **SC-001 (Learning Objectives)**: All 32 chapters include learning objectives (Phase 3)
- **SC-002 (Code Reproducibility)**: Validation tests for all code examples (Phase 4, T201-T205)
- **SC-003 (Site Performance)**: Optimized build, image compression (Phase 7, T261, T274)
- **SC-006 (User Engagement)**: Progress tracking, badges, quizzes (Phase 6)
- **SC-007 (Accessibility)**: WCAG compliance, keyboard nav, screen reader testing (Phase 7, T258, T275-T276)
- **SC-008 (Content Quality)**: Link validation, code testing, peer review checkpoints (Phase 7, T259-T260; Phase 4, T201-T205)
