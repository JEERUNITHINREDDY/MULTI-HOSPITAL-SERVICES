const express = require('express');
const router = express.Router(); 
const Listing = require("../models/listing.js");
const appointment = require("../models/appointments.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });


router 
    .route("/")
    .get(wrapAsync(listingController.index) )
    .post(
         isLoggedIn,
          upload.single('listing[image]'),
          validateListing, 
          
    wrapAsync(listingController.createListing)
    );

//appointment post route
router.post("/bookappointment", async (req,res)=>{
 const newappointment = new appointment(req.body.appointment);
 const user=req.user._id;
 newappointment.bookedPatient=user;
 console.log(newappointment);
 await newappointment.save();
 req.flash("success", "New Appointment booked!");
 res.redirect("/listings");

});
//user appointments
router.get("/appointments", async (req, res)=>{
   const allappointments= await appointment.find({});
   console.log(allappointments);
   res.render("listings/userapp.ejs",{allappointments});
});
//doctor appointments
router.get("/doctorappointments", async (req, res)=>{
    const allappointments= await appointment.find({});
    res.render("listings/doctorapp.ejs",{allappointments});
 });

router.post("/acceptedappointments/:id", async (req, res)=>{
    console.log(req.params);
    let id = req.params.id;
    const update = { status: "Appointment Accepted" };
    const acceptedappointments= await appointment.findByIdAndUpdate(id , update, {
        new: true, // Returns the updated document
        runValidators: true // Runs schema validators
    });
    console.log(acceptedappointments);
    res.redirect("/listings/doctorappointments");
});

router.post("/rejectedappointments/:id", async (req, res)=>{
    console.log(req.params);
    let id = req.params.id;
    const update = { status: "Appointment Rejected" };
    const rejectedappointments= await appointment.findByIdAndUpdate(id , update, {
        new: true, // Returns the updated document
        runValidators: true // Runs schema validators
    });
    console.log(rejectedappointments);
    res.redirect("/listings/doctorappointments");
});

// update status 
// router.put('/doctorappointments/:id/status', async (req, res) => {
//     try {
//         const appointmentId = req.params.id;
//         const updatedStatus = req.body.status;

//         await appointment.findByIdAndUpdate(appointmentId, { status: updatedStatus });
//         res.json({ success: true });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: 'Failed to update status' });
//     }
// });


    // 3.1 New route
router.get("/new", isLoggedIn, listingController.renderNewForm );
// router.get("/bookappointment", listingController.renderappointmentform);

// search option 
router.get("/search/:name", listingController.searchByName);
//filter option
router.get("/filter/:filter", listingController.searchByfilter);

router 
        .route("/:id")
        .get( wrapAsync(listingController.showListings))
        .put( 
            isLoggedIn, 
            isOwner,
            upload.single('listing[image]'), 
            validateListing,  
            wrapAsync(listingController.updateListing))

        .delete( isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));



 router.get("/:id/edit",  isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


// 1 index route (to display all the tittles of the data )
// router.get(
//     "/",
//      wrapAsync(listingController.index)
// );


// 2 show route 
// router.get("/:id", wrapAsync(listingController.showListings));



// // 3.2 create route (it will be in index file)
// router.post("/",  isLoggedIn, validateListing, 
//     wrapAsync(listingController.createListing));



// 4.1 edit route 




// 4.2 update route
// router.put("/:id",  isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));



// 5 delete route
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));



module.exports = router;