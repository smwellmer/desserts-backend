// create new express route
const router =  require("express").Router()
const {Router} = require("express")

// import the model from dessert model
const Dessert = require("../models/dessert")

// seed data for the seed route

const dessertSeed = [
    {
        name: "Mocha Chocolate Icebox Cake",
        category: "No-Bake",
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/3/11/1/BX0909_Mocha-Chocolate-Icebox-Cake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1396383069733.jpeg",
        url: "https://barefootcontessa.com/recipes/mocha-chocolate-icebox-cake"
    },
    {
        name: "Oatmeal Chocolate Chip Cookies",
        category: "Cookie",
        img: "https://preppykitchen.com/wp-content/uploads/2020/02/Oatmeal-Chocolate-Chip-Cookie-Recipe-1-330x330.jpg",
        url: "https://preppykitchen.com/oatmeal-chocolate-chip-cookies/"  
    },
    {
        name: "Basic Chocolate Cupcakes",
        category: "Cake",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/basic-chocolate-cupcake-1602176305.jpg?crop=0.609xw:0.579xh;0.179xw,0.317xh&resize=768:*",
        url: "https://www.thepioneerwoman.com/food-cooking/recipes/a34293255/basic-chocolate-cupcakes-recipe/"
    },
    {
        name: "Tiramisu",
        category: "No-Bake",
        img: "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-articleLarge.jpg",
        url: "https://barefootcontessa.com/recipes/tiramisu"
    },
    {
        name: "Classic Shortbread Cookies",
        category: "Cookie",
        img: "https://www.simplyrecipes.com/thmb/AznN29ntZ-Dg4GlYn_nJ8TY8AaY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__06__classic_shortbread_hero4-1-005065f6609e4f08952c01d39a30e24a.jpg",
        url: "https://www.simplyrecipes.com/recipes/classic_shortbread_cookies/"
    }
]
// establish routes
 // seed route
 router.get('/seed', async (req, res) => {
     try {
         await Dessert.remove({})
         await Dessert.create(dessertSeed)
         const desserts = await Dessert.find({})
         res.json(desserts)
     }catch (error) {
         res.status(400).json(error)
     }
 })

// index route
router.get('/', async (req, res) => {
    try {
        const desserts = await Dessert.find({})
        res.json(desserts)
    } catch (error) {
        res.status(400).json(error)
    }
})

// create route
router.post('/', async (req, res) => {
    try{
        const newDessert = await Dessert.create(req.body)
        res.json(newDessert)
    } catch (error) {
        res.status(400).json(error)
    }
})
 
/// update route
router.put('/:id', async (req, res) => {
    try {
        const updatedDessert = await Dessert.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.json(updatedDessert)
    } catch (error) {
        res.status(400).json(error)
    }
})
 
// destroy route
router.delete('/:id', async (req, res) => {
    try {
        const deletedDessert = await Dessert.findByIdAndRemove(req.params.id)
        res.json(deletedDessert)
    } catch (error) {
        res.status(400).json(error)
    }
})

 
 // gotta export the stuff
 module.exports = router