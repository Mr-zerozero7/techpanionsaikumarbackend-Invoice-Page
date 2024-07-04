const mongoose = require('mongoose')
const {v4: uuidv4} = require('uuid');

const formSchema = new mongoose.Schema({
    id:{
        type: String,
        default: () => uuidv4()
    },
    invoiceDetails: {
        currency:{
            type: String,
            required: true
        },
        basicAmount:{
            type: Number,
            required: true
        },
        taxAmount:{
            type: Number,
            required: true
        },
        advancePaid:{
            type: Number,
            required: true
        },
        tcsApplicable:{
            type: Boolean,
            default: false,
            required: true
        }
    },
    alternatePayeeDetails:{
        alternatePayee1:{
            type: String
        },
        alternatePayee2:{
            type: String
        },
        city:{
            type: String
        },
        street:{
            type: String
        },
        country:{
            type: String
        },
        ifscCode:{
            type: String
        },
        bankAccNum:{
            type: Number
        },
        reference:{
            type: String
        }
    },
    listItem:{
        selectedItem: {
            type:Boolean,
            default: false
        },
        paymentType: {
            type: String
        },
        itemDes:{
            type: String
        },
        itemCode:{
            type: String
        },
        optionalText:{
            type: String
        }
    },
    actionHistory:{
        invoiceStatus:{
            type: String,
            default: 'Reject',
        },
        invoiceId:{
            type: String,
            default: () => uuidv4()
        },
        printStatus: {
            type: Boolean,
            default: true
        }
    }
})

const Form = mongoose.model('form', formSchema);

module.exports = Form;