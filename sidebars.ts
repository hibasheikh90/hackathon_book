import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Home',
    },
    {
      type: 'doc',
      id: 'about',
      label: 'About',
    },
    {
      type: 'doc',
      id: 'prerequisites',
      label: 'Prerequisites',
    },
    {
      type: 'category',
      label: 'Module 1: ROS 2 Fundamentals',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Week 1: Introduction & Setup',
          items: [
            'module-1-ros2/week-1/chapter-1-intro',
            'module-1-ros2/week-1/chapter-2-setup',
          ],
        },
        {
          type: 'category',
          label: 'Week 2: Nodes & Topics',
          items: [
            'module-1-ros2/week-2/chapter-3-nodes',
            'module-1-ros2/week-2/chapter-4-topics',
          ],
        },
        {
          type: 'category',
          label: 'Week 3: Services & Actions',
          items: [
            'module-1-ros2/week-3/chapter-5-services',
            'module-1-ros2/week-3/chapter-6-actions',
          ],
        },
        {
          type: 'category',
          label: 'Week 4: Parameters & Launch',
          items: [
            'module-1-ros2/week-4/chapter-7-parameters',
            'module-1-ros2/week-4/chapter-8-launch',
          ],
        },
        'module-1-ros2/module-1-assessment',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin Simulation',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Week 5: Gazebo Classic',
          items: [
            'module-2-simulation/week-5/chapter-9-intro-gazebo',
            'module-2-simulation/week-5/chapter-10-urdf',
          ],
        },
        {
          type: 'category',
          label: 'Week 6: Gazebo-ROS 2 Integration',
          items: [
            'module-2-simulation/week-6/chapter-11-gazebo-plugins',
            'module-2-simulation/week-6/chapter-12-worlds',
          ],
        },
        {
          type: 'category',
          label: 'Week 7: Unity Simulation',
          items: [
            'module-2-simulation/week-7/chapter-13-unity-ros',
            'module-2-simulation/week-7/chapter-14-humanoid-unity',
          ],
        },
        'module-2-simulation/module-2-assessment',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac Platform',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Week 8: Isaac Sim Fundamentals',
          items: [
            'module-3-isaac/week-8/chapter-15-intro-isaac',
            'module-3-isaac/week-8/chapter-16-isaac-ros-bridge',
          ],
        },
        {
          type: 'category',
          label: 'Week 9: Synthetic Data Generation',
          items: [
            'module-3-isaac/week-9/chapter-17-synthetic-data',
            'module-3-isaac/week-9/chapter-18-perception-training',
          ],
        },
        {
          type: 'category',
          label: 'Week 10: Isaac Gym and RL',
          items: [
            'module-3-isaac/week-10/chapter-19-isaac-gym',
            'module-3-isaac/week-10/chapter-20-humanoid-rl',
          ],
        },
        {
          type: 'category',
          label: 'Week 11: Isaac Advanced Topics',
          items: [
            'module-3-isaac/week-11/chapter-21-isaac-cortex',
            'module-3-isaac/week-11/chapter-22-isaac-deployment',
          ],
        },
        'module-3-isaac/module-3-assessment',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action Robotics',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Week 12: VLA Fundamentals',
          items: [
            'module-4-vla/week-12/chapter-23-intro-vla',
            'module-4-vla/week-12/chapter-24-vision-encoders',
          ],
        },
        {
          type: 'category',
          label: 'Week 13: Language-Conditioned Control',
          items: [
            'module-4-vla/week-13/chapter-25-language-models',
            'module-4-vla/week-13/chapter-26-vla-training',
          ],
        },
        {
          type: 'category',
          label: 'Week 14: VLA Deployment',
          items: [
            'module-4-vla/week-14/chapter-27-vla-deployment',
            'module-4-vla/week-14/chapter-28-vla-humanoids',
          ],
        },
        'module-4-vla/module-4-assessment',
      ],
    },
    {
      type: 'category',
      label: 'Module 5: Capstone Project',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Week 15: System Integration',
          items: [
            'module-5-capstone/week-15/chapter-29-capstone-overview',
            'module-5-capstone/week-15/chapter-30-system-integration',
          ],
        },
        {
          type: 'category',
          label: 'Week 16: Testing and Deployment',
          items: [
            'module-5-capstone/week-16/chapter-31-testing-validation',
            'module-5-capstone/week-16/chapter-32-deployment-future',
          ],
        },
        'module-5-capstone/module-5-assessment',
      ],
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
    {
      type: 'doc',
      id: 'glossary',
      label: 'Glossary',
    },
    {
      type: 'doc',
      id: 'resources',
      label: 'Resources',
    },
  ],
};

export default sidebars;
