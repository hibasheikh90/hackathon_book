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
