const catchError = require('../utils/catchError');

const sendEmail = require('../utils/sendEmail')

const getAll = catchError(async (req, res) => {
    return res.json(/* valor a retornar */)
});

const email = catchError(async (req, res) => {
    await sendEmail({
        to: 'memo2705@gmail.com',
        subject: 'Mensaje del portafolio',
        html: `
            <h1> Estoy probando un titulo</h1>
            <p>Ad aute in id dolor et esse consectetur in eu id. Nulla esse velit deserunt cupidatat voluptate nisi enim esse non labore cillum elit nulla anim. Irure occaecat do quis sint.</p>
            <div style="color: red">Este es un texto rojo</div>
        `
    })
    res.json({ message: 'Email Enviado' })
})

const contactEmail = catchError(async (req, res) => {
    const { name, email, phone, message } = req.body;
    await sendEmail({
        to: 'memo2705@gmail.com',
        subject: 'Mensaje del portafolio',
        html: `
        <h1> ${name} te escribio desde tu portafolio! </h1> 
        <p>${message}</p>
        <ul>
            <li>Email: ${email}</li>
            <li>Phone: ${phone} </li>
        
        </ul>
        `
    })
    res.json({ message: 'Email Enviado' })
})


module.exports = {
    getAll,
    email,
    contactEmail,
}