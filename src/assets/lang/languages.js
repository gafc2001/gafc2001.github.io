const english = {
    "header" : {
        "navbar" : {
            "links" : [
                {
                    "name" : "Techskils",
                    "href" : "tech-section"
                },
                {
                    "name" : "Personal projects",
                    "href" : "project-section"
                },
                {
                    "name" : "Contact me",
                    "href" : "contact-section"
                },
            ],
            "languages" : [
                {
                    "value" : "en",
                    "name" : "English",
                    "image" : "english-circle.png"
                },
                {
                    "value" : "es",
                    "name" : "Spanish",
                    "image" : "spain-circle.png"
                }
            ]
        },
        "banner" :{
            "title" : "Hi! I'm Gustavo",
            "paragraphs" : [
                "I am a software developer, currently I studying Software Engineering.",
                "I love to create applications where I can solve problems. That's why I am looking for proyects where I can use my knowledge and allows me to grow professionally"
            ],
        },
    },
    
    "skills" : {
        "soft_skils" : null,
        "tech_skills" : {
            "title" : "Tech skills",
            "technologies" : [
                {
                  name: "Laravel",
                  image: "laravel.svg",
                  className: "text-laravel",
                  alt : "laravel"
                },
                {
                  name: "Spring",
                  image: "spring.svg",
                  className: "text-spring",
                  alt : "spring"
                },
                {
                  name: "Java",
                  image: "java.png",
                  className: "text-java",
                  alt : "java"
                },
                {
                  name: "MySql",
                  image: "mysql.png",
                  className: "text-mysql",
                  alt : "mysql"
                },
                {
                  name: "Postgresql",
                  image: "postgresql.svg",
                  className: "text-postgresql",
                  alt : "postgresql"
                },
                {
                  name: "Django",
                  image: "django.png",
                  className: "text-django",
                  alt : "django"
                },
                {
                  name: "PHP",
                  image: "php.png",
                  className: "text-php",
                  alt : "php"
                },
                {
                  name: "Bootstrap",
                  image: "bootstrap.svg",
                  className: "text-bootstrap",
                  alt : "bootstrap"
                },
                {
                  name: "HTML5",
                  image: "html.png",
                  className: "text-html",
                  alt : "html"
                },
                {
                  name: "CSS3",
                  image: "css.png",
                  className: "text-css",
                  alt : "css"
                },
                {
                  name: "Javascript",
                  image: "js.png",
                  className: "text-js",
                  alt : "js"
                },
            ]
        }
    },
    "project" : {
        "title" : "Personal projects",
        "note" : "The projects are deployed on heroku free plan, therefore it takes time to load the first time",
        "projects" : [
            //Online Restaurant
            {
                "title" : "Online Restaurant",
                "paragraphs" : [
                    "The purpose of the project is to develop a food delivery web system for the sales and administration areas, which can be accessed through the web with the objective to improve the user experience and the restaurant sales.",
                    "For the project React is used and the Restaurant API is consumed"
                ],
                "extras" : {
                    "button_gallery_text" : "See Gallery",
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/RestaurantFront"
                    },
                    {
                        "name" : "Go to the website",
                        "icon" : "fas fa-globe",
                        "url" : "https://restaurant-line.herokuapp.com/"
                    }
                ],
                "technologies" : [
                    "react.svg",
                    "css.png",
                    "js.png"
                ],
                "gallery" : [
                    'restaurant/picture-1.png',
                    'restaurant/picture-3.png',
                    'restaurant/picture-4.png',
                    'restaurant/picture-5.png',
                    'restaurant/picture-6.png',
                    'restaurant/picture-7.png',
                    'restaurant/picture-8.png',
                    'restaurant/picture-9.png',
                    'restaurant/picture-10.png',
                ]
            },
            //Restaurant Api
            {
                "title" : "Restaurant API",
                "paragraphs" : [
                    "Restaurant API is a REST API that is based on the needs of the Online Restaurant web application. With this API you can manipulate information, such as bringing products or create an order.",
                    "This project is using spring as programming language, mysql as database engine and Firebase Storage() as file storage. For the API documentation, Bootstrap was used to speed up the design."
                ],
                "extras" : {
                    "button_gallery_text" : "See Gallery",
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/RestaurantApi"
                    },
                    {
                        "name" : "Go to the website",
                        "icon" : "fas fa-globe",
                        "url" : "https://restaurantrestapi.herokuapp.com/"
                    }
                ],
                "technologies" : [
                    "spring.svg",
                    "java.png",
                    "postgresql.svg",
                    "bootstrap.svg"
                ],
                "gallery" : [
                    'api-restaurant/picture-1.png',
                    'api-restaurant/picture-2.png',
                    'api-restaurant/picture-3.png',
                ]
            },
            //Juega Ya
            {
                "title" : "Juega Ya",
                "paragraphs" : [
                    "JUEGA YA is a web application that will help you to organize sport events with your friends or new people who want to practice the same sport.",
                    "You will be able to indicate how many people are missing for an important match, this way someone who is close to your location will be able to indicate to you through the application that if they want to join the match, and you will be able to see their personal information and the comments and ranking of the player."
                ],
                "extras" : {
                    "button_gallery_text" : "See Gallery",
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/JuegaYa"
                    },
                    {
                        "name" : "Go to the website",
                        "icon" : "fas fa-globe",
                        "url" : "https://juegaya.herokuapp.com/"
                    }
                ],
                "technologies" : [
                    "laravel.svg",
                    "postgresql.svg",
                    "js.png",
                    "css.png",
                    "html.png",
                ],
                "gallery" : [
                    'juega-ya/picture-1.png',
                    'juega-ya/picture-2.png',
                    'juega-ya/picture-3.png',
                    'juega-ya/picture-4.png',
                    'juega-ya/picture-5.png',
                    'juega-ya/picture-6.png',
                ]
            },
            //CityTours
            {
                "title" : "CityTours",
                "paragraphs" : [
                    "CityTours is a web application where you can see and buy tickets for different destinations in Peru.",
                    "Additionally has a dashboard where you can create, edit or delete destinations, such as creating trips"
                ],
                "extras" : {
                    "button_gallery_text" : "See Gallery",
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/citytours"
                    },
                    {
                        "name" : "Go to the website",
                        "icon" : "fas fa-globe",
                        "url" : "https://citytours-web.herokuapp.com/"
                    }
                ],
                "technologies" : [
                    "django.png",
                    "postgresql.svg",
                    "js.png",
                    "css.png",
                    "html.png",
                ],
                "gallery" : [
                    'citytours/picture-1.png',
                    'citytours/picture-2.png',
                    'citytours/picture-3.png',
                    'citytours/picture-4.png',
                    'citytours/picture-5.png',
                    'citytours/picture-6.png',
                ]
            },
            //Tornillin
            {
                "title" : "Tornillin",
                "paragraphs" : [
                    "Tornillin is a web application for a hardware store that allows you to buy products, adding it to the cart and then proceeding with the payment and then being able to see the summary of your purchase",
                ],
                "extras" : {
                    "button_gallery_text" : "See Gallery",
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/Website-ferreteria"
                    },
                    {
                        "name" : "Go to the website",
                        "icon" : "fas fa-globe",
                        "url" : "https://tornillin.herokuapp.com/"
                    }
                ],
                "technologies" : [
                    "laravel.svg",
                    "postgresql.svg",
                    "js.png",
                    "css.png",
                    "html.png",
                ],
                "gallery" : [
                    'tornillin/picture-1.png',
                    'tornillin/picture-2.png',
                    'tornillin/picture-3.png',
                ]
            },
        ]
    },
    "contact" : {
        "title" : "Let's work together",
        "fields" : {
            "name" : {
                "title" : "Full Name",
                "placeholder" : "Your full name"
            },
            "email" : {
                "title" : "Email Address",
                "placeholder" : "E.g. user@example.com"
            },
            "message" : {
                "title" : "Your message",
                "placeholder" : "Your message"
            },
            "button" : {
                "title" : "Submit"
            }
        }
        
    },
    "footer" : {
        "paragraphs" : [
            "I am a software developer, currently I studying Software Engineering.",
            "I love to create applications where I can solve problems. That's why I am looking for proyects where I can use my knowledge and allows me to grow professionally"
        ],
        "explore" : {
            "title" : "Explore",
        },
        "projects" : {
            "title" : "Projects",
        },
        "contact" : {
            "title" : "Get in touch",
        }
    }
}
const spanish = {
    "header" : {
        "navbar" : {
            "links" : [
                {
                    "name" : "Habilidades",
                    "href" : "tech-section"
                },
                {
                    "name" : "Proyectos personales",
                    "href" : "project-section"
                },
                {
                    "name" : "Contactame",
                    "href" : "contact-section"
                },
            ],
            "languages" : [
                {
                    "value" : "en",
                    "name" : "Inglés",
                    "image" : "english-circle.png"
                },
                {
                    "value" : "es",
                    "name" : "Español",
                    "image" : "spain-circle.png"
                }
            ],
        },
        "banner" :{
            "title" : "Hola! Soy Gustavo",
            "paragraphs" : [
                "Soy un desarrollador de software, actualmente estoy estudiando Ingeniería de Software",
                "Me encanta crear aplicaciones en la que pueda solucionar un problema. Para ello busco proyectos en la que pueda aplicar mis conocimientos y me permita crecer profesionalmente"
            ],
        },
    },
    
    "skills" : {
        "soft_skils" : null,
        "tech_skills" : {
            "title" : "Tecnologias",
            "technologies" : [
                {
                  name: "Laravel",
                  image: "laravel.svg",
                  className: "text-laravel",
                  alt : "laravel"
                },
                {
                  name: "Spring",
                  image: "spring.svg",
                  className: "text-spring",
                  alt : "spring"
                },
                {
                  name: "Java",
                  image: "java.png",
                  className: "text-java",
                  alt : "java"
                },
                {
                  name: "MySql",
                  image: "mysql.png",
                  className: "text-mysql",
                  alt : "mysql"
                },
                {
                  name: "Postgresql",
                  image: "postgresql.svg",
                  className: "text-postgresql",
                  alt : "postgresql"
                },
                {
                  name: "Django",
                  image: "django.png",
                  className: "text-django",
                  alt : "django"
                },
                {
                  name: "PHP",
                  image: "php.png",
                  className: "text-php",
                  alt : "php"
                },
                {
                  name: "Bootstrap",
                  image: "bootstrap.svg",
                  className: "text-bootstrap",
                  alt : "bootstrap"
                },
                {
                  name: "HTML5",
                  image: "html.png",
                  className: "text-html",
                  alt : "html"
                },
                {
                  name: "CSS3",
                  image: "css.png",
                  className: "text-css",
                  alt : "css"
                },
                {
                  name: "Javascript",
                  image: "js.png",
                  className: "text-js",
                  alt : "js"
                },
            ]
        }
    },
    "project" : {
        "title" : "Mis proyectos",
        "note" : "Los proyectos estan desplegados en un plan gratis de heroku, por lo tanto demora en cargar la primera vez",
        "projects" : [
            //Online Restaurant
            {
                "title" : "Restaurant en linea",
                "paragraphs" : [
                    "El proyecto tiene como finalidad desarrollar un sistema web de pedidos de comida para las áreas de venta y administración, el cual podrá ser accedido a través de la Web con el objetivo de mejorar la gestión del restaurante.",
                    "Para el proyecto se uso React y se consume la Restaurant API"
                ],
                "extras" : {
                    "button_gallery_text" : "Ver galeria",
                    "techs_text" : "Tecnologias usadas"
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/RestaurantFront"
                    },
                    {
                        "name" : "Ir a la pagina",
                        "icon" : "fas fa-globe",
                        "url" : "https://restaurant-line.herokuapp.com/"
                    }
                ],    
                "technologies" : [
                    "react.svg",
                    "css.png",
                    "js.png"
                ],
                "gallery" : [
                    'restaurant/picture-1.png',
                    'restaurant/picture-3.png',
                    'restaurant/picture-4.png',
                    'restaurant/picture-5.png',
                    'restaurant/picture-6.png',
                    'restaurant/picture-7.png',
                    'restaurant/picture-8.png',
                    'restaurant/picture-9.png',
                    'restaurant/picture-10.png',
                ]
            },
            //Restaurant Api
            {
                "title" : "Restaurant API",
                "paragraphs" : [
                    "Restaurant API es una REST API que se base en las necesidades de la aplicacion web de Online Restaurant.Con este API podras manipular la informacion, como traer los productos o crear un compra.",
                    "Este proyecto esta utilizando spring como lenguaje de programacion, mysql como motor de base de datos y Firebase Storage(S3) como almacenamiento de imagenes. Para la documentacion de la API se utilizo Bootstrap para agilizar el diseño."
                ],
                "extras" : {
                    "button_gallery_text" : "Ver galeria",
                    "techs_text" : "Tecnologias usadas"
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/RestaurantApi"
                    },
                    {
                        "name" : "Ir a la pagina",
                        "icon" : "fas fa-globe",
                        "url" : "https://restaurantrestapi.herokuapp.com/"
                    }
                ],
                "technologies" : [
                    "spring.svg",
                    "java.png",
                    "postgresql.svg",
                    "bootstrap.svg"
                ],
                "gallery" : [
                    'api-restaurant/picture-1.png',
                    'api-restaurant/picture-2.png',
                    'api-restaurant/picture-3.png',
                ]
            },
            //Juega Ya
            {
                "title" : "Juega Ya",
                "paragraphs" : [
                    "JUEGA YA es un aplicativo web que te ayudara a organizar encuentros deportivos con tus amigos o personas nuevas que quieran practicar el mismo deporte.",
                    "Podrás indicar cuantas personas te faltan para algún partido importante, de esta manera alguien que este cercano hacia tu distrito podrá indicarte mediante el aplicativo que si quiere ingresar al partido, podrás ver la información de sus datos y ver los comentarios y ranking del jugador."
                ],
                "extras" : {
                    "button_gallery_text" : "Ver galeria",
                    "techs_text" : "Tecnologias usadas"
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/JuegaYa"
                    },
                    {
                        "name" : "Ir a la pagina",
                        "icon" : "fas fa-globe",
                        "url" : "https://juegaya.herokuapp.com/"
                    }
                ],
                "technologies" : [
                    "laravel.svg",
                    "postgresql.svg",
                    "js.png",
                    "css.png",
                    "html.png",
                ],
                "gallery" : [
                    'juega-ya/picture-1.png',
                    'juega-ya/picture-2.png',
                    'juega-ya/picture-3.png',
                    'juega-ya/picture-4.png',
                    'juega-ya/picture-5.png',
                    'juega-ya/picture-6.png',
                ]
            },
            //CityTours
            {
                "title" : "CityTours",
                "paragraphs" : [
                    "CityTours es una aplicacion web donde podras ver y comprar boletos para los diferentes destinos en el Peru.",
                    "Ademas tiene un dashboard donde podras crear editar o eliminar los destinos, como crear viajes."
                ],
                "extras" : {
                    "button_gallery_text" : "Ver galeria",
                    "techs_text" : "Tecnologias usadas"
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/citytours"
                    },
                    {
                        "name" : "Ir a la pagina",
                        "icon" : "fas fa-globe",
                        "url" : "https://citytours-web.herokuapp.com/"
                    }
                ],
                "technologies" : [
                    "django.png",
                    "postgresql.svg",
                    "js.png",
                    "css.png",
                    "html.png",
                ],
                "gallery" : [
                    'citytours/picture-1.png',
                    'citytours/picture-2.png',
                    'citytours/picture-3.png',
                    'citytours/picture-4.png',
                    'citytours/picture-5.png',
                    'citytours/picture-6.png',
                ]
            },
            //Tornillin
            {
                "title" : "Tornillin",
                "paragraphs" : [
                    "Tornillin es una aplicacion web para una ferreteria que te permite comprar productos, agregandolo al carrito y luego procediendo con el pago y luego poder ver el resument de tu compra.",
                ],
                "extras" : {
                    "button_gallery_text" : "Ver galeria",
                    "techs_text" : "Tecnologias usadas"
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/Website-ferreteria"
                    },
                    {
                        "name" : "Ir a la pagina",
                        "icon" : "fas fa-globe",
                        "url" : "https://tornillin.herokuapp.com/"
                    }
                ],
                "technologies" : [
                    "laravel.svg",
                    "postgresql.svg",
                    "js.png",
                    "css.png",
                    "html.png",
                ],
                "gallery" : [
                    'tornillin/picture-1.png',
                    'tornillin/picture-2.png',
                    'tornillin/picture-3.png',
                ]
                
            },
        ]        
    },    
    "contact" : {
        "title" : "Trabajemos juntos",
        "fields" : {
            "name" : {
                "title" : "Nombres",
                "placeholder" : "Tus nombres"
            },
            "email" : {
                "title" : "Correo",
                "placeholder" : "Ej. usuario@ejemplo.com"
            },
            "message" : {
                "title" : "Mesanje",
                "placeholder" : "Tu mensaje"
            },
            "button" : {
                "title" : "Enviar"
            }
        }
        
    },
    "footer" : {
        "paragraphs" : [
            "Soy un desarrollador de software, actualmente estoy estudiando Ingeniería de Software",
            "Me encanta crear aplicaciones en la que pueda solucionar un problema. Para ello busco proyectos en la que pueda aplicar mis conocimientos y me permita crecer profesionalmente"
        ],
        "explore" : {
            "title" : "Explorar",
        },
        "projects" : {
            "title" : "Proyectos",
        },
        "contact" : {
            "title" : "Contactame",
        }
    }
}

export const language = {
    "en" : english,
    "es" : spanish
}