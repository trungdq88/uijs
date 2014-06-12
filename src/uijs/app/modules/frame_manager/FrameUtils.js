/**
 * Created by DuyPT1 on 6/11/14.
 */

var $frameUtils = {
  getSubFramePosition: function(layout, index, width, height){
    switch (layout) {
      case $frameEnum.layout.vp2:
        return {
          left: 0,
          top: (FRAME_GAP + height) * index / 2,
          width: width,
          height: height/2 - FRAME_GAP/2
        };
      case $frameEnum.layout.vp3:
        return {
          left: 0,
          top: (height / 3 + FRAME_GAP / 3) * index ,
          width: width,
          height: (height - FRAME_GAP * 3 - FRAME_GAP) / 3 + FRAME_GAP/1.5
        };
      case $frameEnum.layout.hp1:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3)),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp2:
        return {
          left:  (FRAME_GAP + width) * index / 2,
          top: 0,
          width: (width - FRAME_GAP) / 2 ,
          height: height
        };
      case $frameEnum.layout.hp3:
        if (index == 1 || index == 2) {
          return {
            left: (width + FRAME_GAP) / 2,
            top: (index - 1) * ((height - FRAME_GAP * 3) / 2 + FRAME_GAP*2),
            width: width / 2 - FRAME_GAP * 1.5 + FRAME_GAP,
            height: (height - FRAME_GAP ) / 2
          };
        } else {
          return {
            left: 0,
            top: 0,
            width: width / 2 - FRAME_GAP * 1.5 + FRAME_GAP,
            height: height
          };
        }
        break;
      case $frameEnum.layout.hp4:
        if (index === 0 || index == 1) {
          return {
            left: 0,
            top: index * (height / 2 + FRAME_GAP/2),
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP * 1.5,
            height: (height - FRAME_GAP) / 2
          };
        } else {
          return {
            left: width / 2 + FRAME_GAP / 2,
            top:  (index - 2) * (height + FRAME_GAP) / 2,
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP * 1.5,
            height: (height - FRAME_GAP) / 2
          };
        }
        break;
      default:
        return null;
    }
  },
  getFramePosition: function (layout, index, height, width) {
    switch (layout) {
      case $frameEnum.layout.vp1:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3)),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.vp2:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3) / 2 + FRAME_GAP),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 3) / 2
        };
      case $frameEnum.layout.vp3:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3) / 3 + FRAME_GAP / 2),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 3 - FRAME_GAP) / 3
        };
      case $frameEnum.layout.hp1:
        return {
          left: FRAME_GAP,
          top: FRAME_GAP + index * ((height - FRAME_GAP * 3)),
          width: width - FRAME_GAP * 2,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp2:
        return {
          left: FRAME_GAP + index * (width - FRAME_GAP) / 2,
          top: FRAME_GAP,
          width: width / 2 - FRAME_GAP * 1.5,
          height: (height - FRAME_GAP * 2)
        };
      case $frameEnum.layout.hp3:
        if (index == 1 || index == 2) {
          return {
            left: (width + FRAME_GAP) / 2,
            top: FRAME_GAP + (index - 1) * ((height - FRAME_GAP * 3) / 2 + FRAME_GAP),
            width: width / 2 - FRAME_GAP * 1.5,
            height: (height - FRAME_GAP * 3) / 2
          };
        } else {
          return {
            left: FRAME_GAP + index * (width - FRAME_GAP) / 2,
            top: FRAME_GAP,
            width: width / 2 - FRAME_GAP * 1.5,
            height: (height - FRAME_GAP * 2)
          };
        }
        break;
      case $frameEnum.layout.hp4:
        if (index === 0 || index == 1) {
          return {
            left: FRAME_GAP,
            top: FRAME_GAP + index * (height / 2 - FRAME_GAP / 2),
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP / 2,
            height: height / 2 - FRAME_GAP * 1.5
          };
        } else {
          return {
            left: width / 2 + FRAME_GAP / 2,
            top: FRAME_GAP + (index - 2) * (height / 2 - FRAME_GAP / 2),
            width: width / 2 - FRAME_GAP * 2 + FRAME_GAP / 2,
            height: height / 2 - FRAME_GAP * 1.5
          };
        }
        break;
      default:
        return null;
    }
  }
};