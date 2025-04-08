export async function getconfig () {
    return{
    db: {
      host: process.env.DB_HOST || 'localhost',
      port: +(process.env.DB_PORT || 5432),
      username: process.env.DB_USER || 'postgres',
      password: await fetchDbPassword(), // your async password fetching logic
      database: process.env.DB_NAME || 'mydb',
    },
    }
  };

  async function fetchDbPassword(): Promise<string> {
    // Fetch from secret manager / env / etc
    return 'super-secret-password'; 
  }