/*eslint no-undef: "off", max-len: "off"*/
"use strict";

const request = require('supertest');
let app = require('../app');

test('Root path', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(parseInt(response.header['content-length'])).toBeGreaterThan(0);
    expect(response.text).toBe('{"title":"JSON API","routes":["index","about","app","login","register","reports"]}');
});

test('Non-existing path', async () => {
    const response = await request(app).get('/foo/bar');

    console.log(response);

    expect(response.statusCode).toBe(404);
    expect(response.type).toBe('application/json');
    expect(response.text).toBe('{"msg":"Not Found"}');
});

test('index path', async () => {
    const response = await request(app).get('/index');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(parseInt(response.header['content-length'])).toBeGreaterThan(0);
    expect(response.text).toMatch(/En värld av ramverk/);
});

test('about path', async () => {
    const response = await request(app).get('/about');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(parseInt(response.header['content-length'])).toBeGreaterThan(0);
    expect(response.text).toMatch(/Om denna sida/);
});

test('app path', async () => {
    const response = await request(app).get('/app');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(parseInt(response.header['content-length'])).toBeGreaterThan(0);
    expect(response.text).toMatch(/Realtime game app/);
});

test('module path', async () => {
    const response = await request(app).get('/module');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(parseInt(response.header['content-length'])).toBeGreaterThan(0);
    expect(response.text).toMatch(/Min NPM-modul/);
});

test('register GET path', async () => {
    const response = await request(app).get('/register');

    expect(response.statusCode).toBe(405);
    expect(response.type).toBe('application/json');
    expect(parseInt(response.header['content-length'])).toBeGreaterThan(0);
});

test('login GET path', async () => {
    const response = await request(app).get('/login');

    expect(response.statusCode).toBe(405);
    expect(response.type).toBe('application/json');
    expect(parseInt(response.header['content-length'])).toBeGreaterThan(0);
});
