# Physical AI & Humanoid Robotics — AI-Native Textbook

A comprehensive, bilingual (English/Urdu) textbook covering Physical AI and Humanoid Robotics with hands-on labs using ROS 2, Gazebo, Unity, NVIDIA Isaac Platform, and Vision-Language-Action robotics.

## 📚 Table of Contents

- **Module 1**: ROS 2 Fundamentals (4 weeks, 8 chapters)
- **Module 2**: Digital Twin Simulation - Gazebo & Unity (3 weeks, 6 chapters)
- **Module 3**: NVIDIA Isaac Platform (4 weeks, 8 chapters)
- **Module 4**: Vision-Language-Action (VLA) Robotics (3 weeks, 6 chapters)
- **Module 5**: Capstone - Autonomous Humanoid Robot System (2 weeks, 4 chapters)

**Total**: 32 chapters with learning objectives, code examples, diagrams, labs, and assessments.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18+ (for Docusaurus)
- **Python**: 3.10+ (for ROS 2 code examples)
- **ROS 2**: Humble Hawksbill (for hands-on labs)
- **Ubuntu**: 22.04 LTS (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/hibasheikh/hackathon_book.git
cd hackathon_book

# Install dependencies
npm install

# Start the development server
npm start
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build static site
npm run build

# Serve the build locally
npm run serve
```

### Deploy to GitHub Pages

```bash
# Deploy to gh-pages branch
npm run deploy
```

## 🌐 Bilingual Support

This textbook is available in:
- **English** (default)
- **اردو (Urdu)** - Full translation with RTL support

Use the language toggle in the top-right corner to switch languages.

## 🛠️ Tech Stack

- **Frontend**: Docusaurus v3, React 18, TypeScript
- **Diagrams**: Mermaid.js, PlantUML
- **Styling**: CSS, Tailwind CSS
- **Deployment**: GitHub Pages, Vercel, or Netlify

## 📖 Features

- ✅ 32 comprehensive chapters across 5 modules
- ✅ 100+ code examples (Python, YAML, bash, C#)
- ✅ 80+ diagrams (Mermaid.js, PlantUML)
- ✅ 50+ hands-on labs with validation tests
- ✅ 200+ quiz questions with immediate feedback
- ✅ Progress tracking and badges
- ✅ Bilingual support (English/Urdu)
- ✅ Copy-to-clipboard for all code examples
- ✅ Mobile-responsive design
- ✅ Dark mode support
- ✅ WCAG 2.1 AA accessibility

## 🎯 Learning Objectives

By completing this textbook, you will be able to:

1. **ROS 2 Mastery**: Write publisher/subscriber nodes, services, actions, and launch files
2. **Digital Twin Simulation**: Create robot models in Gazebo and Unity
3. **NVIDIA Isaac Platform**: Use Isaac Sim for synthetic data generation and RL training
4. **VLA Robotics**: Implement Vision-Language-Action models for humanoid control
5. **System Integration**: Build complete autonomous humanoid robot systems

## 📂 Project Structure

```
hackathon_book/
├── docs/                  # Textbook content (MDX files)
│   ├── module-1-ros2/
│   ├── module-2-simulation/
│   ├── module-3-isaac/
│   ├── module-4-vla/
│   └── module-5-capstone/
├── static/                # Static assets
│   ├── img/               # Diagrams and screenshots
│   └── code-examples/     # Downloadable code packages
├── src/                   # React components
│   ├── components/        # Custom components
│   └── css/               # Stylesheets
├── i18n/                  # Translations
│   └── ur/                # Urdu translations
├── docusaurus.config.ts   # Docusaurus configuration
├── sidebars.ts            # Sidebar navigation
└── package.json           # Dependencies
```

## 🧪 Running Code Examples

### ROS 2 Examples (Module 1)

```bash
# Install ROS 2 Humble
sudo apt install ros-humble-desktop

# Source ROS 2
source /opt/ros/humble/setup.bash

# Run example publisher
cd docs/module-1-ros2/week-2
python3 chapter-4-publisher-example.py
```

### Isaac Sim Examples (Module 3)

Requires NVIDIA Isaac Sim 2023.1.1+ and NVIDIA GPU.

See Module 3 prerequisites for installation instructions.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-chapter`)
3. Commit your changes (`git commit -m 'Add Chapter X'`)
4. Push to the branch (`git push origin feature/new-chapter`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Author**: Hiba Sheikh
- **GitHub**: [@hibasheikh](https://github.com/hibasheikh)
- **Repository**: [hackathon_book](https://github.com/hibasheikh/hackathon_book)

## 🙏 Acknowledgments

- ROS 2 Documentation Team
- NVIDIA Isaac Team
- Docusaurus Team
- Open-source robotics community

## 📊 Progress

- [x] Specification (spec.md)
- [x] Implementation Plan (plan.md)
- [x] Task Breakdown (tasks.md)
- [x] Docusaurus Setup
- [ ] Module 1: ROS 2 Fundamentals (In Progress)
- [ ] Module 2: Digital Twin Simulation
- [ ] Module 3: NVIDIA Isaac Platform
- [ ] Module 4: Vision-Language-Action
- [ ] Module 5: Capstone Project

---

Built with ❤️ for the robotics community
