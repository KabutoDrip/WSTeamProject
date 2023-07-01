import {router, swaggerUi, swaggerDocument} from './tsvars'

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

module.exports = router;