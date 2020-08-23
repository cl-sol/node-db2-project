const express = require("express");
const knex = require("knex");
const db = require("../data/config");

const Router = express.Router();

//crud - get/post/put/delete
// /api/cars

router.get("/", async (req, res, next) => {
    try{
        const data = await db.select("*").from("cars");
        res.status(200).json({
            data: cars
        })
    } catch(err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try{ 
        const data = await db("cars").where({ id: req.params.id});
        if (data.length > 0) {
            res.json(data)
        } else {
            res.status(404).json({
                message: "Error retrieving account with id"
            })
        }
    } catch(err){ 
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const carsData = req.body;
        const data = await db("cars").insert(carsData)
        res.status(201).json(carsData)
    } catch(err) {
        next(err);
    }
});