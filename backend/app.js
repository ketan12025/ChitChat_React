const express = require("express");
const app = express();
const morgan = require("morgan");
const server = require("http").createServer(app);
const io = require("socket.io")(server)
let activeUser = [];
let messageData = []




const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression")
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')

const globalErrorHandler = require("./controller/errorController");
const AppError = require("./utils/appError");
const catchAsync = require("./utils/catchAsync");


const userRouter = require('./router/userRouter')


// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());


// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!"
});
app.use("/api", limiter);


// Body parser, reading data from body into req.body
app.use(bodyParser.json())
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }));




// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: ["id","duration", "maxGroupSize"]
  })
);

app.use(compression());

// Serving static files
app.use(express.static(`${__dirname}/public`));


app.use("/api/v1/users", userRouter);

io.on("connection" ,(socket)=>{
  console.log('user connected')

  socket.on('login',(data)=>{
    data.newUser.id = socket.id
    activeUser.push(data.newUser)
  })

   socket.on("getUser",()=>{
     io.emit("postUser",activeUser)
   })
   
socket.on('getOldMessage',()=>{
 console.log('notng')
})

  socket.on('disconnect',async()=>{
     activeUser = await activeUser.filter(el =>{ return el.id != socket.id} )
    
      io.emit("postUser",activeUser)
  })
})

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = server;
