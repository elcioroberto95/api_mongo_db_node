const { Router } = require('express');
const { validateDataRequestPerson } = require('../../utils');
const Person = require('../../models/Person');
const router = Router();


router.post('/person', validateDataRequestPerson, async (request, response) => {
    const { name, salary, approved } = request.body;
    const person = { name, salary, approved };
    try {
        await Person.create(person);
        return response.status(201).json({ 'message': 'this person was successfully created' });
    }
    catch (error) {
        console.log(error);
        return response.status(400).json({ 'error': error });
    }
});
module.exports = router;