const apiHandler = require('../middlewares/apiHandler');
const customerProfileController = require('../controllers/customersProfiles.controller');
const validator = require('../validations/customerProfile.validation');
const router = require('express').Router();

router.get('/', validator.validateGetAllRequest, apiHandler.handle(customerProfileController.index));
router.get('/:id', validator.validateGetByIdRequest, apiHandler.handle(customerProfileController.show));
router.post('/', validator.validateCreateRequest, apiHandler.handle(customerProfileController.create));
router.patch('/:id', validator.validateUpdateRequest, apiHandler.handle(customerProfileController.update));
router.delete('/:id', validator.validateDestroyRequest, apiHandler.handle(customerProfileController.destroy));
router.get('/search/:attribute/:key', validator.validateSearchByRequest, apiHandler.handle(customerProfileController.searchBy));
router.get('/sort/:attribute/:direction', validator.validateSortByRequest, apiHandler.handle(customerProfileController.sortBy));

module.exports = router;
