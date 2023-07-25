import { getWeather } from "../services";
import { returnResponse } from "./return";
import { errorReturnResponse } from "./errorReturn";


export const myhandler = async (event) => {
  try {
    return returnResponse(await getWeather(event.city, event.countryCode));
  } catch (e) {
    return errorReturnResponse(401, e.message);
  }
}

export const handler = myhandler;
