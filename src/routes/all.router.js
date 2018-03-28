import React from 'react';
import Main from '../../app/containers/Main';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'

export default router => {
    return router.get('/', (req, res) => {
        const context = {}
        console.log();
        
        res.render('index', {
            title:'test',
            html: renderToString( 
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    <Main />
                </StaticRouter>)
        });
    });
}