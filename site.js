const site = {
  githubUser: "WHOO-121",
  repositories: [
    {
      name: "herb-quality-system",
      description: "中药材炮制质量多模态识别系统，包含图像特征、模型训练、预测与数据质量分析。",
      tags: ["Python", "PyTorch", "Computer Vision"],
      url: "https://github.com/WHOO-121/herb-quality-system"
    },
    {
      name: "herb-quality-web",
      description: "面向中药材识别与训练流程的 Web 可视化界面，用于上传图片、查看预测结果和启动训练。",
      tags: ["Web", "AI App", "Dashboard"],
      url: "https://github.com/WHOO-121/herb-quality-web"
    },
    {
      name: "learning-notes",
      description: "课程笔记、实验复现、论文阅读和阶段性总结。",
      tags: ["Notes", "Research", "Study"],
      url: "https://github.com/WHOO-121/learning-notes"
    }
  ],
  courses: [
    {
      title: "深度学习基础",
      summary: "神经网络、CNN、训练技巧、实验记录与模型评估。",
      status: "学习中"
    },
    {
      title: "计算机视觉实践",
      summary: "图像分类、特征提取、数据增强和可解释性分析。",
      status: "整理中"
    },
    {
      title: "图神经网络与多模态学习",
      summary: "面向颜色、成分、电子感官和图像数据的融合建模路线。",
      status: "规划中"
    }
  ],
  journal: [
    {
      date: "2026-08-17",
      title: "博客初始版本完成",
      summary: "建立首页、仓库展示、课程列表和项目记录，后续可直接替换 GitHub 链接与课程内容。"
    },
    {
      date: "2026-08-13",
      title: "中药质量识别项目整理",
      summary: "梳理模型训练、图像预测、多模态扩展和 Web 端使用说明。"
    }
  ]
};

const profile = document.querySelector("#githubProfile");
profile.href = `https://github.com/${site.githubUser}`;
profile.textContent = `github.com/${site.githubUser}`;

const repoGrid = document.querySelector("#repoGrid");
repoGrid.innerHTML = site.repositories.map(repo => `
  <article class="card">
    <h3>${repo.name}</h3>
    <p>${repo.description}</p>
    <div class="tags">${repo.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    <a class="card-link" href="${repo.url}" target="_blank" rel="noreferrer">打开仓库</a>
  </article>
`).join("");

const courseList = document.querySelector("#courseList");
courseList.innerHTML = site.courses.map(course => `
  <article class="course-item">
    <div>
      <h3>${course.title}</h3>
      <p>${course.summary}</p>
    </div>
    <span class="status">${course.status}</span>
  </article>
`).join("");

const journalList = document.querySelector("#journalList");
journalList.innerHTML = site.journal.map(item => `
  <article class="timeline-item">
    <time>${item.date}</time>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
  </article>
`).join("");
