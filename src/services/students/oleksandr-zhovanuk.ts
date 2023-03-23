import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";
import { color } from "@mui/system";

export class OleksandrZhovanukConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return "Zhovanuk Oleksandr";
  }

  public getStudentEmail(): string {
    return "zhovanukolexander@gmail.com";
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: "Oleksandr",
      surname: "Zhovanuk",
      email: this.getStudentEmail(),
      projectName: "InkFinder",
      personalProjectLink: "https://inkfinder2.azurewebsites.net/",
      header: createPenHeader(),
      frames: generatePenFrames(),
    };
  }
}
function createPenHeader(): IFrame {
  const pixels: IPixelState[] = [ 
    { x: 4, y: 10, color: Colour.White },
    { x: 4, y: 11, color: Colour.White },
    { x: 5, y: 10, color: Colour.White },
    { x: 6, y: 9, color: Colour.White },
    { x: 7, y: 9, color: Colour.White },
    { x: 8, y: 8, color: Colour.White },
    { x: 3, y: 12, color: Colour.White },
    { x: 3, y: 11, color: Colour.White },
    { x: 4, y: 12, color: Colour.White },
    { x: 5, y: 11, color: Colour.White },
    { x: 5, y: 12, color: Colour.White },
    { x: 5, y: 2, color: Colour.White },
    { x: 5, y: 3, color: Colour.White },
    { x: 5, y: 4, color: Colour.White },
    { x: 6, y: 11, color: Colour.White },
    { x: 6, y: 10, color: Colour.White },
    { x: 6, y: 4, color: Colour.White },
    { x: 6, y: 1, color: Colour.White },
    { x: 6, y: 5, color: Colour.White },
    { x: 6, y: 3, color: Colour.White },
    { x: 6, y: 2, color: Colour.White },
    { x: 7, y: 5, color: Colour.White },
    { x: 7, y: 1, color: Colour.White },
    { x: 7, y: 4, color: Colour.White },
    { x: 7, y: 3, color: Colour.White },
    { x: 7, y: 2, color: Colour.White },
    { x: 8, y: 1, color: Colour.White },
    { x: 8, y: 5, color: Colour.White },
    { x: 8, y: 4, color: Colour.White },
    { x: 8, y: 3, color: Colour.White },
    { x: 8, y: 2, color: Colour.White },
  ];

  return {
    frameNumber: 0,
    pixels: pixels,
  };
}

function generatePenFrames(): IFrame[] {
  const frames: IFrame[] = [];

  const pen: IPixelState[] = [
    { x: 4, y: 2, color: Colour.White },
    { x: 4, y: 3, color: Colour.White },
    { x: 5, y: 2, color: Colour.White },
    { x: 6, y: 1, color: Colour.White },
    { x: 7, y: 1, color: Colour.White },
    { x: 8, y: 0, color: Colour.White },
    { x: 3, y: 4, color: Colour.White },
    { x: 3, y: 3, color: Colour.White },
    { x: 4, y: 4, color: Colour.White },
    { x: 5, y: 3, color: Colour.White },
    { x: 5, y: 4, color: Colour.White },
    { x: 6, y: 3, color: Colour.White },
    { x: 6, y: 2, color: Colour.White },
  ];

  for (let frameNumber = 0; frameNumber < 16; frameNumber++) {
    const pixels: IPixelState[] = [];

    
    let penX = 0
    const penY = frameNumber % (30);
    if (frameNumber % 2 == 0){
      penX = -1
    }
    else{
      penX = 0
    }

    pixels.push(...pen.map((pixel , index) : IPixelState => {
      if(index < 13){
        return ({...pixel, y: pixel.y + penY , x: pixel.x + penX})
    }
    return {...pixel}
    }))

    pen.push({ x: 8 + penX, y: frameNumber, color: Colour.White })
    

    frames.push({
      frameNumber: frameNumber,
      pixels: pixels,
    });
  }

  return frames;
}
