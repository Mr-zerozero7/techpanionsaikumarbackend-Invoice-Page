const Form = require('../models/mongoose/formData')

module.exports.submit_form = async(request, response) => {
    const {invoiceDetails: {
        currency,
        basicAmount,
        taxAmount,
        advancePaid,
        tcsApplicable
    },
    alternatePayeeDetails:{
        alternatePayee1,
        alternatePayee2,
        city,
        street,
        country,
        ifscCode,
        bankAccNum,
        reference
    },
    listItem:{
        selectedItem,
        paymentType,
        itemDes,
        itemCode,
        optionalText
    },actionHistory:{
        invoiceStatus,
        invoiceId,
        printStatus
    }
    } = request.body
    // console.log(invoiceDetails)
    try {
        const form = await Form.create({
        invoiceDetails: {
            currency,
            basicAmount,
            taxAmount,
            advancePaid,
            tcsApplicable
        },
        alternatePayeeDetails:{
            alternatePayee1,
            alternatePayee2,
            city,
            street,
            country,
            ifscCode,
            bankAccNum,
            reference
        },
        listItem:{
            selectedItem,
            paymentType,
            itemDes,
            itemCode,
            optionalText
        },actionHistory:{
            invoiceStatus,
            invoiceId,
            printStatus
        }})
        // console.log(form)
        response.status(200).json({message: 'submitted Successfully'})
    } catch (error) {
        response.status(400).json({errorMsg: error.message, message: 'form submision failed'})
    }
}

module.exports.invoice_details = async(request, response) => {
    try {
        const formData = await Form.find({});
        response.status(200).json(formData) 
    } catch (error) {
        response.status(400).json({"errorStatus":error.message})
    }
}

