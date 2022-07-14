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

router.get('/person', async (request, response) => {
    try {

        const person = await Person.find();

        return response.status(200).json({ 'data': person });
    }
    catch (error) {
        response.status(400).json({ 'error': error });
    }
});
router.get('/person/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const person = await Person.findOne({
            '_id': id
        });
        if (!person) {

        }
        return response.status(200).json({ 'data': person });
    }
    catch (error) {
        return response.status(400).json({ 'error': error });
    }
});

router.delete('/person/:id', async (request, response) => {
    const { id } = request.params;
    try {
        await Person.deleteOne({ '_id': id });
        return response.status(200).json({ 'data': 'The register was successfully deleted' });
    }
    catch (error) {
        return response.status(400).json({ 'error': error });
    }
});



module.exports = router;