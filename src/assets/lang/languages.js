const technologies = {
    "backend" : [
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
    ],
    "frontend" : [
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
        {
            name: "React Js",
            image: "react.svg",
            className: "text-react",
            alt : "react"
        },
    ],
    "database" : [
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
    ],
    "tools" : [
        {
            name: "VS Code",
            image: "vscode.png",
            className: "text-vscode",
            alt : "vscode"
        },
        {
            name: "Git",
            image: "git.png",
            className: "text-git",
            alt : "git"
        },
        {
            name: "Postman",
            image: "postman.png",
            className: "text-postman",
            alt : "postman"
        },
        {
            name: "Intellij IDEA",
            image: "intellij.png",
            className: "text-intellij",
            alt : "intellij"
        },

    ]
}
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
                "Software Developer, graduated from Senati Institute.",
                "Able to create functional and maintainable applications from start to finish. Willing to face new challenges and learn new technologies that allow me to grow professionally.",
                "I describe myselft as a creative person, team player, self-taught, analytical and problem-solving."
            ],
        },
    },
    
    "skills" : {
        "soft_skils" : null,
        "tech_skills" : {
            "title" : "Tech skills",
            "technologies" : [
                {
                    "title" : "Backend",
                    "technologies" : technologies.backend
                },
                {
                    "title" : "Frontend",
                    "technologies" : technologies.frontend
                },
                {
                    "title" : "Database",
                    "technologies" : technologies.database
                },
                {
                    "title" : "Tools",
                    "technologies" : technologies.tools
                },
            ]
        }
    },
    "project" : {
        "title" : "Personal projects",
        "projects" : [
            //Online Restaurant
            {
                "title" : "Online Restaurant",
                "paragraphs" : [
                    "The purpose of the project is to develop a food delivery web system for the sales and administration areas, which can be accessed through the web with the objective to improve the user experience and the restaurant sales.",
                    "For the project React is used and the Restaurant API is consumed."
                ],
                "extras" : {
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/RestaurantFront"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "See gallery",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Go to the project",
                        "icon" : "fas fa-globe",
                        "url" : "https://restaurant.devgustavo.com"
                    }
                },
                "credentials" : {
                    "description" : "Sandbox accounts",
                    "tables" : [
                        {
                            "headers" : [
                                {
                                    "name" : "Credential",
                                    "width" : "20"
                                },
                                {
                                    "name" : "Email or user",
                                    "width" : "30"
                                },
                                {
                                    "name" : "Password",
                                    "width" : "10"
                                },
                                {
                                    "name" : "Observation",
                                    "width" : "40"
                                },
                            ],
                            "body" : [
                                {
                                    "credential" : "Client",
                                    "account" : "client",
                                    "password" : "12345678",
                                    "observation" : "Account to log in or otherwise register new user"
                                },
                                {
                                    "credential" : "Administrator",
                                    "account" : "superuser",
                                    "password" : "12345678",
                                    "observation" : "Account to authenticate as Administrator"
                                },
                                {
                                    "credential" : "Paypal",
                                    "account" : "test-client2022@personal.example.com",
                                    "password" : "12345678",
                                    "observation" : "Account for purchasing products with Paypal"
                                }
                            ]
                        },
                        {
                            "headers" : [
                                {
                                    "name" :"Card Type",
                                    "width" : "14",
                                },
                                {
                                    "name" :"Card Number",
                                    "width" : "29",
                                },
                                {
                                    "name" :"Date",
                                    "width" : "10",
                                },
                                {
                                    "name" :"CVV",
                                    "width" : "15",
                                },
                                {
                                    "name" :"Obeservation",
                                    "width" : "30",
                                },
                            ],
                            "body" : [
                                {
                                    "card_type" : "Visa",
                                    "card_number" : "4242 4242 4242 4242",
                                    "date" : "Any date",
                                    "cvv" : "Any 3 digit number",
                                    "observation" : "visa card to purchase products"
                                },
                            ]
                        }
                    ]
                }
            },
            //Restaurant Api
            {
                "title" : "Restaurant API",
                "paragraphs" : [
                    "Restaurant API is a REST API that is based on the needs of the Online Restaurant web application. With this API you can manipulate information, such as bringing products or create an order.",
                    "This project is using spring as programming language, mysql as database engine and Firebase Storage() as file storage. For the API documentation, Bootstrap was used to speed up the design."
                ],
                "extras" : {
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/RestaurantApi"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "See gallery",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Go to the project",
                        "icon" : "fas fa-globe",
                        "url" : "https://restaurantapi.devgustavo.com/docs"
                    }
                },
            },
            //Juega Ya
            {
                "title" : "Juega Ya",
                "paragraphs" : [
                    "JUEGA YA is a web application that will help you to organize sport events with your friends or new people who want to practice the same sport.",
                    "You will be able to indicate how many people are missing for an important match, this way someone who is close to your location will be able to indicate to you through the application that if they want to join the match, and you will be able to see their personal information and the comments and ranking of the player."
                ],
                "extras" : {
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/JuegaYa"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "See gallery",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Go to the project",
                        "icon" : "fas fa-globe",
                        "url" : "https://juegaya.devgustavo.com/"
                    }
                },
                "credentials" : {
                    "description" : "Sandbox accounts",
                    "tables" : [
                        {
                            "headers" : [
                                {
                                    "name" : "Credential",
                                    "width" : "20"
                                },
                                {
                                    "name" : "Email or user",
                                    "width" : "30"
                                },
                                {
                                    "name" : "Password",
                                    "width" : "10"
                                },
                                {
                                    "name" : "Observation",
                                    "width" : "40"
                                },
                            ],
                            "body" : [
                                {
                                    "credential" : "Client",
                                    "account" : "tony@gmail.com",
                                    "password" : "12345678",
                                    "observation" : "Account to log in or otherwise register new user"
                                },
                                {
                                    "credential" : "Administrator",
                                    "account" : "gustavo@gmail.com",
                                    "password" : "12345678",
                                    "observation" : "Account to log in or otherwise register new user"
                                },
                            ]
                        },
                    ]
                }
            },
            //CityTours
            {
                "title" : "CityTours",
                "paragraphs" : [
                    "CityTours is a web application where you can see and buy tickets for different destinations in Peru.",
                    "Additionally has a dashboard where you can create, edit or delete destinations, such as creating trips."
                ],
                "extras" : {
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/citytours"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "See gallery",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Go to the project",
                        "icon" : "fas fa-globe",
                        "url" : "https://citytours.devgustavo.com/"
                    }
                },
                "credentials" : {
                    "description" : "Sandbox accounts",
                    "tables" : [
                        {
                            "headers" : [
                                {
                                    "name" : "Credential",
                                    "width" : "20"
                                },
                                {
                                    "name" : "Email or user",
                                    "width" : "30"
                                },
                                {
                                    "name" : "Password",
                                    "width" : "10"
                                },
                                {
                                    "name" : "Observation",
                                    "width" : "40"
                                },
                            ],
                            "body" : [
                                {
                                    "credential" : "Administrator",
                                    "account" : "admin@gmail.com",
                                    "password" : "root",
                                    "observation" : "Account to authenticate as Administrator"
                                },
                            ]
                        },
                    ]
                }
            },
            //Tornillin
            {
                "title" : "Tornillin",
                "paragraphs" : [
                    "Tornillin is a web application for a hardware store that allows you to buy products, adding it to the cart and then proceeding with the payment and then being able to see the summary of your purchase.",
                ],
                "extras" : {
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/Website-ferreteria"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "See gallery",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Go to the project",
                        "icon" : "fas fa-globe",
                        "url" : "https://tornillin.devgustavo.com/"
                    }
                },
                "credentials" : {
                    "description" : "Sandbox accounts",
                    "tables" : [
                        {
                            "headers" : [
                                {
                                    "name" : "Credential",
                                    "width" : "20"
                                },
                                {
                                    "name" : "Email or user",
                                    "width" : "30"
                                },
                                {
                                    "name" : "Password",
                                    "width" : "10"
                                },
                                {
                                    "name" : "Observation",
                                    "width" : "40"
                                },
                            ],
                            "body" : [
                                {
                                    "credential" : "Client",
                                    "account" : "client",
                                    "password" : "12345678",
                                    "observation" : "Account to log in or otherwise register new user"
                                },
                            ]
                        },
                    ]
                }
            },
            //Bienes y Raices
            {
                "title" : "Bienes y Raices",
                "paragraphs" : [
                    "It is a website for sale of luxury homes and apartments. You will be able to see the incredible homes that we have. The website is made with HTML and CSS.",
                ],
                "extras" : {
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/bienes-raices"
                    },
                ],
                "technologies" : [
                    "html.png",
                    "css.png",
                ],
                "gallery" : [
                    'bienes-raices/picture-1.png',
                    'bienes-raices/picture-2.png',
                    'bienes-raices/picture-3.png',
                    'bienes-raices/picture-4.png',
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "See gallery",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Go to the project",
                        "icon" : "fas fa-globe",
                        "url" : "https://bienes-raices.devgustavo.com"
                    }
                },
            },
            //Frontend Store
            {
                "title" : "Frontend Store",
                "paragraphs" : [
                    "It is a static web page made with HTML and CSS, I used CSS Grid to distribute the different elements.",
                ],
                "extras" : {
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/store-grid"
                    },
                ],
                "technologies" : [
                    "html.png",
                    "css.png",
                ],
                "gallery" : [
                    'grid-store/picture-1.png',
                    'grid-store/picture-2.png',
                    'grid-store/picture-3.png',
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "See gallery",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Go to the project",
                        "icon" : "fas fa-globe",
                        "url" : "https://store-online.devgustavo.com"
                    }
                },
            },
        ]
    },
    "contact" : {
        "title" : "Let's work together",
        "fields" : {
            "name" : {
                "title" : "Names",
                "placeholder" : "Your name"
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
            "Software Developer, graduated from Senati Institute.",
            "Able to create functional and maintainable applications from start to finish. Willing to face new challenges and learn new technologies that allow me to grow professionally.",
            "I describe myselft as a creative person, team player, self-taught, analytical and problem-solving."
        ],
        "explore" : {
            "title" : "Explore",
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
                "Desarrollador de Software, egresado del Instituto SENATI.",
                "Capaz de crear aplicaciones funcionales y mantenibles de inicio a fin. Dispuesto a afrontar nuevos retos y aprender nuevas tecnologías que me permitan crecer profesionalmente.",
                "Me caracterizo por ser una persona creativa, trabajo en equipo, autodidacta y resolver problemas."               
            ],
        },
    },
    
    "skills" : {
        "soft_skils" : null,
        "tech_skills" : {
            "title" : "Tecnologias",
            "technologies" : [
                {
                    "title" : "Backend",
                    "technologies" : technologies.backend
                },
                {
                    "title" : "Frontend",
                    "technologies" : technologies.frontend
                },
                {
                    "title" : "Base de datos",
                    "technologies" : technologies.database
                },
                {
                    "title" : "Herramientas",
                    "technologies" : technologies.tools
                },
            ],
        }
    },
    "project" : {
        "title" : "Mis proyectos",
        "projects" : [
            //Online Restaurant
            {
                "title" : "Restaurant en linea",
                "paragraphs" : [
                    "El proyecto tiene como finalidad desarrollar un sistema web de pedidos de comida para las áreas de venta y administración, el cual podrá ser accedido a través de la Web con el objetivo de mejorar la gestión del restaurante.",
                    "Para el proyecto se uso React y se consume la Restaurant API."
                ],
                "extras" : {
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/RestaurantFront"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "Ver galería",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Ir al proyecto",
                        "icon" : "fas fa-globe",
                        "url" : "https://restaurant.devgustavo.com"
                    }
                },
                "credentials" : {
                    "description" : "Cuentas de prueba",
                    "tables" : [
                        {
                            "headers" : [
                                {
                                    "name" : "Credencial",
                                    "width" : "20"
                                },
                                {
                                    "name" : "Correo o usuario",
                                    "width" : "30"
                                },
                                {
                                    "name" : "Contraseña",
                                    "width" : "10"
                                },
                                {
                                    "name" : "Observacion",
                                    "width" : "40"
                                },
                            ],
                            "body" : [
                                {
                                    "credential" : "Cliente",
                                    "account" : "client",
                                    "password" : "12345678",
                                    "observation" : "Cuenta para iniciar sesión o de lo contrario registrar un nuevo usuario"
                                },
                                {
                                    "credential" : "Administrador",
                                    "account" : "superuser",
                                    "password" : "12345678",
                                    "observation" : "Cuenta para ingresar como administrador"
                                },
                                {
                                    "credential" : "Paypal",
                                    "account" : "test-client2022@personal.example.com",
                                    "password" : "12345678",
                                    "observation" : "Cuenta para comprar productos con Paypal"
                                }
                            ]
                        },
                        {
                            "headers" : [
                                {
                                    "name" :"Card Type",
                                    "width" : "14",
                                },
                                {
                                    "name" :"Card Number",
                                    "width" : "29",
                                },
                                {
                                    "name" :"Date",
                                    "width" : "10",
                                },
                                {
                                    "name" :"CVV",
                                    "width" : "15",
                                },
                                {
                                    "name" :"Obeservation",
                                    "width" : "30",
                                },
                            ],
                            "body" : [
                                {
                                    "card_type" : "Visa",
                                    "card_number" : "4242 4242 4242 4242",
                                    "date" : "Cualquier fecha",
                                    "cvv" : "Cualquiere numero de 3 digitos",
                                    "observation" : "Tarjeta visa para comprar productos"
                                },
                            ]
                        }
                    ]
                }
            },
            //Restaurant Api
            {
                "title" : "Restaurant API",
                "paragraphs" : [
                    "Restaurant API es una REST API que se base en las necesidades de la aplicacion web de Online Restaurant.Con este API podras manipular la informacion, como traer los productos o crear un compra.",
                    "Este proyecto esta utilizando spring como lenguaje de programacion, mysql como motor de base de datos y Firebase Storage(S3) como almacenamiento de imagenes. Para la documentacion de la API se utilizo Bootstrap para agilizar el diseño."
                ],
                "extras" : {
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/RestaurantApi"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "Ver galería",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Ir al proyecto",
                        "icon" : "fas fa-globe",
                        "url" : "https://restaurantapi.devgustavo.com/docs"
                    }
                },
            },
            //Juega Ya
            {
                "title" : "Juega Ya",
                "paragraphs" : [
                    "JUEGA YA es un aplicativo web que te ayudara a organizar encuentros deportivos con tus amigos o personas nuevas que quieran practicar el mismo deporte.",
                    "Podrás indicar cuantas personas te faltan para algún partido importante, de esta manera alguien que este cercano hacia tu distrito podrá indicarte mediante el aplicativo que si quiere ingresar al partido, podrás ver la información de sus datos y ver los comentarios y ranking del jugador."
                ],
                "extras" : {
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/JuegaYa"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "Ver galería",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Ir al proyecto",
                        "icon" : "fas fa-globe",
                        "url" : "https://juegaya.devgustavo.com/"
                    }
                },
                "credentials" : {
                    "description" : "Cuentas de prueba",
                    "tables" : [
                        {
                            "headers" : [
                                {
                                    "name" : "Credencial",
                                    "width" : "20"
                                },
                                {
                                    "name" : "Correo o usuario",
                                    "width" : "30"
                                },
                                {
                                    "name" : "Contraseña",
                                    "width" : "10"
                                },
                                {
                                    "name" : "Observacion",
                                    "width" : "40"
                                },
                            ],
                            "body" : [
                                {
                                    "credential" : "Usuario",
                                    "account" : "tony@gmail.com",
                                    "password" : "12345678",
                                    "observation" : "Cuenta para iniciar sesión o de lo contrario registrar un nuevo usuario"
                                },
                                {
                                    "credential" : "Usuario",
                                    "account" : "gustavo@gmail.com",
                                    "password" : "12345678",
                                    "observation" : "Cuenta para iniciar sesión o de lo contrario registrar un nuevo usuario"
                                },
                            ]
                        },
                    ]
                }
            },
            //CityTours
            {
                "title" : "CityTours",
                "paragraphs" : [
                    "CityTours es una aplicacion web donde podras ver y comprar boletos para los diferentes destinos en el Peru.",
                    "Ademas tiene un dashboard donde podras crear editar o eliminar los destinos, como crear viajes."
                ],
                "extras" : {
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/citytours"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "Ver galería",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Ir al proyecto",
                        "icon" : "fas fa-globe",
                        "url" : "https://citytours.devgustavo.com/"
                    }
                },
                "credentials" : {
                    "description" : "Cuentas de prueba",
                    "tables" : [
                        {
                            "headers" : [
                                {
                                    "name" : "Credencial",
                                    "width" : "20"
                                },
                                {
                                    "name" : "Correo o usuario",
                                    "width" : "30"
                                },
                                {
                                    "name" : "Contraseña",
                                    "width" : "10"
                                },
                                {
                                    "name" : "Observacion",
                                    "width" : "40"
                                },
                            ],
                            "body" : [
                                {
                                    "credential" : "Administrador",
                                    "account" : "admin@gmail.com",
                                    "password" : "root",
                                    "observation" : "Cuenta para ingresar como administrador"
                                },
                            ]
                        },
                    ]
                }
            },
            //Tornillin
            {
                "title" : "Tornillin",
                "paragraphs" : [
                    "Tornillin es una aplicacion web para una ferreteria que te permite comprar productos, agregandolo al carrito y luego procediendo con el pago y luego poder ver el resument de tu compra.",
                ],
                "extras" : {
                },
                "links" : [
                    {
                        "name" : "Ir al repositorio",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/Website-ferreteria"
                    },
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
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "Ver galería",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Ir al proyecto",
                        "icon" : "fas fa-globe",
                        "url" : "https://tornillin.devgustavo.com/"
                    }
                },
                "credentials" : {
                    "description" : "Cuentas de prueba",
                    "tables" : [
                        {
                            "headers" : [
                                {
                                    "name" : "Credencial",
                                    "width" : "20"
                                },
                                {
                                    "name" : "Correo o usuario",
                                    "width" : "30"
                                },
                                {
                                    "name" : "Contraseña",
                                    "width" : "10"
                                },
                                {
                                    "name" : "Observacion",
                                    "width" : "40"
                                },
                            ],
                            "body" : [
                                {
                                    "credential" : "Cliente",
                                    "account" : "client",
                                    "password" : "12345678",
                                    "observation" : "Cuenta para iniciar sesión o de lo contrario registrar un nuevo usuario"
                                },
                            ]
                        },
                    ]
                }
                
            },
            //Bienes y Raices
            {
                "title" : "Bienes y Raices",
                "paragraphs" : [
                    "Es una pagina web de venta de casas y departamentos de lujo. Podras ver las increibles propiedades que tenemos. La pagina esta hecho con HTML y CSS.",
                ],
                "extras" : {
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/bienes-raices"
                    },
                ],
                "technologies" : [
                    "html.png",
                    "css.png",
                ],
                "gallery" : [
                    'bienes-raices/picture-1.png',
                    'bienes-raices/picture-2.png',
                    'bienes-raices/picture-3.png',
                    'bienes-raices/picture-4.png',
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "Ver galería",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Ir al proyecto",
                        "icon" : "fas fa-globe",
                        "url" : "https://bienes-raices.devgustavo.com"
                    }
                },
            },
            //Frontend Store
            {
                "title" : "Frontend Store",
                "paragraphs" : [
                    "Es una pagina web estica hecha con HTML y CSS, utilize CSS Grid para distribuir los diferentes elementos.",
                ],
                "extras" : {
                    "techs_text" : "Used Technologies"
                },
                "links" : [
                    {
                        "name" : "Go to the repository",
                        "icon" : "fab fa-github",
                        "url" : "https://github.com/gafc2001/store-grid"
                    },
                ],
                "technologies" : [
                    "html.png",
                    "css.png",
                ],
                "gallery" : [
                    'grid-store/picture-1.png',
                    'grid-store/picture-2.png',
                    'grid-store/picture-3.png',
                ],
                "gallery_buttons" : {
                    "gallery" : {
                        "name" : "Ver galería",
                        "icon" : "fas fa-images",
                    },
                    "project" : {
                        "name" : "Ir al proyecto",
                        "icon" : "fas fa-globe",
                        "url" : "https://store-online.devgustavo.com"
                    }
                },
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
                "title" : "Mensaje",
                "placeholder" : "Tu mensaje"
            },
            "button" : {
                "title" : "Enviar"
            }
        }
        
    },
    "footer" : {
        "paragraphs" : [
            "Desarrollador de Software, egresado del Instituto SENATI.",
            "Capaz de crear aplicaciones funcionales y mantenibles de inicio a fin. Dispuesto a afrontar nuevos retos y aprender nuevas tecnologías que me permitan crecer profesionalmente.",
            "Me caracterizo por ser una persona creativa, trabajo en equipo, autodidacta y resolver problemas"
        ],
        "explore" : {
            "title" : "Explorar",
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