const products = [
    {
        "id": 1,
        "name": "Bridal_01",
        "price": 200,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://tonywedding.vn/wp-content/uploads/2022/09/307166648_2415509755269050_7258907053540192962_n.jpeg"
    },
    {
        "id": 2,
        "name": "Bridal_02",
        "price": 210,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://img.veaul.com/product/90457535a499cb455771b4de8555e2c1/romantic-champagne-bridal-wedding-dresses-2020-ball-gown-see-through-square-neckline-sleeveless-backless-appliques-lace-beading-glitter-tulle-royal-train-800x800.jpg"
    },
    {
        "id": 3,
        "name": "Bridal_03",
        "price": 180,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://th.bing.com/th/id/OIP.yH9-6vc5gtOGBecshkCf_QHaJy?w=800&h=1058&rs=1&pid=ImgDetMain"
    },
    {
        "id": 4,
        "name": "Bridal_04",
        "price": 230,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://img.florashe.com/2022/03/Women-Simple-Princess-White-Short-Sleeve-Wedding-Maxi-Dress04.jpg"
    },
    {
        "id": 5,
        "name": "Bridal_05",
        "price": 190,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://img.veaul.com/product/8313103fa7c48cf35f1875d4da91d4e6/luxury-gorgeous-white-lace-wedding-dresses-2020-ball-gown-strapless-beading-sequins-sleeveless-backless-royal-train-800x800.jpg"
    },
    {
        "id": 6,
        "name": "Bridal_06",
        "price": 185,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://img.veaul.com/product/7ccbdf2ab61f6ec0db61b93ca7490b3f/luxury-gorgeous-white-wedding-dresses-2021-ball-gown-scoop-neck-beading-lace-flower-short-sleeve-backless-royal-train-wedding-800x800.jpg"
    },
    {
        "id": 7,
        "name": "Bridal_07",
        "price": 220,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://img.veaul.com/product/40cdb813151920323f7a54375b2ae77a/chic-beautiful-ivory-satin-outdoor-garden-wedding-dresses-2020-a-line-princess-off-the-shoulder-3-4-sleeve-backless-appliques-lace-sweep-train-800x800.jpg"
    },
    {
        "id": 8,
        "name": "Bridal_08",
        "price": 215,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://img.veaul.com/product/c03f6f90d3f8ffa6a1d043aaf86d21f0/luxury-gorgeous-champagne-bridal-wedding-dresses-2020-ball-gown-off-the-shoulder-short-sleeve-backless-appliques-lace-beading-glitter-tulle-royal-train-ruffle-800x800.jpg"
    }
];

export default products;