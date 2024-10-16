// common time function
function showtime(time) {
  const day = parseInt(time / 86400);
  const remainingSecond = time % 86400;
  const hour = parseInt(remainingSecond / 3600);
  const remainingSecond2 = remainingSecond % 3600;
  const minute = parseInt(remainingSecond2 / 60);
  const seconds = remainingSecond2 % 60;
  return `${day}day ${hour}hour ${minute}minute and ${seconds}seconds ago`;
}

// load category videos
const loadCategoryVideos = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.log("Error occured"));
};

// load catagories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log("failed", error));
};
// display catagories
const btnContainer = document.getElementById("categories-btn");
const displayCategories = (categories) => {
  categories.forEach((item) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button onclick="loadCategoryVideos(${item.category_id})" class="btn p-3 ">
    ${item.category}
    </button>
    `;
    btnContainer.appendChild(buttonContainer);
  });
};

loadCategories();

// load videos
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};

// display videos
const videoBox = document.getElementById("video-box");
const displayVideos = (videos) => {
  videoBox.innerHTML = "";
  if(videos.length == ){
    
  }
  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card ";
    card.innerHTML = `
   <figure class="h-[200px] relative">
    <img class="w-full h-full object-cover"
      src=${video.thumbnail} />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span  class="absolute text-xs right-2 bottom-2 bg-black text-white rounded-lg p-1">${showtime(
              video.others.posted_date
            )}</span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-3">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src="${
      video.authors[0].profile_picture
    }" />
    </div>
    <div>
    <h3 class="font-bold text-gray-950">${video.title} </h3>
    <p>${video.authors[0].profile_name}  ${
      video.authors[0].verified === true
        ? `<i class="fa-solid fa-certificate text-blue-800"></i>`
        : ""
    }</p>
    <p class="text-sm text-gray-600">${video.others?.views} views</p>
    </div>
    
    
  </div>
   `;
    videoBox.appendChild(card);
  });
};

loadVideos();
