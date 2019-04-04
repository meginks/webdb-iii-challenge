// const express = require('express');
// const router = express.Router(); 


// // POST to cohorts 
// router.post('/', async (req, res) => {
//     try {
//         const [id] = await db('cohorts').insert(req.body); 
//         const cohort = await db('cohorts')
//         .where({ id })
//         .first();

//         res.status(201).json(cohort);
    
//     } catch (error) {
//         res.status(500)
//         .json({
//          message: `Error! ${error}`
//           })
//     }
// })


// // GET cohorts 

// router.get('/', async (req, res) => {
//     try {
//         const cohorts = await db('cohorts'); 
//         res.status(200).json(cohorts);
//     } catch (error) {
//         res.status(500)
//         .json({
//          message: `Error! ${error}`
//           })
//     }
// });

// // Get cohorts by ID


// // Get students from cohort w/ specified id 


// // PUT cohort -- update w/ matching id data 


// // DELETE cohort 




// module.exports = router; 


// I tried to use router with knex but got confused and thrown off so I'm going back to put it all in the same file for now.