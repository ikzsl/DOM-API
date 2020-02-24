

navTab = () => {

  const nav = document.querySelectorAll('.nav');
  nav.forEach((el) => el.addEventListener('click', () => {
    let activeNavLink = el.querySelector('.active');
    activeNavLink.classList.remove('active');
  }));
  const doMagic = (e) => {
    const activeTabContent = document.body.querySelector(e.target.hash).closest('.tab-content');
    const activeTabPane = activeTabContent.querySelector('.active');
    activeTabPane.classList.remove('active');
    let activeNewTabPane = document.body.querySelector(e.target.hash);
    e.target.classList.add('active');
    activeNewTabPane.classList.add('active');
  };
  document.body.addEventListener('click', doMagic);
};

navTab()