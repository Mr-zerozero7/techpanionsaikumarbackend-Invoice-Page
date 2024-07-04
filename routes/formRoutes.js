const {Router} = require('express')
const formController = require('../controllers/formController');

const router = Router()

router.post('/api/submit-form', formController.submit_form);
router.get('/api/invoice-details', formController.invoice_details);


module.exports = router;