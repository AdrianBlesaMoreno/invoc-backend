import { createConnection } from 'typeorm';
export let connect = async () => {
    createConnection(
        {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1234ODEC567a.',
            database: 'invoc',
            synchronize: false,
            logging: true,
            entities: [
                "src/models/**/*.ts"
            ],
            migrations: [
                "src/migration/**/*.ts"
            ],
            cli: {
                "entitiesDir": "./models",
                "migrationsDir": "./migrations"
            }
        });
};