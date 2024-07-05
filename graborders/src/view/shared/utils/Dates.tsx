import moment from "moment";
import { v4 as uuidv4  } from 'uuid';

class Dates {
  static NewsDate(date) {
    return moment(date).format("DD-MM-YYYY");
  }
  static newTime(date) {
    return moment(date).format("HH:MM");
  }

  static Monthago(date) { 
    return moment(date).fromNow()
  }

  static currentDate(date) { 
    return moment(date).format("DD-MM-YYYY HH:mm")
  }


  static current() { 
    return moment().format("DD-MM-YYYY HH:mm")
  }
  static Date(date) { 
    return moment(date).format("DD-MM-YYYY HH:mm")
  }

  static orderNow() { 
    return moment().format("yyyymmDD")
  }

  static Number() { 
    const dateNow = moment().format("yyyyMMDD") // Current date in milliseconds since January 1, 1970
    const uuidNumber = uuidv4().replace(/-/g, '').substring(0, 8); // Generating UUID number and removing dashes
    const uniqueNumber = `${dateNow}${uuidNumber}`; // Combining current date and UUID number
    return uniqueNumber;
  }

}

export default Dates;
