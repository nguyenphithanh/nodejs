import './LoadEnv'; // Must be the first import
import app from './Server';

// Start the server
// tslint:disable-next-line: no-magic-numbers
const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log('Express server started on port: ' + port);
});
