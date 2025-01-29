import cryptoFront from "../assets/projects/crypto.png";
import fastCars from "../assets/projects/fastCars.png";
import shopp from "../assets/projects/Shopp.png";
import filme from "../assets/projects/filme.png";
import qrcode from "../assets/projects/qrcode.png";
import home from "../assets/projects/home.png";
import apiCrypto from "../assets/projects/api_crypto.png";
import api_viagem from "../assets/projects/api_viagem.png";
import autentica from "../assets/projects/autentica.png";

export const ProjectsJson = [
    {
      "title": "CryptoX",
      "description": "Este projeto fornece uma experiência intuitiva para os usuários visualizarem as melhores criptomoedas do momento, analisarem seus gráficos e realizarem compras de forma simples e eficaz.",
      "image": cryptoFront,
      "link_github": "https://github.com/Guilhermesoliveira21/Crypto",
      "link_deploy": "https://crypto-nine-tau.vercel.app/",
      "type": "front-end"
    },
    {
      "title": "Fast Cars",
      "description": "Este projeto tem como inspiração a webmotors, desenvolvida para listar veículos, exibir detalhes de suas especificações e realizar simulações de financiamento. A aplicação utiliza a API do Mercado Livre como fonte de dados para os veículos.",
      "image": fastCars,
      "link_github": "https://github.com/Guilhermesoliveira21/Fast-cars",
      "link_deploy": "https://fast-cars-lyart.vercel.app/",
      "type": "front-end"
    },
    {
      "title": "Mercado livre",
      "description": "Este é um projeto de carrinho de compras desenvolvido com React JS. Ele permite listar produtos na tela, buscar produtos consumindo a API do Mercado Livre, adicionar produtos e remover produtos do carrinho",
      "image": shopp,
      "link_github": "https://github.com/Guilhermesoliveira21/Mercado-Livre",
      "link_deploy": "https://api-mercado-livre-chi.vercel.app/",
      "type": "front-end"
    },
    {
      "title": "Filmes Online",
      "description": "Projeto criado e inspirado nas grandes stremers de filmes, no filmes on o usuario pode pesquisar pelos filmes favorita-los e assistilos, links foram retidos do youtube.",
      "image": filme,
      "link_github": "https://github.com/Guilhermesoliveira21/FilmesOn",
      "link_deploy": "https://filmes-on-gamma.vercel.app/",
      "type": "front-end"
    },
    {
      "title": "Gerador de QRcode",
      "description": "Este projeto oferece uma ferramenta para a criação de QR Codes, permitindo que os usuários gerem múltiplos códigos QR associados a diferentes URLs. Com esta ferramenta, os usuários podem facilmente criar e personalizar QR Codes para diversas aplicações, facilitando o compartilhamento de links.",
      "image": qrcode,
      "link_github": "https://github.com/Guilhermesoliveira21/gerador-de-QRCODE",
      "link_deploy": "https://gerador-de-qrcode-jwbkzby78-guilhermedev7.vercel.app/",
      "type": "front-end"
    },
    {
      "title": "Carrinho de compras",
      "description": "Este projeto é um sistema de carrinho de compras desenvolvido com HTML, CSS e JavaScript. Ele permite que os usuários adicionem e removam produtos do carrinho, proporcionando uma experiência interativa para gerenciar itens e visualizar o total de compras.",
      "image": home,
      "link_github": "https://github.com/Guilhermesoliveira21/Carrinho_compras",
      "link_deploy": "https://carrinho-de-compras-kappa.vercel.app/",
      "type": "front-end"
    },
    {
      "title": "API CryptoX",
      "description": "Esta API permite que os usuários se registrem, façam login e acessem dados de criptomoedas. Integra-se com o Yahoo Finance para buscar preços de criptomoedas, processa os dados e os fornece exclusivamente para usuários autenticados.",
      "image": apiCrypto,
      "link_github": "https://github.com/Guilhermesoliveira21/Api-Crypto",
      "link_deploy": "https://github.com/Guilhermesoliveira21/Api-Crypto",
      "type": "back-end"
    },
    {
      "title": "Sistema de Viagens",
      "description": "Usuario podera realizar um cadastro e login para acessar o sistema, quando ele entrar ele poderar ver as viagens, cadastrar uma viagem e reservar além do seu dashboard onde mostrara as viagens cadastrada e reservas realizada.",
      "image": api_viagem,
      "link_github": "https://github.com/Guilhermesoliveira21/Viagens-node.js",
      "link_deploy": "",
      "type": "back-end"
    },
    {
      "title": "Sistema de Auth",
      "description": "Sistema de autentição com jsonwebtoken(JWT), o usuario pode criar uma conta e só poderá cadastrar um produto caso esteja autenticado, usuario não conseguirá deletar outro usuario e nem editar a mesma regra para produtos.",
      "image": autentica,
      "link_github": "https://github.com/Guilhermesoliveira21/autentica-o-node.js",
      "link_deploy": "",
      "type": "back-end"
    }
  ]
  