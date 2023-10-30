require('dotenv').config();
const path = require('path');
const express = require('express');
const fs = require('fs');
const https = require('https');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const noCache = require('nocache');
const bodyParser = require('body-parser');
const httpContext = require('express-http-context');
const morgan = require('morgan');
const compress = require('compression');
const health = require('./server/routes/health');

// create express app
const app = express();

// mongo connection
const tmpState = moodyCo.readyState;
let stateSQLite = '';
let isUp = false;
switch (tmpState) {
    case 0:
        stateSQLite = 'disconnected';
    break;
    case 1:
        stateSQLite = 'connected';
        isUp = true;
    break;
    case 2:
        stateSQLite = 'connecting';
    break;
    case 3:
        stateSQLite = 'disconnecting';
    break;
    default:
        stateSQLite = 'unknow';
    break;
};

