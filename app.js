const food = [
  {
    CategoryName: "Biryani/Rice",
    name: "Chicken Fried Rice",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    options: [
      {
        half: "130",
        full: "220",
      },
    ],
    price: 5,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Pizza",
    name: "Mix Veg Pizza",
    img: "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
    options: [
      {
        regular: "100",
        medium: "200",
        large: "300",
      },
    ],
    price: 9,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Starter",
    name: "Paneer 65",
    img: "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
    options: [
      {
        half: "150",
        full: "260",
      },
    ],
    price: 7,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Biryani/Rice",
    name: "Veg Fried Rice",
    img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    options: [
      {
        half: "110",
        full: "200",
      },
    ],
    price: 4,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Biryani/Rice",
    name: "Fish Biryani",
    img: "https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=",
    options: [
      {
        half: "200",
        full: "320",
      },
    ],
    price: 6,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Biryani/Rice",
    name: "Chicken Biryani",
    img: "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
    options: [
      {
        half: "170",
        full: "300",
      },
    ],
    price: 5,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Biryani/Rice",
    name: "Veg Biryani",
    img: "https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=",
    options: [
      {
        half: "150",
        full: "260",
      },
    ],
    price: 3,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Pizza",
    name: "Chicken Cheese Pizza",
    img: "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
    options: [
      {
        regular: "120",
        medium: "230",
        large: "350",
      },
    ],
    price: 4,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Biryani/Rice",
    name: "Prawns Fried Rice",
    img: "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg",
    options: [
      {
        half: "120",
        full: "220",
      },
    ],
    price: 2,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Starter",
    name: "Chilli Paneer",
    img: "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
    options: [
      {
        half: "120",
        full: "200",
      },
    ],
    price: 6,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Starter",
    name: "Chicken Tikka",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    options: [
      {
        half: "170",
        full: "300",
      },
    ],
    price: 5,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
  {
    CategoryName: "Starter",
    name: "Paneer Tikka",
    img: "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
    options: [
      {
        half: "170",
        full: "250",
      },
    ],
    price: 4,
    description:
      "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(food);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.name} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.name}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.description}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  // 1st way to get unique categories...

  // const categories = food.reduce(
  //   (value, current) => {
  //     if (!value.includes(current.CategoryName)) {
  //       value.push(current.CategoryName);
  //     }
  //     return value;
  //   },
  //   ["all"]
  // );

  // another way to get unique categories
  const categories = ["all", ...new Set(food.map((item) => item.CategoryName))];
  // console.log(categories);
  const categoryBtn = categories
    .map((item) => {
      return `<button type="button" class="filter-btn" data-id=${item}>
    ${item}
  </button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtn;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  // console.log(filterBtns);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      // console.log(category);
      const menuCategory = food.filter((item) => {
        return item.CategoryName === category;
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(food);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
