const env = {
  database: 'd5vobglcrmpjbk',
  username: 'eowhvbhtddjzjf',
  password: 'e12462b09103f2e318d70fff9840f4be10d7492d1d0ff078fbe5b41d51f97bde',
  host: 'ec2-52-23-40-80.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 60000,
	  idle: 10000
  }
};
 
module.exports = env;