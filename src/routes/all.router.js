export default router => {
    return router.get('/', (req, res) => {
        res.render('index', {
            title:'test'
        });
    });
}