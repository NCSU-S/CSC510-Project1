import express, {Application} from 'express';
import cors from 'cors';
import router from './routes/index';

export async function createApp(): Promise<Application>{
    (await import ('dotenv')).config()
    const app = express();
    const { PORT, ENVIRONMENT } = process.env;
    console.log(PORT, ENVIRONMENT);
    app.use(cors({
        origin: ['http://localhost:3000'],
        credentials: true
    }))

    app.use('/api/v1',router);
    app.listen(PORT, () => console.log('RUNNING ON PORT 3001'));
    return app;
}