const Wishlist = require("../models/wishlist")

function getAllWishlists(request, response){
    Wishlist.find({})
        .then(function(wishlists){
            response.status(200).send(wishlists);
        })
        .catch(function(err){
            response.status(500).send({message: "Ops! Ocorreu algum erro"})
        });
}

function getWishlistById(request, response) {
    Wishlist.findById(request.params.id)
     .then(function(wishlist){
         response.status(200).send(wishlist)
     }).catch(function(err){
        response.status(500).send({message: "Ops! Ocorreu algum erro"})
     })
     
}

function createWishlist(request,response) {
    const wishlist = request.body;
    Wishlist.create(wishlist)
     .then(function(){
         response.status(201).send({message:"Wishlist criada"})
     })
     .catch(function(err) {
        console.error(err);
        response
          .status(500)
          .send({ message: "Ops! Estamos com alguns problemas." });
      });
}

function deleteWishlistById(request, response){
    Wishlist.deleteOne({_id: request.params.id})
     .then(function(){
         response.status(200).send(`Item Atualizado com sucesso `)
     }).catch(function(err){
        response.status(500).send({message: "Ops! Ocorreu algum erro"})
        console.error(err)
     });    
}



function updateWishlistById(request, response){ 

    Wishlist.findByIdAndUpdate(request.params.id,{name:request.body.name},function(){})
     .then(function(){
         response.status(200).send(`Item Atualizado com sucesso`)
         console.log()

     }).catch(function(err){
        response.status(500).send({message: "Ops! Ocorreu algum erro"})
        console.error(err)
     });    
}

module.exports ={
    getAllWishlists: getAllWishlists,
    getWishlistById:getWishlistById,
    createWishlist:createWishlist,
    deleteWishlistById:deleteWishlistById,
    updateWishlistById:updateWishlistById
}