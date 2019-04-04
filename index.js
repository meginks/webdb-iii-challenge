const express = require('express');
const helmet = require('helmet');
const knex = require('knex');


const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.sqlite3'
    },
    useNullAsDefault: true
}; 

const db = knex(knexConfig); 

const server = express(); 

server.use(helmet());
server.use(express.json());

// *******COHORT ENDPOINTS************ 

// POST to cohorts 
server.post('/api/cohorts', async (req, res) => {
    try {
        const [id] = await db('cohorts').insert(req.body); 
        const cohort = await db('cohorts')
        .where({ id })
        .first();

        res.status(201).json(cohort);
    
    } catch (error) {
        res.status(500)
        .json({
         message: `Error! ${error}`
          })
    }
})


// GET cohorts 

server.get('/api/cohorts', async (req, res) => {
    try {
        const cohorts = await db('cohorts'); 
        res.status(200).json(cohorts);
    } catch (error) {
        res.status(500)
        .json({
         message: `Error! ${error}`
          })
    }
});

// GET cohorts by ID 

server.get('/api/cohorts/:id', async (req, res) => {
    try {
        const cohort = await db('cohorts')
        .where({ id: req.params.id })
        .first();
        res.status(200).json(cohort);
    } catch (error) {
        res.status(500)
        .json({
         message: `Error! ${error}`
          })
    }
})

 // Get students from cohort w/ specified id 





// PUT cohort -- update w/ matching id data 

server.put('/api/cohorts/:id', async (req, res) => {
    try {
        const count = await db('cohorts')
        .where({ id: req.params.id })
        .update(req.body); 
        if (count > 0) {  
        const cohort = await db('cohorts')
        .where({ id: req.params.id })
        .first(); 
        res.status(200).json(cohort); 
        }
    } catch (error) {
        res.status(500)
        .json({
         message: `Error! ${error}`
          })
    }
})

// DELETE cohort 

server.delete('/api/cohorts/:id', async (req, res) => {
    try {
        const count = await db('cohorts') 
        .where({ id: req.params.id })
        .del();

        if (count > 0) {
            res.status(204).end();
        } else {
            res.status(404).json({
                message: `Not found!`
            })
        }

    } catch (error) {
        res.status(500)
        .json({
         message: `Error! ${error}`
          })
    }
})








const port = process.env.PORT || 5010; 

server.listen(port, () => {
    console.log(`\n*** API running on http://localhost:${port} ***\n`)
})