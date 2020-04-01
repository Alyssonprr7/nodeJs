const express = require("express");
const router = express.Router();

const WishlistController = require("../controllers/wishlist-controller.js");

router.get("/wishlist/all", WishlistController.getAllWishlists);

router.get("/wishlist/:id", WishlistController.getWishlistById);

router.post("/wishlist", WishlistController.createWishlist);

router.put("/wishlist/update/:id", WishlistController.updateWishlistById);

router.delete("/wishlist/delete/:id", WishlistController.deleteWishlistById)

module.exports = router;