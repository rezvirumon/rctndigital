const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});





// channels

document.addEventListener('DOMContentLoaded', function () {
  // Sample data with categories (replace with your own channel data)
  const channelData = [
      { name: 'BTV WORLD', logo: '../image/btvlogo.png', category: 'News' },
      { name: 'BTV NATIONAL', logo: '../image/btvlogo.png', category: 'News' },
      { name: 'BTV CHATTOGRAM', logo: '../image/Bangladesh_Television_Chittagong_Logo.png', category: 'News' },
      { name: 'SANGSAD BANGLADESH', logo: '../image/SANGSAD BANGLADESH.png', category: 'News' },
      { name: 'BTV WORLD', logo: '../image/BTV_World_Logo (1).png', category: 'News' },
      { name: 'BTV NATIONAL', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'News' },
      { name: 'BTV CHATTOGRAM', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'News' },
      { name: 'SANGSAD BANGLADESH', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'News' },
      { name: 'BTV WORLD', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'News' },
      { name: 'BTV NATIONAL', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'Entertainment' },
      { name: 'BTV CHATTOGRAM', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'Music' },
      { name: 'SANGSAD BANGLADESH', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'Music' },
      { name: 'BTV WORLD', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'Music' },
      { name: 'BTV NATIONAL', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'Movie' },
      { name: 'BTV CHATTOGRAM', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'Movie' },
      { name: 'SANGSAD BANGLADESH', logo: 'https://rumon-web.netlify.app/img/amc-digital.png', category: 'Movie' },
     
      // Add more channels as needed

  ];

  // Function to render channel list
  function renderChannelList(channels) {
      const channelList = document.getElementById('channelList');
      channelList.innerHTML = ''; // Clear existing content

      channels.forEach(channel => {
          const card = document.createElement('div');
          card.className = 'bg-white p-2 rounded-md shadow-xl flex flex-col items-center justify-center';

          const logo = document.createElement('img');
          logo.src = channel.logo;
          logo.alt = channel.name;
          logo.className = 'mb-2';

          const name = document.createElement('span');
          name.textContent = channel.name;

          const category = document.createElement('span');
          category.textContent = channel.category;
          category.className = 'text-gray-500 text-sm';

          card.appendChild(logo);
          card.appendChild(name);
          card.appendChild(category);

          channelList.appendChild(card);
      });

      // Update total channels count
      updateTotalCount(channels.length);
  }

  // Function to get unique categories
  function getUniqueCategories(channels) {
      return [...new Set(channels.map(channel => channel.category))];
  }

  // Function to render category filter
  function renderCategoryFilter(categories) {
      const categoryFilter = document.getElementById('categoryFilter');
      categoryFilter.innerHTML = ''; // Clear existing content

      const allOption = document.createElement('option');
      allOption.value = 'all';
      allOption.textContent = 'All Categories';
      categoryFilter.appendChild(allOption);

      categories.forEach(category => {
          const option = document.createElement('option');
          option.value = category;
          option.textContent = category;
          categoryFilter.appendChild(option);
      });
  }

  // Render category filter
  renderCategoryFilter(getUniqueCategories(channelData));

  // Function to update total channels count
  function updateTotalCount(count) {
      const totalCountElement = document.getElementById('totalCount');
      totalCountElement.textContent = `Total Channels: ${count}`;
  }

  // Initial render
  renderChannelList(channelData);

  // Event listener for category filter
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.addEventListener('change', function () {
      const selectedCategory = categoryFilter.value;
      const filteredChannels = selectedCategory === 'all' ? channelData : channelData.filter(channel => channel.category === selectedCategory);
      renderChannelList(filteredChannels);
  });

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredChannels = channelData.filter(channel => channel.name.toLowerCase().includes(searchTerm));
      renderChannelList(filteredChannels);
  });
});



