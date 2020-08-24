class Product {
    constructor(id, name, img, price) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
    }
}
class Category {
    constructor(id, products) {
        this.id = id;
        this.products = products;
    }
}
class CategoriesService {
    constructor() {
        this.categories = [
            {
                "id": 1,
                "products":
                    [
                        {
                            "id": 1,
                            "name": "AAAAAAAAAAAAAAAAAA",
                            "img": "assets/img/showcase/1.png",
                            "price": 25.36

                        },
                        {
                            "pid": 2,
                            "name": "Fashion Silver Chain Watch",
                            "img": "assets/img/showcase/2.png",
                            "price": 35.24
                        },
                        {
                            "pid": 3,
                            "name": "Fashion Chain Watch",
                            "img": "assets/img/showcase/3.png",
                            "price": 23.12
                        },
                        {
                            "id": 4,
                            "name": "Fashion Black Chain Watch ",
                            "img": "assets/img/showcase/4.png",
                            "price": 42.32

                        },
                        {
                            "pid": 5,
                            "name": "Fashion Lether  Watch",
                            "img": "assets/img/showcase/5.png",
                            "price": 15.20
                        },
                        {
                            "pid": 6,
                            "name": "Fashion Forign Watch",
                            "img": "assets/img/showcase/6.png",
                            "price": 36.12
                        }
                    ]
            },
            {
                "id": 2,
                "products":
                    [
                        {
                            "id": 1,
                            "name": "BBBBBBBBBBBBBBBBBB",
                            "img": "assets/img/showcase/1.png",
                            "price": 25.36

                        },
                        {
                            "pid": 2,
                            "name": "Fashion Silver Chain Watch",
                            "img": "assets/img/showcase/2.png",
                            "price": 35.24
                        },
                        {
                            "pid": 3,
                            "name": "Fashion Chain Watch",
                            "img": "assets/img/showcase/3.png",
                            "price": 23.12
                        },
                        {
                            "id": 4,
                            "name": "Fashion Black Chain Watch ",
                            "img": "assets/img/showcase/4.png",
                            "price": 42.32

                        },
                        {
                            "pid": 5,
                            "name": "Fashion Lether  Watch",
                            "img": "assets/img/showcase/5.png",
                            "price": 15.20
                        },
                        {
                            "pid": 6,
                            "name": "Fashion Forign Watch",
                            "img": "assets/img/showcase/6.png",
                            "price": 36.12
                        }
                    ]
            },
            {
                "id": 3,
                "products":
                    [
                        {
                            "id": 1,
                            "name": "CCCCCCCCCCCCCCCCCCC",
                            "img": "assets/img/showcase/1.png",
                            "price": 25.36

                        },
                        {
                            "pid": 2,
                            "name": "Fashion Silver Chain Watch",
                            "img": "assets/img/showcase/2.png",
                            "price": 35.24
                        },
                        {
                            "pid": 3,
                            "name": "Fashion Chain Watch",
                            "img": "assets/img/showcase/3.png",
                            "price": 23.12
                        },
                        {
                            "id": 4,
                            "name": "Fashion Black Chain Watch ",
                            "img": "assets/img/showcase/4.png",
                            "price": 42.32

                        },
                        {
                            "pid": 5,
                            "name": "Fashion Lether  Watch",
                            "img": "assets/img/showcase/5.png",
                            "price": 15.20
                        },
                        {
                            "pid": 6,
                            "name": "Fashion Forign Watch",
                            "img": "assets/img/showcase/6.png",
                            "price": 36.12
                        }
                    ]
            },
            {
                "id": 4,
                "products":
                    [
                        {
                            "id": 1,
                            "name": "DDDDDDDDDDDDDDDDDDDD",
                            "img": "assets/img/showcase/1.png",
                            "price": 25.36

                        },
                        {
                            "pid": 2,
                            "name": "Fashion Silver Chain Watch",
                            "img": "assets/img/showcase/2.png",
                            "price": 35.24
                        },
                        {
                            "pid": 3,
                            "name": "Fashion Chain Watch",
                            "img": "assets/img/showcase/3.png",
                            "price": 23.12
                        },
                        {
                            "id": 4,
                            "name": "Fashion Black Chain Watch ",
                            "img": "assets/img/showcase/4.png",
                            "price": 42.32

                        },
                        {
                            "pid": 5,
                            "name": "Fashion Lether  Watch",
                            "img": "assets/img/showcase/5.png",
                            "price": 15.20
                        },
                        {
                            "pid": 6,
                            "name": "Fashion Forign Watch",
                            "img": "assets/img/showcase/6.png",
                            "price": 36.12
                        }
                    ]
            },
            {
                "id": 5,
                "products":
                    [
                        {
                            "id": 1,
                            "name": "IIIIIIIIIIIIIIIIIIII",
                            "img": "assets/img/showcase/1.png",
                            "price": 25.36

                        },
                        {
                            "pid": 2,
                            "name": "Fashion Silver Chain Watch",
                            "img": "assets/img/showcase/2.png",
                            "price": 35.24
                        },
                        {
                            "pid": 3,
                            "name": "Fashion Chain Watch",
                            "img": "assets/img/showcase/3.png",
                            "price": 23.12
                        },
                        {
                            "id": 4,
                            "name": "Fashion Black Chain Watch ",
                            "img": "assets/img/showcase/4.png",
                            "price": 42.32

                        },
                        {
                            "pid": 5,
                            "name": "Fashion Lether  Watch",
                            "img": "assets/img/showcase/5.png",
                            "price": 15.20
                        },
                        {
                            "pid": 6,
                            "name": "Fashion Forign Watch",
                            "img": "assets/img/showcase/6.png",
                            "price": 36.12
                        }
                    ]
            },
            {
                "id": 6,
                "products":
                    [
                        {
                            "id": 1,
                            "name": "FFFFFFFFFFFFFFFFFFFFF",
                            "img": "assets/img/showcase/1.png",
                            "price": 25.36

                        },
                        {
                            "pid": 2,
                            "name": "Fashion Silver Chain Watch",
                            "img": "assets/img/showcase/2.png",
                            "price": 35.24
                        },
                        {
                            "pid": 3,
                            "name": "Fashion Chain Watch",
                            "img": "assets/img/showcase/3.png",
                            "price": 23.12
                        },
                        {
                            "id": 4,
                            "name": "Fashion Black Chain Watch ",
                            "img": "assets/img/showcase/4.png",
                            "price": 42.32

                        },
                        {
                            "pid": 5,
                            "name": "Fashion Lether  Watch",
                            "img": "assets/img/showcase/5.png",
                            "price": 15.20
                        },
                        {
                            "pid": 6,
                            "name": "Fashion Forign Watch",
                            "img": "assets/img/showcase/6.png",
                            "price": 36.12
                        }
                    ]
            },

        ];
    }
    getCategories() {
        return new Promise((resolve, reject) => {
            Promise.resolve(this.categories).then(function (categories) {
                let result = [];
                for(let item of categories){
                    let products = [];
                    for (let i of item.products) {
                        products.push(new Product(i.id, i.name, i.img, i.price));
                    }
                    result.push(new Category(item.id, products));
                }
                resolve(result);
            })
        });
    };
}
function drawProducts(products, wrapper) {
    let div = document.createElement('div');
    $(div).addClass('showcase__body');
    $(div).addClass('placement');
    let innerHTMLPlacement = '';
    for (let product of products) {
        innerHTMLPlacement += `
                <div class="card__item">
                    <div class="card__wrapper">
                        <div class="item__header">
                            <div class="item__like">
                                <img class="item__header-img" src="assets/img/trends/like.png">
                                <p class="item__header-text">253</p>
                            </div>
                            <div class="item__msg">
                                <img class="item__header-img" src="assets/img/trends/message.png">
                                <p class="item__header-text">120</p>
                            </div>
                        </div>
                        <img class="item__img" src="${product.img}">
                        <h2 class="item__name">${product.name}</h2>
                        <p class="item__price">$ ${product.price}</p>
                    </div>
                    <div class="item__button-wrapper">
                        <button class="item__button">Add to Cart</button>
                    </div>
                </div>`;
    }
    div.innerHTML = innerHTMLPlacement;
    document.getElementById(wrapper).append(div);
}

function drawCategory(categoryId) {
    $('.showcase__mobile-item').css('display', 'flex');
    $('.showcase__tab').removeClass('active');
    $('.showcase__mobile-item a').removeClass('active');
    $('#showcase__body').empty();
    $('#active-category').text('');
    $(`#category_` + categoryId).addClass('active');
    $(`#category_mob_` + categoryId).addClass('active');
    $(`#category_mob_` + categoryId).parent().css('display', 'none');
    let nameCategoryMobile = $(`#category_mob_` + categoryId).text();
    $('#active-category').text(nameCategoryMobile);
    let categoriesService = new CategoriesService();
    categoriesService.getCategories().then((categories) => {
        for (let category of categories) {
            if (categoryId == category.id) {
                drawProducts (category.products, 'showcase__body');
            }
        }
    });
}


$(document).ready(function () {
    drawCategory(1);

});

