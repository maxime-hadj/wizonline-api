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
