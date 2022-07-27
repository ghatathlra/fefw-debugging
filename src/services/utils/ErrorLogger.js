class ErrorLogger {
  static new() {
    return new ErrorLogger();
  }

  log(err) {
    console.error(err);
  }
}

const errorLogger = ErrorLogger.new();
export {errorLogger};