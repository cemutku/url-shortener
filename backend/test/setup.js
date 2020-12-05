const supertest = require('supertest');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const app = require('../src/app');

chai.use(sinonChai);

const { expect } = chai;
const server = supertest.agent(app);
const BASE_URL = '/api';

module.exports = {
	expect,
	server,
	BASE_URL,
};
