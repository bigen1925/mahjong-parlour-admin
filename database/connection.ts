import {Connection, createConnection, getConnection, getConnectionManager, getConnectionOptions} from "typeorm";
import {Parlour} from "./entities/Parlour";

const CONNECTION_NAME="default"
const CONNECTION_ATTEMPT_INTERVAL = 100;
const CONNECTION_TIMEOUT = 3 * 1000; //3 seconds

//initialize database connection
let isConnecting = false;
let isInitialized = false;
//wait for the connection to the database has been established
export const connectDatabase = async () => {

    if (isInitialized) return;

    if (isConnecting) {
        let waiting = 0
        while (waiting < CONNECTION_TIMEOUT) {
            waiting += CONNECTION_ATTEMPT_INTERVAL
            await new Promise(r => setTimeout(r, CONNECTION_ATTEMPT_INTERVAL));
            if (!isConnecting && isInitialized) return;
        }
        throw Error('database initializing is something wrong !!');
    }

    isConnecting = true;
    const connectionManager = getConnectionManager()

    if (connectionManager.has(CONNECTION_NAME)) {
        await connectionManager.get(CONNECTION_NAME).close()
    }

    //create new connection
    await createConnection({
        name: CONNECTION_NAME,
        ...(await getConnectionOptions()),
        entities: [Parlour],
        synchronize: true,
    });

    isConnecting = false;
    isInitialized = true;

    //log for debugging
    console.log(`Database connection initialized.`);
};