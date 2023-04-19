//정적인 객체 리터럴, 데이터를 넣을 자리를 마련했다.
let basicData = {
  header : {},
  main : {},
  footer : {}
}
// fromJsonData 변수는 
// json.parse()를 통해 받아온 데이터라고 가정한다.
let fromJsonData = {
  header : {
    content : "header 부분입니다",
    style : {
      width : "100vw",
      height : "100px",
      backgroundColor : "#ccc"
    }
  },
  main : {
    content : "main 부분입니다",
    style : {
      width : "100vw",
      height : "100px",
      backgroundColor : "#333"
    }
  },
  footer : {
    content : "footer 부분입니다",
    style : {
      width : "100vw",
      height : "100px",
      backgroundColor : "#666"
    }
  }
}
function exampleOne(basicData, fromJsonData) {
  let value = "";
  // 아래의 호출부를 참고하여, 지연변수 value에
  // 적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다

  // basicData.header = fromJsonData.header;
  // basicData.main = fromJsonData.main;
  // basicData.footer = fromJsonData.footer;
  basicData.header = new ExampleTwo(fromJsonData.header.content, fromJsonData.header.style.width, fromJsonData.header.style.height, fromJsonData.header.style.backgroundColor);
  basicData.main = new ExampleTwo(fromJsonData.main.content, fromJsonData.main.style.width, fromJsonData.main.style.height, fromJsonData.main.style.backgroundColor);
  basicData.footer = new ExampleTwo(fromJsonData.footer.content, fromJsonData.footer.style.width, fromJsonData.footer.style.height, fromJsonData.footer.style.backgroundColor);

  // basicData.header = new ExampleTwo(fromJsonData.header);
  // basicData.main = new ExampleTwo(fromJsonData.main);
  // basicData.footer = new ExampleTwo(fromJsonData.footer);
  // console.log(basicData.header)

  value = `
    <div style="display: flex; flex-direction: column;">
      <div style=width:"${basicData.header._width}",height:"${basicData.header._height}",backgroundColor:"${basicData.header._backgroundColor}">
        ${basicData.header._content}
      </div>
      <div style="${basicData.main._width}","${basicData.main._height}","${basicData.main._backgroundColor}">
        ${basicData.main._content}
      </div>
      <div style=width:"${basicData.footer._width}",height:"${basicData.footer._height}",backgroundColor:"${basicData.footer._backgroundColor}">
        ${basicData.footer._content}
      </div>
    </div>
  `;
  
  // console.log(value)
  return value;
}



// 위의 fromJsonData와 같은 객체나 JSON 데이터를 생성하기 위한
// 생성자함수, 클래스를 작성한다
// setter 기능을 활용하여 인스턴스의 값들은 모두 "문자열"만 들어가도록 안정성을 확보한다
class ExampleTwo {
  constructor(dataConent, dataStyleWidth, dataStyleHeight, dataStyleBackgroundColor) {
    this.conent = dataConent;
    this.width = dataStyleWidth;
    this.height = dataStyleHeight;
    this.backgroundColor = dataStyleBackgroundColor;
  }
  set conent(value) {
    console.log(value)
    if (typeof(value) === "string") {
      this._content = value;
      // console.log(this._content)
    } else {
      console.log("문자열이 아닙니다");
    }
  }
  set width(value) {
    console.log(value)
    if (typeof(value) === "string") {
      this._width = value;
    } else {
      console.log("문자열이 아닙니다");
    }
  }
  set height(value) {
    console.log(value)
    if (typeof(value) === "string") {
      this._height = value;
    } else {
      console.log("문자열이 아닙니다");
    }
  }
  set backgroundColor(value) {
    console.log(value)
    if (typeof(value) === "string") {
      this._backgroundColor = value;
    } else {
      console.log("문자열이 아닙니다");
    }
  }

  // toObject() {
  //   return {
  //     header: {
  //     content: this.header.content,
  //     style: {
  //       width: this.header.style.width,
  //       height: this.header.style.height,
  //       backgroundColor: this.header.style.backgroundColor
  //     }
  //   }
  // }
}

// 특정 HTML 요소에 값을 넣는 것을 가정한다.
const element = document.getElementById('root');
// const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);
// exampleTwo에서 안정성 확보할 때 객체로 받아서 내보내는 방법이 있는것 같은데 이해가 잘 되지않았습니다. 좀더 간략하게 할 수 있을 것 같은데 연구가 필요할 것 같습니다.






// class ExampleTwo {
//   constructor(header = {}, main = {}, footer = {}) {
//     this.header = header;
//     this.main = main;
//     this.footer = footer;
//   }
//   set header(value) {
//     console.log(value)
//     if (typeof value === "string") {
//       //this.header.content = value;
//     } else {
//       throw new Error("Header content must be a string");
//     }
//   }
  
//   set main(value) {
//     if (typeof value === "string") {
//       //this.header.style.width = value;
//     } else {
//       throw new Error("Header width must be a string");
//     }
//   }
  
//   set footer(value) {
//     if (typeof value === "string") {
//       //this.header.style.height = value;
//     } else {
//       throw new Error("Header height must be a string");
//     }
//   }
// /*
//   toObject() {
//     return {
//       header: {
//         content: this.header.content,
//         style: {
//           width: this.header.style.width,
//           height: this.header.style.height,
//           backgroundColor: this.header.style.backgroundColor
//         }
//       },
//       main: {
//         content: this.main.content,
//         style: {
//           width: this.main.style.width,
//           height: this.main.style.height,
//           backgroundColor: this.main.style.backgroundColor
//         }
//       },
//       footer: {
//         content: this.footer.content,
//         style: {
//           width: this.footer.style.width,
//           height: this.footer.style.height,
//           backgroundColor: this.footer.style.backgroundColor
//         }
//       }
//     };
//   }*/
// }
