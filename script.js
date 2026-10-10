const portfolioData = {
  profile: {
    kicker: 'About me',
    title: 'Profile',
    content:
      'I create product experiences that are not just functional, but memorable. I blend front-end craft, interaction design, and engineering thinking to turn ideas into responsive products that people genuinely enjoy using.',
    groups: [
      {
        heading: 'Quick facts',
        items: [
          { title: 'Name', text: 'Dylan Carter' },
          { title: 'Role', text: 'Senior Product Engineer' },
          { title: 'Based in', text: 'London, UK' }
        ]
      }
    ],
    pills: ['Design Systems', 'Interaction Design', 'Web Apps']
  },
  skills: {
    kicker: 'Capabilities',
    title: 'Skills',
    content:
      'I work across design and engineering to build experiences that are elegant, robust, and fast. My work spans product strategy, UI architecture, and shipping polished customer-facing interfaces.',
    groups: [
      {
        heading: 'Core stack',
        items: [
          { title: 'Frontend', text: 'React, TypeScript, Next.js, CSS Architecture' },
          { title: 'Design', text: 'Figma, Design Systems, User Flows, Prototyping' },
          { title: 'Backend', text: 'Node.js, APIs, authentication, real-time data' }
        ]
      }
    ],
    pills: ['React', 'TypeScript', 'Node.js', 'UI/UX', 'Figma', 'GraphQL']
  },
  education: {
    kicker: 'Academic path',
    title: 'Education',
    content:
      'I studied digital media and computer science with a strong focus on human-centered interaction, software engineering, and design research. That foundation shaped how I build products today.',
    groups: [
      {
        heading: 'Background',
        items: [
          { title: 'BSc in Computer Science', text: 'University of Westminster • 2014 - 2018' },
          { title: 'Design & Interaction', text: 'UX concentration with product prototyping and interface systems' }
        ]
      }
    ],
    pills: ['BSc', 'UX Design', 'HCI', 'Computer Science']
  },
  experience: {
    kicker: 'Work history',
    title: 'Experience',
    content:
      'My process is grounded in product thinking: identify user problems, prototype quickly, validate deeply, and ship with measurable impact. I enjoy working closely with teams to turn ambiguity into momentum.',
    groups: [
      {
        heading: 'Roles',
        items: [
          { title: 'Senior Product Engineer', text: 'Northstar Studio • 2021 - Present' },
          { title: 'Frontend Engineer', text: 'Pixel & Co • 2018 - 2021' },
          { title: 'UI Developer', text: 'Freelance contracted work for SaaS and startup teams' }
        ]
      }
    ],
    pills: ['Product Strategy', 'Leadership', 'Performance', 'Research']
  },
  projects: {
    kicker: 'Selected work',
    title: 'Projects',
    content:
      'I enjoy building tools and platforms that make complex workflows simpler, more delightful, and more discoverable. My portfolio spans SaaS, creative products, dashboards, and immersive brand experiences.',
    groups: [
      {
        heading: 'Featured builds',
        items: [
          { title: 'Aura Studio', text: 'Design-to-code platform for agencies and digital teams' },
          { title: 'Signal Board', text: 'Analytics dashboard for real-time operations and reporting' },
          { title: 'Orbit Commerce', text: 'Conversion-focused storefront and product storytelling experience' }
        ]
      }
    ],
    pills: ['Next.js', 'Motion Design', 'Dashboards', 'E-commerce']
  },
  contact: {
    kicker: 'Get in touch',
    title: 'Contact',
    content:
      'If you are building something ambitious, I would love to hear about it. I can help shape product direction, build interfaces, and turn early ideas into polished digital experiences.',
    groups: [
      {
        heading: 'Reach out',
        items: [
          { title: 'Email', text: 'hello@dylancarter.dev' },
          { title: 'LinkedIn', text: 'linkedin.com/in/dylancarter' },
          { title: 'GitHub', text: 'github.com/dylancarter' }
        ]
      }
    ],
    pills: ['Available for work', 'Remote friendly', 'Global projects']
  }
};

const panel = document.getElementById('info-panel');
const panelTitle = document.getElementById('panel-title');
const panelKicker = document.getElementById('panel-kicker');
const panelContent = document.getElementById('panel-content');
const closePanel = document.getElementById('close-panel');
const roomButton = document.getElementById('enter-room');
const scene = document.getElementById('scene');

const renderPanel = (key) => {
  const data = portfolioData[key];
  if (!data) return;

  panelTitle.textContent = data.title;
  panelKicker.textContent = data.kicker;

  const groupsMarkup = data.groups
    .map(
      (group) => `
        <div class="detail-group">
          <h3>${group.heading}</h3>
          <ul class="detail-list">
            ${group.items
              .map(
                (item) => `
                  <li>
                    <strong>${item.title}</strong>
                    <span>${item.text}</span>
                  </li>
                `
              )
              .join('')}
          </ul>
        </div>
      `
    )
    .join('');

  const pillsMarkup = data.pills
    .map((pill) => `<span class="pill">${pill}</span>`)
    .join('');

  panelContent.innerHTML = `
    <p class="panel-copy">${data.content}</p>
    ${groupsMarkup}
    <div class="pill-row">${pillsMarkup}</div>
  `;

  panel.classList.add('visible');
};

const roomItems = document.querySelectorAll('.interactive-object');

roomItems.forEach((item) => {
  item.addEventListener('click', () => {
    const key = item.dataset.key;
    renderPanel(key);
  });
});

closePanel.addEventListener('click', () => {
  panel.classList.remove('visible');
});

roomButton.addEventListener('click', () => {
  scene.scrollIntoView({ behavior: 'smooth', block: 'center' });
  renderPanel('profile');
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    panel.classList.remove('visible');
  }
});

renderPanel('profile');
