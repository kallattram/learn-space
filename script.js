
// ── DATA ──
const CATEGORIES = [
  { name: "All", icon: "✦" },
  { name: "Web Development", icon: "🌐" },
  { name: "Data Science", icon: "📊" },
  { name: "Mobile Apps", icon: "📱" },
  { name: "Design & UI", icon: "🎨" },
  { name: "Cybersecurity", icon: "🔐" },
  { name: "Cloud & DevOps", icon: "☁️" },
  { name: "AI & Machine Learning", icon: "🤖" },
  { name: "Databases", icon: "🗄️" },
];

const COURSES = [
  {
    id: 1, icon: "🌐", color: "#dbeafe",
    title: "HTML & CSS Fundamentals",
    category: "Web Development", level: "Beginner",
    duration: "4 weeks", lessons: 32,
    desc: "Build your first websites with clean, structured HTML and modern CSS. Learn layouts, flexbox, grid, and responsive design from scratch.",
    modules: [
      "Introduction to HTML & Document Structure",
      "Working with Text, Links, and Images",
      "Lists, Tables & Forms",
      "CSS Basics — Selectors & Properties",
      "Box Model, Flexbox & Grid Layout",
      "Responsive Design with Media Queries",
      "Mini Project: Build a Personal Portfolio"
    ]
  },
  {
    id: 2, icon: "⚡", color: "#fef9c3",
    title: "JavaScript for Beginners",
    category: "Web Development", level: "Beginner",
    duration: "5 weeks", lessons: 40,
    desc: "Learn the language of the web. Cover variables, functions, DOM manipulation, events, loops, and build interactive web pages.",
    modules: [
      "Variables, Data Types & Operators",
      "Control Flow — if, else, switch",
      "Functions & Scope",
      "Arrays & Objects",
      "DOM Manipulation & Events",
      "Loops & Iteration",
      "Working with Forms",
      "Mini Project: Quiz App"
    ]
  },
  {
    id: 3, icon: "⚛️", color: "#e0f2fe",
    title: "React — From Zero to Hero",
    category: "Web Development", level: "Intermediate",
    duration: "7 weeks", lessons: 56,
    desc: "Master React.js — components, hooks, state management, routing, and deploying real-world applications.",
    modules: [
      "React Environment Setup",
      "JSX & React Basics",
      "Functional Components & Props",
      "useState & useEffect Hooks",
      "Fetching Data from APIs",
      "React Router & Navigation",
      "Global State with Context API",
      "Deploying React Apps"
    ]
  },
  {
    id: 4, icon: "🐍", color: "#dcfce7",
    title: "Python for Data Science",
    category: "Data Science", level: "Beginner",
    duration: "6 weeks", lessons: 48,
    desc: "Start your data science journey with Python. Learn NumPy, Pandas, Matplotlib, and data wrangling techniques.",
    modules: [
      "Python Basics & Setup",
      "NumPy — Arrays & Operations",
      "Pandas — DataFrames & Series",
      "Data Cleaning & Preprocessing",
      "Data Visualization with Matplotlib",
      "Exploratory Data Analysis",
      "Capstone: Analyze a Real Dataset"
    ]
  },
  {
    id: 5, icon: "🤖", color: "#f3e8ff",
    title: "Machine Learning A–Z",
    category: "AI & Machine Learning", level: "Intermediate",
    duration: "10 weeks", lessons: 80,
    desc: "Understand and implement core ML algorithms — regression, classification, clustering, and neural networks with scikit-learn.",
    modules: [
      "Introduction to Machine Learning",
      "Linear & Logistic Regression",
      "Decision Trees & Random Forests",
      "Support Vector Machines",
      "Clustering — K-Means & DBSCAN",
      "Model Evaluation & Tuning",
      "Neural Network Fundamentals",
      "End-to-End ML Project"
    ]
  },
  {
    id: 6, icon: "📱", color: "#ffe4e6",
    title: "Flutter App Development",
    category: "Mobile Apps", level: "Intermediate",
    duration: "8 weeks", lessons: 62,
    desc: "Build beautiful cross-platform iOS and Android apps with Flutter and Dart. Widgets, state, navigation, and Firebase integration.",
    modules: [
      "Dart Programming Basics",
      "Flutter Widgets & Layouts",
      "State Management with setState",
      "Navigation & Routing",
      "Working with REST APIs",
      "Firebase Authentication",
      "Firestore Database",
      "Publish to App Store & Play Store"
    ]
  },
  {
    id: 7, icon: "🎨", color: "#fef3c7",
    title: "UI/UX Design Principles",
    category: "Design & UI", level: "Beginner",
    duration: "5 weeks", lessons: 38,
    desc: "Learn user-centered design thinking, wireframing, prototyping in Figma, and design systems used by real companies.",
    modules: [
      "Design Thinking & UX Process",
      "Typography & Color Theory",
      "Wireframing & Sketching",
      "Figma Basics — Frames & Components",
      "Prototyping & User Flows",
      "Design Systems & Style Guides",
      "Usability Testing"
    ]
  },
  {
    id: 8, icon: "🔐", color: "#f0fdf4",
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity", level: "Beginner",
    duration: "5 weeks", lessons: 35,
    desc: "Understand threats, vulnerabilities, and defenses. Learn ethical hacking basics, password security, network safety, and more.",
    modules: [
      "The Cybersecurity Landscape",
      "Network Basics & Protocols",
      "Common Attacks — Phishing, SQL Injection, XSS",
      "Password Security & Authentication",
      "Firewalls & Intrusion Detection",
      "Encryption & PKI",
      "Ethical Hacking Introduction"
    ]
  },
  {
    id: 9, icon: "☁️", color: "#e0f2fe",
    title: "AWS Cloud Practitioner",
    category: "Cloud & DevOps", level: "Beginner",
    duration: "4 weeks", lessons: 30,
    desc: "Get started with Amazon Web Services. Learn EC2, S3, RDS, IAM, and core cloud architecture concepts for the practitioner exam.",
    modules: [
      "Cloud Computing Concepts",
      "AWS Global Infrastructure",
      "EC2 — Virtual Servers",
      "S3 — Simple Storage Service",
      "RDS & Databases on AWS",
      "IAM — Identity & Access Management",
      "Billing, Pricing & Support"
    ]
  },
  {
    id: 10, icon: "🗄️", color: "#f0fdf4",
    title: "SQL & Database Design",
    category: "Databases", level: "Beginner",
    duration: "4 weeks", lessons: 29,
    desc: "Master relational databases. Write complex SQL queries, design schemas, work with joins, indexes, and stored procedures.",
    modules: [
      "Database Concepts & Relational Model",
      "SQL Basics — SELECT, WHERE, ORDER BY",
      "JOINs — INNER, LEFT, RIGHT, FULL",
      "Aggregations & GROUP BY",
      "Subqueries & CTEs",
      "Database Design & Normalization",
      "Indexes, Views & Stored Procedures"
    ]
  },
  {
    id: 11, icon: "🏗️", color: "#fef9c3",
    title: "Node.js & Express APIs",
    category: "Web Development", level: "Intermediate",
    duration: "6 weeks", lessons: 47,
    desc: "Build scalable backend APIs with Node.js and Express. REST architecture, middleware, authentication, and MongoDB integration.",
    modules: [
      "Node.js Runtime & npm",
      "Express.js Setup & Routing",
      "Middleware & Error Handling",
      "Building a REST API",
      "Authentication with JWT",
      "MongoDB & Mongoose",
      "Deployment with Railway / Render"
    ]
  },
  {
    id: 12, icon: "🧠", color: "#f3e8ff",
    title: "Deep Learning with TensorFlow",
    category: "AI & Machine Learning", level: "Advanced",
    duration: "12 weeks", lessons: 95,
    desc: "Build neural networks from scratch. CNNs, RNNs, LSTMs, transformers, and real-world projects like image classification.",
    modules: [
      "Neural Network Mathematics",
      "TensorFlow & Keras Setup",
      "Building Dense Networks",
      "Convolutional Neural Networks (CNNs)",
      "Image Classification Projects",
      "Recurrent Neural Networks (RNNs)",
      "Transfer Learning",
      "Model Deployment with TF Serving"
    ]
  },
  {
    id: 13, icon: "📊", color: "#dbeafe",
    title: "Data Visualization with Tableau",
    category: "Data Science", level: "Intermediate",
    duration: "4 weeks", lessons: 26,
    desc: "Create stunning, interactive dashboards in Tableau. Learn charts, filters, calculated fields, and storytelling with data.",
    modules: [
      "Tableau Interface & Connecting Data",
      "Basic Charts — Bar, Line, Pie",
      "Filters, Parameters & Actions",
      "Calculated Fields & LOD Expressions",
      "Maps & Geospatial Analysis",
      "Dashboard Design Principles",
      "Publishing to Tableau Public"
    ]
  },
  {
    id: 14, icon: "🛡️", color: "#ffe4e6",
    title: "Ethical Hacking & Penetration Testing",
    category: "Cybersecurity", level: "Advanced",
    duration: "10 weeks", lessons: 74,
    desc: "Think like an attacker. Hands-on labs covering reconnaissance, exploitation, privilege escalation, and reporting.",
    modules: [
      "Penetration Testing Methodology",
      "Reconnaissance & OSINT",
      "Scanning with Nmap & Nessus",
      "Exploitation with Metasploit",
      "Web App Attacks — OWASP Top 10",
      "Privilege Escalation",
      "Post-Exploitation & Persistence",
      "Writing Pentest Reports"
    ]
  },
  {
    id: 15, icon: "🎯", color: "#f0fdf4",
    title: "Figma — Advanced Design",
    category: "Design & UI", level: "Advanced",
    duration: "5 weeks", lessons: 36,
    desc: "Go beyond basics. Advanced Figma techniques — auto layout, variants, component libraries, and dev handoff.",
    modules: [
      "Advanced Auto Layout",
      "Component Variants & Properties",
      "Design Tokens & Variables",
      "Responsive Design in Figma",
      "Prototyping — Advanced Interactions",
      "Plugins & Figma API",
      "Dev Handoff Best Practices"
    ]
  },
  {
    id: 16, icon: "🐳", color: "#e0f2fe",
    title: "Docker & Kubernetes",
    category: "Cloud & DevOps", level: "Intermediate",
    duration: "7 weeks", lessons: 52,
    desc: "Containerize applications with Docker and orchestrate with Kubernetes. CI/CD pipelines, Helm charts, and production deployments.",
    modules: [
      "Docker Concepts & Installation",
      "Writing Dockerfiles",
      "Docker Compose for Multi-container Apps",
      "Kubernetes Architecture",
      "Pods, Deployments & Services",
      "ConfigMaps, Secrets & Volumes",
      "Helm Charts",
      "CI/CD with GitHub Actions"
    ]
  },
  {
    id: 17, icon: "📲", color: "#fef3c7",
    title: "React Native — Mobile Apps",
    category: "Mobile Apps", level: "Intermediate",
    duration: "7 weeks", lessons: 55,
    desc: "Use your React skills to build native iOS and Android apps with React Native. Expo, navigation, device APIs, and publishing.",
    modules: [
      "React Native & Expo Setup",
      "Core Components & Styling",
      "React Navigation",
      "State Management with Redux Toolkit",
      "Camera, Location & Device APIs",
      "Firebase & Backend Integration",
      "App Store Deployment"
    ]
  },
  {
    id: 18, icon: "🏦", color: "#dcfce7",
    title: "MongoDB — NoSQL Databases",
    category: "Databases", level: "Intermediate",
    duration: "4 weeks", lessons: 30,
    desc: "Work with MongoDB — document structure, CRUD operations, aggregation pipelines, indexing, and integration with Node.js.",
    modules: [
      "NoSQL vs SQL Concepts",
      "MongoDB Setup & Compass",
      "CRUD Operations",
      "Schema Design & Embedded Documents",
      "Aggregation Pipelines",
      "Indexing & Performance",
      "Mongoose ODM with Node.js"
    ]
  },
  {
    id: 19, icon: "🚀", color: "#f3e8ff",
    title: "DevOps & CI/CD Pipeline",
    category: "Cloud & DevOps", level: "Advanced",
    duration: "8 weeks", lessons: 60,
    desc: "Master modern DevOps culture. Git workflows, automated testing, Jenkins, GitHub Actions, monitoring, and infrastructure as code.",
    modules: [
      "DevOps Culture & Principles",
      "Git Branching Strategies",
      "Automated Testing",
      "Jenkins Pipeline Setup",
      "GitHub Actions — CI/CD",
      "Infrastructure as Code — Terraform",
      "Monitoring with Grafana & Prometheus",
      "Incident Management"
    ]
  },
  {
    id: 20, icon: "💬", color: "#ffe4e6",
    title: "Natural Language Processing",
    category: "AI & Machine Learning", level: "Advanced",
    duration: "9 weeks", lessons: 68,
    desc: "Build text processing systems. Tokenization, embeddings, sentiment analysis, chatbots, and transformer models with HuggingFace.",
    modules: [
      "NLP Fundamentals",
      "Text Preprocessing & Tokenization",
      "Word Embeddings — Word2Vec, GloVe",
      "Sentiment Analysis",
      "Named Entity Recognition (NER)",
      "Transformers & BERT",
      "Fine-tuning with HuggingFace",
      "Building a Chatbot"
    ]
  },
];

// ── STATE ──
let activeCategory = "All";
let savedCourses = JSON.parse(localStorage.getItem('ls_saved') || '[]');
let enrollingCourse = null;

let currentUser = null;
let enrolledCourses = [];

try {
  currentUser = JSON.parse(localStorage.getItem("user")) || null;
} catch (e) {
  console.log("User parse error");
}

try {
  enrolledCourses = JSON.parse(localStorage.getItem("enrolled")) || [];
} catch (e) {
  console.log("Enroll parse error");}// ── INIT ──
function init() {
  buildCategoryList();
  filterCourses();
  updateSavedPanel();
  updateSavedCount();
if (currentUser) {
    document.querySelector(".saved-btn").innerHTML =
      `Hi, ${currentUser.name}`;

    // Hide fields since user already logged in
    document.getElementById('f-name').parentElement.style.display = "none";
    document.getElementById('f-email').parentElement.style.display = "none";
    document.getElementById('f-phone').parentElement.style.display = "none";
  }
}

function buildCategoryList() {
  const el = document.getElementById('categoryList');
  el.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const count = cat.name === 'All' ? COURSES.length : COURSES.filter(c => c.category === cat.name).length;
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat.name === activeCategory ? ' active' : '');
    btn.innerHTML = `<span>${cat.icon} ${cat.name}</span><span class="cat-count">${count}</span>`;
    btn.onclick = () => { activeCategory = cat.name; buildCategoryList(); filterCourses(); };
    el.appendChild(btn);
  });
}


function loginUser() {
  const name = document.getElementById("login-name").value;
  const email = document.getElementById("login-email").value;
  const phone = document.getElementById("login-phone").value;

  if (!name || !email) {
    alert("Enter details");
    return;
  }

  currentUser = { name, email, phone };

  localStorage.setItem("user", JSON.stringify(currentUser));

  document.getElementById("loginModal").classList.remove("open");

  showToast("Logged in successfully!", "success");
}

function filterCourses() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const sort = document.querySelector('.sort-select').value;
  const checkedLevels = [...document.querySelectorAll('.level-filters input:checked')].map(i => i.value);

  let filtered = COURSES.filter(c => {
    const matchCat = activeCategory === 'All' || c.category === activeCategory;
    const matchSearch = !search || c.title.toLowerCase().includes(search) || c.category.toLowerCase().includes(search) || c.desc.toLowerCase().includes(search);
    const matchLevel = checkedLevels.length === 0 || checkedLevels.includes(c.level);
    return matchCat && matchSearch && matchLevel;
  });

  if (sort === 'az') filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === 'duration') filtered.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));

  renderCourses(filtered);
  document.getElementById('coursesCount').textContent = `${filtered.length} course${filtered.length !== 1 ? 's' : ''}`;
}

function renderCourses(list) {
  const grid = document.getElementById('coursesGrid');
  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="big">🔍</div><br>No courses found.<br>Try a different filter.</div>`;
    return;
  }

  grid.innerHTML = list.map((c, i) => {
    const isSaved = savedCourses.includes(c.id);
    return `
    <div class="card" style="animation-delay:${i * 0.05}s">
      <div class="card-thumb" style="background:${c.color}">${c.icon}</div>
      <div class="card-body">
        <div class="card-tags">
          <span class="tag tag-cat">${c.category}</span>
          <span class="tag tag-level-${c.level.toLowerCase()}">${c.level}</span>
        </div>
        <div class="card-title">${c.title}</div>
        <div class="card-desc">${c.desc}</div>
        <div class="card-meta">
          <span class="meta-item">📅 ${c.duration}</span>
          <span class="meta-item">📖 ${c.lessons} lessons</span>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn-enroll" onclick="openModal(${c.id})">Enroll →</button>
        <button class="btn-save ${isSaved ? 'saved' : ''}" id="save-${c.id}" onclick="toggleSave(${c.id})" title="${isSaved ? 'Unsave' : 'Save'}">
          ${isSaved ? '★' : '☆'}
        </button>
      </div>
      <button class="btn-modules" onclick="toggleModules(${c.id}, this)">
        <span>📋 View ${c.modules.length} Modules</span>
        <span class="chevron" id="chev-${c.id}">▾</span>
      </button>
      <div class="modules-list" id="modules-${c.id}">
        ${c.modules.map((m, j) => `
          <div class="module-item">
            <span class="module-num">${String(j+1).padStart(2,'0')}</span>
            <span>${m}</span>
          </div>
        `).join('')}
      </div>
    </div>`;
  }).join('');
}

function toggleModules(id, btn) {
  const list = document.getElementById(`modules-${id}`);
  const chev = document.getElementById(`chev-${id}`);
  const open = list.classList.toggle('open');
  chev.classList.toggle('open', open);
  btn.querySelector('span:first-child').textContent = open
    ? `📋 Hide Modules`
    : `📋 View ${COURSES.find(c => c.id === id).modules.length} Modules`;
}

function toggleSave(id) {
  const idx = savedCourses.indexOf(id);
  if (idx === -1) {
    savedCourses.push(id);
    showToast('Course saved! ★', 'success');
  } else {
    savedCourses.splice(idx, 1);
    showToast('Removed from saved.', 'info');
  }
  localStorage.setItem('ls_saved', JSON.stringify(savedCourses));
  updateSavedCount();
  updateSavedPanel();
  // Update button in grid
  const btn = document.getElementById(`save-${id}`);
  if (btn) {
    btn.classList.toggle('saved', savedCourses.includes(id));
    btn.textContent = savedCourses.includes(id) ? '★' : '☆';
  }
}

function updateSavedCount() {
  document.getElementById('savedCount').textContent = savedCourses.length;
}

function updateSavedPanel() {
  const list = document.getElementById('savedList');
  if (savedCourses.length === 0) {
    list.innerHTML = `<div class="saved-empty"><div class="big">☆</div>No saved courses yet.<br>Click the ☆ on any card.</div>`;
    return;
  }
  list.innerHTML = savedCourses.map(id => {
    const c = COURSES.find(x => x.id === id);
    if (!c) return '';
    return `
      <div class="saved-item">
        <div class="saved-item-icon">${c.icon}</div>
        <div class="saved-item-info">
          <div class="saved-item-title">${c.title}</div>
          <div class="saved-item-cat">${c.category} · ${c.level}</div>
        </div>
        <button class="remove-saved" onclick="toggleSave(${c.id})">✕</button>
      </div>`;
  }).join('');
}

function toggleSavedPanel() {
  document.getElementById('savedPanel').classList.toggle('open');
}

// ── MODAL ──
function openModal(id) {
  enrollingCourse = COURSES.find(c => c.id === id);

  if (!currentUser) {
    document.getElementById("loginModal").classList.add("open");
    return;
  }

  document.getElementById('modalCourseName').textContent = enrollingCourse.title;

  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modalOverlay')) {
    document.getElementById('modalOverlay').classList.remove('open');
  }
}

function submitEnroll() {
  if (!enrollingCourse) return;

  if (enrolledCourses.includes(enrollingCourse.id)) {
    showToast("Already enrolled!", "info");
    return;
  }

  enrolledCourses.push(enrollingCourse.id);
  localStorage.setItem("enrolled", JSON.stringify(enrolledCourses));

  showToast(`🎉 Enrolled in ${enrollingCourse.title}`, "success");

  document.getElementById('modalOverlay').classList.remove('open');
}
// ── TOAST ──
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${type} show`;
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

init();