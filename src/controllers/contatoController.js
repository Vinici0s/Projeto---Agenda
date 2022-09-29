const Contato = require('../models/ContatoModel');

exports.index = (request, response) => {
    response.render('contato');
};

exports.register = async (request, response) => {
    try{
        const contato = new Contato(request.body);
        await contato.register();
    
        if(contato.errors.length > 0){
            request.flash('errors', contato.errors);
            request.session.save(() => response.redirect('/contato/index'));
            return;
        }
    
        request.flash('success', 'Contato registrado com sucesso.');
            request.session.save(() => response.redirect('/contato/index'));
            return;
    }catch(e){
        console.log(e);
        return response.render('404');
    }
    
};