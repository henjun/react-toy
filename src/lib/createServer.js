import http from 'http';
import routerRegister from './routerRegister'
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

export default async ({ app, port = 3000 }) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    const routeDir = app.get('routeDir');
    routeDir && await routerRegister(app, routeDir);
    
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    return {
        run: () => {
            const server = http.createServer(app);

            server.listen(port);

            server.on('error', onError);
            server.on('listening', onListening);
            
            /**
             * Event listener for HTTP server "error" event.
             */

            function onError(error) {
                if (error.syscall !== 'listen') {
                throw error;
                }
            
                var bind = typeof port === 'string'
                ? 'Pipe ' + port
                : 'Port ' + port;
            
                // handle specific listen errors with friendly messages
                switch (error.code) {
                case 'EACCES':
                    console.error(bind + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(bind + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
                }
            }
            
            /**
             * Event listener for HTTP server "listening" event.
             */
            
            function onListening() {
                var addr = server.address();
                var bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port;
                console.debug('Listening on ' + bind);
            }
        
        }
    }
}