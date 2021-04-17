## Test Technique Deepn.io

Ce dont vous avez besoin.

- create-react-app
- git 

## Etapes n°1

- Vous construirez une simple application react permettant d'afficher une liste de produit.
  Vous devrez mettre en style cette liste de produit et faire en sorte que le visuel
  soit adapté pour toutes sortes de support multimédia.

## Etapes n°2

- Vous ajoutez à cela, la possibilité:
  - d'ajouter des articles dans un panier
    -d'afficher pour chacun des produits dans le panier le prix unitaire, la quantité ajouté
  et le total du prix
  - afficher le prix total du panier
  - Vous ajouterez également une croix sur chaque produit dans le panier qui aura
    pour rôle de le supprimer totalement du panier même si ça quantité est plus grande que 1

## Bonus

- Vous ajouterez une pagination qui permet d'afficher 5 par 5 les produits,
- note : La liste des produits est fourni

## Super Bonus

- Vous ajouterez une barre de recherche qui permet de rechercher par le nom un article

## Vous avez 2 jours pour réaliser ce test technique

const items = [
{name: "coca", price: 1.70}
{name: "orangina", price: 2.33}
{name: "pepsi", price: 1.34}
{name: "pepsi max", price: 2.01}
{name: "evian", price: 1.56}
{name: "oasis", price: 2}
{name: "tropico", price: 0.91}
{name: "minut maid", price: 1.1}
{name: "ice tea", price: 1.5}
{name: "nestea", price: 1.23}
{name: "caprisun", price: 1.7}
{name: "perrier", price: 2}
{name: "chips", price: 1.99}
{name: "mars", price: 1.44}
{name: "snickers", price: 1.44}
{name: "ferrero", price: 6.87}
{name: "orange", price: 2.58}
{name: "pomme", price: 1.91}
{name: "kiwi", price: 2.34}
{name: "ananas", price: 4.21}
{name: "citron", price: 1.90}
{name: "fraise", price: 5.99}
{name: "framboise", price: 8.99}
{name: "coco", price: 8.44}
{name: "clémentine", price: 2.22}
{name: "pitaya", price: 16.5}
{name: "mangue", price: 3.99}
]