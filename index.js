const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const initializeDatabase = require("./db/db.connect");
const PlantCategory = require("./models/PlantCategories.models");
const Plant = require("./models/Plants.models");
const PlantCare = require("./models/PlantCare.models");
const Planter = require("./models/Planters.models");
const PlantProduct = require("./models/Products.models");

const UserAddress = require("./models/users/UserAddress.models");
const SproutNestUser = require("./models/users/SproutNestUser.models");
const app = express();

app.use(express.json());
app.use(cors());

/*const jsonPData = fs.readFileSync('./plants.json')
const plantsData = JSON.parse(jsonPData)

const jsonPlData = fs.readFileSync('./plantCare.json')
const plantsCareData = JSON.parse(jsonPlData)

/*const jsonData = fs.readFileSync('./planters.json')
const plantersData = JSON.parse(jsonData)*/

initializeDatabase();

app.get("/", (req, res) => {
  try {
    res.send(
      "Welcome to SproutNest - Online plant store where nature meets convenience."
    );
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const seedCategoryData = async () => {
  try {
    for (const categoryData of categoriesData) {
      const category = new PlantCategory({
        name: categoryData.name,
      });
      await category.save();
    }
  } catch (error) {
    console.log(error);
  }
};

const seedPlantData = async () => {
  try {
    for (const plantData of plantsData) {
      const plant = new Plant({
        name: plantData.name,
        category: plantData.category,
        subCategory: plantData.subCategory,
        price: plantData.price,
        details: plantData.details,
        tags: plantData.tags,
        images: plantData.images,
        rating: plantData.rating,
        reviews: plantData.reviews,
        stock: plantData.stock,
        sizes: plantData.sizes,
        waterIntake: plantData.waterIntake,
        sunlightRequired: plantData.sunlightRequired,
        careDifficulty: plantData.careDifficulty,
        fertilizer: plantData.fertilizer,
      });
      await plant.save();
    }
  } catch (error) {
    console.log(error);
  }
};

const seedPlantCareData = () => {
  try {
    for (const plantCareData of plantsCareData) {
      const plantCare = new PlantCare({
        name: plantCareData.name,
        category: plantCareData.category,
        subCategory: plantCareData.subCategory,
        price: plantCareData.price,
        details: plantCareData.details,
        tags: plantCareData.tags,
        images: plantCareData.images,
        rating: plantCareData.rating,
        reviews: plantCareData.reviews,
        stock: plantCareData.stock,
        sizes: plantCareData.sizes,
        weights: plantCareData.weights,
        usageInstructions: plantCareData.usageInstructions,
        dosage: plantCareData.dosage,
        colors: plantCareData.colors,
      });
      plantCare.save();
    }
  } catch (error) {
    console.log(error);
  }
};

const seedPlanterData = () => {
  try {
    for (const planterData of plantersData) {
      const planter = new Planter({
        name: planterData.name,
        category: planterData.category,
        subCategory: planterData.subCategory,
        price: planterData.price,
        details: planterData.details,
        tags: planterData.tags,
        images: planterData.images,
        rating: planterData.rating,
        reviews: planterData.reviews,
        stock: planterData.stock,
        sizes: planterData.sizes,
        material: planterData.material,
        shape: planterData.material,
        colors: planterData.colors,
      });
      planter.save();
    }
  } catch (error) {
    console.log(error);
  }
};

//seedCategoryData()
//seedPlantData()
//seedPlantCareData()
//seedPlanterData()

const addAddress = async (address) => {
  try {
    if (address) {
      const savedAddress = new UserAddress(address);
      await savedAddress.save();
      return savedAddress;
    }
  } catch (error) {
    return error;
  }
};

app.get("/categories", async (req, res) => {
  try {
    const categories = await PlantCategory.find();
    if (!categories) {
      return res
        .status(404)
        .json({ error: "Categories not found. Please add One." });
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/products", async (req, res) => {
  try {
    let products = [];
    if (req.query.new == "true") {
      products = await PlantProduct.find({ tags: "new" });
    } else {
      products = await PlantProduct.find();
    }

    if (!products) {
      return res
        .status(404)
        .json({ error: "Products not found. Please add One." });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/categories/:categoryId", async (req, res) => {
  try {
    const products = await PlantProduct.find({
      category: req.params.categoryId,
    });
    if (!products) {
      return res
        .status(404)
        .json({ error: "Products not found. Please add One." });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/products/:productId", async (req, res) => {
  try {
    const product = await PlantProduct.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/products/category/:categoryId", async (req, res) => {
  try {
    const products = await PlantProduct.find({
      category: req.params.categoryId,
    });
    if (!products) {
      return res.status(404).json({ error: "Products not found." });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/user", async (req, res) => {
  try {
    const user = await SproutNestUser.findOne().populate("addresses");
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/:userId/addresses", async (req, res) => {
  try {
    const user = await SproutNestUser.findOne({ _id: req.params.userId });
    const userAddresses = user.addresses;
    if (!userAddresses) {
      return res.status(404).json({ error: "User Address not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("v1/:userId/:addressId", async (req, res) => {
  const { userId, addressId } = req.params;
  try {
    const addressToDelete = await UserAddress.findById(addressId);

    if (!addressToDelete) {
      return res.status(404).json({ error: "Address not found" });
    }
    if (addressToDelete.isShippingAddress === true) {
        const newShippingAddress = await UserAddress.findOne(
            {user: userId,
            _id: {$ne: addressId}
        }).sort({createdAt: -1})
        if(newShippingAddress){
            await UserAddress.updateOne(
                {_id: newShippingAddress._id},
                {$set: {isShippingAddress: true}}
            )
        }
    }
    await UserAddress.deleteOne({ _id: addressToDelete._id });
    const populatedUser = await SproutNestUser.findById(userId).populate(
      "addresses"
    );
    res.status(201).json(populatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/v1/user", async (req, res) => {
  const {
    name,
    email,
    street,
    city,
    country,
    zip,
    phoneNo,
    isShippingAddress = true,
  } = req.body;

  try {
    const user = new SproutNestUser({ name, email });
    await user.save();
    if (!user) {
      return res.status(404).json({ error: `User not found.` });
    }
    if (user && street) {
      const userAddress = await addAddress({
        street,
        city,
        country,
        zip,
        phoneNo,
        isShippingAddress: true,
        user,
      });
      if (userAddress) {
        const updatedUser = await SproutNestUser.findByIdAndUpdate(user._id, {
          $push: { addresses: userAddress._id },
        });
      }
    }
    const populatedUser = await SproutNestUser.findById(user._id).populate(
      "addresses"
    );
    res.status(201).json(populatedUser);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error` });
  }
});

app.post("/v1/address/:addressId", async(req, res) => {
    const { street, city, country, zip, phoneNo, isShippingAddress, user } =
    req.body;
    console.log('in update.........111111.....................', isShippingAddress)
    if(isShippingAddress === true){
        const newShippingAddress = await setShippingAddress(user)
        console.log('in update.........shiping........................', newShippingAddress)
    }
    try{
        const addressUpdated = await UserAddress.findByIdAndUpdate(
            req.params.addressId, 
            {street, city, country, zip, phoneNo, isShippingAddress},
            {new: true})
        console.log('in update.........2.....................', addressUpdated)
        const populatedUser = await SproutNestUser.findById(user).populate('addresses')
        console.log('in update.........3.....................', populatedUser)
        res.status(201).json(populatedUser);
    } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

const setShippingAddress = async(user) => {
    console.log('set shipping true........1.............', user)
    const addressCount = await UserAddress.countDocuments({ user: user });

    const removeOtherShippingAddress = await UserAddress.updateMany(
      { user: user },
      { $set: { isShippingAddress: false } }
    );
    console.log('set shipping true........2.............', removeOtherShippingAddress)
}

app.post("/v1/:userId/address", async (req, res) => {
  const { street, city, country, zip, phoneNo, isShippingAddress, user } =
    req.body;
  const { userId } = req.params;

  if (isShippingAddress === true) {
    setShippingAddress(userId)
  }
  try {
    if (user.addresses.length === 0) {
        const address = {...req.body, isShippingAddress: true}
      const userAddress = await addAddress(address);
      const user = await SproutNestUser.findByIdAndUpdate(req.params.userId, {
        $push: { addresses: userAddress._id },
      });
    } else {
      const userAddress = await addAddress(req.body);
      const user = await SproutNestUser.findByIdAndUpdate(req.params.userId, {
        $push: { addresses: userAddress._id },
      });
    }

    const populatedUser = await SproutNestUser.findById(
      req.params.userId
    ).populate("addresses");

    res.status(201).json(populatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));
