class Utils {

    validateDataRequestPerson(request, response, next) {
        const { name, salary, approved } = request.body;
        console.log(request.body)

        if (!name) {
            return response.status(400).json({ 'error': 'Preencher o campo nome é obrigatório' });
        }
        if (!salary) {
            return response.status(400).json({ 'error': 'Preencher o campo salary é obrigatório' });
        }
        if (!approved) {
            return response.status(400).json({ 'error': 'Preencher o campo approved é obrigatório' });
        }
        next();
    }
}
module.exports = new Utils()